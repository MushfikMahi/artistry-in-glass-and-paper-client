import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { IoIosArrowDown } from "react-icons/io";

const Mycrafts = () => {
    const {user} = useContext(AuthContext)
    const [crafts, setCrafts] = useState([])
    const [control, setControl] = useState(false)
    console.log(user?.email);

    const [filter, setFilter] = useState('All');

    const filteredCrafts = () => {
        if (filter === 'Yes') {
          return crafts.filter(craft => craft.customization === 'Yes');
        } else if (filter === 'No') {
          return crafts.filter(craft => craft.customization === 'No');
        } else {
          return crafts;
        }
      };


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

<div className="flex justify-center my-5">
<div className="dropdown ">

<div tabIndex={0} role="button" className="m-1 pr-8 relative btn bg-[#ff6b6b] text-white">Filter by customization <IoIosArrowDown className="absolute text-white text-xl right-2 top-4" /></div>
  <ul tabIndex={0} className="dropdown-content menu z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    <li className="hover:bg-[#f06969] hover:text-white rounded-xl" onClick={() => setFilter('All')}><a>All</a></li>
    <li className="hover:bg-[#f06969] hover:text-white rounded-xl" onClick={() => setFilter('Yes')}><a>Yes</a></li>
    <li className="hover:bg-[#f06969] hover:text-white rounded-xl" onClick={() => setFilter('No')}><a>No</a></li>
  </ul>
</div>
</div>


            {
                filteredCrafts().map(craft=>(
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