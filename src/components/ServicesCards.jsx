import { Link } from "react-router-dom";

const ServicesCard = (props) => {

  let image = props.url;
  return (
    <div className="max-w-2xl mx-auto text-center ">
      <Link to="/content-not-found">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm py-12 min-h-52 hover:shadow-lg">
          <div>
            <img
              className="rounded-t-lg w-16 m-auto opacity-90 border-b-2 dark:border-b-gray-900 pb-8 mb-8 transition duration-300 hover:scale-105"
              src={image}
              alt={props.alt}
            />


          </div>
          <div className="px-5">
            <h1 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-gray-900 ">
              {props.title}
            </h1>
            <p className="font-normal text-gray-900 text-justify mb-5 ">
              {props.description}
            </p>

            <Link
              to="/content-not-found"
              className="font-medium text-blue-600 dark:text-blue-700 hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
      </Link>
    </div>

  );
};

export default ServicesCard;
