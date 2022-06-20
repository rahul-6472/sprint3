import React from "react";
import styled from "styled-components"
import  {Link} from "react-router-dom"

const NavbarWrapper = styled.div`
display:flex;

justify-content:center;
align-items:center;
`
const StyledLink = styled(Link)`
color:blue;
cursor:pointer;
`
const Navbar = () => {

  return (

    <NavbarWrapper>
       <StyledLink to = "/">Home</ StyledLink>
       <StyledLink to = "/login">Login </StyledLink>
    </NavbarWrapper>
  )
};

export default Navbar;
