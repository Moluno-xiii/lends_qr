"use client";

// import { useRouter } from "next/navigation";

interface Props {
  reset?: () => void;
  error: Error;
}

const Error: React.FC<Props> = ({ error, reset }) => {
  // const router = useRouter();
  return (
    <main className="flex h-dvh justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold text-error">
        Something went wrong!
      </h1>
      <p className="text-lg text-error uppercase">{error.message}</p>

      <button
        onClick={reset ? reset : () => window.location.reload()}
        // onClick={reset ? reset : () => router.refresh()}
        className="inline-block bg-primary text-white px-6 py-3 text-lg"
      >
        Reload
      </button>
    </main>
  );
};

export default Error;
