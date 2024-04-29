import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Mycrafts = () => {
    const {user} = useContext(AuthContext)
    const [crafts, setCrafts] = useState([])
    const [control, setControl] = useState(false)
    console.log(user?.email);
    // { _id, photo, name, subcategory, time, price, rating, 
    // customization, stockStatus, description, userName, userEmail }
    useEffect(()=>{
        fetch(`https://paper-crafts-and-glass-art-server.vercel.app/mycrafts/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setCrafts(data);
        })
    },[user, control])
const handleDelete = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://paper-crafts-and-glass-art-server.vercel.app/delete/${id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Craft has been deleted.',
                                'success'
                            )
                            setControl(!control)
                        }
                    })

            }
        })
}
    return (
        <div className="py-20 container mx-auto">
            {
                crafts?.map(craft=>(
                <div key={craft._id} className="flex md:flex-row flex-col gap-5 mb-5 rounded-2xl shadow-xl">
                    <div className="md:w-1/3 p-5 flex items-center">
                        <img className="rounded-xl" src={craft.photo} alt={craft.name} />
                    </div>
                    <div className="space-y-3 md:w-2/3 p-5">
                        <h3 className="text-2xl font-bold">{craft.name}</h3>
                        <p>{craft.description}</p>
                        <hr />
                        <div className="flex justify-between">
                        <p><span className="font-bold">Subcategory : </span>{craft.subcategory}</p>
                        <p><span className="font-bold">Price : </span> ${craft.price}</p>
                        </div>
                        <div className="flex justify-between">
                            <p><span className="font-bold">Preparing Time : </span> {craft.time}</p>
                            <p><span className="font-bold">Rating : </span>{craft.rating}</p>
                            
                        </div>
                        <div className="flex justify-between">
                        <p><span className="font-bold">Customization : </span> {craft.customization}</p>
                            <p><span className="font-bold">Stock Status : </span>{craft.stockStatus}</p>
                        </div>
                        <hr />
                        <div className="flex justify-end gap-5">
                            <Link to={`/updateCraft/${craft._id}`} className="btn bg-[#ff6b6b] text-white">Update</Link>
                            <button onClick={()=>handleDelete(craft._id)} className="btn bg-red-700 text-white">Delete</button>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    );
};

export default Mycrafts;