import { GuarantorInfo } from "@/app/types";
import ListItem from "./ListItem";

interface Props {
  guarantorInfo?: GuarantorInfo;
}

const GuarantorInformation: React.FC<Props> = ({ guarantorInfo }) => {
  if (!guarantorInfo) {
    return null;
  }
  const { name, phoneNumber, email } = guarantorInfo;
  return (
    <div className="border-b border-secondary py-5">
      <span className="text-base uppercase font-medium text-secondary">
        guarantor
      </span>
      <ul className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-10 text-text-primary">
        <ListItem name="full name" value={name} />
        <ListItem name="phone number" value={phoneNumber} />
        <ListItem name="email" value={email} />
      </ul>
    </div>
  );
};

export default GuarantorInformation;
