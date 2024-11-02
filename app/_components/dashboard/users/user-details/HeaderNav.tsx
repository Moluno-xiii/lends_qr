"use client";
import NavigateBack from "@/app/_components/utilities/NavigateBack";
import UsersDetailsHeader from "./UsersDetailsHeader";
import { useState } from "react";
import LinksModal from "./LinksModal";

const HeaderNav: React.FC = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = () => {
    setIsModalOpen((modal) => !modal);
  };
  return (
    <div className="flex flex-col gap-y-8">
      {isModalOpen && <LinksModal handleToggleModal={handleToggleModal} />}
      {!isModalOpen && (
        <button
          className="bg-white sm:hidden border-primary border text-primary  px-2 py-1 hover:bg-primary hover:text-white rounded-md"
          onClick={handleToggleModal}
        >
          Hamburger
        </button>
      )}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-10">
        <NavigateBack>Back to users</NavigateBack>
        <div className="flex flex-col gap-y-2 sm:flex-row items-center sm:gap-x-3">
          <button className="text-error capitalize px-4 py-2 rounded-md border border-error hover:bg-error hover:text-white transition-all duration-300">
            blacklist user
          </button>
          <button className="text-primary capitalize px-4 py-2 rounded-md border border-primary hover:bg-primary hover:text-white transition-all duration-300">
            activate user
          </button>
        </div>
      </div>
      <div>
        <UsersDetailsHeader />
      </div>
    </div>
  );
};

export default HeaderNav;
