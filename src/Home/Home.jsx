import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Subcategory from "./Subcategory";
import { Link, useLoaderData } from "react-router-dom";
import Craft from "../AllCrafts/Craft";
import Testimony from "./Testimonials/Testimony";
import FAQ from "./FAQ/FAQ";

const Home = () => {
    const crafts = useLoaderData();
    const sixCrafts = crafts.slice(0, 6);
    console.log(sixCrafts);
    const [subcategories, setSubcategories] = useState([])
    useEffect(()=>{
        fetch('https://paper-crafts-and-glass-art-server.vercel.app/subcategory')
        .then(res=>res.json())
        .then(data=>{
            setSubcategories(data)
        })
    },[])
    return (
        <div className="mb-20">
            <Banner></Banner>
            <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center my-14">Our Crafts</h3>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    sixCrafts.map(craft=><Craft key={craft._id} craft={craft}></Craft>)
                }
                
            </div>
            <div className="flex justify-center my-10">
            <Link to={'/allcrafts'} className="btn bg-[#ff6b6b] text-white">Viw All Art & Crafts</Link>
            </div>
            <h3 className="text-3xl font-bold text-center my-14">Our sub categories</h3>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    subcategories.map(subcategory=><Subcategory key={subcategory._id} subcategory={subcategory}></Subcategory>)
                }
            </div>
            <h3 className="text-3xl font-bold text-center my-14">Frequently Asked Questions ?</h3>
            <div>
                <FAQ></FAQ>
            </div>
            <h3 className="text-3xl font-bold text-center my-14">Testimonials</h3>
            <div>
                <Testimony></Testimony>
            </div>
            </div>
        </div>
    );
};

export default Home;