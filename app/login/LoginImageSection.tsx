import Image from "next/image";
import backgroundImage from "@/public/login-page-image.svg";

const LoginImageSection: React.FC = ({}) => {
  return (
    <div className="bg-[#f9f9f9] hidden md:flex-1 md:flex h-dvh justify-center px-4">
      <div className="max-w-[600px] mx-auto h-full flex flex-col gap-y-40 justify-center">
        <Image
          src="/logo-group.svg"
          height={30}
          width={175}
          alt="lendsqr logo"
        />
        <div className="max-w-[600px] mx-auto">
          <Image
            src={backgroundImage}
            height={400}
            width={600}
            alt="login illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginImageSection;
