"use client";
import { useState } from "react";
import ScrollVelocity from "@/componentns/ScrollVelocity/ScrollVelocity";
import TextPressure from "@/componentns/TextPressure/TextPressure";
import TiltedCard from "@/componentns/TiltedCard/TiltedCard";
import { Montserrat } from "next/font/google";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import products from "../../public/products.json";
import { Fragment } from "react";
import SpotlightCard from "@/componentns/SpotlightCard/SpotlightCard";

const boldonse = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

type Product = {
  imageSrc: string;
  altText: string;
  captionText: string;
  name: string;
  originalPrice?: string;
  salePrice?: string;
  price?: string;
  description?: string;
  sizes?: string[];
};

const ProductModal = ({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-black">{product.name}</h3>
            <button
              onClick={onClose}
              className="text-gray-800 hover:text-gray-900"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src={product.imageSrc}
                alt={product.altText}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                {product.description || "No description available"}
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-black">Price:</h4>
                {product.salePrice ? (
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-red-500">
                      {product.salePrice}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg line-through text-gray-900">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>
                )}
              </div>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const renderMultiLineText = (text: string) => {
    return text.split("\n").map((line, i, arr) => (
      <Fragment key={i}>
        {line}
        {i !== arr.length - 1 && <br />}
      </Fragment>
    ));
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}

      <section className="bg-[url('/images/hero.jpg')] bg-cover bg-center">
        <div style={{ position: "relative", height: "900px" }}>
          <TextPressure
            text="Nikki"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
      </section>

      <ScrollVelocity texts={["BIG SALE %"]} className="custom-scroll-text" />

      <section className="p-10">
        <h2 className="text-5xl text-center font-bold">ON SALE</h2>
        <div className="flex justify-between mt-10">
          {products.sale.map((product, index) => (
            <div
              key={index}
              onClick={() => handleProductClick(product)}
              className="cursor-pointer"
            >
              <TiltedCard
                imageSrc={product.imageSrc}
                altText={product.altText}
                captionText={product.captionText}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <>
                    <p className="flex tilted-card-demo-text p-3 text-center text-black font-bold text-4xl">
                      {renderMultiLineText(product.name)}
                    </p>
                    <p className="flex tilted-card-demo-text gap-3 p-3 text-center justify-center text-black font-bold text-4xl mt-33">
                      <span className="line-through">
                        {product.originalPrice}
                      </span>
                      <span className="text-red-500">{product.salePrice}</span>
                    </p>
                  </>
                }
              />
            </div>
          ))}
        </div>
      </section>

      <section className="p-10 bg-gray-900">
        <h2 className="text-5xl text-center font-bold text-white">NEW</h2>

        <div className="flex justify-between mt-10">
          {products.new.slice(0, 4).map((product, index) => (
            <div
              key={index}
              onClick={() => handleProductClick(product)}
              className="cursor-pointer"
            >
              <TiltedCard
                imageSrc={product.imageSrc}
                altText={product.altText}
                captionText={product.captionText}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <>
                    <p className="flex tilted-card-demo-text p-3 text-center text-black font-bold text-4xl">
                      {renderMultiLineText(product.name)}
                    </p>
                    <p className="flex tilted-card-demo-text gap-3 p-3 text-center justify-center text-black font-bold text-4xl mt-33">
                      <span>{product.price}</span>
                    </p>
                  </>
                }
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-15">
          {products.new.slice(4).map((product, index) => (
            <div
              key={index + 4}
              onClick={() => handleProductClick(product)}
              className="cursor-pointer"
            >
              <TiltedCard
                imageSrc={product.imageSrc}
                altText={product.altText}
                captionText={product.captionText}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <>
                    <p className="flex tilted-card-demo-text p-3 text-center text-black font-bold text-4xl">
                      {renderMultiLineText(product.name)}
                    </p>
                    <p className="flex tilted-card-demo-text gap-3 p-3 text-center justify-center text-black font-bold text-4xl mt-33">
                      <span>{product.price}</span>
                    </p>
                  </>
                }
              />
            </div>
          ))}
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-5xl text-center font-bold">BRANDS</h2>
        <ul className="flex flex-wrap items-center justify-between mt-10 gap-5">
          <li className="overflow-hidden bg-white shadow-md flex justify-center items-center rounded-4xl">
            <SpotlightCard
              className="custom-spotlight-card w-full h-full"
              spotlightColor="rgba(255, 255, 255, 0.2)"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/010/994/236/non_2x/nike-logo-white-with-name-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg"
                alt=""
                className="object-contain w-80 h-full"
              />
            </SpotlightCard>
          </li>
          <li className="overflow-hidden bg-white shadow-md flex justify-center items-center rounded-4xl">
            <SpotlightCard
              className="custom-spotlight-card w-full h-full"
              spotlightColor="rgba(255, 255, 255, 0.2)"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/010/994/345/non_2x/adidas-logo-white-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg"
                alt=""
                className="object-contain w-80 h-full"
              />
            </SpotlightCard>
          </li>
          <li className="overflow-hidden bg-white shadow-md flex justify-center items-center rounded-4xl">
            <SpotlightCard
              className="custom-spotlight-card w-full h-full"
              spotlightColor="rgba(255, 255, 255, 0.2)"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/023/599/204/non_2x/converse-all-star-brand-shoes-logo-white-symbol-design-illustration-with-black-background-free-vector.jpg"
                alt=""
                className="object-contain w-80 h-full"
              />
            </SpotlightCard>
          </li>
          <li className="overflow-hidden bg-white shadow-md flex justify-center items-center rounded-4xl">
            <SpotlightCard
              className="custom-spotlight-card w-full h-full"
              spotlightColor="rgba(255, 255, 255, 0.2)"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/024/455/549/non_2x/vans-off-the-wall-brand-logo-white-symbol-clothes-design-icon-abstract-illustration-with-black-background-free-vector.jpg"
                alt=""
                className="object-contain w-80 h-full"
              />
            </SpotlightCard>
          </li>
        </ul>
      </section>
      <footer>
        <div className="flex justify-center items-center p-4 h-16 bg-black">
          <p className="text-white text-lg">
            © 2025 NikkiFillini. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default function Home() {
  return (
    <div>
      <header className="flex justify-between bf align-center p-4 h-16">
        <a href="./">
          <span className={`${boldonse.className} text-2xl`}>NikkiFillini</span>
        </a>
        <nav>
          <ul className="flex gap-10 align-center ml-16">
            <li
              className={`${boldonse.className} text-2xl flex align-center cursor-pointer`}
            >
              SALE
            </li>
            <li
              className={`${boldonse.className} text-2xl flex align-center cursor-pointer`}
            >
              NEW
            </li>
            <li
              className={`${boldonse.className} text-2xl flex align-center cursor-pointer`}
            >
              BRANDS
            </li>
          </ul>
        </nav>
        <div className="flex gap-2 align-center">
          <div className="flex items-center border border-gray-400 rounded-lg">
            <input
              type="text"
              className="flex-grow px-4 py-2 text-sm text-gray-white border-none outline-none"
            />
            <button className="p-2">
              <FaSearch className="w-4 h-4" />
            </button>
          </div>
          <button className="text-2xl">
            <FaShoppingCart />
          </button>
        </div>
      </header>
      <ProductSection />
    </div>
  );
}
