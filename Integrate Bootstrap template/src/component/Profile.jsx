import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

function Profile() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className="Content" style={{ textAlign: "justify",}}>
              <h2 style={{fontWeight: "bold", fontStyle:"italic"}}>Hello, Hi,I'm Deepak Maurya</h2>
              <h3>Full stack Developer</h3>
              <p>
                A freelancer Web developer from india. I am <br />
                design web to bootstrap templates.
                <br />
                <br />i make Insta reeels and youtube and facebook video.
              </p>

              <div className="btn">
                <button style={{ backgroundColor: "teal", color: "black" }}>
                  I'm available
                </button>
              </div>
            </div>

            <div class="Footer-icons" style={{marginTop:"20px"}}>
              <a href="https://www.facebook.com/">
                <FaFacebookSquare style={{color:"teal", marginRight:"15px",  fontSize:"25px"}}/>
              </a>
              <a href="https://x.com/i/flow/login">
                <FaTwitter style={{color:"teal", marginRight:"15px", fontSize:"25px"}}/>
              </a>
              <a href="https://www.instagram.com/">
              <FaInstagram style={{color:"teal", marginRight:"15px", fontSize:"25px"}}/>
              </a>
              <a href="https://github.com/">
                <FaGithub style={{color:"teal", marginRight:"15px", fontSize:"25px"}}/>
              </a>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div class="image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQ1tyooqD836T7Ktvg4gol0ekFoW54SxtTg&s"
                  alt=""
                className="img-fluid"
                height={280}
                style={{borderRadius:"10px"}}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;