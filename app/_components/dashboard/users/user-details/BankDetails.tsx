interface Props {
  netWorth: number;
  bankName: string;
  accountNumber: string;
}

const BankDetails: React.FC<Props> = ({
  netWorth,
  bankName,
  accountNumber,
}) => {
  return (
    <div className="flex flex-col gap-x-2 border-l px-4 border-text-primary">
      <span className="font-medium text-secondary capitalize text-base md:text-[22px]">
        ₦{netWorth.toLocaleString()}
      </span>
      <span className="text-text-primary text-xs md:text-sm">
        {`${accountNumber}/${bankName}`}
      </span>
    </div>
  );
};

export default BankDetails;
