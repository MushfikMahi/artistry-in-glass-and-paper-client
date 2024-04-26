import { FaStar } from "react-icons/fa";
const Craft = ({craft}) => {
    const { photo, name, subcategory, time, price, rating, customization, stockStatus, description, userName, userEmail } = craft
    console.log(craft);
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
      <button className="btn btn-primary">View Detail</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Craft;