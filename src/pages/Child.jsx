 // import React from "react";
 import React, { useEffect, useState } from "react";
 import { Container, Row, Col } from "react-bootstrap";
 import "../App.css";
 
 function Api (){
   const [data,setData]=useState([])
     const getApiData = async()=>{
         const apiData = await fetch(' https://restcountries.com/v2/all?fields=name,region,flag');
         const dataList= await apiData.json();
         console.log( dataList)
         setData(dataList)
     }
     useEffect(() => {
         getApiData()
     }, [])
     
   return (
     <div>
         {data.map((item,index)=>{
             return(
               <Container>
                 <div key={index}>
                   <Row>
                   <ul>
                   <li>
                    <Col>Name :{item.name}</Col>
                     <br />
                    <Col> Region:{item.region}</Col>
                     <br />
                     <Col><img src={item.flag} alt="" style={{height:'50px'}} /></Col>
                     </li>
                     </ul>
                     </Row>
                 </div>
                 </Container>
             )
         })}
     </div>
   )
     }
 
 
 
 
 
 
 
 
 
 
 export default Api
