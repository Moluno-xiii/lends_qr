"use client";

// import { useRouter } from "next/navigation";

const Page: React.FC = ({}) => {
  // const router = useRouter();
  return (
    <div
      className="flex flex-col justify-center h-dvh items-center
    "
    >
      <span>test page</span>
      <button
        className="bg-primary text-error"
        // onClick={() => router.refresh()}
        onClick={() => window.location.reload()}
        //   >
      >
        click for reload
      </button>
    </div>
  );
};

export default Page;
