import { Link } from "react-router-dom";
const Vacancies = () => {
  return (
    <div className="m-5">
      <h1 className="md:text-6xl text-4xl lg:text-6x mt-40 mb-10 text-center font-bold text-gray-700">
        Jobs Available
      </h1>
      <div className="flex justify-center">
        <div className="m-10 w-screen max-w-screen-md ">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <form className="">
              <div className="grid gap-6 grid-cols-3">
                <div className="flex flex-col">
                  <label
                    for="name"
                    className="text-sm font-medium text-stone-600"
                  >
                    Tile
                  </label>
                  <input
                    type="search"
                    id="name"
                    placeholder="Full Stack Developer"
                    className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    for="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    Type
                  </label>

                  <select
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option>Remote</option>
                    <option>Onsite</option>
                    <option>Hybrid</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label
                    for="date"
                    className="text-sm font-medium text-stone-600"
                  >
                    Date of Expiry
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                  Reset
                </button>
                <button className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="group mx-2 my-10 grid max-w-screen-lg grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
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
              Type:
              <span className="ml-2 mr-3 rounded-full bg-[#FBCFE8] px-2 py-0.5 text-green-900">
                {" "}
                Remote{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
