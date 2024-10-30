import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center flex flex-col h-dvh items-center justify-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/dashboard/users"
        className="inline-block bg-primary text-primary-800 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
