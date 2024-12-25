import { Link } from "react-router-dom";


const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <img
          src="featured1.jpeg"
          className="rounded-3xl object-cover w-full"
          alt="Featured 1"
        />
        {/* Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* Title */}
        <Link
          to="/post/featured1"
          className="text-xl lg:text-3xl font-semibold lg:font-bold hover:text-blue-800 transition-colors"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Link>
      </div>

      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <img
              src="featured2.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              alt="Featured 2"
            />
          </div>
          {/* Details and Title */}
          <div className="w-2/3">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/post/featured2"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium hover:text-blue-800 transition-colors"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        {/* Third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <img
              src="featured3.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              alt="Featured 3"
            />
          </div>
          {/* Details and Title */}
          <div className="w-2/3">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800">Development</Link>
              <span className="text-gray-500 text-sm">3 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/post/featured3"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium hover:text-blue-800 transition-colors"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        {/* Fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <img
              src="featured4.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              alt="Featured 4"
            />
          </div>
          {/* Details and Title */}
          <div className="w-2/3">
            {/* Details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-blue-800">Marketing</Link>
              <span className="text-gray-500 text-sm">5 days ago</span>
            </div>
            {/* Title */}
            <Link
              to="/post/featured4"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium hover:text-blue-800 transition-colors"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
