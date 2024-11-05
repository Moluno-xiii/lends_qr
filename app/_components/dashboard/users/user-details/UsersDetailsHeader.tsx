"use client";

import Image from "next/image";
import UserRating from "./UserRating";
import SubLinks from "./SubLinks";
import BankDetails from "./BankDetails";
import { useUserInfoContext } from "@/app/_contexts/UserInfoContext";

const UsersDetailsHeader: React.FC = ({}) => {
  const { userInformation } = useUserInfoContext();
  const { name, netWorth } = userInformation?.personalInformation ?? {};
  const bankName = userInformation?.bankDetails?.bankName ?? "";
  const accountNumber = userInformation?.bankDetails?.accountNumber ?? "";

  return (
    <div className="flex-col flex w-full px-8 pt-5 bg-white rounded-md shadow-sm gap-y-2 h-[210px]">
      <div className="grid grid-cols-2 sm:grid-cols-4 flex-1 items-center gap-x-2">
        <Image
          src="/empty-avatar.png"
          height={100}
          width={100}
          alt="profile picture"
        />
        <div className="flex flex-col md:px-4 px-2 md:border-r border-text-primary">
          <span className="font-medium text-secondary capitalize md:text-[22px] text-base">
            {name}
          </span>
          <span className="text-text-primary md:text-sm text-xs">
            LSQFf587g90
          </span>
        </div>
        <UserRating />
        <BankDetails
          netWorth={netWorth ?? 0}
          bankName={bankName}
          accountNumber={accountNumber}
        />
      </div>
      <SubLinks />
    </div>
  );
};

export default UsersDetailsHeader;
