import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../components/Context/ProductContext.jsx';
import { DataContext } from '../components/Context/DataContext.jsx';
import logo from '../../public/image/Logotipo_files/20.png';
import menu from '../../public/image/MenuHamb.png';
//import profile from '../../public/image/profileFem.png';
import carro from '../../public/image/carritomaleta.png';
import DrawerMenu from '../components/DrawerMenu.jsx';
import TotalItems from "../components/CartContent/TotalItems.jsx";

const Nav = () => {
  const user = localStorage.getItem("user");

  const userObject = JSON.parse(user);
  const role = userObject ? userObject.role : null;

  const photoObject = JSON.parse(user);
  const profile = photoObject ? photoObject.photo : null;
  console.log(profile)

  const { onInputChange, valueSearch, onResetForm } = useContext(ProductContext);
  const { cart } = useContext(DataContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <nav>
        <div className="navColor h-28 w-full flex items-center justify-between">
          <div className="flex bg-red-200">
            <img
              onClick={() => setOpen(!open)}
              className="h-10 cursor-pointer m-3"
              src={menu}
              alt="menu"
            />
          </div>

          {role !== null ? (
            <div className="flex items-center p-3 justify-around bg-pink-600">
              <Link to="/profile" className="flex items-center">
                <img className="h-12" src={profile} alt="" />
              </Link>
              <Link to="/cart" className="seeCarrito flex items-center">
                <img className="h-10 ml-3" src={carro} alt="" />
                {cart.length > 0 ? <TotalItems /> : null}
              </Link>
            </div>
          ) : (
            <Link to="/login" className="seeCarrito">
              <p className="text-2xl font-medium p-4">LOGIN</p>
            </Link>
          )}
        </div>
        <DrawerMenu isOpen={open} onClose={() => setOpen(false)} />
      </nav>
      <header className="bg-red-600 h-18 flex justify-center items-center">
        <form onSubmit={onSearchSubmit}>
          <div className="flex w-full h-10 bg-red-300">
            <input
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Buscar un producto"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <button className="btn-search">Buscar</button>
          </div>
        </form>
      </header>
    </>
  );
};

export default Nav;
