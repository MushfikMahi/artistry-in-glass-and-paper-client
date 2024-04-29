import { Link } from "react-router-dom";

const Subcategory = ({subcategory}) => {
    const {subcategory_Name, photo} = subcategory
    return (
        <Link to={`/subcategory/${subcategory_Name}`}>
            <div className="card bg-base-100 shadow-xl image-full">
  <figure className="h-[200px]"><img src={photo} alt={subcategory_Name} /></figure>
  <div className="card-body flex items-center justify-center">
    <h2 className="card-title">{subcategory_Name}</h2>
  </div>
</div>
        </Link>
    );
};

export default Subcategory;