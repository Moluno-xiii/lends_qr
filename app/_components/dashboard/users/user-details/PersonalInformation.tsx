import { PersonalInformationType } from "@/app/types";
import ListItem from "./ListItem";

interface Props {
  personalInfo?: PersonalInformationType;
}

const PersonalInformation: React.FC<Props> = ({ personalInfo }) => {
  if (!personalInfo) {
    return null;
  }
  const {
    name,
    phoneNumber,
    email,
    bvn,
    gender,
    maritalStatus,
    children,
    typeOfResidence,
  } = personalInfo;
  return (
    <div className="border-b border-secondary py-5">
      <span className="text-base uppercase font-medium text-secondary">
        personal information
      </span>
      <ul className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-10 text-text-primary">
        <ListItem name="personal information" value={name} />
        <ListItem name="phone number" value={phoneNumber} />
        <ListItem name="email" value={email} />
        <ListItem name="bvn" value={bvn} />
        <ListItem name="gender" value={gender} />
        <ListItem name="marital status" value={maritalStatus} />
        <ListItem name="children" value={children} />
        <ListItem name="type of residence" value={typeOfResidence} />
      </ul>
    </div>
  );
};

export default PersonalInformation;
