import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Subcategory from "./Subcategory";

const Home = () => {
    const [subcategories, setSubcategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/subcategory')
        .then(res=>res.json())
        .then(data=>{
            setSubcategories(data)
        })
    },[])
    return (
        <div>
            <Banner></Banner>
            <h3 className="text-3xl font-bold text-center my-14">Our sub categories</h3>
            <div className="container mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    subcategories.map(subcategory=><Subcategory key={subcategory._id} subcategory={subcategory}></Subcategory>)
                }
            </div>
        </div>
    );
};

export default Home;