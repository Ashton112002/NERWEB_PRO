import React, { Fragment } from "react";
import logo from "../../../Assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaDiscord,
  FaClock,
} from "react-icons/fa";
const Footer = (props) => {
  return (
    <Fragment>
      <div style={{ backgroundColor: "#679641" }} className="text-gray">
        <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
          <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
            <img src={logo} alt="" className="h-12" />
            <div className="ml-2">
              <span className="font-bold">Nanay Estrella's Restaurant</span>
            </div>

            <p className="ml-2 font-light">
              Fresh taste, less Price Delight in every bite.
            </p>
            <div className="flex items-center mt-[15px]"></div>
          </ul>

          <ul className="text-center sm:text-start -mb-5">
            <h1 className="font-large -mb-5">OPEN HOURS</h1>
            <h1 className="font-light -mb-5" style={{ color: "#0e1c03" }}>
              {" "}
              Monday-Saturday
            </h1>

            <h1 className="font-light -mb-5">
              <FaClock className="inline" style={{ color: "#0e1c03" }} />{" "}
              7:00AM-10:00PM
            </h1>

            <h1 className="font-light -mb-5" style={{ color: "#0e1c03" }}>
              Sunday
            </h1>
            <h1 className="font-light -mb-5">
              <FaClock className="inline" style={{ color: "#0e1c03" }} />{" "}
              9:00AM-5:00PM
            </h1>
          </ul>
          <ul className="text-center sm:text-start -mb-5 mt-5 md:mt-5">
            <h1 className="font-large -mb-5">USEFUL LINKS</h1>
            <h1 className="font-light -mb-5" style={{ color: "#0e1c03" }}>
              For more Recent Events.
            </h1>
            <h1 className="font-light -mb-5 mb-5" style={{ color: "#0e1c03" }}>
              Kindly Click. Below!
            </h1>
            <ul
              className="flex items-center text-center mt-5 ml-36 md:-ml-2.5 md:mt-5"
              style={{ color: "#0e1c03" }}
            >
              <a
                href="https://www.facebook.com/nanayestrellasresturant"
                className="text-gray hover:text-blue-500 mx-2"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/nanayestrellasresturant"
                className="text-gray hover:text-pink-500 mx-2"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.google.com"
                className="text-gray hover:text-red-500 mx-2"
              >
                <FaGoogle className="h-6 w-6" />
              </a>
              <a
                href="https://www.discord.com"
                className="text-gray hover:text-purple-500 mx-2"
              >
                <FaDiscord className="h-6 w-6" />
              </a>
            </ul>
          </ul>

          <ul className="text-center sm:text-start -mb-5">
            <h1 className="font-large -mb-5 mt-5 md:mt-5">CONTACT US</h1>
            <div className="flex items-center -mb-5 ml-28 md:ml-0 md:-mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-[#0e1c03] inline w-6 h-6 mr-4"
                viewBox="0 0 32 32"
              >
                <path
                  d="M25.046 8.483a10 10 0 0 0-7.911-5.425 11.364 11.364 0 0 0-2.27 0 10.003 10.003 0 0 0-7.911 5.425 10.806 10.806 0 0 0 1.48 11.893l6.794 8.26a1 1 0 0 0 1.544 0l6.793-8.26a10.806 10.806 0 0 0 1.481-11.893zM16 17a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4z"
                  data-name="Pin"
                  data-original="#000000"
                />
              </svg>
              <h1 className="font-light" style={{ color: "#0e1c03" }}>
                {" "}
                Bogtongbod, Clarin, Bohol
              </h1>
            </div>
            <div className="flex items-center -mb-5 ml-28 md:ml-0 md:-mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-[#0e1c03] inline w-6 h-6 mr-4"
                fill="#007bff"
                viewBox="0 0 100 100"
              >
                <path
                  d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z"
                  data-original="#000000"
                ></path>
              </svg>
              <h1 className="font-light" style={{ color: "#0e1c03" }}>
                {" "}
                nanayestrella.restuarant@gmail.com
              </h1>
            </div>
            <div className="flex items-center -mb-5 ml-36 md:ml-0 md:-mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-[#0e1c03] inline w-6 h-6 mr-4"
                viewBox="0 0 64 64"
              >
                <path
                  d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                  data-original="#000000"
                ></path>
              </svg>
              <h1 className="font-light" style={{ color: "#0e1c03" }}>
                {" "}
                123-456-7890
              </h1>
            </div>
          </ul>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray text-sm pb-8"
        >
          <span>© 2023 NanayEstrellaRestaurant. All Rights Reserved.</span>
          <span>
            Designed by: <span>TEAM-NERWEB</span>
          </span>
          <div className="sm:block flex items-center justify-center w-full">
            <span>Version 1.0</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
