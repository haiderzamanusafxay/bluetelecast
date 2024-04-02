import { Link } from "react-router-dom";
const Vacancies = () => {
  return (
    <div className="m-5">
      <h1 className="md:text-6xl text-4xl lg:text-6x my-20 text-center font-bold text-gray-700">
        Jobs Available
      </h1>
      <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
        <a
          href="#"
          className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
        >
          <div className="group relative h-20 w-20 overflow-hidden rounded-lg">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711843200&semt=ais"
              alt=""
              className="h-full w-full object-cover text-gray-700"
            />
          </div>
        </a>
        <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
          <h3 className="text-sm text-gray-600">Bluetelecast</h3>
          <a
            href="#"
            className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
          >
            {" "}
            Sr. Frontend Engineer{" "}
          </a>
          <p className="overflow-hidden pr-7 text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna .
          </p>

          <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div className="">
              Experience:
              <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                {" "}
                2 Years{" "}
              </span>
              <Link
                to="#"
                className="ml-2 mr-3 rounded-full bg-blue-700 px-2 py-0.5 text-white"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
