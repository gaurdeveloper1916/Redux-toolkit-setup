import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import '../components/Main.css'
import CardGroup from "react-bootstrap/CardGroup";
import  {add} from './store/cartSlice'
import { useDispatch } from "react-redux";

function Main() {
  const dispatch =useDispatch()
  const [fetchData, setFetchData] = useState([]);
  const addProduct=(product)=>{
     dispatch(add(product))
  }
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      console.log(data);
      setFetchData(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CardGroup >
              {fetchData.map((item, i) => {
                return (
                  <div style={{display:"flex"}}>
                    <Card style={{ width: "10rem",height:"28rem" ,margin:"40px" }}>
                      <Card.Img className="img" variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title style={{fontWeight:"10px"}}>{item.title}</Card.Title>
                        <Card.Text>
                         {item.price}
                        </Card.Text>
                        <Button onClick={()=>{addProduct(item)}} variant="primary">Buy Now</Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </CardGroup>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
