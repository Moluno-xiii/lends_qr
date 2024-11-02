import { DataProp } from "../../../../dashboard/users/user-details/[userID]/general-details/page";

interface Props {
  data: DataProp[];
  title: string;
}

const UserDataSection: React.FC<Props> = ({ data, title }) => {
  return (
    <div className="border-b border-secondary py-5">
      <span className="text-base uppercase font-medium text-secondary">
        {title}
      </span>
      <ul className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-10 text-text-primary">
        {data.map(({ name, value }, index) => (
          <li key={index} className="flex flex-col gap-y-2 justify-center">
            <span className="uppercase text-sm ">{name}</span>
            <span className="font-medium text-base">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDataSection;
