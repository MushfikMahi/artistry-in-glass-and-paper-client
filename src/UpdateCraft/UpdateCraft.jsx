import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
const UpdateCraft = () => {
    const craft = useLoaderData()

    const [selectedSubcategory, setSelectedSubcategory] = useState(craft?.subcategory || '');

    const handleSelectChange = (e) => {
      setSelectedSubcategory(e.target.value);
    };

    const [customizationOption, setCustomizationOption] = useState(craft?.customization);

    const handleCustomizationChange = (e) => {
        setCustomizationOption(e.target.value);
      };
    const [stockStatusOption, setStockStatusOption] = useState(craft?.stockStatus);

    const handleStockStatusOptionOptionChange = (e) => {
        setStockStatusOption(e.target.value);
      };
      const navigate = useNavigate()
    const handleUpdateCraft = event=>{
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
        const description = form.description.value;
        
        console.log(photo, name, subcategory, time, price, rating, customization, stockStatus, description);
        const updatedCraft = {photo, name, subcategory, time, price, rating, customization, stockStatus, description}

        fetch(`https://paper-crafts-and-glass-art-server.vercel.app/update/${craft._id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updatedCraft)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data.modifiedCount);
          if(data.modifiedCount>0){
            Swal.fire({
              title: 'Success!',
              text: 'You have successfully Updated a craft',
              icon: 'success',
              confirmButtonText: 'Okay'
            })
            navigate('/mycrafts')
          }
        })
    }
    return (
        <div className="md:p-24 px-6 py-14 mb-20">
            <h2 className="text-3xl font-bold">Update the craft : {craft?.name}</h2>
            <form onSubmit={handleUpdateCraft}>
                <div className="md:flex md:mb-8">
                    
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Craft Name</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={craft?.name} type="text" name="name" placeholder="Craft Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={craft?.photo} type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
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
                        <select
      name="subcategory"
      className="input drop input-bordered w-full"
      value={selectedSubcategory}
      onChange={handleSelectChange}
    >
      <option value="" disabled>Select a Subcategory</option>
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
                            <input defaultValue={craft?.time} type="text" name="time" placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={craft?.price} type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:mb-8">
                    
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={craft?.rating} type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
<div className="form-control md:w-1/3 md:ml-10 ml-4">
                    <div>
      <label className="label">
        <span className="label-text">Customization</span>
      </label>
      <label className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="text-xl">Yes</span>
          <input
            type="radio"
            value="Yes"
            name="customization"
            className="radio"
            checked={customizationOption === 'Yes'}
            onChange={handleCustomizationChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">No</span>
          <input
            type="radio"
            value="No"
            name="customization"
            className="radio"
            checked={customizationOption === 'No'}
            onChange={handleCustomizationChange}
          />
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
          <input
            type="radio"
            value="In stock"
            name="stockStatus"
            className="radio"
            checked={stockStatusOption === 'In stock'}
            onChange={handleStockStatusOptionOptionChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">Made to Order</span>
          <input
            type="radio"
            value="Made to Order"
            name="stockStatus"
            className="radio"
            checked={stockStatusOption === 'Made to Order'}
            onChange={handleStockStatusOptionOptionChange}
          />
        </div>
      </label>
    </div>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <textarea defaultValue={craft?.description} type="text" name="description" placeholder="Description" className="textarea textarea-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Craft" className="btn btn-block text-white bg-[#ff6b6b]" />

            </form>
        </div>
    );
};

export default UpdateCraft;