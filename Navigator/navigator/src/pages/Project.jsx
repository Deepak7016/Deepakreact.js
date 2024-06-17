import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

export const Project = () => {


    const [productdata,setproductdata]=useState({})
  const [load,setload]=useState(false)

  const {id}=useParams()

  useEffect(()=>{
    setload(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      setload(false)
      setproductdata(data)
    })
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
      <h1>Description</h1>
      <div style={{display:'flex',justifyContent:'center',}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productdata.image} />
      <Card.Body>
        <Card.Title>{productdata.title}</Card.Title>
        <Card.Text>
         {productdata.description}
        </Card.Text>
        <Card.Text>
         {productdata.category}
        </Card.Text>
        <Card.Text>
         {productdata.price}
        </Card.Text>
        <Card.Text>
         {productdata?.rating?.rate}
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}


