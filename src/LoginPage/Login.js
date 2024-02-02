import React from "react";
import logo1 from "../images/logo1.png";
import logo3 from "../images/logo3.svg";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="main">
      <div className="left_block">
        <div className="left_inner "></div>
        <div className="left_content ">
          <div className="header">
            <img
              className="logo"
              style={{ cursor: "pointer" }}
              src={logo1}
              alt="logo"
            />
          </div>
          <div className="content">
            <span style={{ cursor: "pointer" }}>BASE</span>
          </div>
          <div className="footer">
            <div className="footer_icons">
              <FaGithub className="icons" />
              <AiFillTwitterCircle className="icons" />
              <FaLinkedin className="icons" />
              <IoLogoDiscord className="icons" />
            </div>
          </div>
        </div>
      </div>
      <div className="right_block">
        <div className="header_toggle">
          <div style={{ position: "relative", width: "6rem" }}>
            <img src={logo3} alt="logo" />
          </div>
        </div>
        <div className="right_block_content">
          <span className="signin_span">Sign In</span>
          <span
            className="text-base mb-6 font-medium"
            style={{ fontFamily: "montserrat" }}
          >
            Sign in to your account
          </span>
          <div className="option_div">
            <div className="alt-signin">
              <FcGoogle size={16} />
              <span>Sign in with Google</span>
            </div>
            <div className="alt-signin">
              <FaApple size={16} />
              <span>Sign in with Apple</span>
            </div>
          </div>
          <div className="form">
            <span
              style={{
                fontFamily: "lato",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              }}
              className="mb-6 font-semibold"
            >
              Email address
            </span>
            <input
              type="text"
              defaultValue={"johndoe@gmail.com"}
              className="w-full h-10 bg-gray-300 rounded px-4 mb-4"
            />
            <span
              style={{
                fontFamily: "lato",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              }}
              className="mb-6 font-semibold"
            >
              Password
            </span>
            <input
              type="password"
              defaultValue="23031234"
              className="w-full h-10 bg-gray-300 rounded px-4 mb-4"
            />
            <span
              style={{
                fontFamily: "lato",
                color: "#346BD4",
                marginBottom: "1rem",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Forgot password?
            </span>
            <Link className="signin_button" to="/upload">
              Sign In
            </Link>
          </div>
          <span
            className="bottom_txt"
            style={{ fontFamily: "lato", fontSize: "1rem" }}
          >
            Don&apos;t have an account?{" "}
            <span
              style={{
                color: "#346BD4",
                fontFamily: "lato",
                fontSize: "1rem",
                fontWeight: "inherit",
              }}
            >
              Register here
            </span>
          </span>
        </div>
        <div className="bottom_icons">
          <FaGithub className="bottom_icon" />
          <AiFillTwitterCircle className="bottom_icon" />
          <FaLinkedin className="bottom_icon" />
          <IoLogoDiscord className="bottom_icon" />
        </div>
      </div>
    </div>
  );
};

export default Login;
