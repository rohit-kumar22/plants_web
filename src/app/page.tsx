"use client";
import Image from "next/image";
import leaf1 from "../../public/assets/leaf-1.png";
import leaf2 from "../../public/assets/leaf-2.png";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import home from "../../public/assets/home.png";
import plant1 from "../../public/assets/plant-1.png";
import plant2 from "../../public/assets/plant-2.png";
import leaf3 from "../../public/assets/leaf-3.png";
import cart1 from "../../public/assets/cart-1.png";
import cart2 from "../../public/assets/cart-2.png";
import cart3 from "../../public/assets/cart-3.png";
import cart4 from "../../public/assets/cart-4.png";
import review1 from "../../public/assets/review-1.jpg";
import leaf4 from "../../public/assets/leaf-4.png";
import floral1 from "../../public/assets/floral-1.png";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  useEffect(() => {
    document.documentElement.lang = "zh-CN"; // Set language dynamically
  }, []);
  return (
    <div className="">
      <header
        id="navbar"
        className="bg-green-950 fixed w-full top-0 left-0 z-50"
      >
        <nav className="container  flex items-center justify-between h-16 sm:h-20">
          <div
            className={`${navbar ? "none" : "block"} font-Lobster sm:text-2xl`}
          >
            NoidaPlants
          </div>
          <div
            id="nav-menu"
            className={`absolute top-0 ${
              navbar ? "left-0" : "left-[-100%]"
            } min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
          >
            <ul className="flex flex-col items-center gap-8 lg:flex-row">
              <li className="nav-link">
                <a>Home</a>
              </li>
              <li className="nav-link">
                <a>About</a>
              </li>
              <li className="nav-link">
                <a>Popular</a>
              </li>
              <li className="nav-link">
                <a>Review</a>
              </li>
            </ul>
            <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
              <Image src={leaf1} alt="leaf-1" className="w-32" />
            </div>
            <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
              <Image src={leaf2} alt="leaf-2" className="w-32" />
            </div>
          </div>
          <div
            className="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden"
            onClick={handleNavbar}
          >
            <i
              className={`${navbar ? "ri-close-large-line" : "ri-menu-4-line"}`}
            ></i>
          </div>
        </nav>
      </header>
      <main className="">
        {/* ``````````````````````````Home`````````````````````````` */}
        <section className="relative">
          <div className="container">
            {/* blob 1 */}
            <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0 sm:hidden"></div>
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="w-full space-y-5 lg:w-1/2">
                <h1>
                  <span className="text-yellow-500">Plants</span> make a
                  <br></br>
                  positive
                  <span className="text-yellow-500"> impact</span> on <br></br>
                  your environment
                </h1>
                <p className="text-slate-300 font-Lobster">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  debitis ducimus numquam iure non pariatur explicabo hic! Illum
                  quia eum, voluptates iusto velit nisi quo, recusandae aliquid
                  ab, rem harum.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10">
                  <button className="btn">
                    <span>Shop Now</span>
                    <i className="ri-leaf-line"></i>
                  </button>
                  <button className="btn btn-outline">
                    <span>Know More</span>
                    <i className="ri-leaf-line"></i>
                  </button>
                </div>
                <p className="text-xs font-Lobster text-slate-300">
                  You will get 30-days free trial.
                </p>
                <div className="flex items-center gap-5 text-lg lg:pt-10">
                  <i className="ri-facebook-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
                  <i className="ri-twitter-x-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                  <i className="ri-instagram-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
                  <i className="ri-linkedin-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
                </div>
              </div>

              <div className="w-full relative lg:w-1/2">
                <Image src={home} alt="home" />

                <div className="absolute -top-10 right-0 opacity-30 xl:top-5 animate-movingY">
                  <i className="ri-leaf-line text-6xl text-yellow-500"></i>
                </div>

                <div className="absolute bottom-0 laft-0 opacity-30 xl:bottom-12 animate-rotating">
                  <i className="ri-flower-line text-6xl text-yellow-500"></i>
                </div>

                <div className="absolute -top-8 -left-5 opacity-30 hidden lg:block animate-scalingUp">
                  <i className="ri-plant-line text-6xl text-yellow-500"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ``````````````````````````Services`````````````````````````` */}
        <div className="bg-white text-green-900 py-20">
          <div className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* -- card1 -- */}
            <div className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
              <div className="flex items-center gap-5">
                <i className="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
                <p className="md:text-lg font-bold">
                  Fast <br></br>
                  Delivery
                </p>
              </div>
              <p className="font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. animi
                alias sint tempore!
              </p>
            </div>

            {/* -- card 2 -- */}
            <div className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
              <div className="flex items-center gap-5">
                <i className="ri-customer-service-line text-3xl md:text-4xl xl:text-5xl"></i>
                <p className="md:text-lg font-bold">
                  Customer <br></br>
                  Service
                </p>
              </div>
              <p className="font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. animi
                alias sint tempore!
              </p>
            </div>

            {/* -- card 3 -- */}
            <div className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
              <div className="flex items-center gap-5">
                <i className="ri-plant-line text-3xl md:text-4xl xl:text-5xl"></i>
                <p className="md:text-lg font-bold">
                  Original <br></br>
                  Plants
                </p>
              </div>
              <p className="font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. animi
                alias sint tempore!
              </p>
            </div>

            {/* -- card 4 -- */}
            <div className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
              <div className="flex items-center gap-5">
                <i className="ri-money-dollar-circle-line text-3xl md:text-4xl xl:text-5xl"></i>
                <p className="md:text-lg font-bold">
                  Affordable <br></br>
                  Price
                </p>
              </div>
              <p className="font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. animi
                alias sint tempore!
              </p>
            </div>
          </div>
        </div>

        {/* ``````````````````````````About Us`````````````````````````` */}

        <section className="about relative overflow-hidden">
          <div className="absolute -top-8 -right-12 opacity-50">
            <Image src={leaf3} alt="leaf" className="w-40 md:w-52 xl:w-64" />
          </div>
          <div className="flex flex-col items-center gap-3 text-center mb-10">
            <h2 className="title">About Us</h2>
            <p className="max-w-2xl">Follow instruction for more</p>
          </div>

          <div className="container space-y-10 xl:space-y-0">
            {/* ----- item 1 -------- */}
            <div className="flex flex-col items-center lg:flex-row gap-5">
              {/* ----- image -------- */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={plant1}
                  alt="plant1"
                  className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
                />
              </div>
              {/* ----- content -------- */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-5">
                  <h3>
                    Make your <span className="text-yellow-500">organic</span>
                    <br></br>
                    garden
                  </h3>
                  <p className="text-slate-300 font-Lobster">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore incidunt voluptates quas voluptas, ea mollitia
                    quaerat facilis obcaecati quo esse. Dolores ea laudantium
                    voluptates minima cupiditate placeat debitis porro nesciunt!
                  </p>
                </div>
              </div>
            </div>

            {/* ----- item 2 -------- */}
            <div className="flex flex-col items-center lg:flex-row-reverse gap-5">
              {/* ----- image -------- */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={plant2}
                  alt="plant2"
                  className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
                />
              </div>
              {/* ----- content -------- */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-5">
                  <h3>
                    Come with us <br></br>
                    <span className="text-yellow-500">grow up</span>
                  </h3>
                  <p className="text-slate-300 font-Lobster">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore incidunt voluptates quas voluptas, ea mollitia
                    quaerat facilis obcaecati quo esse. Dolores ea laudantium
                    voluptates minima cupiditate placeat debitis porro nesciunt!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ``````````````````````````Popular`````````````````````````` */}

        <section className="popular bg-green-900">
          <div className="popular flex flex-col items-center gap-3 text-center mb-40">
            <h2 className="title">Your Choice Plant</h2>
            <p className="max-w-2xl">Follow instruction for more</p>
          </div>

          <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* ----------------Card 1 ---------------------- */}
            <div className="popular-card bg-green-950 p-10 pt-24 rounded-md relative">
              <Image
                src={cart1}
                alt="cart"
                className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              />
              <p className="italic">Nephrolepis</p>
              <h3>Boston Fern</h3>

              <div className="text-yellow-500 text-xs py-3">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
                <i className="ri-star-line text-gray-400"></i>
                <i className="ri-star-line text-gray-400"></i>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xl">$5</p>
                <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
                  <i className="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>

            {/* ----------------Card 2 ---------------------- */}
            <div className="popular-card bg-green-950 p-10 pt-24 rounded-md relative">
              <Image
                src={cart2}
                alt="cart"
                className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              />
              <p className="italic">Ficus elastics</p>
              <h3>Rubber Plant</h3>

              <div className="text-yellow-500 text-xs py-3">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line text-gray-400"></i>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xl">$6</p>
                <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
                  <i className="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>

            {/* ----------------Card 3 ---------------------- */}
            <div className="popular-card bg-green-950 p-10 pt-24 rounded-md relative">
              <Image
                src={cart3}
                alt="cart"
                className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              />
              <p className="italic">Spathiphyllum wallisii</p>
              <h3>Peace Lily</h3>

              <div className="text-yellow-500 text-xs py-3">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
                <i className="ri-star-line text-gray-400"></i>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xl">$8</p>
                <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
                  <i className="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>

            {/* ----------------Card 4 ---------------------- */}
            <div className="popular-card bg-green-950 p-10 pt-24 rounded-md relative">
              <Image
                src={cart4}
                alt="cart"
                className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              />
              <p className="italic">Adenium obesum</p>
              <h3>Desert Rose</h3>

              <div className="text-yellow-500 text-xs py-3">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xl">$12</p>
                <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
                  <i className="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ``````````````````````````Review`````````````````````````` */}

        <section className="relative mb-20 md:mb-28 overflow-hidden">
          <div className="absolute -top-8 -left-12 opacity-50">
            <Image src={leaf4} alt="leaf" className="w-40 md:w-52 xl:w-64" />
          </div>
          <div className="flex flex-col items-center gap-3 text-center mb-10">
            <h2 className="title">Customer Review</h2>
            <p className="max-w-2xl">Follow instruction for more</p>
          </div>

          <div className="container">
            <div className="py-12">
              <ul>
                <li>
                  <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                    <p className="font-Lobster">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel quasi, voluptatum eaque et numquam laboriosam! At
                      illum maxime aut? Ipsum molestiae sed.
                    </p>
                    <div className="flex items-center">
                      <Image
                        src={review1}
                        alt="review-img"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="ml-2">
                        <p className="text-yellow-500 uppercase">
                          Tina Mahajan
                        </p>
                        <p>Designer</p>
                      </div>
                      <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* `````````````````````````` Footer `````````````````````````` */}

      <footer className="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">
        <div className="container text-white absolute top-0 right-0 left-0 -translate-y-1/2">
          <div className="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
            <h3>
              <span className="text-yellow-500">Subscribe</span> to our
              newsletter
            </h3>

            <div className="flex flex-col md:flex-row gap-1">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full py-3 px-5 text-green-900 rounded-md outline-none"
              />
              <button className="flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-80 duration-300">
                <span>Subscribe</span>
                <i className="ri-send-plane-2-fill" />
              </button>
            </div>
          </div>
        </div>

        {/* ---------- social icons ------------ */}
        <div className="container mt-16 mb-10">
          <div className="border-b border-green-500 relative">
            <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
              <div className="bg-yellow-100 text-lg text-center space-x-2">
                <i className="ri-facebook-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
                <i className="ri-twitter-x-line hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                <i className="ri-instagram-line hover:text-yellow-500 duration-300 cursor-pointer"></i>
                <i className="ri-linkedin-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- content ------------ */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
          {/* ---------- item-1 ------------ */}
          <div>
            <div className="text-7xl text-green-700 text-center inline-block">
              <i className="ri-leaf-fill" />
              <p className="font-Lobster text-xl sm:text-2xl">NoidaPlants.</p>
            </div>
          </div>

          {/* ---------- item-2 ------------ */}
          <div>
            <p className="mb-5 font-bold text-xl">Quick Link</p>
            <div className="flex flex-col gap-1">
              <a>Plants</a>
              <a>Flowers</a>
              <a>Gerdening</a>
              <a>Seeds</a>
              <a>Shipping</a>
            </div>
          </div>

          {/* ---------- item-3 ------------ */}
          <div>
            <p className="mb-5 font-bold text-xl">Popular Services</p>
            <div className="flex flex-col gap-1">
              <a>Tree Planting</a>
              <a>Grass Cutting</a>
              <a>Weeds Control</a>
              <a>Project</a>
            </div>
          </div>

          {/* ---------- item-4 ------------ */}
          <div>
            <p className="mb-5 font-bold text-xl">Contact Us</p>
            <div className="flex flex-col gap-1">
              <a>+91 987 65 432</a>
              <a>noidaplants@gmail.com</a>
              <br></br>
              <p>543 Abc Road, Noida, 201014, India</p>
            </div>
          </div>
        </div>

        {/* ---------- copyright ------------ */}

        <div className="container">
          <p className="text-center mt-10 opacity-50">
            Copyright &copy; 2025 rohitkumar-22. All rights reserved.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none">
          <Image src={floral1} alt="floral" className="w-full lg:w-1/2" />
        </div>
      </footer>
    </div>
  );
}
