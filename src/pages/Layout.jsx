import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to="about"
          >
            Abouts
          </NavLink>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to="blog"
          >
            Blog
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;

/* Yukaridaki stillemenin daha yaygin kullanimi asagidaki gibidir:

const navLinkStayles = ({ isActive }) => {
  return {
    color: isActive ? "red" : "black",
    texDecoration: isActive ? "none" : "underline",
  };
};

<NavLink
style={navLinkStayles}
to="blog"
>
Blog
</NavLink>  */
