"use client";

import { useUserInfoContext } from "@/app/_contexts/UserInfoContext";
import EmploymentInformation from "./EmploymentInformation";
import GuarantorInformation from "./GuarantorInformation";
import PersonalInformation from "./PersonalInformation";
import SocialsInformation from "./SocialsInformation";

const UserInformation: React.FC = ({}) => {
  const { userInformation } = useUserInfoContext();
  const personalInformation = userInformation?.personalInformation;
  const employmentInformation = userInformation?.employmentInfo;
  const socialsInformation = userInformation?.socialMediaInfo;
  const guarantorInformation = userInformation?.guarantorInfo;

  return (
    <div>
      <PersonalInformation personalInfo={personalInformation} />
      <EmploymentInformation employmentInfo={employmentInformation} />
      <SocialsInformation socialMediaInfo={socialsInformation} />
      <GuarantorInformation guarantorInfo={guarantorInformation} />
    </div>
  );
};

export default UserInformation;
