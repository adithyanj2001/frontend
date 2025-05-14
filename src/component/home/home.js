import React, { Component } from "react";
import banner from '../../images/frontbanner.jpg';
import banner2 from '../../images/frontbanner4.jpg';
import laptop1 from '../../images/macbookair.png';
import laptop2 from '../../images/asusvivo.png';
import laptop3 from '../../images/aspire5.png';
import laptop4 from '../../images/asusvivo.png';
import './home.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Home extends Component {
  render() {
    return (
      <div className="main-home">

        {/* Top Section */}
        <div className="top-banner">
          <div className="banner-image">
            <img src={banner} alt="Laptop Promotion" />
          </div>
          <div className="banner-text">
            <h1>welcome to <span className="brand-name">LapStore</span></h1>
            <p>
              Discover the future of performance and portability with our latest range of laptops. <br />
              Built for speed. Designed for life.
            </p>
            <button className="shop-btn">Shop Now</button>
          </div>
        </div>

        {/* Product  */}
        <div className="product-strip">
          <div className="product-item">
            <img src={laptop1} alt="Laptop 1" />
            <h4>Performance Laptops</h4>
            <button>Shop</button>
          </div>
          <div className="product-item">
            <img src={laptop2} alt="Laptop 2" />
            <h4>Gaming Laptops</h4>
            <button>Shop</button>
          </div>
          
          <div className="product-item">
            <img src={laptop4} alt="Laptop 4" />
            <h4>Student Laptops</h4>
            <button>Shop</button>
          </div>
        </div>

        
        <div className="carousel-section">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            transitionTime={600}
          >
            <div>
              <img className="bannerimg" src={banner} alt="Ad 1" />
            </div>
            <div>
              <img className="bannerimg" src={banner2} alt="Ad 2" />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Home;
