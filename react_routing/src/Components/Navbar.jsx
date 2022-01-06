import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Div = styled.nav`
position:fixed;
display: flex;
justify-content: space-between;
padding:5px 10px;
width: 100%;
top: 0;
margin-left: 0;
right: 0;
border-bottom: 2px solid #121212;
align-items: center;
`

export const Navbar=()=> {
  return (
    <>
      <Div>
        <Link style={{marginLeft:"5%",fontWeight:"bold",fontSize:"17px",textDecoration:"none"}} to="/">Home</Link>
        <Link style={{fontWeight:"bold",fontSize:"17px",textDecoration:"none"}} to="/Products">Products</Link>
        <Link style={{marginRight:"5%",fontWeight:"bold",fontSize:"17px",textDecoration:"none"}} to="/login">Login</Link>
      </Div>
    </>
  );
}


