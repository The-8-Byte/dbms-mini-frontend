import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function NavbarUser(props) {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    async function handleNavbar() {
      const res = await fetch("/getUser");
      const data = await res.json();
      if (data.error) {
        setIsLoggedin(false);
      } else {
        setIsLoggedin(true);
      }
    }
    handleNavbar();
  });



  // const location = useLocation();
  return (
    <>
      <div className="uppercase fixed w-full text-white bg-blue-1 flex px-14 py-4 justify-between items-center">
        <h1 className="text-2xl font-bold"><Link to="/">
          <h1>LMS</h1>
        </Link></h1>
        <nav className="flex justify-between space-x-10">
          <Link to="/user/allbooksuser">
            <h1>Books</h1>
          </Link>
          <Link to="/user/allavailablebooks">
            <h1>Available Books</h1>
          </Link>
          <Link to="/user/allissuedbooks">
            <h1>Issued Books</h1>
          </Link>
          {isLoggedin ? (
            <h1
              onMouseEnter={() => {
                {
                  props.setShowProfile("visible");
                }
              }}
              onMouseLeave={() => {
                {
                  props.setShowProfile("hidden");
                }
              }}
            >
              Profile
            </h1>
          ) : undefined}
          <h1>
            {isLoggedin ? (
              <h1 className="cursor-pointer">
                Login
              </h1>
            ) : (
              <h1 className="cursor-pointer text-white">
                <a href="/">Logout</a>
              </h1>
            )}
          </h1>
        </nav>

      </div>
      <Outlet />
    </>
  );
}
