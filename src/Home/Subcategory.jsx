import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
const Subcategory = ({subcategory}) => {
    const {subcategory_Name, photo} = subcategory
    return (
        <Link to={`/subcategory/${subcategory_Name}`} 
        data-tooltip-id="my-tooltip"
        data-tooltip-content={`Click to see all the craft under the subcategory of ${subcategory_Name}`}
        data-tooltip-place="top">
            <div className="card bg-base-100 shadow-xl image-full">
  <figure className="h-[200px]"><img src={photo} alt={subcategory_Name} /></figure>
  <div className="card-body flex items-center justify-center">
    <h2 className="card-title link text-white">{subcategory_Name}</h2>
    <Tooltip id="my-tooltip" />
  </div>
</div>
        </Link>
    );
};

export default Subcategory;