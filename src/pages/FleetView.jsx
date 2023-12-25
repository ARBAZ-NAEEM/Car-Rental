import React, { useState } from "react";
import Header from "../components/Header";
import { Col, Container, Row } from "reactstrap";
import PageTitle from "../components/PageTitle";
import bgImg from "../assets/img/hero_01.png";
import usericon from "../assets/img/user-icon.png";
import bagicon from "../assets/img/bag-icon.png";
import dooricon from "../assets/img/door-icon.png";
import manulicon from "../assets/img/manul-icon.png";
import petrolicon from "../assets/img/petrol-icon.png";

import PickUpForm from "../components/Home/PickUpForm";

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
    { id: 1, name: "Product 1", description: "Description of Product 1" },
    { id: 2, name: "Product 2", description: "Description of Product 2" },
    { id: 3, name: "Product 3", description: "Description of Product 3" },
    { id: 4, name: "Product 4", description: "Description of Product 4" },
    { id: 5, name: "Product 5", description: "Description of Product 5" },
    { id: 6, name: "Product 6", description: "Description of Product 6" },
    { id: 7, name: "Product 7", description: "Description of Product 7" },
  ];

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
                <PickUpForm />
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
                                <p className="tag-btn">small</p>
                              </div>
                              <div className="col-md-6">
                                <div className="car-data">
                                  <h6>Toyota Aygo</h6>
                                  <p>or similar group B car</p>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="car-price">
                                  <p className="price">$ 24.63</p>
                                  <p>Total rental</p>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <img src="" alt="" />
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
                              <button>Choose</button>
                              <button>Details</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FleetView;
