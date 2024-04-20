import { Link } from "react-router-dom";

const SmallCard = (props) => {
  return (
    <div className=" pt-6 px-2 shadow-lg  hover:shadow-xl border border-gray-100 rounded-lg w-48 h-48">
      <Link to="/content-not-found">
        <div className="min-h-20 max-h-20 flex items-center">
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
