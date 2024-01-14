import React, { useState } from "react";
import { Layout, Typography, Button, Row, Col } from "antd";
import Form from "./Form";
import {
  ArrowRightOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
  };
  const calculateFontSize = () => {
    const screenWidth = window.innerWidth;

    // Define breakpoints and corresponding font sizes
    const breakpoints = [576, 768];
    const fontSizes = [64, 80, 100]; // Adjust font sizes as needed

    // Find the appropriate font size based on the screen width
    for (let i = 0; i < breakpoints.length; i++) {
      if (screenWidth <= breakpoints[i]) {
        return fontSizes[i];
      }
    }

    // Default font size for larger screens
    return fontSizes[fontSizes.length - 1];
  };

  // Get the calculated font size
  const fontSize = calculateFontSize();

  return (
    <Layout>
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center the content horizontally
            alignItems: "center", // Center the content vertically
          }}
        >
          <div
            style={{
              backgroundColor: "#f0f2f5",
              padding: "1rem 6%",
              textAlign: "center",
            }}
          >
            <Typography.Title
              level={1}
              style={{
                fontWeight: "bold",
                fontSize: `${fontSize}px`, // Set the calculated font size
                marginTop: "20px",
              }}
            >
              Medi<span style={{ color: "blue" }}>Connect</span>
            </Typography.Title>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg"
    alt="Female Wrestler 1"
    style={{
      width: "52%", // Adjust the width of the first image as needed
      height: "220px", // Set the desired height for the first image
      marginRight: "-15%", // Adjust the negative margin to control the overlap
      borderRadius: "50%", // Make the image circular by setting border-radius to 50%
    }}
  />
  <img
    src="https://freesvg.org/img/womwrestlercolor.png"
    alt="Wrestler 2"
    style={{
      width: "52%", // Adjust the width of the second image as needed
      height: "220px", // Set the desired height for the second image
      marginLeft: "-25%", // Adjust the negative margin to control the overlap
    }}
  />
</div>

            <p style={{ color: "red", display: window.innerWidth <= 768 ? "block" : "none" }}>
  MediConnect is currently not compatible with mobile screens
</p>
          </div>
        </div>
        {!showLoginForm ? (
         <div>
  <div
    style={{
      width: "50%",
      margin: "2rem auto",
      padding: "2rem",
      borderRadius: "1.5rem",
      backgroundColor: "#f0f2f5",
      textAlign: "center",
    }}
  >
    <Typography.Title
      level={5}
      style={{
        fontWeight: "500",
        marginTop: "-10px",
        marginBottom: "1.5rem",
        fontSize: "20px",
      }}
    >
MediConnect: Bridging Healthcare, Uniting Wellness.    </Typography.Title>
    <button
      icon={<ArrowRightOutlined />}
      onClick={handleShowLoginForm}
      style={{
        fontSize: "30px",
        padding: "10px 20px",
        marginBottom: "5rem",
      }}
      className="button-85"
    >
      Begin
    </button>
  </div>
  <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
    <Row gutter={[16, 16]}>
      {/* First Row */}
      <Col xs={24} sm={24} md={12}>
        <div className="feature-image"></div>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <div className="feature-content" style={{ fontSize: "16px" }}>
        <h3 style={{ fontSize: "24px", color: 'blue' }}>Empower Personalized Healthcare Insights</h3>
<p>
    Unlock a new level of healthcare management with MediConnect. Tailor your statistical data to match your unique needs and preferences. Whether it's patient records, vital signs, or treatment outcomes, MediConnect puts you in control. Our user-friendly interface ensures that your healthcare insights are presented in a clear and accessible format, empowering you with the information you need for informed decision-making.
</p>

        </div>
      </Col>

      {/* Second Row */}
      <Col xs={24} sm={24} md={12}>
        <div className="feature-content" style={{ fontSize: "16px" }}>
          <h3 style={{ fontSize: "24px", color: 'blue' }}>Streamlined Collaboration for Enhanced Patient Care</h3>
          <p>
    MediConnect goes beyond individual records, fostering seamless collaboration among healthcare professionals. Share vital patient information securely, streamline communication, and enhance overall patient care. Our platform is designed to break down silos, creating a unified and collaborative environment where every healthcare team member can contribute to the well-being of patients effectively.
</p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <div className="feature-image"></div>
      </Col>

      {/* Third Row */}
      <Col xs={24} sm={24} md={12}>
        <div className="feature-image"></div>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <div className="feature-content" style={{ fontSize: "16px" }}>
          <h3 style={{ fontSize: "24px", color: 'blue' }}>Effortless Administrative Management</h3>
          <p>
    At MediConnect, we prioritize accessibility. Empower your patients by giving them secure access to their health records and treatment plans. Our user-friendly patient portal fosters engagement, allowing individuals to actively participate in their healthcare journey. By providing transparent and accessible information, we aim to strengthen the patient-provider relationship for improved overall well-being.
</p>
        </div>
      </Col>
      {/* Third Row */}
    
      <Col xs={24} sm={24} md={12}>
  <div className="feature-content" style={{ fontSize: "16px" }}>
    <h3 style={{ fontSize: "24px", color: 'blue' }}>Enhanced Accessibility for Better Patient Engagement</h3>
    <p>
    At MediConnect, we prioritize accessibility. Empower your patients by giving them secure access to their health records and treatment plans. Our user-friendly patient portal fosters engagement, allowing individuals to actively participate in their healthcare journey. By providing transparent and accessible information, we aim to strengthen the patient-provider relationship for improved overall well-being.
</p>
  </div>
</Col>
  <Col xs={24} sm={24} md={12}>
        <div className="feature-image"></div>
      </Col>
    </Row>
  </div>
</div>

        ) : (
          <div
            style={{
              width: "50%",
              margin: "2rem auto",
              padding: "2rem",
              borderRadius: "1.5rem",
              backgroundColor: "#f0f2f5",
            }}
          >
            <Typography.Title
              level={5}
              style={{ fontWeight: "500", marginBottom: "1.5rem" }}
            >
              Login to a MediConnect save
            </Typography.Title>
            <Form />
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default LoginPage;
