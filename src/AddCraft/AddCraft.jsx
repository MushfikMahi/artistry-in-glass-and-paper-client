import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";
const AddCraft = () => {
    const {user} = useContext(AuthContext)
    const handleAddCraft = event=>{
        event.preventDefault()
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const time = form.time.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const description = form.description.value;
        console.log(photo, name, subcategory, time, price, rating, customization, stockStatus, description, userName, userEmail);
        const craft = { photo, name, subcategory, time, price, rating, customization, stockStatus, description, userName, userEmail }
        console.log(craft);
        fetch('http://localhost:5000/crafts', {
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(craft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully added a craft',
                    icon: 'success',
                    confirmButtonText: 'Cancel'
                  })
                //   form.reset()
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] md:p-24 px-6 py-14">
            <h2 className="text-3xl font-extrabold">Add a Craft</h2>
            <form onSubmit={handleAddCraft}>
                <div className="md:flex md:mb-8">
                    
                    <div className="form-control md:w-1/2">
                    <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Craft Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Craft Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                <div className="md:flex md:mb-8">
                <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <label className="input-group relative">
                        <IoIosArrowDown className="absolute right-4 top-4" />
                            <select name="subcategory" className="input drop input-bordered w-full"> 
                            <option value="" disabled selected>Subcategory Name </option>
                            <option value="Card Making">Card Making</option>
                            <option value="Scrapbooking">Scrapbooking</option>
                            <option value="Paper Quilling & origami">Paper Quilling & origami</option>
                            <option value="Glass Painting">Glass Painting</option>
                            <option value="Lampworking">Lampworking</option>
                            <option value="Glass Dying & Staining">Glass Dying & Staining</option>
                          </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 md:ml-4">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="time" placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:mb-8">
                    
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                        {/* <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div> */}
                    </div>
                    <div className="form-control md:w-1/3 md:ml-10 ml-4">
                        <div>
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <label className="flex items-center gap-5">
                        <div className="flex items-center gap-2">
                        <span className="text-xl">Yes</span>
                        <input type="radio" value='Yes' name="customization" className="radio" />
                        
                        </div>
                        <div className="flex items-center gap-2">
                        <span className="text-xl">No</span>
                        <input value='No' type="radio" name="customization" className="radio" />
                        </div>
                        </label>
                        </div>
                    </div>
                    <div className="form-control md:w-1/3 ml-4">
                        <div>
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <label className="flex items-center gap-5">
                        <div className="flex items-center gap-2">
                        <span className="text-xl">In stock</span>
                        <input type="radio" value='In stock' name="stockStatus" className="radio" />
                        
                        </div>
                        <div className="flex items-center gap-2">
                        <span className="text-xl">Made to Order</span>
                        <input value='Made to Order' type="radio" name="stockStatus" className="radio" />
                        </div>
                        </label>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <textarea type="text" name="description" placeholder="Description" className="textarea textarea-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="userName" placeholder="User Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="userEmail" placeholder="User Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Craft" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddCraft;