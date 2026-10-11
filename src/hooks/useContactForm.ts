import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
// Utils
import type {
  ContactErrors,
  ContactValues,
  InquiryType,
} from "@/domain/content";

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

function validate(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.organization.trim())
    errors.organization = "Enter your organization.";
  if (!emailPattern.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!values.inquiryType) errors.inquiryType = "Select an inquiry type.";
  if (values.message.trim().length < 20)
    errors.message = "Describe the requirement in at least 20 characters.";
  if (!values.consent)
    errors.consent = "Consent is required to send this inquiry.";
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
  const subject = `BBM inquiry: ${typeLabel} (${values.organization.trim()})`;
  const body = [
    `Name: ${values.name.trim()}`,
    `Organization: ${values.organization.trim()}`,
    `Role: ${values.role.trim() || "-"}`,
    `Email: ${values.email.trim()}`,
    `Inquiry type: ${typeLabel}`,
    "",
    values.message.trim(),
  ].join("\n");
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function useContactForm(recipient: string, inquiryTypes: InquiryType[]) {
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
    const nextErrors = validate(values);
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
