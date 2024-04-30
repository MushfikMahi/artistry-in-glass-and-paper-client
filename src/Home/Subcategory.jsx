import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
const Subcategory = ({subcategory}) => {
    const {subcategory_Name, photo} = subcategory
    return (
        <Link to={`/subcategory/${subcategory_Name}`} 
        data-tooltip-id="my-tooltip"
        data-tooltip-content={`Click to see all the craft under the subcategory of ${subcategory_Name}`}
        data-tooltip-place="top">
          <div className="relative h-72 text-center">
    <img className="w-full h-full rounded-2xl object-cover" src={photo} alt={subcategory_Name} />
    <h1 className="absolute link text-white bg-black/30 text-2xl font-bold w-full h-full top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex justify-center items-center rounded-2xl overflow-hidden cursor-pointer">{subcategory_Name}</h1>
</div>
<Tooltip id="my-tooltip" />
        </Link>
    );
};

export default Subcategory;