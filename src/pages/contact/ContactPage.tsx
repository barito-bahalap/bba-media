// Style
import "./ContactPage.css";
// Hooks
import { useContactContent, useContactForm, useSiteContent } from "@/hooks";
// Components
import { Checkbox, Checklist, Input, Select, Textarea } from "@/components";
import { Button, SEO, Section, SmartLink, PageHero } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function ContactPage() {
  const { site, seoBase } = useSiteContent();
  const {
    contactIntro,
    inquiryTypes,
    includeList,
    consentText,
    correctionNote,
  } = useContactContent();
  const {
    values,
    errors,
    prepared,
    handleChange,
    handleConsent,
    handleSubmit,
  } = useContactForm(site.email, inquiryTypes);

  const inquiryOptions = [{ value: "", label: "Select" }, ...inquiryTypes];

  return (
    <>
      <SEO
        {...seoBase}
        title="Contact"
        description="Start a conversation with Barito Bahalap Media about a communications, media relations or content requirement."
        path="/contact"
        structuredData={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow={contactIntro.eyebrow}
        title={contactIntro.title}
        description={contactIntro.description}
      />

      <Section>
        <div className="grid-split">
          <div className="stack">
            <h2>What to include</h2>
            <Checklist items={includeList} />
            <p className="form-note">
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="form-note">{site.location}</p>
            <p className="form-note">
              {correctionNote}{" "}
              <SmartLink href="/standards">Editorial standards</SmartLink>
            </p>
          </div>

          <form className="form-grid" onSubmit={handleSubmit} noValidate>
            <div className="form-grid__row">
              <Input
                id="name"
                name="name"
                label="Name"
                autoComplete="name"
                required
                value={values.name}
                error={errors.name}
                onChange={handleChange}
              />
              <Input
                id="organization"
                name="organization"
                label="Organization"
                autoComplete="organization"
                required
                value={values.organization}
                error={errors.organization}
                onChange={handleChange}
              />
            </div>
            <div className="form-grid__row">
              <Input
                id="role"
                name="role"
                label="Role"
                autoComplete="organization-title"
                value={values.role}
                error={errors.role}
                onChange={handleChange}
              />
              <Input
                id="email"
                name="email"
                type="email"
                label="Email"
                autoComplete="email"
                required
                value={values.email}
                error={errors.email}
                onChange={handleChange}
              />
            </div>
            <Select
              id="inquiryType"
              name="inquiryType"
              label="Inquiry type"
              required
              options={inquiryOptions}
              value={values.inquiryType}
              error={errors.inquiryType}
              onChange={handleChange}
            />
            <Textarea
              id="message"
              name="message"
              label="Requirement"
              rows={6}
              required
              value={values.message}
              error={errors.message}
              onChange={handleChange}
            />
            <Checkbox
              id="consent"
              label={consentText}
              checked={values.consent}
              error={errors.consent}
              onChange={handleConsent}
            />
            <div>
              <Button type="submit" variant="primary" brand="media">
                Prepare email
              </Button>
            </div>
            <p className="form-note" aria-live="polite">
              {prepared
                ? "Your email application should now open with the inquiry. Send the email to complete the request."
                : "This form prepares an email in your own mail application. Nothing is sent until you send it."}
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}
