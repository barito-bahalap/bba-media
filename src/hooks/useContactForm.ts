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
}

export interface ContactLinks {
  mailto: string;
  gmail: string;
  outlook: string;
}

const emptyValues: ContactValues = {
  name: "",
  organization: "",
  role: "",
  email: "",
  inquiryType: "",
  message: "",
  consent: true,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactValues, m: ContactMessages): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = m.name;
  if (!emailPattern.test(values.email.trim())) errors.email = m.email;
  if (values.message.trim().length < 20) errors.message = m.message;
  return errors;
}

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(ua)) return true;
  return /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;
}

function buildLinks(
  recipient: string,
  values: ContactValues,
  inquiryTypes: InquiryType[],
): ContactLinks {
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
  ].join("\r\n");

  const to = encodeURIComponent(recipient);
  const su = encodeURIComponent(subject);
  const bd = encodeURIComponent(body);

  return {
    mailto: `mailto:${recipient}?subject=${su}&body=${bd}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${bd}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}&body=${bd}`,
  };
}

export function useContactForm(
  recipient: string,
  inquiryTypes: InquiryType[],
  messages: ContactMessages,
) {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [prepared, setPrepared] = useState(false);
  const [links, setLinks] = useState<ContactLinks | undefined>();

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, messages);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    const built = buildLinks(recipient, values, inquiryTypes);
    setLinks(built);
    setPrepared(true);

    if (isMobileDevice()) {
      window.location.href = built.mailto;
    } else {
      window.open(built.gmail, "_blank", "noopener,noreferrer");
    }
  }

  return {
    values,
    errors,
    prepared,
    links,
    handleChange,
    handleSubmit,
  };
}
