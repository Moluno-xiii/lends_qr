import NavigationLink from "./NavigationLink";

export interface Link {
  name: string;
  image_url: string;
  route: string;
}

interface Props {
  title: string;
  links: Link[];
}

const NavGroup: React.FC<Props> = ({ title, links }) => {
  return (
    <ul className="w-full">
      <span className="text-base w-full px-8 font-medium text-text-primary uppercase">
        {title}
      </span>
      {links?.map((link, index) => (
        <NavigationLink key={index} link={link} />
      ))}
    </ul>
  );
};

export default NavGroup;
