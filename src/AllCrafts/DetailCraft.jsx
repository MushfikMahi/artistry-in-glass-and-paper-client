import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { FaClockRotateLeft } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineStock } from "react-icons/ai";

const DetailCraft = () => {
    const craft  = useLoaderData()
    const { _id, photo, name, 
        subcategory, time, price, rating, 
        customization, stockStatus, description, 
        userName, userEmail } = craft
    return (
        <div className="flex flex-col md:flex-row container mx-auto gap-5 py-20">
            <div className="flex-1">
                <img src={photo} alt={name} />
            </div>
            <div className="flex items-center justify-center">
            <div className="flex-1 space-y-5">
                <h2 className="text-3xl font-bold">{name}</h2>
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
    <hr />
    <div className="space-y-3">
        <h3><span className="font-bold">Subcategory :</span> {subcategory}</h3>
        <hr />
        <h4 className="flex items-center gap-2"><FaClockRotateLeft /> <span className="font-bold">Prepairing Time :</span> {time}</h4>
        <h4 className="flex items-center gap-3"><VscSettings /><span className="font-bold">Customizable :</span> {customization}</h4>
        <h4 className="flex gap-2 items-center"><AiOutlineStock /> <span className="font-bold">Stock Status :</span> {stockStatus}</h4>
    </div>
    <hr />
    <div>
        <p className="font-bold">Owner Information : </p>
        <p>Name : {userName}</p>
        <p>Email : {userEmail}</p>
    </div>
            </div>
            </div>
        </div>
    );
};

export default DetailCraft;