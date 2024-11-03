/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getUserInformation } from "@/app/_lib/data-fetch";
import { useEffect, useState } from "react";
import { UserInfo } from "@/app/types";
import PersonalInformation from "./PersonalInformation";
import EmploymentInformation from "./EmploymentInformation";
import SocialsInformation from "./SocialsInformation";
import GuarantorInformation from "./GuarantorInformation";

const UserInformation: React.FC = ({}) => {
  const [userInformation, setUserInformation] = useState<UserInfo | null>(null);

  useEffect(() => {
    getUserInformation();
    const storedInfo = localStorage.getItem("userInfo");
    if (storedInfo) {
      setUserInformation(JSON.parse(storedInfo));
    }
  }, []);

  useEffect(() => {
    console.log(userInformation);
  }, [userInformation]);

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
