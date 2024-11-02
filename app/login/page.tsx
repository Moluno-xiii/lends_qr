import localFont from "next/font/local";
import LoginForm from "../_components/login/LoginForm";
import LoginImageSection from "../_components/login/LoginImageSection";

const avenir_Next = localFont({
  src: [
    {
      path: "./_fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/AvenirNextLTPro-It.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./_fonts/AvenirNextLTPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
export const metadata = {
  title: "Login Page",
};
const Page = ({}) => {
  return (
    <div
      className={`${avenir_Next.className} flex flex-row h-full w-full bg-pink-400`}
    >
      <LoginImageSection />
      <LoginForm />
    </div>
  );
};

export default Page;
