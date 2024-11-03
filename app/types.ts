interface PersonalInformationType {
  name: string;
  netWorth: number;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
}

interface BankDetails {
  bankName: string;
  accountNumber: string;
}

interface EmploymentInfo {
  levelOfEducation: string;
  status: string;
  sectorOfEmployment: string;
  employmentDuration: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: number;
}

interface SocialMediaInfo {
  twitter: string;
  facebook: string;
  instagram: string;
}

interface GuarantorInfo {
  name: string;
  phoneNumber: string;
  email: string;
  relationship: string;
}

interface UserInfo {
  personalInformation: PersonalInformationType;
  bankDetails: BankDetails;
  employmentInfo: EmploymentInfo;
  socialMediaInfo: SocialMediaInfo;
  guarantorInfo: GuarantorInfo;
}

interface UsersDataProps {
  name: string;
  value: number;
  icon: string;
}

interface TableDataProps {
  id: string;
  F: string;
  G: string;
  H: string;
  col1: string;
  col2: number;
  fullName: string;
}

export type {
  UserInfo,
  PersonalInformationType,
  EmploymentInfo,
  SocialMediaInfo,
  GuarantorInfo,
  UsersDataProps,
  TableDataProps,
};
