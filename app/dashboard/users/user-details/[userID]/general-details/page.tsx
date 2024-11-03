import UserInformation from "@/app/_components/dashboard/users/user-details/UserInformation";

export const metadata = {
  title: "General Details",
};

const Page: React.FC = ({}) => {
  return (
    <div className="mt-8 bg-white rounded-md shadow-sm px-8 py-5">
      <UserInformation />
    </div>
  );
};

export default Page;
