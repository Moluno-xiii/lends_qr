"use client";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Pagination = ({ numUsers }: { numUsers: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const currentPage = Number(searchParams.get("page"));
  console.log(currentPage);
  console.log(searchParams);

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(String(searchParams));
    params.set("page", value);
    router.replace(`${pathName}?page=${value}`);

    return null;
  };
  return (
    <div className="cursor-pointer gap-x-3 flex flex-row items-center">
      <button
        onClick={() => handleSearch(String(currentPage - 1))}
        className="capitalize bg-primary px-2 py-1 rounded-sm text-white"
      >
        prev
      </button>
      <span onClick={() => handleSearch("1")}>1</span>
      <span
        onClick={() =>
          handleSearch(currentPage > 3 ? String(currentPage - 2) : "2")
        }
      >
        {currentPage > 3 ? currentPage - 2 : 2}
      </span>
      <span
        onClick={() =>
          handleSearch(currentPage >= 4 ? String(currentPage - 1) : "3")
        }
      >
        {" "}
        {currentPage > 3 ? currentPage - 1 : 3}
      </span>
      ...
      <span onClick={() => handleSearch(String(numUsers))}>{numUsers}</span>
      <button
        onClick={() => handleSearch(String(currentPage + 1))}
        className="capitalize bg-primary px-2 py-1 rounded-sm text-white"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
