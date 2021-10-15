import React from "react";
import { RiMailSendFill } from "react-icons/ri";

const Subscribe = () => {
  return (
    <div className="subscribe_wrapper  ">
      <div className="head h-20 bg-blue-400 relative">
        <RiMailSendFill className="mail_icon" />
      </div>
      <div className="sub_body bg-white py-8 text-center">
        <div className=" p-8">
          <h1 className="text-xl font-bold">DID YOU LIKE OUR POST?</h1>
          <p className="w-4/5 m-auto text-gray-700">
            Subscribe to our email newsletter for useful posts from our blog.
          </p>
          <p>sent out every week!</p>
        </div>

        <div className="form_content ">
          <form action="">
            <h1 className="font-bold my-1.5">EMAIL</h1>
            <div className="form_group">
              <input
                type="email"
                name="email"
                placeholder="enter your email address"
                className="outline-none mb-4 w-4/5 border-b-2 border-blue-400 text-center capitalize "
              />
            </div>
            <div className="form_group">
              <button
                type="submit"
                className="bg-blue-400 px-12 text-white font-bold py-1 hover:bg-red-500"
              >
                SUBSCRIBE!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
