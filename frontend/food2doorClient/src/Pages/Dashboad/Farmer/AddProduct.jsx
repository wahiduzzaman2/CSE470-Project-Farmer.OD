import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { reset,  } = useForm();
    const {user} = useContext(AuthContext)
    const handleAddCourse = event =>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const instructor_name = user.displayName;
        const instructor_email = user.email;
        const instructor_photo = user.photoURL;
        const available_seats = form.available_seats.value;
        const price = form.price.value;
        const description = form.description.value;
        const what_you_will_learn = form.what_you_will_learn.value;
        const selectedByStudent = [];
        const enrolledByStudent = [];
        const isPending = true;
        const isDenied = false;
        const admin_feedback = "";
        const NewCourse = {image, name, instructor_name, instructor_email, instructor_photo, available_seats, price, description, what_you_will_learn, selectedByStudent, enrolledByStudent, isPending, isDenied, admin_feedback} 
        
        //console.log(NewCourse);
        fetch('https://fluent-link-server.vercel.app/courses',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewCourse)
        })
        .then(res => res.json())
        .then(data => {console.log(data);
            if (data.acknowledged){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Course added successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            
            }
        })
    
    }


    return (
       <div className="flex justify-center items-center h-screen">
      <div className="p-8 rounded shadow-lg w-[50%]">
        <h1 className="text-3xl font-semibold mb-4">Add Product</h1>
        <form onSubmit={handleAddCourse}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full rounded-md input-warning"
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              className="mt-1 block w-full rounded-md input-warning"
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              className="mt-1 block w-full rounded-md input-warning"
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="mt-1 block w-full rounded-md input-warning"
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Quantity Available
            </label>
            <input
              type="number"
              name="quantityAvailable"
              className="mt-1 block w-full rounded-md input-warning"
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="text"
              name="image"
              className="mt-1 block w-full input-warning"
              
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="py-2 px-4 btn btn-warning"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default AddProduct;