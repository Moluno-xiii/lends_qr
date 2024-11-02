import Image from "next/image";

interface Data {
  name: string;
  value: number;
  icon: string;
}

interface Props {
  data: Data;
}

const DataCard: React.FC<Props> = ({ data }) => {
  return (
    <li className="w-60 h-40 p-6 rounded-md flex flex-col gap-y-3 bg-white shadow-sm">
      <Image
        src={data.icon}
        alt={data.icon}
        className="rounded-full"
        height={40}
        width={40}
      />
      <span className="font-medium uppercase text-text-primary text-sm">
        {data.name}
      </span>
      <span className="font-bold text-secondary uppercase text-2xl">
        {data.value.toLocaleString()}
      </span>
    </li>
  );
};

export default DataCard;
