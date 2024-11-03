import HeaderLink from "./HeaderLink";

export const links = [
  {
    name: "general details",
    route: "general-details",
  },
  {
    name: "Documents",
    route: "documents",
  },
  {
    name: "bank details",
    route: "bank-details",
  },
  {
    name: "loans",
    route: "loans",
  },
  {
    name: "savings",
    route: "savings",
  },
  {
    name: "app and system",
    route: "app-and-system",
  },
];
const SubLinks: React.FC = ({}) => {
  return (
    <nav className="mt-auto">
      <ul className="hidden sm:flex flex-row mt-auto justify-between">
        {links.map((link, index) => (
          <HeaderLink link={link} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default SubLinks;
