import { useLoaderData, useParams } from "react-router-dom";
import Craft from "../../AllCrafts/Craft";

const AllSubcategory = () => {
    const crafts = useLoaderData()
    const param = useParams()
    const subcategory = param.subcategory_Name

    const filteredCrafts = crafts.filter(craft => craft.subcategory === subcategory)


    return (
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 container mx-auto">
            {
                filteredCrafts.map(craft=><Craft key={craft._id} craft={craft}></Craft>)
            }
        </div>
    );
};

export default AllSubcategory;