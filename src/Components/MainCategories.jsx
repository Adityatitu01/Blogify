import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl xl:rounded-full p-3 shadow-lg items-center justify-between gap-3 md:gap-6 w-full">
      {/* links */}
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 w-full md:w-auto">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-3 py-1.5 text-sm"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-3 py-1.5 text-sm"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 rounded-full px-3 py-1.5 text-sm"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 rounded-full px-3 py-1.5 text-sm"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-blue-50 rounded-full px-3 py-1.5 text-sm"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 rounded-full px-3 py-1.5 text-sm"
        >
          Marketing
        </Link>
      </div>

      {/* separator */}
      <span className="text-lg font-medium hidden md:block">|</span>

      {/* search */}
      <div className="w-full md:w-auto mt-3 md:mt-0">
        <Search />
      </div>
    </div>
  );
};

export default MainCategories;
