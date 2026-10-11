// Components
import { SmartLink } from "@/components";

interface BrandProps {
  name: string;
  shortName: string;
}

export function Brand({ name, shortName }: BrandProps) {
  return (
    <SmartLink href="/" className="brand" aria-label={`${name}, home`}>
      <span className="brand__mark" aria-hidden="true">
        {shortName}
      </span>
      <span className="brand__name">{name}</span>
    </SmartLink>
  );
}
