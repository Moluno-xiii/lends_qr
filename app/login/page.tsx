import localFont from "next/font/local";
import LoginForm from "./LoginForm";
import LoginImageSection from "./LoginImageSection";

const avenir_Next = localFont({
  src: [
    {
      path: "./fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNextLTPro-It.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/AvenirNextLTPro-Bold.otf",
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
