import React, { useState, useRef, useEffect } from "react";
import BackgroundImage from "./Images/Backgroundimage1.jpg";
import { Button, Form, Input, Select, message } from "antd";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./App.css";
import Logo2 from "./Images/Logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Crew from "./Images/crew.jpg";
import { faCheck, faCircleCheck, faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer"; // Import the hook for Intersection Observer
import icon1 from "./Images/icon1.png";
import icon2 from "./Images/icon2.png";
import icon3 from "./Images/icon3.png";
import Crew2 from "./Images/crew2.jpg";

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
  });

  const { ref: myRef2, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.myElement) {
        setHasViewedSlide((prev) => ({ ...prev, myElement: true }));
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
    setFormData(values);
    message.success("Form submitted successfully!");
  };

  // Handle phone number change
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value); // Update the phone number state
  };

  // Validate phone number
  const validatePhoneNumber = (_, value) => {
    const fullPhoneNumber = countryCode + value;

    if (!value) {
      return Promise.reject(new Error("Please input your phone number!"));
    }

    if (fullPhoneNumber.length !== 13) {
      // 13 includes country code + 10 digits
      return Promise.reject(
        new Error("Please enter a valid phone number with 10 digits!")
      );
    }

    return Promise.resolve();
  };

  // Define country codes
  const countryCodes = [
    { code: "+971", label: "UAE (+971)" },
    { code: "+1", label: "USA (+1)" },
    { code: "+44", label: "UK (+44)" },
    { code: "+91", label: "India (+91)" },
    { code: "+61", label: "Australia (+61)" },
    { code: "+81", label: "Japan (+81)" },
    { code: "+33", label: "France (+33)" },
  ];

  // Handle country code change
  const handleCountryChange = (value) => {
    setCountryCode(value); // Update the selected country code
  };

  // Style to modify labels
  // const styl = `
  //   :where(.css-dev-only-do-not-override-77tu7h).ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-form-item-label >label, 
  //   :where(.css-dev-only-do-not-override-77tu7h).ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-24.ant-form-item-label >label, 
  //   :where(.css-dev-only-do-not-override-77tu7h).ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-xl-24.ant-form-item-label >label {
  //     margin: 0;
  //     color: white;
  //   }
  // `;

  const styl = `
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-form-item-label >label, 
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-24.ant-form-item-label >label, 
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-xl-24.ant-form-item-label >label {
    margin: 0;
    color: white;
  }
`;

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
                </motion.div>

                {/* Second Column with Animation */}
                <motion.div
                  className="col-12 col-lg-4  rounded-4 mt-1 m-auto"
                  style={{ backgroundColor: "#0721a4" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                >
                  <h1 className="text-white mt-2 text-center">Enquire Now</h1>
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
                      ]}
                      labelStyle={{ color: "white" }} // Apply white color to label
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
                        // { validator: validatePhoneNumber },
                      ]}
                    >
                      <Input.Group compact>
                        <Select
                          defaultValue={countryCodes[0].code}
                          style={{ width: "150px" }}
                          onChange={handleCountryChange}
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
                          style={{
                            width: "calc(100% - 150px)",
                          }}
                          placeholder="Enter your phone number"
                          maxLength={10}
                        />
                      </Input.Group>
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
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <motion.div
                  ref={ref} // Ref to observe intersection
                  className="col-12 col-lg-6"
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

        <div className="container mt-5">
          <div
            className={`row  slide-in-left  ${
              hasViewedSlide.myElement ? "animate-slide-in" : ""
            }`}
            ref={myRef2}
          >
            {" "}
            <div className="col-12 ">
              <p className="text-center">
                <span className="fs-3 fw-bold">Key </span>
                <span className="text-primary fs-3 fw-bold">Topics</span>
              </p>
            </div>
            <div className="col-12 d-flex justify-content-between flex-wrap">
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-0">
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
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-0">
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
              <div className="col-12 col-lg-3 card border border-light shadow-lg hover-scale2 mt-2 mt-lg-0">
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

        <div className="container mt-5">
          <div className="row hover-scale2">
            {/* First Column - Image */}
            <div className="col-12 col-lg-6">
              <img
                src={Crew2}
                alt="CrewImage2"
                className="img-fluid rounded-3"
              />
            </div>

            {/* Second Column - Course Content */}
            <div className="col-12 col-lg-6 ">
              <p className="text-center">
                <span className="fw-bold fs-3 ">Course </span>
                <span className="fw-bold fs-3 text-primary">Content</span>
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li>      <FontAwesomeIcon
                          icon={faCircleCheck} 
                          className="text-primary me-2"
                        />Introduction to the airline industry</li>
                <li>  <FontAwesomeIcon
                          icon={faCircleCheck} 
                          className="text-primary me-2"
                        />Air transport and flight operations</li>
                <li>   <FontAwesomeIcon
                          icon={faCircleCheck} 
                          className="text-primary me-2"
                        />Crew responsibilities and co-operation</li>
                <li>   <FontAwesomeIcon
                          icon={faCircleCheck} 
                          className="text-primary me-2"
                        />Managing abnormal and emergency situations</li>
                <li>  <FontAwesomeIcon
                          icon={faCircleCheck} 
                          className="text-primary me-2"
                        />Handling medical emergencies on-board</li>
                <li>  <FontAwesomeIcon
                          icon={faCircleCheck} 
                          className="text-primary me-2"
                        />Dangerous goods</li>
                <li>  <FontAwesomeIcon
                          icon={faCircleCheck} 
                          className="text-primary me-2"
                        />Aviation security</li>
                <li>  <FontAwesomeIcon
                          icon={faCircleCheck} 
                          className="text-primary me-2"
                        />Customer service and interaction with passengers</li>
                <li>  <FontAwesomeIcon
                          icon={faCircleCheck} 
                          className="text-primary me-2"
                        />Airline catering and on-board retail services</li>
                <li>  <FontAwesomeIcon
                          icon={faCircleCheck} 
                          className="text-primary me-2"
                        />Cabin crew professional development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
