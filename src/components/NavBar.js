import { NavLink } from "react-router-dom";

import * as C from "./styles";

const NavBar = () => {
  return (
    <C.Header>
        <NavLink to="/" style={{textDecoration: 'none'}}>
            <C.HeaderLink>
                Dev's Blog
            </C.HeaderLink>
        </NavLink>
    </C.Header>
   
  )
}

export default NavBar;