import { NavLink } from "react-router-dom";

const Navbar = () => {

    let activeStyle = {
        backgroundColor: "rgb(199 210 254/ 30%)",
        color: "#8A2BE2",
        fontWeight: "500",
      };
      
  return (
    <div className="navbar bg-slate-50 drop-shadow-sm px-1.5 py-3">
      <div className="flex-1">
        <button className="btn btn-ghost normal-case text-xl mx-4 font-bold text-indigo-800">
          Estatery
        </button>
        <ul className="menu menu-horizontal p-0">
          <li>
          <NavLink
            to="rent"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
           Rent
          </NavLink>
          </li>
          <li>
          <NavLink
            to="buy"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
           Buy
          </NavLink>
          </li>
          <li>
          <NavLink
            to="sell"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
           Sell
          </NavLink>
          </li>
          <li tabIndex={0}>
            <a>
              Manage Property
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
              <NavLink
            to="submenu1"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
           Submenu 1
          </NavLink>
              </li>
              <li>
              <NavLink
            to="submenu2"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
           Submenu 2
          </NavLink>
              </li>
            </ul>
          </li>
          <li tabIndex={1}>
            <a>
              Resources
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
            <li>
              <NavLink
            to="submenu3"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
           Submenu 3
          </NavLink>
              </li>
              <li>
              <NavLink
            to="submenu4"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
           Submenu 4
          </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <button class="btn btn-primary btn-outline border-violet-200 mx-8 rounded-lg capitalize text-base text-violet-500 px-5 min-h-0 h-10">Login</button>
        <button className="btn btn-primary bg-violet-500 border-transparent mr-4 capitalize text-base px-5 rounded-lg min-h-0 h-10">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
