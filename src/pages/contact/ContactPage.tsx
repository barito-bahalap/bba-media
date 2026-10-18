import { useMemo } from "react";
// Style
import "./ContactPage.css";
// Hooks
import { shortTitle, useContactContent } from "@/hooks";
import { useContactForm, useSiteContent } from "@/hooks";
// Components
import { Select, SplitSection, Textarea } from "@/components";
import { Button, Checkbox, Input, PageHeader, SEO } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function ContactPage() {
  const { site, seoBase, href } = useSiteContent();
  const { seo, hero, details, form } = useContactContent();
  const { fields } = form;
  const title = shortTitle(seo.title);

  const inquiryTypes = useMemo(
    () =>
      fields.service.options.map((option) => ({
        value: option,
        label: option,
      })),
    [fields.service.options],
  );
  const inquiryOptions = [
    { value: "", label: fields.service.placeholder },
    ...inquiryTypes,
  ];

  const {
    values,
    errors,
    prepared,
    handleChange,
    handleConsent,
    handleSubmit,
  } = useContactForm(details.email, inquiryTypes, {
    name: fields.name.required,
    email: fields.email.required,
    message: fields.message.required,
    consent: form.consentRequired,
  });

  return (
    <>
      <SEO
        {...seoBase}
        title={title}
        description={seo.description}
        path={href("/contact")}
        structuredData={breadcrumbSchema(site, [
          { name: site.shortName, path: href("/") },
          { name: title, path: href("/contact") },
        ])}
      />

      <PageHeader
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        body={hero.body}
        tone="yellow"
      />

      <SplitSection
        title={details.heading}
        body={details.body}
        aside={
          <>
            <p className="form-note">
              {details.emailLabel}:{" "}
              <a href={`mailto:${details.email}`}>{details.email}</a>
            </p>
            <p className="form-note">
              {details.parentLabel}: {details.parentName}
            </p>
          </>
        }
      >
        <form className="form-grid" onSubmit={handleSubmit} noValidate>
          <h2 className="vt-section-title">{form.heading}</h2>
          <div className="form-grid__row">
            <Input
              id="name"
              name="name"
              label={fields.name.label}
              autoComplete="name"
              required
              value={values.name}
              error={errors.name}
              onChange={handleChange}
            />
            <Input
              id="organization"
              name="organization"
              label={fields.organization.label}
              autoComplete="organization"
              value={values.organization}
              error={errors.organization}
              onChange={handleChange}
            />
          </div>
          <Input
            id="email"
            name="email"
            type="email"
            label={fields.email.label}
            autoComplete="email"
            required
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />
          <Select
            id="inquiryType"
            name="inquiryType"
            label={fields.service.label}
            options={inquiryOptions}
            value={values.inquiryType}
            error={errors.inquiryType}
            onChange={handleChange}
          />
          <Textarea
            id="message"
            name="message"
            label={fields.message.label}
            rows={6}
            required
            value={values.message}
            error={errors.message}
            onChange={handleChange}
          />
          <Checkbox
            id="consent"
            label={form.consent}
            checked={values.consent}
            error={errors.consent}
            onChange={handleConsent}
          />
          <div>
            <Button type="submit" variant="primary" brand="media">
              {form.submit}
            </Button>
          </div>
          {/* Opens the visitor's mail app. form.success/error need a real backend submit. */}
          <p className="form-note" aria-live="polite">
            {prepared ? details.email : form.privacyNote}
          </p>
        </form>
      </SplitSection>
    </>
  );
}
