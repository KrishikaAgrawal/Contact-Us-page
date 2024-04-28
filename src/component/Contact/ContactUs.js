import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  /* function to receive message on mail */
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "081a2add-f083-4d05-ab18-74d7baa4c29a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    event.target.reset();
    toast.success("Message sent successfully!!");
  };

  return (
    <>
      <ToastContainer />
      {/* hero section */}
      <div
        className="mb-4 contact-hero flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/Contact/contact-hero-1.jpg")`,
        }}
      >
        <h1 className="contact-us text-6xl font-semibold text-white ">
          Contact Us
        </h1>
      </div>

      {/* input for contact */}
      <div className="contact-section w-full mx-12 mt-12 mb-12 flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-around ">
        <div className="contact-input md:w-1/2 md:px-4 ">
          <h2 className="mb-4 text-3xl text-center">
            Do you have any questions?
          </h2>
          <form onSubmit={onSubmit}>
            <input
              name="name"
              className="mb-4 w-full py-3 px-3 border border-gray-400"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              name="email"
              className="mb-4 w-full h-12 px-3 border border-gray-400"
              type="mail"
              placeholder="Your Email"
              required
            />
            <input
              name="subject"
              className="mb-4 w-full h-12 px-3 border border-gray-400"
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              className="mb-4 w-full px-3 h-40 border border-gray-400"
              placeholder="Message"
              required
            ></textarea>
            <div className="flex justify-center ">
              <button
                type="submit"
                className="mb-4 rounded-lg content-center w-1/2 p-2 font-semibold text-xl bg-orange-500 text-white shadow-lg hover:scale-110 duration-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* add location */}
        <div className="contact-location md:w-1/2 md:px-4">
          <div className="flex justify-center ">
            <a
              target="_blank"
              href="https://www.google.com/maps/search/1+branch---479,+(Baspadamka,+Tehsil+Pataudi,+Gurugram,+Haryana+-+122503,+India/@28.3379119,76.7788465,15z/data=!3m1!4b1?entry=ttu"
            >
              <img
                src="/Contact/contact-location.png"
                className="relative mt-20 lg:mt-0 rounded-lg border hover:shadow-2xl duration:500 border-gray-400 "
                alt="contact location"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

gsap.from(".contact-hero .contact-us", {
  opacity: 0,
  duration: 2,
  y: 100,
});

export default ContactUs;
