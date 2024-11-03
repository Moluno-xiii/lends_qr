import { SocialMediaInfo } from "@/app/types";
import ListItem from "./ListItem";

interface Props {
  socialMediaInfo?: SocialMediaInfo;
}

const SocialsInformation: React.FC<Props> = ({ socialMediaInfo }) => {
  if (!socialMediaInfo) {
    return null;
  }
  const { twitter, facebook, instagram } = socialMediaInfo;
  return (
    <div className="border-b border-secondary py-5">
      <span className="text-base uppercase font-medium text-secondary">
        socials
      </span>
      <ul className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-10 text-text-primary">
        <ListItem name="twitter" value={twitter} />
        <ListItem name="facebook" value={facebook} />
        <ListItem name="instagram" value={instagram} />
      </ul>
    </div>
  );
};

export default SocialsInformation;
