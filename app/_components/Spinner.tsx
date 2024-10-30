interface Props {
  message?: string;
}

const Spinner: React.FC<Props> = ({ message }) => {
  return (
    <>
      <div className="spinner"></div>
      <p className="flex justify-center text-2xl">{message ? message : null}</p>
    </>
  );
};

export default Spinner;
