import Spinner from "@/app/_components/utilities/Spinner";

const loading: React.FC = ({}) => {
  return (
    <div>
      <Spinner message="loading user's data" />
    </div>
  );
};

export default loading;
