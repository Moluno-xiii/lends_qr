"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const NavigateBack: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <button
      className="flex flex-row items-center justify-start gap-x-2"
      onClick={() => router.push("/dashboard/users")}
    >
      <Image
        src={"/arrow-left-icon.png"}
        alt="arrow left icon"
        height={10}
        width={27}
      />
      <span className="text-base text-text-primary">{children}</span>
    </button>
  );
};

export default NavigateBack;
