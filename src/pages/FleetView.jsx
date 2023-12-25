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

const FleetView = () => {
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
                  padding: "185px 0px",
                  borderRadius: "30px",
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
                <PickUpForm btnText="Change" boxShadow="none"/>
              </div>
              <div className="car-product">
                <div className="row">
                  {/* Use map() to render each car product as a card */}
                  {carProducts.map((product) => (
                    <div className="col-md-6 mb-4" key={product.id}>
                      <div className="card">
                        <div className="card-body">
                          <div className="car-name-data">
                            <div className="row">
                              <div className="small-tags">
                                <span className="tag-btn">small</span>
                              </div>
                              <div className="col-md-6">
                                <div className="car-data">
                                  <h6>Toyota Aygo</h6>
                                  <p>
                                    or similar group B car{" "}
                                    <span>
                                      <img src={question} alt="" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="car-price">
                                  <p className="price">
                                    € 24. <span className="font-small">23</span>
                                  </p>
                                  <p className="total-text">Total rental</p>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="image-product">
                                  <img src={product.imageUrl} alt="" />
                                </div>
                              </div>
                            </div>
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
                              <button className="choose-btn">Choose</button>
                              <button onClick={toggleModal}>Details</button>
                            </div>
                            {isModalVisible && (
                              <FullView onClose={toggleModal} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="faqs-section">
                <div className="faqs-heading">
                  <h3>FAQ</h3>
                </div>
                <UncontrolledAccordion defaultOpen="1">
                  <AccordionItem>
                    <AccordionHeader targetId="1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod?
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod?
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod?
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod?
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod?
                    </AccordionHeader>
                    <AccordionBody accordionId="5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod?
                    </AccordionHeader>
                    <AccordionBody accordionId="6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </AccordionBody>
                  </AccordionItem>
                </UncontrolledAccordion>
              </div>
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
