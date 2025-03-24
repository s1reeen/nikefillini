import ScrollVelocity from "@/componentns/ScrollVelocity/ScrollVelocity";
import TextPressure from "@/componentns/TextPressure/TextPressure";
import TiltedCard from "@/componentns/TiltedCard/TiltedCard";
import { Montserrat } from "next/font/google";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import products from "../../public/products.json";
import { Fragment } from "react";

const boldonse = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

const ProductSection = () => {
  return (
    <>
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
          {products.sale.map((product, index) => {
            const renderMultiLineText = (text: string) => {
              return text.split("\n").map((line, i, arr) => (
                <Fragment key={i}>
                  {line}
                  {i !== arr.length - 1 && <br />}
                </Fragment>
              ));
            };

            return (
              <TiltedCard
                key={index}
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
            );
          })}
        </div>
      </section>

      <section className="p-10 bg-gray-900">
        <h2 className="text-5xl text-center font-bold text-white">NEW</h2>

        <div className="flex justify-between mt-10">
          {products.new.slice(0, 4).map((product, index) => {
            const renderMultiLineText = (text: string) => {
              return text.split("\n").map((line, i, arr) => (
                <Fragment key={i}>
                  {line}
                  {i !== arr.length - 1 && <br />}
                </Fragment>
              ));
            };

            return (
              <TiltedCard
                key={index}
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
            );
          })}
        </div>

        <div className="flex justify-between mt-15">
          {products.new.slice(4).map((product, index) => {
            const renderMultiLineText = (text: string) => {
              return text.split("\n").map((line, i, arr) => (
                <Fragment key={i}>
                  {line}
                  {i !== arr.length - 1 && <br />}
                </Fragment>
              ));
            };

            return (
              <TiltedCard
                key={index + 4}
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
            );
          })}
        </div>
      </section>
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
