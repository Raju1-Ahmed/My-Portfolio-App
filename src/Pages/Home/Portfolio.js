import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faFileCode, faLink, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import './style.css';
import ReactPlayer from 'react-player';

const Portfolio = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Fetch products from the backend API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/file/product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePlay = () => {
    const video = document.getElementById('autoplayVideo');
    if (video) {
      video.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });
      setVideoLoaded(true);
    }
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {products.map((product) => (
          <div className="border-Bcolor border-none md:border-2 shadow-2xl rounded bg-black" key={product._id}>
  <div className="lg:flex xl:flex md:flex p-2 md:p-0 items-center justify-around">

    <div className="w-full md:w-1/2 md:mr-4">
      <ReactPlayer
        url={product.video.filePath}
        playing={!videoLoaded} // Autoplay when videoLoaded is false
        loop
        muted
        width="100%"
        height="100%"
      />
    </div>

    <div className="w-full md:w-1/2 p-4 dark:bg-white bg-black">
      <span className="flex justify-between items-center">
        <h2 className="md:text-4xl text-xl md:font-black dark:text-black text-white">{product.name}</h2>
        <h2 className="text-Bcolor text-base">Future: {product.futureField} Project</h2>
      </span>
      <p className="text-Bcolor text-right text-base">Last update: {new Date(product.date).toLocaleDateString()}</p>
      <p className="dark:text-black text-white text-left text-sm md:text-lg leading-relaxed">{product.description}</p>
      <div className="flex justify-start items-end mt-4">
        <button className="btn hover:bg-white hover:text-black dark:bg-black bg-white dark:text-white text-black">
          <a href={product.clientURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFileCode} className="w-10 link link-accent" />
            Client Code
          </a>
        </button>
        <button className="btn ml-5 dark:bg-black bg-white dark:text-white text-black">
          <a href={product.serverURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faServer} className="w-10 link link-accent" />
            Server Code
          </a>
        </button>
        <button className="btn ml-5 dark:bg-black bg-white dark:text-white text-black">
          <a href={product.demoURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} className="w-10 link link-accent" />
            DEMO
          </a>
        </button>
      </div>
    </div>

  </div>
</div>

        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
