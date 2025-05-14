
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import productimg from '../../images/acerpng.png';
import productimg1 from '../../images/asuspng.png';
import productimg2 from '../../images/applepng.png';
import './product.css';
import lap1 from '../../images/aspire5.png';
import lap2 from '../../images/asusvivo.png';
import lap3 from '../../images/macbookair.png';

const Product = () => {
  const dispatch = useDispatch();

  const products = [
    {
      img: lap1,
      title: "Apple Macbook M4 pro",
      desc: "M4 pro chip, 24GB RAM, 512GB SSD",
      originalPrice: 209999,
      price: 190999
    },
    {
      img: lap2,
      title: "Lenovo Legion Pro 5",
      desc: "AMD Ryzen 9, 32GB RAM, 1TB SSD",
      originalPrice: 219999,
      price: 200970
    },
    {
      img: lap3,
      title: "MacBook Air",
      desc: "Apple M1 Chip, 8GB Unified Memory, 256GB SSD",
      originalPrice: 99000,
      price: 89000
    },
  ];

  return (
    <>
      <h1>
        <span className="our">OUR_</span>
        <span className="brandss">_BRANDS</span>
      </h1>

      <div className="productalign1">
        <img className="acerlogo" src={productimg} alt="Acer Logo" />
      </div>
      <div className="productalign2">
        <img className="asuslogo" src={productimg1} alt="Asus Logo" />
      </div>
      <div className="productalign3">
        <img className="applelogo" src={productimg2} alt="Apple Logo" />
      </div>

      <div className="cardsalign">
        <div className="product-card-container">
          {products.map((p, index) => (
            <div className="product-card" key={index}>
              <img src={p.img} alt={p.title} className="lap1" />
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
              <p>
                <span className="original-price">Rs: {p.originalPrice}</span>{' '}
                <span className="discounted-price">Rs: {p.price}</span>
              </p>
              <button className="add-to-cart" onClick={() => dispatch(addToCart(p))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;


