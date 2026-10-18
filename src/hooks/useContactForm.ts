import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type {
  ContactErrors,
  ContactValues,
  InquiryType,
} from "@/domain/content";

export interface ContactMessages {
  name: string;
  email: string;
  message: string;
  consent: string;
}

const emptyValues: ContactValues = {
  name: "",
  organization: "",
  role: "",
  email: "",
  inquiryType: "",
  message: "",
  consent: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactValues, m: ContactMessages): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = m.name;
  if (!emailPattern.test(values.email.trim())) errors.email = m.email;
  if (values.message.trim().length < 20) errors.message = m.message;
  if (!values.consent) errors.consent = m.consent;
  return errors;
}

function buildMailto(
  recipient: string,
  values: ContactValues,
  inquiryTypes: InquiryType[],
) {
  const typeLabel =
    inquiryTypes.find((type) => type.value === values.inquiryType)?.label ??
    values.inquiryType;
  const who = values.organization.trim() || values.name.trim();
  const subject = `BBM inquiry${typeLabel ? `: ${typeLabel}` : ""} (${who})`;
  const body = [
    `Name: ${values.name.trim()}`,
    `Organization: ${values.organization.trim() || "-"}`,
    `Email: ${values.email.trim()}`,
    `Area of support: ${typeLabel || "-"}`,
    "",
    values.message.trim(),
  ].join("\n");
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function useContactForm(
  recipient: string,
  inquiryTypes: InquiryType[],
  messages: ContactMessages,
) {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [prepared, setPrepared] = useState(false);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setPrepared(false);
  }

  function handleConsent(checked: boolean) {
    setValues((current) => ({ ...current, consent: checked }));
    setErrors((current) => ({ ...current, consent: undefined }));
    setPrepared(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, messages);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;
    window.location.href = buildMailto(recipient, values, inquiryTypes);
    setPrepared(true);
  }

  return {
    values,
    errors,
    prepared,
    handleChange,
    handleConsent,
    handleSubmit,
  };
}
