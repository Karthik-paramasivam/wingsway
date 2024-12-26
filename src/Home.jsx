import React, { useState, useRef, useEffect } from "react";
import BackgroundImage from "./Images/Backgroundimage1.jpg";
import { Button, Form, Input, Select, message, Space } from "antd";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./App.css";
import Logo2 from "./Images/Logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Crew from "./Images/crew.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footerlogo from "./Images/Footerlogo.png";

import {
  faCheck,
  faCircleCheck,
  faPlaneUp,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { useInView } from "react-intersection-observer"; // Import the hook for Intersection Observer
import icon1 from "./Images/icon1.png";
import icon2 from "./Images/icon2.png";
import icon3 from "./Images/icon3.png";
import Crew2 from "./Images/crew2.jpg";
import Crew3 from "./Images/crew3.jpg";
import Crew4 from "./Images/crew4.jpg";
import Crew5 from "./Images/crew5.jpeg";

export default function Home() {
  const [form] = Form.useForm(); // useForm hook for handling form operations
  const [formData, setFormData] = useState(null); // State to store submitted data
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [countryCode, setCountryCode] = useState("+971"); // Default country code

  const [hasViewed, setHasViewed] = useState(false); // Track if the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element is in view
    onChange: (inView) => {
      if (inView) setHasViewed(true); // Set to true when the element enters the viewport
    },
  });

  const [hasViewedSlide, setHasViewedSlide] = useState({
    myElement: false,
    secondElement: false,
    thirdElement: false,
    fourthElement: false,
    fifthElement: false,
    sixthElement: false,
    seventhElement: false,
  });

  const { ref: myRef1, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.myElement) {
        setHasViewedSlide((prev) => ({ ...prev, myElement: true }));
      }
    },
  });

  const { ref: myRef2, inView: secondElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.secondElement) {
        setHasViewedSlide((prev) => ({ ...prev, secondElement: true }));
      }
    },
  });

  const { ref: myRef3, inView: thirdElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.thirdElement) {
        setHasViewedSlide((prev) => ({ ...prev, thirdElement: true }));
      }
    },
  });

  const { ref: myRef4, inView: fourthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fourthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fourthElement: true }));
      }
    },
  });

  const { ref: myRef5, inView: fifthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fifthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fifthElement: true }));
      }
    },
  });
  const { ref: myRef6, inView: sixthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.sixthElement) {
        setHasViewedSlide((prev) => ({ ...prev, sixthElement: true }));
      }
    },
  });
  const { ref: myRef7, inView: seventhElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.seventhElement) {
        setHasViewedSlide((prev) => ({ ...prev, seventhElement: true }));
      }
    },
  });

  useEffect(() => {
    // Effect when the element enters the viewport
    if (inView) {
      setHasViewed(true); // Set animation to true
    }
  }, [inView]);

  // Handle form submission
  const handleSubmit = (values) => {
    // Log the values during the first submission, formData will be null initially
    console.log(values);
    setFormData(values); // Set form data after submission
    message.success("Form submitted successfully!");
    setPhoneNumber(""); // Reset phone number field
    form.resetFields(); // Reset all fields
  };

  // Handle phone number change
  // const handlePhoneNumberChange = (e) => {
  //   setPhoneNumber(e.target.value); // Update the phone number state
  // };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    // Remove any non-numeric characters
    const filteredValue = value.replace(/\D/g, ""); // Remove non-digit characters
    setPhoneNumber(filteredValue); // Update the phone number state with filtered value
  };

  const validatePhoneNumber = (_, value) => {
    const selectedCountry = countryCodes.find(
      (country) => country.code === countryCode
    );
    const expectedLength = selectedCountry ? selectedCountry.phoneLength : 10; // Default to 10 if no country selected
    const fullPhoneNumber = value;
    if (!value) {
      return Promise.reject(new Error(""));
    }
    // Validate phone number length based on the selected country
    if (fullPhoneNumber.length !== expectedLength) {
      return Promise.reject(
        new Error(
          `Please enter a valid phone number with ${expectedLength} digits!`
        )
      );
    }

    return Promise.resolve();
  };

  // Define country codes
  const countryCodes = [
    { code: "+971", label: "UAE (+971)", phoneLength: 7 },
    { code: "+1", label: "USA (+1)", phoneLength: 10 },
    { code: "+44", label: "UK (+44)", phoneLength: 10 },
    { code: "+91", label: "India (+91)", phoneLength: 10 },
    { code: "+61", label: "Australia (+61)", phoneLength: 9 },
    { code: "+81", label: "Japan (+81)", phoneLength: 10 },
    { code: "+33", label: "France (+33)", phoneLength: 10 },
  ];

  // Handle country code change
  const handleCountryChange = (value) => {
    setCountryCode(value); // Update the selected country code
  };
  const validateEmail = (_, value) => {
    if (!value) {
      return Promise.reject(new Error(""));
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Basic email regex
    if (!emailRegex.test(value)) {
      return Promise.reject(new Error("Please enter a valid email address!"));
    }
    return Promise.resolve();
  };

  const styl = `
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-form-item-label >label, 
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-24.ant-form-item-label >label, 
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-xl-24.ant-form-item-label >label {
    margin: 0;
    color: white;
  }
    .slick-dots {
    position: absolute;
    bottom: -25px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}
    .slick-prev, .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 40%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: white;
    border: none;
    outline: none;
    background: white;
}
    .slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: #1677ff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
    .slick-dots li button:before {
    font-family: 'slick';
    font-size: 15px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: .25;
    color: #0d278e;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
    .slick-dots li.slick-active button:before {
    opacity: .75;
    color: #1677ff;
}
`;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 4000,
    // initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          speed: 300,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          speed: 300,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
        },
      },
    ],
  };
  const aboutRef = useRef(null);
  const handleScrollToAbout = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <style>{styl}</style>
      <div className="container-fluid">
        <div className="container-fluid m-0 p-0">
          {/* Outer Row for columns */}
          <div className="row">
            <div
              className="col-12 dynamic-height"
              style={{
                position: "relative",
                height: "600px",
                // minHeight:"900px",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background color
              }}
            >
              {/* Pseudo-element for blurred background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${BackgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  filter: "blur(2px)", // Apply the blur effect to the background
                  zIndex: -1, // Keep the background behind the content
                }}
              ></div>

              {/* Inner Row for the columns */}
              <div className="row mt-5">
                {/* First Column with Animation */}
                <motion.div
                  className="col-12 col-lg-6 mt-5 m-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <h1
                    className="text-white"
                    style={{ fontSize: "60px", fontWeight: "700" }}
                  >
                    Become a <br />
                    Professional Airline Cabin Crew Member!
                  </h1>
                  <h2 className="text-white fw-light">
                    Join our comprehensive course to launch your aviation
                    career.
                  </h2>
                </motion.div>

                {/* Second Column with Animation */}
                <motion.div
                  className="col-12 col-lg-4 rounded-4 mt-3 m-auto mt-lg-1"
                  style={{ backgroundColor: "#0721a4" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                >
                  <h1 className="text-white mt-2 text-center mt-md-3 mt-lg-2">Enquire Now</h1>
                  <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    {/* First Name Field */}
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your first name" />
                    </Form.Item>

                    {/* Last Name Field */}
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your last name" />
                    </Form.Item>

                    {/* Email Field */}
                    <Form.Item
                      label="Email"
                      name="email"
                      className="form-item "
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                        { validator: validateEmail },
                      ]}
                    >
                      <Input placeholder="Enter your Email" />
                    </Form.Item>

                    {/* Phone Number Field with Country Code */}
                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                        { validator: validatePhoneNumber },
                      ]}
                    >
                      <Space.Compact style={{ width: "100%" }}>
                        <Select
                          defaultValue={countryCodes[0].code}
                          // style={{ width: "150px" }}
                          onChange={handleCountryChange}
                          style={{ width: "30%" }} // Adjust the width as needed
                        >
                          {countryCodes.map((country, index) => (
                            <Select.Option key={index} value={country.code}>
                              {country.label}
                            </Select.Option>
                          ))}
                        </Select>
                        <Input
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          // style={{
                          //   width: "calc(100% - 0px)",
                          // }}
                          style={{ width: "70%" }} // Adjust the width as needed
                          placeholder="Enter your phone number"
                          // maxLength={10}
                        />
                      </Space.Compact>
                    </Form.Item>

                    <Form.Item>
                      <div className="d-flex justify-content-end">
                        <Button
                          type="default"
                          htmlType="submit"
                          style={{
                            backgroundColor:
                              "#faad14" /* Ant Design warning color */,
                            color: "white",
                            borderColor: "#faad14",
                          }}
                          className="Submitbutton"
                        >
                          Submit
                        </Button>
                      </div>
                    </Form.Item>
                  </Form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Content When In View */}
        <div className="container mt-5" id="about">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <motion.div
                  ref={ref} // Ref to observe intersection
                  className="col-12 col-lg-6 "
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: hasViewed ? 1 : 0,
                    x: hasViewed ? 0 : -50,
                  }}
                  transition={{ duration: 1 }}
                >
                  {/* Logo with animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <img
                      src={Logo2}
                      alt="IATA Logo"
                      className="img-fluid w-25"
                    />
                  </motion.div>

                  {/* Course Description */}
                  <div className="course-text">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hasViewed ? 1 : 0 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="course-title fs-3 fw-bold"
                    >
                      <span>About the course</span>
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hasViewed ? 1 : 0 }}
                      transition={{ delay: 0.7, duration: 1 }}
                    >
                      The Airline Cabin Crew course at WingsWay Training
                      Institute helps aspiring aviation professionals meet
                      industry demands and offers a 360-degree learning
                      experience. This includes:
                    </motion.p>
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hasViewed ? 1 : 0 }}
                      transition={{ delay: 0.7, duration: 1 }}
                      className="course-list"
                      style={{ listStyleType: "none", paddingLeft: 0 }}
                    >
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2"
                        />
                        Theoretical knowledge in class with our expert trainers.
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2"
                        />
                        Live drills that prepare you to stay calm during flight
                        emergencies.
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2"
                        />
                        Grooming sessions to help you always look your best.
                      </motion.li>

                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2"
                        />
                        Aircraft visits to give you a glimpse into your future
                        life as an aviator.
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasViewed ? 1 : 0 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-primary me-2"
                        />
                        Guaranteed internship after course completion.
                      </motion.li>
                    </motion.ul>
                  </div>
                </motion.div>
                <div className="col-12 col-lg-6 ">
                  <img
                    src={Crew}
                    alt="Crew Image"
                    className="img-fluid rounded-3 mt-5 hover-scale"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5" id="key">
          <div
            className={`row  slide-in-left  ${
              hasViewedSlide.myElement ? "animate-slide-in" : ""
            }`}
            ref={myRef1}
          >
            {" "}
            <div className="col-12 ">
              <p className="text-center ">
                <span className="fs-3 fw-bold">Key </span>
                <span className="text-primary fs-3 fw-bold">Topics</span>
              </p>
            </div>
            <div className="col-12 d-flex justify-content-between flex-wrap ">
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-0 p-sm-1">
                <img
                  src={icon1}
                  alt="icon image1"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2">
                    Coordination and communication among crew members.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-0 p-sm-1">
                <img
                  src={icon2}
                  alt="icon image2"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2">
                    Customer service and handling passenger interactions.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-0 p-sm-1">
                <img
                  src={icon3}
                  alt="icon image3"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2">
                    Safety protocols and emergency procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5" id="course">
          <div
            className={`row shadow rounded-4 slide-in-left  ${
              hasViewedSlide.secondElement ? "animate-enquire" : ""
            }`}
            ref={myRef2}
          >
            {/* First Column - Image */}
            <div className="col-12 col-lg-6 hover-scale2 text-start mt-3 mb-3">
              <img
                src={Crew2}
                alt="Course Image"
                className="img-fluid rounded-3"
              />
            </div>

            {/* Second Column - Course Content */}
            <div className="col-12 col-lg-6  mt-3 mt-lg-0">
              <p className="text-center">
                <span className="fw-bold fs-3 ">Course </span>
                <span className="fw-bold fs-3 text-primary">Content</span>
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Introduction to the airline industry
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Air transport and flight operations
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Crew responsibilities and co-operation
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Managing abnormal and emergency situations
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Handling medical emergencies on-board
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Dangerous goods
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Aviation security
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Customer service and interaction with passengers
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Airline catering and on-board retail services
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Cabin crew professional development
                </li>
              </ul>
              <div className="text-center">
                <Button
                  className="mt-2 text-center text-white Contactbutton mb-2 mb-lg-0"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5" id="learner">
          {/* <div className="row "> */}
          <div
            className={`row shadow rounded-4 slide-in-left  ${
              hasViewedSlide.thirdElement ? "animate-slide-in" : ""
            }`}
            ref={myRef3}
          >
            <div className="col-12 col-lg-6 mt-3 mt-lg-0">
              <p className="text-center">
                <span className="fw-bold fs-3 ">Learner’s </span>
                <span className="fw-bold fs-3 text-primary">Profile</span>
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Aspiring cabin crew members
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Customer service professionals{" "}
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Hospitality industry professionals{" "}
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Individuals in the Travel and Tourism industry{" "}
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Medical assistants or Healthcare workers{" "}
                </li>

                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Aviation security
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Customer service and interaction with passengers
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Airline catering and on-board retail services
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Cabin crew professional development
                </li>
              </ul>
              <div className="text-center">
                <Button
                  className="mt-2 mb-2 text-center text-white Contactbutton"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
            <div className="col-12 col-lg-6 hover-scale2 mt-3 mb-3">
              <img
                src={Crew3}
                alt="Leaner Profile Image"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>

        <div className="container mt-5" id="entry">
          <div
            className={`row row shadow rounded-4 slide-in-left  ${
              hasViewedSlide.fourthElement ? "animate-enquire" : ""
            }`}
            ref={myRef4}
          >
            {/* First Column - Image */}
            <div className="col-12 col-lg-6 hover-scale2 mt-3 mb-3">
              <img
                src={Crew4}
                alt="Qualifications Image"
                className="img-fluid rounded-3"
              />
            </div>

            {/* Second Column - Course Content */}
            <div className="col-12 col-lg-6 mt-2">
              <p className="text-center">
                <span className="fw-bold fs-3 ">Entry </span>
                <span className="fw-bold fs-3 text-primary">
                  Qualifications
                </span>
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  This course is suitable for individuals with the following
                  qualifications:
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Grade 10 / O-level / Class 10
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  High school graduates
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Undergraduates
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Postgraduates
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2"
                  />
                  Working professionals
                </li>
              </ul>
              <div className="text-center">
                <Button
                  className="mt-2 text-center text-white Contactbutton mb-2"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 " id="career">
          {/* <div className="row "> */}
          <div
            className={`row shadow rounded-4 slide-in-left   ${
              hasViewedSlide.fifthElement ? "animate-slide-in" : ""
            }`}
            ref={myRef5}
          >
            <div className="col-12 col-lg-6 rounded-3 mt-lg-5">
              <p className="text-center mt-lg-3">
                <span className="fw-bold fs-3 ">Career </span>
                <span className="fw-bold fs-3 text-primary">Opportunities</span>
              </p>
              <ul
                style={{ listStyleType: "none", paddingLeft: 0 }}
                className="ms-lg-5"
              >
                <li className="ms-lg-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-5"
                  />
                  Cabin Crew Supervisor
                </li>
                <li className="ms-lg-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-5"
                  />
                  Senior Air Cabin Crew{" "}
                </li>
                <li className="ms-lg-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-5"
                  />
                  Airline Passenger Service Staff{" "}
                </li>
                <li className="ms-lg-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-5"
                  />
                  Ground Staff{" "}
                </li>
                <li className="ms-lg-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-5"
                  />
                  Other roles in the Hospitality sector{" "}
                </li>
              </ul>
              <div className="text-center">
                <Button
                  className="mt-2 mb-2 text-center text-white Contactbutton"
                  style={{ background: "#0d278e" }}
                  onClick={() => {
                    window.location.href = "#"; // Simulate href="#" behavior
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
            <div className="col-12 col-lg-6 hover-scale2 mt-3 mb-3 text-center">
              <img
                src={Crew5}
                alt="Career Image"
                className="img-fluid rounded-3 "
                style={{ width: "60%" }}
              />
            </div>
          </div>
        </div>

        {/* <div className="container mt-5 border border-white" id="Testimonials"> */}
        <div
          className={` container mt-5 border border-white  rounded-4 slide-in-left   ${
            hasViewedSlide.sixthElement ? "animate-enquire" : ""
          }`}
          ref={myRef6}
          id="Testimonials"
        >
          <div className="row border-primary ">
            <div className="col-12 text-center mb-4">
              <h2 className="fw-bold">Testimonials</h2>
            </div>
          </div>

          <Slider {...settings} className="m-0 p-0 col-12 ">
            <div>
              <div className=" p-3 shadow-sm border border-2 border-light rounded-3 ">
                <h3 className="text-start">Kasekende Peter</h3>
                <p className=" mt-3 ">
                  "I am Peter Kasekende from Uganda. I completed my cabin crew
                  course from WingsWay Training Institute and I thank all my
                  teachers who have been there for me. Thank you so much and my
                  coodinator, Mrs. Sheetal and also she was my trainer and I
                  also thank Ms. Tina for every thing you did to us. And I
                  encourage any one there who want to take course please come
                  and join WingsWay institute and you can find it to all social
                  media platform. THANK YOU WINGSWAY."
                </p>
              </div>
            </div>
            <div>
              <div className=" p-3 shadow-sm border border-light rounded-3 ms-md-2 ms-lg-2 ">
                <h4 className="text-start">Sidonie la Fleur</h4>
                <p>
                  "I had the best Educational experience from here and I can
                  boost that I now Have WINGS to fly higher 🥰🥰🥰 I love y’all
                  Mam Sheetal , Miss Tina and all the School Admins."
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3">
                <h4 className="text-start">Sushmita Bajracharya</h4>
                <p>
                  It was an amazing experience, m grateful to be your student.I
                  want to thank entire team of wingsways Training Institute for
                  the wonderful opportunities to learn and grow.Special thanks
                  to ma'am sheetal and ma'am Tina. Thank you
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-md-2 ms-lg-2">
                <h4 className="text-start">Dilan Jason</h4>
                <p>
                  Wingsway has given me a opportunity into something I love
                  which I'm extremely grateful. Mrs Tina's classes are very easy
                  to understand and really enjoyable, I highly recommend
                  wingsway to anyone who's looking for an upscale in their
                  professional life
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3">
                <h4 className="text-start">Amika Wongsuwas</h4>
                <p>
                  I did my cabin crew course with wingsway institute and it was
                  overall a great experience. My internship went really well as
                  well with the support of my instructor and the allocators
                  there I had the opportunity to go to fujarah aviation academy
                  as well where we had a tour of the academy and learnt the
                  steps on how we can become a pilot etc. it was a great
                  experience with the trainers and my friends.
                </p>
                <p>
                  Thank you wings way academy for supporting me and giving me🪽🪽
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-md-2 ms-lg-2">
                <h4 className="text-start ">Prashnaa Magar</h4>
                <p>
                  I had an amazing experience at wingsway training institute.
                  The instructors were highly knowledgeable and passionate about
                  their subjects, making learning both engaging and rewarding.
                  Ms.Tina was so sweet and supportive.The curriculum at wingsway
                  training institute is well-designed and comprehensive,
                  covering all the necessary topics and providing practical
                  skills.Overall, my time at wingsway training institute
                  exceeded my expectations, and I would highly recommend it to
                  anyone looking for a best Cabin Crew Courses, PGSA courses and
                  a supportive learning environment.
                </p>
              </div>
            </div>
          </Slider>
        </div>

        {/* <div
          className="container-fluid mt-5 border border-danger"
          style={{ backgroundColor: "#002994", color: "white" }}
        >
          <div className="row d-flex align-items-start ">
            <div className="col-12">
            <div className="col-12 col-md-2 col-lg-2 d-flex flex-column align-items-center border border-dark ms-lg-5">
              <img src={Footerlogo} alt="logo" className="img-fluid mt-3" />
            </div>
          </div>

             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span> About The <br /> Course </span>
             </div>  
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Key  <br /> Topics </span>
             </div>    
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Course  <br /> Content </span>
             </div>  
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Learner's  <br /> Profile </span>
             </div> 
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Entry <br /> Qualification </span>
             </div>  
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Career <br /> Opportunities </span>
             </div>    
             <div className="col-12 col-md-3 col-lg-1 mt-3 border border-dark text-center">
             <span>Testimonial </span>
             </div>    
          </div>
          
        </div> */}

        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <p className="text-end">
                <a
                  href="https://wa.me/+971509062236"
                  className="fixed-icon"
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice when using target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} bounce size="2x" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="container-fluid m-0 p-0"
          style={{ backgroundColor: "#002994", color: "white" }}
        >
          {/* <div className="text-center">
          <div
            className="row d-flex  mt-5 border border-danger"
            style={{ backgroundColor: "#002994", color: "white" }}
          >
            <div className="col-12 col-md-12 col-lg-2 d-flex flex-column align-items-center  ms-lg-5 ">
              <img src={Footerlogo} alt="logo" className="img-fluid mt-3 " />
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#about" className="footer-link">
                <span>
                  About The <br /> Course
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#key" className="footer-link">
                <span>
                  Key <br /> Topics{" "}
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#course" className="footer-link">
                <span>
                  Course <br /> Content{" "}
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#learner" className="footer-link">
                <span>
                  Learner's <br /> Profile{" "}
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#entry" className="footer-link">
                <span>
                  Entry <br /> Qualification{" "}
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#career" className="footer-link">
                <span>
                  Career <br /> Opportunities 
                </span>
              </a>
            </div>

            <div className="col-12 col-md-12  col-lg-1 mt-3  text-start mt-lg-5">
              <a href="#Testimonials" className="footer-link">
                <span>Testimonial </span>
              </a>
            </div>
          </div>
          </div> */}
          <div
            className="text-center"
            style={{ backgroundColor: "#002994", color: "white" }}
          >
            <div
              className="row d-flex justify-content-center align-items-center mt-5"
              style={{ backgroundColor: "#002994", color: "white" }}
            >
              <div className="col-12 col-md-12 col-lg-2 d-flex flex-column align-items-center ms-lg-5">
                <img
                  src={Footerlogo}
                  alt="logo"
                  className="img-fluid mt-3 responsive-logofooter"
                />
              </div>

              <div className="col-12 col-md-12 col-lg-1 text-center  mt-lg-4 text-lg-justify">
                <a href="#about" className="footer-link">
                  <span>
                    About The <br /> Course
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-4 text-lg-justify" >
                <a href="#key" className="footer-link">
                  <span>
                    Key <br /> Topics
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-4 text-lg-justify">
                <a href="#course" className="footer-link">
                  <span>
                    Course <br /> Content
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-4 text-lg-justify">
                <a href="#learner" className="footer-link">
                  <span>
                    Learner's <br /> Profile
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-4 text-lg-justify">
                <a href="#entry" className="footer-link">
                  <span>
                    Entry <br /> Qualification
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-4 text-lg-justify">
                <a href="#career" className="footer-link">
                  <span>
                    Career <br /> Opportunities
                  </span>
                </a>
              </div>

              <div className="col-12 col-md-12 col-lg-1 mt-3 mt-md-3 text-center mt-lg-1 text-lg-justify">
                <a href="#Testimonials" className="footer-link">
                  <span>Testimonial</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="row pb-lg-3 "
            style={{ backgroundColor: "#002994", color: "white" }}
          >
            <div className="col-12  text-center pb-lg-2 mt-3 mb-3 mt-md-3">
              <p>© 2023 WingsWay All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
