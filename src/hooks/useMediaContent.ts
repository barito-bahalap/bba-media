import { aboutIntro, facts, roles, stage, structureIntro } from "@/data/about";
import {
  contracting,
  decisionTable,
  engagementTable,
  stages,
} from "@/data/approach";
import {
  careersIntro,
  interestNote,
  roleAreas,
  workingModel,
} from "@/data/careers";
import {
  consentText,
  contactIntro,
  correctionNote,
  includeList,
  inquiryTypes,
} from "@/data/contact";
import {
  ctaBand,
  hero,
  homeIntro,
  homeServiceIds,
  homeStage,
  homeStandards,
  homeWorkflow,
} from "@/data/home";
import { privacy, terms } from "@/data/legal";
import { boundaries, services } from "@/data/services";
import { footerGroups, headerCta, mainNav, site } from "@/data/site";
import {
  corrections,
  faq,
  framework,
  principles,
  standardsIntro,
  status,
} from "@/data/standards";

export function useSiteContent() {
  const seoBase = { siteName: site.name, siteUrl: site.url };
  return { site, mainNav, headerCta, footerGroups, seoBase };
}

export function useHomeContent() {
  const featuredServices = homeServiceIds
    .map((id) => services.find((service) => service.id === id))
    .filter((service): service is NonNullable<typeof service> =>
      Boolean(service),
    );

  return {
    hero,
    homeIntro,
    featuredServices,
    homeWorkflow,
    homeStandards,
    homeStage,
    ctaBand,
  };
}

export function useServicesContent() {
  return { services, boundaries, ctaBand };
}

export function useApproachContent() {
  return { stages, decisionTable, engagementTable, contracting, ctaBand };
}

export function useStandardsContent() {
  return {
    standardsIntro,
    principles,
    status,
    framework,
    corrections,
    faq,
    ctaBand,
  };
}

export function useAboutContent() {
  return { aboutIntro, facts, structureIntro, roles, stage, ctaBand };
}

export function useContactContent() {
  return {
    contactIntro,
    inquiryTypes,
    includeList,
    consentText,
    correctionNote,
  };
}

export function useCareersContent() {
  return { careersIntro, workingModel, roleAreas, interestNote };
}

export function useLegalContent() {
  return { privacy, terms };
}
