"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface Props {
  user_id: string;
}
const UsersTableModal: React.FC<Props> = ({ user_id }) => {
  const router = useRouter();
  return (
    <ul className="flex flex-col justify-between items-start py-2 w-[180px] z-20 gap-y-2 absolute -right-2 rounded-md shadow-sm font-medium text-sm bg-white">
      <ModalItem
        title="view details"
        icon="/eye-icon.png"
        onClick={() =>
          router.push(
            `/dashboard/users/user-details/${user_id}/general-details`
          )
        }
      />
      <ModalItem title="blacklist user" icon="/blacklist-user-icon.png" />
      <ModalItem title="activate user" icon="/activate-user-icon.png" />
    </ul>
  );
};

export default UsersTableModal;

interface ModalItemProps {
  title: string;
  icon: string;
  onClick?: () => void;
}
const ModalItem: React.FC<ModalItemProps> = ({ title, icon, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="flex w-full px-3 hover:bg-[#f9f9f9] transition-all duration-300 cursor-pointer flex-row gap-x-2 h-[32.5px] items-center"
    >
      <Image src={icon} height={14} width={14} alt={icon} />
      <span className="capitalize">{title}</span>
    </li>
  );
};
