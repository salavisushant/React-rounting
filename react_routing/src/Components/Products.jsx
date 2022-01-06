import {useState,useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 32%);
grid-gap: 3%;
width: 90%;
margin: auto;
margin-top: 100px;
`
const Image = styled.img`
width : 100%;
height: 250px;
`
const Box = styled.div`
border-radius: 10px;
text-align: center;
padding: 20px;
`

export const Products = () => {
    const [set,setData] = useState([]);

    const getProdData = async ()=>{
        let res = await fetch("https://fakestoreapi.com/products");
        let d = await res.json();
        setData(d)
    } 

    useEffect(()=>{
        getProdData()
    },[]);

    return (
        <Container>
           {
               set.map((e)=>(
                   <Box>
                    <div><Image src={e.image} alt=""/></div>
                    <p style={{color: '#303F9F',fontWeight:"Bold"}}>{e.title}</p>
                    <p>₹ {e.price}</p>
                    <Link style={{textDecoration:"none"}}to={`/products/${e.id}`}>Details</Link>
                   </Box>
               ))
           }
        </Container>
    )
}