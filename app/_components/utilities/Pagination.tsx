"use client";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Pagination = ({ numUsers }: { numUsers: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const numberOfUsers = numUsers / 5;
  const currentPage = Number(searchParams.get("page"));

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(String(searchParams));
    params.set("page", value);
    router.replace(`${pathName}?page=${value}`);

    return null;
  };
  return (
    <div className="cursor-pointer gap-x-3 flex flex-row items-center">
      {currentPage > 1 && (
        <button
          onClick={() => handleSearch(String(currentPage - 1))}
          className="capitalize bg-primary px-2 py-1 rounded-sm text-white"
        >
          prev
        </button>
      )}
      <span
        className="hover:underline transition-all duration-300 hover:text-primary"
        onClick={() => handleSearch("1")}
      >
        1
      </span>
      <span
        className="hover:underline transition-all duration-300 hover:text-primary"
        onClick={() =>
          handleSearch(currentPage > 3 ? String(currentPage - 2) : "2")
        }
      >
        {currentPage > 3 ? currentPage - 2 : 2}
      </span>
      <span
        className="hover:underline transition-all duration-300 hover:text-primary"
        onClick={() =>
          handleSearch(currentPage >= 4 ? String(currentPage - 1) : "3")
        }
      >
        {" "}
        {currentPage > 3 ? currentPage - 1 : 3}
      </span>
      ...
      <span
        className="hover:underline transition-all duration-300 hover:text-primary"
        onClick={() => handleSearch(String(numberOfUsers))}
      >
        {numUsers / 10}
      </span>
      {numberOfUsers > currentPage && (
        <button
          onClick={() => handleSearch(String(currentPage + 1))}
          className="capitalize bg-primary hover:bg-opacity-75 transition-all duration-300 px-2 py-1 rounded-sm text-white"
        >
          next
        </button>
      )}
      <span className="">page {currentPage}</span>
    </div>
  );
};

export default Pagination;
