import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Craft = ({craft}) => {
    const { _id, photo, name, subcategory, time, price, rating, customization, stockStatus, description, userName, userEmail } = craft
    // console.log(craft);
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className="h-[300px]" src={photo} alt={name} /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{name}</h2>
    <p>{description}</p>
    <hr />
    <div className="flex justify-between">
        <div>
        <p className="font-bold">Price: ${price}</p>
        </div>
        <div>
        <p className="flex items-center gap-2 font-bold"> <span className="text-yellow-500"><FaStar /></span> {rating}</p>
        </div>
    </div>
    <div className="card-actions justify-end">
      <Link to={`/detail/${_id}`}>
      <button className="btn bg-[#ff6b6b] text-white">View Detail</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Craft;