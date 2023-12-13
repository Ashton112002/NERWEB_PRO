import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import menubanner from "../../../Assets/contactbanner.png";
import Image1 from "../../../Assets/bg2.png";
import "tailwindcss/tailwind.css";
import Footer from "../partials/Footer";
import { Navber } from "../partials";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleVisitButtonClick = () => {
    // Open the specified URL in a new tab
    window.open("https://maps.app.goo.gl/HAmxu3Xbu3aqztmw7", "_blank");
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x8xta0k",
        "template_18taatg",
        form.current,
        "q19E3aTkFYaiDhWkB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Send");
          setName("");
          setEmail("");
          setMessage("");
          // Display success message
          window.alert("Your Inquiries sent successfully!");
        },
        (error) => {
          console.log(error.text);
          // Display error message if needed
          window.alert("Message sending failed. Please try again.");
        }
      );
  };
  return (
    <div>
      <Navber />

      <div className="w-full min-h-screen flex flex-col md:flex-row items-start ">
        <div className="w-[450px] h-[250px] md:h-[500px] mt-[20%] md:mt-[10%] md:w-3/5 relative flex flex-col md:mb-[3%]">
          <div className="h-0 md:pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full pl-[10%]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15719.972898073602!2d124.0615413!3d9.9345211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa2523d6dd27eb%3A0x1aa786f45bd4e6c8!2sNanay%20Estrella&#39;s%20Restaurant!5e0!3m2!1sen!2sph!4v1694737440229!5m2!1sen!2sph"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-2/5 relative flex flex-col mt-6 md:mt-[10%] mb-[5%] md:mb-[0%]">
          <section className="text-gray-700 body-font relative">
              <div className="flex flex-col text-center w-full mb-6">
                <span className="text-[20px] font-['Open_Sans']">
                  Have a Questions?
                </span>
                <p className="font-bold text-gray text-[2rem]">Contact Us!</p>
              </div>
              <div className="md:w-[70%] w-[70%] mx-auto">
                <form
                  className="flex flex-wrap -m-2 flex-col items-center -m-2"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  {/* Fullname input */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="name">Fullname</label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-400"
                      />
                    </div>
                  </div>

                  {/* Email input */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-400"
                        placeholder="nanayestrella@gmail.com"
                      />
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-slate-200 rounded border border-gray-300 focus:border-indigo-500 h-32 text-gray-700 py-1 px-3 resize-none rounded focus-within:outline-green-400 duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <input
                      style={{ background: "#679641" }}
                      className={`px-4 py-2 text-white text-center cursor-pointer uppercase`}
                      type="submit"
                      value="Send"
                    />
                  </div>
                </form>
              </div>
          
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
