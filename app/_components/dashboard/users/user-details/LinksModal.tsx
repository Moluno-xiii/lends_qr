"use client";
import { usePathname, useRouter } from "next/navigation";
import { links } from "./SubLinks";

interface Props {
  handleToggleModal: () => void;
}
const LinksModal: React.FC<Props> = ({ handleToggleModal }) => {
  return (
    <div className="block sm:hidden inset-0 h-40 bg-secondary shadow-sm rounded-md relative">
      <button
        className="bg-primary px-3 py-1 absolute right-4 text-white rounded-full"
        onClick={handleToggleModal}
      >
        &times;
      </button>
      <ul className="flex flex-col justify-center items-center">
        {links.map((link, index) => (
          <Link link={link} key={index} handleToggleModal={handleToggleModal} />
        ))}
      </ul>
    </div>
  );
};

export default LinksModal;

function Link({
  link,
  handleToggleModal,
}: {
  link: { route: string; name: string };
  handleToggleModal: () => void;
}) {
  const router = useRouter();
  const pathName = usePathname();

  const isActive = pathName.includes(link.route);
  function onCloseModal() {
    handleToggleModal();
    router.replace(link.route);
  }
  return (
    <li
      className={`${
        isActive && "text-[#39cdcc] underline"
      } hover:text-primary hover:underline text-white transition-all duration-300 uppercase cursor-pointer`}
      onClick={onCloseModal}
    >
      {link.name}
    </li>
  );
}
