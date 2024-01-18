import React from "react";
import { Col, Container, Row } from "reactstrap";
import successpaymentIcon from "../assets/img/successpayment.gif";

const SuccessPayment = () => {
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
              <img
                src={successpaymentIcon}
                alt="Success"
                style={styles.image}
              />
              <h1
                className="payment-text"
                style={{ textAlign: "center", fontSize: "26px !important" }}
              >
                Payment Successful!
              </h1>
              <p style={styles.text}>
                Thank you for your payment. Your transaction was successful.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SuccessPayment;
