import Search from "./Search";

const SideMenu = () => {
  return (
    <div className="h-max lg:w-60 sticky top-8">
      <h1 className="mb-4 text-sm font-medium text-gray-700">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium text-gray-700">Filter</h1>
      <div className="flex flex-col gap-3 text-sm">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="hidden peer"
          />
          <div className="w-5 h-5 flex items-center justify-center border-[1.5px] border-blue-600 rounded-full peer-checked:border-transparent peer-checked:bg-blue-600 transition duration-300 ease-in-out">
            <div className="w-2.5 h-2.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform duration-300 ease-in-out"></div>
          </div>
          <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
            Newest
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="hidden peer"
          />
          <div className="w-5 h-5 flex items-center justify-center border-[1.5px] border-blue-600 rounded-full peer-checked:border-transparent peer-checked:bg-blue-600 transition duration-300 ease-in-out">
            <div className="w-2.5 h-2.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform duration-300 ease-in-out"></div>
          </div>
          <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
            Most Popular
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="hidden peer"
          />
          <div className="w-5 h-5 flex items-center justify-center border-[1.5px] border-blue-600 rounded-full peer-checked:border-transparent peer-checked:bg-blue-600 transition duration-300 ease-in-out">
            <div className="w-2.5 h-2.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform duration-300 ease-in-out"></div>
          </div>
          <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
            Trending
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="hidden peer"
          />
          <div className="w-5 h-5 flex items-center justify-center border-[1.5px] border-blue-600 rounded-full peer-checked:border-transparent peer-checked:bg-blue-600 transition duration-300 ease-in-out">
            <div className="w-2.5 h-2.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform duration-300 ease-in-out"></div>
          </div>
          <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
            Oldest
          </span>
        </label>
      </div>

      <h1 className="mt-8 mb-4 text-sm font-medium text-gray-700">
        Categories
      </h1>
      <div className="flex flex-col gap-2 text-sm">
        <span className="underline cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-300">
          All
        </span>
        <span className="underline cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-300">
          Web Design
        </span>
        <span className="underline cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-300">
          Development
        </span>
        <span className="underline cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-300">
          Databases
        </span>
        <span className="underline cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-300">
          Search Engines
        </span>
        <span className="underline cursor-pointer text-gray-600 hover:text-blue-600 transition-colors duration-300">
          Marketing
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
