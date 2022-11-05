import React from "react";
import { useNavigate } from "react-router-dom";


export default function BooktempUserList(props) {
  const navigate = useNavigate();

  return (

    <div className="relative top-24 mb-10 bg-white shadow-xl shadow-blue-10 rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl ">
      <div className="flex px-4 py-6 items-center justify-between">
        <div className="flex justify-between">

          <div className="mb-4">
            {/* <p className="text-gray-700">Book-Name: {props.post.book_name}</p> */}
            <h1 className="pt-6 text-4xl text-[#012a4a]"><strong>USER NAME</strong></h1>
            {/* <h2 className="mt-3 text-gray-700 text-sm">{props.post.author}</h2> */}
            <h2 className="text-blue-8 text-sm ml-1">~ EMAIL</h2>
          </div>
          {/* <p className="mt-3 text-gray-700 text-sm">
              {props.post.status}
            </p> */}

        </div>





        <div className="mr-2 text-gray-700 text-sm">
          <div className="flex flex-col space-y-8 mr-10">
            <button
              type="button"
              onClick={() => { navigate("/admin/updateuser") }}
              className="border-2 border-blue-8 hover:bg-blue-2 hover:text-white hover:border-blue-2 px-6 py-3 rounded-md text-blue-8"
            >
              Update
            </button>

            <button
              type="button"

              className="text-md border-2 border-blue-8 hover:bg-blue-2 hover:text-white hover:border-blue-2 px-6 py-3 rounded-md text-blue-8"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>);
}
