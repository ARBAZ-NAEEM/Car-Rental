import React, { useState } from "react";
import Header from "../components/Header";
import {
  Button,
  Col,
  Container,
  Input,
  Label,
  Row,
  UncontrolledAccordion,
} from "reactstrap";
import PageTitle from "../components/PageTitle";
import bgImg from "../assets/img/hero_01.png";
import usericon from "../assets/img/user-icon.png";
import bagicon from "../assets/img/bag-icon.png";
import dooricon from "../assets/img/door-icon.png";
import manulicon from "../assets/img/manul-icon.png";
import petrolicon from "../assets/img/petrol-icon.png";
import question from "../assets/img/question.png";
import product_one from "../assets/img/product-1.png";
import product_two from "../assets/img/product-2.png";
import product_three from "../assets/img/product-3.png";
import product_four from "../assets/img/product-4.png";
import product_five from "../assets/img/product-5.png";
import product_six from "../assets/img/product-6.png";
import circlesupport from "../assets/img/Feature Icon with circle.png";
import emailicon from "../assets/img/email 1.png";
import phoneicon from "../assets/img/viber 1.png";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import PickUpForm from "../components/Home/PickUpForm";
import Footer from "../components/Footer";
import FullView from "../components/Fleet/FullView";
import Faq from "../components/Fleet/Faq";
import FormGroupSelect from "../components/GeneralComponents/FormGroupSelect";
import FormGroupInput from "../components/GeneralComponents/FormGroupInput";

const FleetView = () => {
  const formPanel = {
    pickUpLocation: 0,
    pickUpDate: "",
    dropOffDate: "",
    // carType: 0,
  };
  const [fields, setFields] = useState(formPanel);
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const [carType, setCarType] = useState([]);
  const [seats, setSeats] = useState([]);
  const [transmission, setTransmission] = useState([]);
  const [bags, setBags] = useState([]);
  const [engine, setEngine] = useState([]);
  const [doors, setDoors] = useState([]);

  // Function to handle checkbox changes for car type
  const handleCarTypeChange = (e) => {
    const value = e.target.value;
    if (carType.includes(value)) {
      setCarType(carType.filter((type) => type !== value));
    } else {
      setCarType([...carType, value]);
    }
  };

  const carProducts = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      imageUrl: product_one,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      imageUrl: product_two,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      imageUrl: product_three,
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of Product 4",
      imageUrl: product_four,
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description of Product 5",
      imageUrl: product_five,
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description of Product 6",
      imageUrl: product_six,
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="page-fleetview">
      <Header />
      <div className="discover-feet">
        <Container fluid>
          <Row>
            <Col lg="3" md="3">
              <div className="filter-section">
                <div className="card">
                  <div className="card-body">
                    <div className="filter-heading">
                      <p>
                        <b>Filters </b>
                        <span>
                          <a href="">Clear Filters</a>
                        </span>
                      </p>
                    </div>
                    <hr />
                    <div className="checkbox-box">
                      <p>
                        <b>Car Type</b>
                      </p>
                      <label>
                        <input
                          type="checkbox"
                          value="Economy"
                          checked={carType.includes("Economy")}
                          onChange={handleCarTypeChange}
                        />
                        <span>Economy</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Compact"
                          checked={carType.includes("Compact")}
                          onChange={handleCarTypeChange}
                        />
                        <span>Compact</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Midsize"
                          checked={carType.includes("Midsize")}
                          onChange={handleCarTypeChange}
                        />
                        <span>Midsize</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Full Size"
                          checked={carType.includes("Full Size")}
                          onChange={handleCarTypeChange}
                        />
                        <span>Full Size</span>
                      </label>
                      <hr />
                      <p>
                        <b>Seats</b>
                      </p>
                      <label>
                        <input
                          type="checkbox"
                          value="2-5 Seats"
                          checked={carType.includes("2-5 Seats")}
                          onChange={handleCarTypeChange}
                        />
                        <span>2-5 Seats</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="6+ Seats"
                          checked={carType.includes("6+ Seats")}
                          onChange={handleCarTypeChange}
                        />
                        <span>6+ Seats</span>
                      </label>
                      <hr />
                      <p>
                        <b>Automatic or Manual</b>
                      </p>
                      <label>
                        <input
                          type="checkbox"
                          value="Automatic"
                          checked={carType.includes("Automatic")}
                          onChange={handleCarTypeChange}
                        />
                        <span>Automatic</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Manual"
                          checked={carType.includes("Manual")}
                          onChange={handleCarTypeChange}
                        />
                        <span>Manual</span>
                      </label>
                      <hr />
                      <p>
                        <b>Bags</b>
                      </p>
                      <label>
                        <input
                          type="checkbox"
                          value="1-2 Bags"
                          checked={carType.includes("1-2 Bags")}
                          onChange={handleCarTypeChange}
                        />
                        <span>1-2 Bags</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="3+ Bags"
                          checked={carType.includes("3+ Bags")}
                          onChange={handleCarTypeChange}
                        />
                        <span>3+ Bags</span>
                      </label>
                      <p>
                        <b>Engine</b>
                      </p>
                      <label>
                        <input
                          type="checkbox"
                          value="Petrol"
                          checked={carType.includes("Petrol")}
                          onChange={handleCarTypeChange}
                        />
                        <span>Petrol</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Diesel"
                          checked={carType.includes("Diesel")}
                          onChange={handleCarTypeChange}
                        />
                        <span>Diesel</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Gasoline"
                          checked={carType.includes("Gasoline")}
                          onChange={handleCarTypeChange}
                        />
                        <span>Gasoline</span>
                      </label>
                      <hr />
                      <p>
                        <b>Doors</b>
                      </p>
                      <label>
                        <input
                          type="checkbox"
                          value="4 Doors"
                          checked={carType.includes("4 Doors")}
                          onChange={handleCarTypeChange}
                        />
                        <span>4 Doors</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="4+ Doors"
                          checked={carType.includes("4+ Doors")}
                          onChange={handleCarTypeChange}
                        />
                        <span>4+ Doors</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="9" md="9">
              <div
                className="title-bar text-center text-light"
                style={{
                  backgroundImage: `url(${bgImg})`,
                  backgroundSize: "cover",
                  padding: "235px 0px",
                  borderRadius: "30px",
                  backgroundPosition: "center",
                }}
              >
                <Container>
                  <h4 className="mb-0" style={{ textTransform: "uppercase" }}>
                    BOOK ANY LUXURY CAR IN LOW PRICE
                  </h4>

                  <h1 className="mb-0">
                    <span>Discover our Fleet</span>
                  </h1>
                </Container>
              </div>
              <div className="form-section-fleetview">
                <div className="section-form">
                  <Container>
                    <div
                      className="form-section"
                      // style={{ boxShadow: boxShadow }}
                    >
                      <Row style={{ alignItems: "flex-end" }}>
                        <Col lg="3" md="6" className="mb-3">
                          <FormGroupSelect
                            label="Pick-up Location"
                            onChange={handleChange}
                            name="pickUpLocation"
                            value={fields?.pickUpLocation}
                            defaultName="Select Location"
                          />
                        </Col>
                        <Col lg="2" md="6" className="mb-3">
                          <FormGroupInput
                            label="Pick-up Date"
                            onChange={handleChange}
                            name="pickUpDate"
                            value={fields?.pickUpDate}
                            placeholder="d-m-Y"
                            type="date"
                          />
                        </Col>
                        <Col lg="2" md="6" className="mb-3">
                          <FormGroupInput
                            label="Drop-off Date"
                            onChange={handleChange}
                            name="dropOffDate"
                            value={fields?.dropOffDate}
                            placeholder="d-m-Y"
                            type="date"
                          />
                        </Col>
                        <Col lg="3" md="6" className="mb-3">
                          <FormGroupSelect
                            label="Car Type"
                            onChange={handleChange}
                            name="pickUpLocation"
                            value={fields?.pickUpLocation}
                            defaultName="Car Type"
                          />
                        </Col>
                        <Col lg="2" md="6" className="mb-3">
                          <Button className="btn-formPanel" color="primary">
                            Change
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
              </div>
              <div className="car-product">
                <div className="row">
                  {/* Use map() to render each car product as a card */}
                  {carProducts.map((product) => (
                    <Col
                      lg="6"
                      md="6"
                      xs="12"
                      className="mb-4"
                      key={product.id}
                    >
                      <div className="card">
                        <div className="card-body">
                          <div className="car-name-data">
                            <div className="row">
                              <div className="small-tags">
                                <span className="tag-btn">small</span>
                              </div>
                              <Col lg="6" md="6" xs="6">
                                <div className="car-data">
                                  <h6>Toyota Aygo</h6>
                                  <p>
                                    or similar group B car{" "}
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                      >
                                        <path
                                          d="M6.56454 0C6.85644 0 7.14744 0 7.43933 0C7.47425 0.00805848 7.50917 0.0196985 7.54499 0.0223847C7.99179 0.0528278 8.43411 0.118191 8.86031 0.250708C11.6217 1.11207 13.3077 2.95657 13.8942 5.79315C13.9461 6.04565 13.9667 6.30531 14.0016 6.56229C14.0016 6.85418 14.0016 7.14518 14.0016 7.43708C13.9757 7.63496 13.9533 7.83373 13.9228 8.03072C13.69 9.57795 13.0248 10.9139 11.8984 11.9937C10.1882 13.6332 8.14221 14.2707 5.80257 13.8883C4.08343 13.6072 2.66424 12.7655 1.57545 11.4126C0.171483 9.66928 -0.283373 7.67615 0.167901 5.48603C0.727518 2.76853 3.04657 0.55514 5.78197 0.108342C6.04164 0.0662586 6.30309 0.0358155 6.56454 0ZM7.00149 0.979553C3.67692 0.979553 0.97733 3.68004 0.980912 7.00282C0.984493 10.3238 3.67065 13.0118 6.99433 13.0198C10.3144 13.0279 13.0176 10.3292 13.0212 7.00282C13.0256 3.68004 10.327 0.979553 7.00149 0.979553Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M6.83332 3.48657C7.28907 3.48836 7.65797 3.54925 8.00627 3.71669C8.82466 4.10887 9.10312 4.9559 8.67602 5.75906C8.48351 6.1199 8.20415 6.40374 7.88987 6.65713C7.80839 6.72339 7.72781 6.78965 7.6517 6.86128C7.44845 7.0511 7.34548 7.28749 7.33384 7.56416C7.33026 7.64564 7.33115 7.72802 7.32936 7.81039C7.32488 8.03693 7.22729 8.1578 7.00702 8.20078C6.90405 8.22048 6.80019 8.23033 6.69453 8.21779C6.42233 8.18735 6.3122 8.07364 6.28892 7.79696C6.22893 7.08334 6.45725 6.50044 7.05358 6.07692C7.18699 5.98201 7.31056 5.87278 7.42964 5.76085C7.56127 5.63819 7.65797 5.49045 7.69916 5.31047C7.76183 5.0338 7.65259 4.78399 7.40815 4.65147C6.94076 4.39808 6.35249 4.53507 6.05075 4.96754C5.85108 5.25406 5.66573 5.31674 5.39443 5.18781C5.14641 5.07051 5.04075 4.81264 5.13208 4.51627C5.2637 4.08648 5.57978 3.83309 5.97554 3.66207C6.27191 3.53224 6.58529 3.48747 6.83332 3.48657Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M7.50134 9.57197C7.49865 9.95714 7.17887 10.2769 6.79639 10.2778C6.40942 10.2787 6.09322 9.95087 6.0977 9.55495C6.10218 9.1662 6.42017 8.85358 6.80714 8.85895C7.19141 8.86343 7.50403 9.18411 7.50134 9.57197Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </p>
                                </div>
                              </Col>
                              <Col lg="6" md="6" xs="6">
                                <div className="car-price">
                                  <p className="price">
                                    € 24. <span className="font-small">23</span>
                                  </p>
                                  <p className="total-text">Total rental</p>
                                </div>
                              </Col>
                            </div>
                            <Row>
                              <Col md="12" lg="12">
                                <div className="image-product">
                                  <img src={product.imageUrl} alt="" />
                                </div>
                              </Col>
                            </Row>
                            <div className="car-specification">
                              <ul>
                                <li>
                                  <img src={usericon} alt="" />5 Seats
                                </li>
                                <li>
                                  <img src={bagicon} alt="" />2 Bags
                                </li>
                                <li>
                                  <img src={dooricon} alt="" />5 Doors
                                </li>
                                <li>
                                  <img src={manulicon} alt="" />
                                  Manual
                                </li>
                                <li>
                                  <img src={petrolicon} alt="" />
                                  Petrol
                                </li>
                              </ul>
                            </div>
                            <div className="car-select-btn">
                              <a href="/checkout">
                                <button className="choose-btn">Choose</button>
                              </a>

                              <button onClick={toggleModal}>Details</button>
                            </div>
                            {isModalVisible && (
                              <FullView onClose={toggleModal} />
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </div>
              </div>
              <Faq />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact-form-bg">
        <Container fluid>
          <Row className="contact-section">
            <Col lg="4" md="4">
              <div className="right-section">
                <div className="image-icon">
                  <img src={circlesupport} alt="" />
                  <h3>LONG TERM LEASE </h3>
                </div>
                <Row className="support-sec mt-5">
                  <Col md="2" lg="2">
                    <div className="support-image">
                      <img src={emailicon} alt="" />
                    </div>
                  </Col>
                  <Col md="8" lg="8">
                    <div className="support-text">
                      <p className="color-changetxt"> Send us a message </p>
                      <p className="simple-txt">Support@blocship.com</p>
                    </div>
                  </Col>
                </Row>
                <Row className="support-sec mt-3">
                  <Col md="2" lg="2">
                    <div className="support-image">
                      <img src={phoneicon} alt="" />
                    </div>
                  </Col>
                  <Col md="8" lg="8">
                    <div className="support-text">
                      <p className="color-changetxt"> Setup a call </p>
                      <p className="simple-txt">+1 555 555 5</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg="8" md="8">
              <div className="contact-choice-section ">
                <Row>
                  <Col lg="6" md="6" xs="12">
                    <div className="form-group">
                      <Label>Full Name</Label>
                      <Input placeholder="Enter Your Name" />
                    </div>
                  </Col>
                  <Col lg="6" md="6" xs="12">
                    <div className="form-group">
                      <Label>Email Address</Label>
                      <Input placeholder="Enter Your Email" />
                    </div>
                  </Col>
                  <Col lg="6" md="6" xs="12" className="mt-3">
                    <div className="form-group">
                      <Label>Company Name</Label>
                      <Input placeholder="Enter Your Company" />
                    </div>
                  </Col>
                  <Col lg="6" md="6" xs="12" className="mt-3">
                    <div className="form-group">
                      <Label>Services</Label>
                      <Input placeholder="Specify your budget" />
                    </div>
                  </Col>
                  <Col lg="12" md="12" xs="12" className="mt-3">
                    <div className="form-group">
                      <Label>Enter Your Message</Label>
                      <Input
                        type="textarea"
                        rows={4}
                        cols={40}
                        placeholder="Enter your Messgae"
                      />
                    </div>
                  </Col>

                  <Col lg="12" className="mt-3">
                    <Button className="btn-contact-info" color="primary">
                      Send Message To Us
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default FleetView;
