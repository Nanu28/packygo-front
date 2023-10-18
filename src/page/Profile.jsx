import React, { useContext } from "react";
import { DataContext } from "../components/Context/DataContext.jsx";

const Profile = () => {
  const { use } = useContext(DataContext);
  console.log(use);

  if (!use) {
    // Si use no está definido, muestra un mensaje de carga o maneja de otra forma
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen justify-center items-center flex ">
      <div className='flex flex-col w-3/4 h-1/2 justify-around items-center flex-wrap m-8 bg-white rounded-3xl shadow-gray-950 shadow-md gap-2 py-4 md:flex-row' key={use._id}>

        <img src={use.photo} alt='use-card' className="h-56 w-56 rounded-3xl" />

        <div className="flex gap-6 flex-col">
                  <h1 className="text-2xl font-semibold">My profile</h1>
          <h4 className='price text-lg'>   
          <p className="text-lg"> <span className="text-xl font-medium"> Name:</span> {use.name}</p> 
          <p className="text-lg"> <span className="text-xl font-medium">Surname: </span>{use.surname}</p>
          <p className="text-lg"><span className="text-xl font-medium">Username: </span> {use.name_user}</p>
          <p className="text-lg"><span className="text-xl font-medium">Email: </span> {use.email}</p>           
          <p className="text-lg"><span className="text-xl font-medium">Phone: </span> {use.phone}</p>
          <p className="text-lg"><span className="text-xl font-medium">Address:</span>  {use.address}</p>


          </h4>

        </div>

      </div>
    </div>
  )
}

export default Profile;
