import NavigateBack from "@/app/_components/NavigateBack";
import UsersDetailsHeader from "./UsersDetailsHeader";

const HeaderNav: React.FC = async ({}) => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-row justify-between items-center">
        <NavigateBack>Back to users</NavigateBack>
        <div className="flex flex-row items-center gap-x-3">
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
