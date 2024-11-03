"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm: React.FC = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  function toggleShowPassword() {
    setShowPassword((password) => !password);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/");
  }
  return (
    <div className="bg-white flex-1 flex justify-center items-center flex-col gap-y-3 px-4 max-md:py-10">
      <div className="max-w-[450px] w-full mx-auto">
        <Image
          src="/logo-group.svg"
          height={30}
          width={175}
          alt="lendsqr logo"
          className="md:hidden mx-auto mb-20 "
        />
        <div className="flex flex-col gap-y-4 self-start">
          <span className="text-secondary font-bold text-[40px]">Welcome!</span>
          <span className="text-text-primary text-sm">
            Enter details to login.
          </span>
        </div>

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 mt-10"
        >
          <input
            type="text"
            className="rounded-sm border border-text-primary border-opacity-15 h-[50px] mb-3 w-full sm:w-[440px] px-5"
            placeholder="Email"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="rounded-sm border border-text-primary border-opacity-15 h-[50px] w-full sm:w-[440px] pl-5 pr-16"
            />
            <span
              onClick={toggleShowPassword}
              className="uppercase cursor-pointer text-primary absolute right-6 top-4 font-semibold text-xs transition-all duration-500"
            >
              {showPassword ? "hide" : "show"}
            </span>
          </div>

          <span className="uppercase text-primary pb-4 font-semibold text-xs">
            forgot password?
          </span>
          <button
            className="uppercase rounded-md text-white bg-primary py-3 font-semibold text-sm"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
