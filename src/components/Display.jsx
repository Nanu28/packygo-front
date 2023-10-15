import React from 'react';
import ButtonNav from '../components/ButtonNav.jsx';
import axios from 'axios';


const Display = () => {
  const user = localStorage.getItem("user");
  const userObject = JSON.parse(user);
  const role = userObject ? userObject.role : null;

  const userToken = localStorage.getItem("token");
  console.log(userToken)
  const headers = { headers: { "authorization": `Bearer ${userToken}` } };

  const logout = async () => {
    axios.post("http://localhost:8000/users/signout")
      .then(res => {
        localStorage.clear();
        console.log(res)
        navigate("/");
      })
      .catch(res => console.log(res));
  };

  return (
    <div className="h-1/2 flex flex-col justify-around items-center text-center mt-5">
      {role === null ? ( // Si el usuario no ha iniciado sesión
        <>
          <ButtonNav to="/" title="Home" />
          <ButtonNav to="/login" title="Login" />
          <ButtonNav to="/register" title="Register" />
          <ButtonNav to="/store" title="Store" />
        </>
      ) : ( // Si el usuario ha iniciado sesión
        <>
          <ButtonNav to="/" title="Home" />
          <ButtonNav to="/store" title="Store" />
          {role === 1 && <ButtonNav to="/admin" title="Admin" />} {/* Mostrar solo si el rol es 1 */}
          <ButtonNav onClick={logout} title="Logout" />
        </>
      )}
    </div>
  );
};

export default Display;
