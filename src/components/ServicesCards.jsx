import { Link } from "react-router-dom";

const ServicesCard = (props) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm py-12 min-h-52">
        <div>
          <img
            className="rounded-t-lg w-20 m-auto  opacity-90 border-b-2 dark:border-b-gray-900 pb-8 mb-8"
            src={props.url}
            alt={props.alt}
          />
        </div>
        <div className="px-5">
          <h1 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-gray-900 ">
            {props.title}
          </h1>
          <p className="font-normal text-gray-700 mb-5 dark:text-gray-400">
            {props.description}
          </p>

          <Link
            to="/content-not-found"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Read more 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
