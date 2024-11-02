interface Props {
  message?: string;
}

const Spinner: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <div className="spinner"></div>
      <p className="flex justify-center text-secondary uppercase text-base md:text-2xl">
        {message ? message + "..." : null}
      </p>
    </div>
  );
};

export default Spinner;
