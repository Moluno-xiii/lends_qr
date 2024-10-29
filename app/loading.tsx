interface Props {
  message: string;
}

const Loading: React.FC<Props> = ({ message }) => {
  return <div>Loading {message} data...</div>;
};

export default Loading;
