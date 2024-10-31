import Image from "next/image";

const SearchBar: React.FC = ({}) => {
  return (
    <div className="md:flex hidden flex-row h-10">
      <input
        type="text"
        className="rounded-sm  border border-text-primary border-opacity-15 h-full mb-3 placeholder-text-primary md:w40 lg:w-[440px] px-5"
        placeholder="Search for anything"
      />
      <div className="bg-primary rounded-r-md w-14 flex justify-center items-center h-full">
        <Image
          src="/search-icon.png"
          height={14}
          width={14}
          alt="lendsqr logo"
          className=""
        />
      </div>
    </div>
  );
};

export default SearchBar;
