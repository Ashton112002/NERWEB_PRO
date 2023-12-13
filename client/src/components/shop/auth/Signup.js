import React, { Fragment, useState, useRef } from "react";
import { signupReq } from "./fetchApi";
import nanaylogo from "../../../Assets/logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

let EMAIL_JS_PUBLIC_KEY = "evpSlYjFpzdjBJOBO";
let EMAIL_JS_SERVICE_KEY = "service_8nfck6w";
let EMAIL_JS_TEMPLATE_KEY = "template_h2kqmlv";


const notify = () =>
    toast.success('OTP Sent! Please check your email.', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    });

const otpInvalid = () =>
toast.error('Invalid OTP! Please check your email or request again.', {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light'
});

const Signup = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    error: false,
    loading: false,
    success: false,
  });

  const alert = (msg, type) => (
    <div className={`text-sm text-${type}-500`}>{msg}</div>
  );
  const sendEmail = (otpKey) => {
    const toEmail = document.getElementById('email').value;
    console.log("Email reciever: ", toEmail);
    emailjs.init(EMAIL_JS_PUBLIC_KEY); //EMAIL JS PUBLIC KEEEY
    var params = {
      from_name: "Nanay Estralla",
      message: "Your OTP Code is : " + otpKey,
      to_email: toEmail //HERE FOR EDITING EMAIL TO SEND
    }
    // console.log("Email Parameters: ", params)
    emailjs.send(EMAIL_JS_SERVICE_KEY, EMAIL_JS_TEMPLATE_KEY, params); // EMAIL JS CONFIGURATION
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData({
      ...data,
      profileImage: file,
    });
  };
  const GenerateRandomOTP = () => {
    return Math.floor(Math.random() * 900000) + 100000;
  };
  const sendOtp = () => {
    const otp = GenerateRandomOTP();
    localStorage.setItem("OTP", otp);
    sendEmail(otp);
    notify(); 
  }

  const resizeImage = (img, maxWidth, maxHeight) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    let width = img.width;
    let height = img.height;
    if (width > height) {
      if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
      }
    } else {
      if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }
    }
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL("image/jpeg"); // Adjust format as needed
  };

  const processImage = async (file, maxWidth, maxHeight) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const resizedBase64String = resizeImage(img, maxWidth, maxHeight);
          resolve(resizedBase64String);
        };
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const fileInputRef = useRef(null);

  const formSubmit = async () => {
    const valOtp = localStorage.getItem("OTP");
    const inputOtp = document.getElementById("otp").value;
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setData({ ...data, loading: true });
    if (data.cPassword !== data.password) {
      return setData({
        ...data,
        error: {
          cPassword: "Password doesn't match",
          password: "Password doesn't match",
        },
      });
    }
    else if (valOtp !== inputOtp) {
    // else if (inputOtp !== "123456") {
    console.log("OTP Invalid");
    // otpInvalid();
    // return;
    return setData({
      ...data,
      error: {
        otp: "OTP Invalid"
      },
    });
    }
    try {
      const resizedBase64String = await processImage(data.profileImage, 150, 150);
      const responseData = await signupReq({
        name: data.name,
        email: data.email,
        password: data.password,
        cPassword: data.cPassword,
        userImage: resizedBase64String
      });
      handleResponse(responseData);
    } catch (error) {
      console.error("Error outside of FileReader:", error);
      // Handle error if necessary
    }

    function handleResponse(responseData) {
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
          cPassword: "",
        });
      } else if (responseData.success) {
        setData({
          success: responseData.success,
          name: "",
          email: "",
          password: "",
          cPassword: "",
          profileImage: "",
          otp: "",
          loading: false,
          error: false,
        });
        localStorage.removeItem("OTP");
      }
    }
  };
  return (
    <Fragment>
      <div className="text-center text-2xl mb-6 font-bold">
        {" "}
        NANAY ESTRELLA'S RESTAURANT
      </div>

      <div className="w-20 h-20 my-5 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
        <img src={nanaylogo} alt="" className="w-full" />
      </div>
      <form className="space-y-4">
        {data.success ? alert(data.success, "green") : ""}
        <div className="flex flex-col">
          <label htmlFor="name">
            FullName<span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                name: e.target.value,
              })
            }
            value={data.name}
            type="text"
            id="name"
            className={`${
              data.error.name ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.name, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">
            Email address<span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                email: e.target.value,
              })
            }
            value={data.email}
            type="email"
            id="email"
            className={`${
              data.error.email ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.email, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">
            Password<span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                password: e.target.value,
              })
            }
            value={data.password}
            type="password"
            id="password"
            className={`${
              data.error.password ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.password, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="cPassword">
            Confirm password
            <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                cPassword: e.target.value,
              })
            }
            value={data.cPassword}
            type="password"
            id="cPassword"
            className={`${
              data.error.cPassword ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.cPassword, "red")}
        </div>


        <div className="flex flex-col">
          <label htmlFor="otp" className="mb-2">
            Profile Image
            <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <div className="flex">
            <input
              ref={fileInputRef}
              onChange={handleFileChange}
              type="file"
              id="profileImage"
              className={`${
                data.error.profileImage ? "border-red-500" : ""
              } flex-grow px-4 py-2 focus:outline-none border`}
            />
          </div>
          {!data.error ? "" : alert(data.error.profileImage, "red")}
        </div>


        <div className="flex flex-col">
          <label htmlFor="otp" className="mb-2">
            OTP
            <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <div className="flex">
            <input
              value={data.otp}
              type="text"
              id="otp"
              className={`${
                data.error.otp ? "border-red-500" : ""
              } flex-grow px-4 py-2 focus:outline-none border`}
            />
            <button type="button" onClick={sendOtp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 py-2 px-4 rounded">
              Send
            </button>
          </div>
          {!data.error ? "" : alert(data.error.otp, "red")}
        </div>



        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              className="px-4 py-2 focus:outline-none border mr-1"
            />
            <label htmlFor="rememberMe">
              Remember me<span className="text-sm text-gray-600">*</span>
            </label>
          </div>
          <a className="block text-gray-600" href="/">
            Lost your password?
          </a>
        </div>
        <div
          onClick={(e) => formSubmit()}
          style={{ background: "#679641" }}
          className="px-4 py-2 text-white text-center cursor-pointer font-medium"
        >
          Create an account
        </div>
        <ToastContainer />
      </form>
    </Fragment>
    
  );
};

export default Signup;
