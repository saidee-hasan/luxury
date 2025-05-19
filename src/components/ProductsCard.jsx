import React, { useState } from "react";

const productData = [
  {
    id: 1,
    name: "Stylish Jacket",
    price: "$120",
    img1: "https://static.wixstatic.com/media/a4ed88_bd47c167b3d74d66824a9e97ee3d1dad~mv2.jpg/v1/crop/x_401,y_0,w_3198,h_3000/fill/w_291,h_273,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bay%20Windows%20(2).jpg",
    img2: "//wpbingo-fashow.myshopify.com/cdn/shop/products/63.jpg?v=1665549687",
  },
  {
    id: 2,
    name: "Elegant Dress",
    price: "$150",
    img1: "//wpbingo-fashow.myshopify.com/cdn/shop/products/64.jpg?v=1665549687",
    img2: "//wpbingo-fashow.myshopify.com/cdn/shop/products/65.jpg?v=1665549687",
  },
  {
    id: 3,
    name: "Casual Shirt",
    price: "$90",
    img1: "//wpbingo-fashow.myshopify.com/cdn/shop/products/66.jpg?v=1665549687",
    img2: "//wpbingo-fashow.myshopify.com/cdn/shop/products/67.jpg?v=1665549687",
  },
  {
    id: 4,
    name: "Trendy Jeans",
    price: "$80",
    img1: "//wpbingo-fashow.myshopify.com/cdn/shop/products/68.jpg?v=1665549687",
    img2: "//wpbingo-fashow.myshopify.com/cdn/shop/products/69.jpg?v=1665549687",
  },
  {
    id: 5,
    name: "Leather Boots",
    price: "$200",
    img1: "//wpbingo-fashow.myshopify.com/cdn/shop/products/70.jpg?v=1665549687",
    img2: "//wpbingo-fashow.myshopify.com/cdn/shop/products/71.jpg?v=1665549687",
  },
  {
    id: 6,
    name: "Fashion Sneakers",
    price: "$110",
    img1: "//wpbingo-fashow.myshopify.com/cdn/shop/products/72.jpg?v=1665549687",
    img2: "//wpbingo-fashow.myshopify.com/cdn/shop/products/73.jpg?v=1665549687",
  },
];

const ProductCard = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {productData.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductItem = ({ product }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative cursor-pointer overflow-hidden transition duration-300 "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image Hover Effect */}
      <div className="h-[500px] w-64 flex justify-center items-center mx-auto relative">
        <img
          src={product.img1}
          alt={product.name}
          className={`absolute w-full h-64 object-cover transition-opacity duration-500 ${
            hover ? "opacity-0" : "opacity-100"
          } z-30`} // Image is in the background
        />
        <img
          src={product.img2}
          alt={product.name}
          className={`absolute w-full h-64 object-cover transition-opacity duration-500 ${
            hover ? "opacity-100" : "opacity-0"
          } z-30`} // Image in the foreground during hover
        />
      </div>

      <div className="relative flex justify-center items-center bg-blue-600">
        {/* Product Details */}
        <div
          className={`absolute bottom-0 w-96 h-58 mt-3 bg-blue-800 text-center py-7 z-20 transition-transform duration-300 transform `}
        >
          <h3 className="text-lg mt-20 font-semibold text-white">{product.name}</h3>
          <p className="text-yellow-300 font-medium">{product.price}</p>
          {/* Learn More Button */}
          <button className="bg-white text-black py-2 px-4 rounded  focus:outline-none">
  Learn More
</button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
