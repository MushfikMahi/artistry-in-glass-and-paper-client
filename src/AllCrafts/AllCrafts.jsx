import { useLoaderData } from "react-router-dom";
import Craft from "./Craft";

const AllCrafts = () => {
    const crafts  = useLoaderData()
    // console.log(crafts);
    
    return (
        <div className="py-20 container mx-auto">
            <h2 className="text-center text-3xl font-bold pb-5">All Crafts</h2>
            <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
               crafts.map(craft=><Craft craft={craft} key={craft._id}></Craft>)
            }
       </div>
        </div>
    );
};

export default AllCrafts;