import { EmploymentInfo } from "@/app/types";
import ListItem from "./ListItem";

interface Props {
  employmentInfo?: EmploymentInfo;
}

const EmploymentInformation: React.FC<Props> = ({ employmentInfo }) => {
  if (!employmentInfo) {
    return null;
  }
  const {
    levelOfEducation,
    status,
    sectorOfEmployment,
    employmentDuration,
    officeEmail,
    monthlyIncome,
    loanRepayment,
  } = employmentInfo;
  return (
    <div className="border-b border-secondary py-5">
      <span className="text-base uppercase font-medium text-secondary">
        education and employment
      </span>
      <ul className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-10 text-text-primary">
        <ListItem name="level of education" value={levelOfEducation} />
        <ListItem name="employment status" value={status} />
        <ListItem name="sector of employment" value={sectorOfEmployment} />
        <ListItem name="duration of employment" value={employmentDuration} />
        <ListItem name="office email" value={officeEmail} />
        <ListItem name="monthly income" value={monthlyIncome} />
        <ListItem name="loan repayment" value={loanRepayment} />
      </ul>
    </div>
  );
};

export default EmploymentInformation;
