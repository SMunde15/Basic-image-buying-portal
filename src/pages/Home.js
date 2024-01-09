import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Grid, Typography } from "@mui/material";
import "./Homepage.css";

// Import images statically as this just demo
import image1 from "../images/blue_marigold.jpeg";
import image2 from "../images/hibiscus.jpeg";
import image3 from "../images/jasmine.jpeg";
import image4 from "../images/lotus.jpeg";
import image5 from "../images/marigold.jpeg";
import image6 from "../images/pink_marigold.jpeg";
import image7 from "../images/rose.jpeg";
import image8 from "../images/sunflower.jpeg";
import image9 from "../images/tulip.jpeg";
import image10 from "../images/white_rose.jpeg";

const Home = () => {
  const { addToCart } = useCart();

  const initialProducts = [
    { id: 1, name: "Image 1", price: 10, quantity: 0, image: image1 },
    { id: 2, name: "Image 2", price: 15, quantity: 0, image: image2 },
    { id: 3, name: "Image 2", price: 15, quantity: 0, image: image3 },
    { id: 4, name: "Image 2", price: 15, quantity: 0, image: image4 },
    { id: 5, name: "Image 2", price: 15, quantity: 0, image: image5 },
    { id: 6, name: "Image 2", price: 15, quantity: 0, image: image6 },
    { id: 7, name: "Image 2", price: 15, quantity: 0, image: image7 },
    { id: 8, name: "Image 2", price: 15, quantity: 0, image: image8 },
    { id: 9, name: "Image 2", price: 15, quantity: 0, image: image9 },
    { id: 10, name: "Image 2", price: 15, quantity: 0, image: image10 },
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleAddToCart = (product) => {
    const updatedProducts = products.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });

    setProducts(updatedProducts);
    addToCart({ ...product, quantity: product.quantity + 1 });
  };

  return (
    <Grid container>
      <Grid item container xs={12} justifyContent={"center"}>
        <Typography variant="h3">Welcome to the Image Store</Typography>
      </Grid>
      <Grid
        item
        container
        className="product-container"
        xs={12}
        justifyContent={"center"}
      >
        {products.map((product) => (
          <Grid key={product.id} className="product-item" justifyContent={'center'}>
            <img src={product.image} alt={product.name} />
            <Grid item container justifyContent={'space-between'} >
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">
  Add to Cart
</button></Grid>
            <span>Quantity: {product.quantity}</span>
          </Grid>
        ))}
      </Grid>
      <Grid marginTop={'10vh'} item container justifyContent={'center'} >
      <Link to="/cart"><Typography  variant="h6"> Go to Cart </Typography></Link> </Grid>
    </Grid>
  );
};

export default Home;
