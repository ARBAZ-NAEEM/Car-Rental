import React from "react";
import { Col, Container, Row } from "reactstrap";
import failpayment from "../assets/img/failpayment.gif";

const FailPayment = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      //   backgroundColor: "#f4f4f4",
    },
    image: {
      borderRadius: "50%",
      marginBottom: "20px",
    },
    heading: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "10px",
    },
    text: {
      fontSize: "16px",
      color: "#666",
      textAlign: "center",
    },
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div style={styles.container}>
              <img src={failpayment} alt="failpayment" style={styles.image} />
              <h1
                className="payment-text"
                style={{ textAlign: "center", fontSize: "26px !important" }}
              >
                Payment Fail!
              </h1>
              <p style={styles.text}>Your transaction Fail.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FailPayment;
