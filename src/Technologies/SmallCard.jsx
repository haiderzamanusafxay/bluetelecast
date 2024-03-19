import { Link } from "react-router-dom";

const SmallCard = (props) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg  min-w-40 h-40 p-4 hover:shadow-lg ">
      <Link to="/content-not-found">
        <div className="min-h-20 flex items-center">
          <img className="w-20 m-auto" src={props.url} alt={props.alt} />
        </div>
        <h6 className="text-gray-700 md:text-xl font-bold pt-4">
          {props.title}
        </h6>
      </Link>
    </div>
  );
};

export default SmallCard;
