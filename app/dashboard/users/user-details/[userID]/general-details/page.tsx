import UserDataSection from "./UserDataSection";

export const metadata = {
  title: "General Details",
};

export interface DataProp {
  name: string;
  value: string;
}

const personal_information = [
  {
    name: "full name",
    value: "Grace Effiom",
  },
  {
    name: "phone number",
    value: "07060780922",
  },
  {
    name: "email address",
    value: "grace@email.com",
  },
  {
    name: "BVN",
    value: "07060780922",
  },
  {
    name: "gender",
    value: "Female",
  },
  {
    name: "marital status",
    value: "Single",
  },
  {
    name: "children",
    value: "None",
  },
  {
    name: "type of residence",
    value: "Parent's apartment",
  },
];

const education_and_employment = [
  {
    name: "level of education",
    value: "B.Sc",
  },
  {
    name: "employment status",
    value: "Employed",
  },
  {
    name: "sector of employment",
    value: "Fintech",
  },
  {
    name: "duration of employment",
    value: "2 Years",
  },
  {
    name: "office email",
    value: "grace@lendsqr.com",
  },
  {
    name: "monthly income",
    value: "₦200,000.00- ₦400,000.00",
  },
  {
    name: "loan repayment",
    value: "40,000",
  },
];

const socials = [
  {
    name: "twitter",
    value: "@grace_effiom",
  },
  {
    name: "facebook",
    value: "Grace Effiom",
  },
  {
    name: "instagram",
    value: "@grace_effiom",
  },
];

const guarantor = [
  {
    name: "full name",
    value: "Debby Ogana",
  },
  {
    name: "phone number",
    value: "07060780922",
  },
  {
    name: "email address",
    value: "debby@gmail.com",
  },
  {
    name: "relationship",
    value: "Sister",
  },
];
const Page: React.FC = ({}) => {
  return (
    <div className="mt-8 bg-white rounded-md shadow-sm px-8 py-5">
      <UserDataSection
        data={personal_information}
        title="personal information"
      />
      <UserDataSection
        data={education_and_employment}
        title="education and employment"
      />
      <UserDataSection data={socials} title="socials" />
      <UserDataSection data={guarantor} title="guarantor" />
    </div>
  );
};

export default Page;
