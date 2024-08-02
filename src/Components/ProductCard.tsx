import React, { useState, useEffect } from "react";
import "../styles/productCard.css";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const ProductCard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="shell">
        <div className="container">
          <div className="row">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="services">
                  <Box
                    className="services-img"
                    sx={{
                      position: "relative",
                      paddingBottom: "100%",
                      marginBottom: "1rem",
                    }}
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="100%"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                  <div>
                    <Skeleton variant="text" width="60%" height={24} />
                    <Skeleton
                      variant="text"
                      width="80%"
                      height={20}
                      style={{ marginTop: "0.5rem" }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={60}
                      style={{ marginTop: "1rem" }}
                    />
                    <div
                      className="card-footer"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                      }}
                    >
                      <Skeleton variant="text" width="30%" height={24} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shell">
      <div className="container">
        <div className="row">
          <div className="services">
            <div className="services-img">
              <img
                src="./assets/images/servicesImage1.avif"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="services-text">
              <div className="category">
                <span>Ipsum</span>
              </div>
              <div className="service-title">
                <h3> Lorem ipsum dolor</h3>
              </div>
              <div className="service-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sit amet viverra nisl. Aliquam a posuere neque. Sed
                  ullamcorper ipsum id sapien lobortis
                </p>
              </div>
              <div className="card-footer">
                <div className="wcf-left">
                  <span className="price">€ 5000</span>
                </div>
                <div className="wcf-right">
                  <a href="#" className="buy-btn">
                    <i className="zmdi zmdi-shopping-basket"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="services-img">
              <img
                src="./assets/images/servicesImage2.avif"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="services-text">
              <div className="category">
                <span>Lorem</span>
              </div>
              <div className="service-title">
                <h3> Lorem ipsum dolor</h3>
              </div>
              <div className="service-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sit amet viverra nisl. Aliquam a posuere neque. Sed
                  ullamcorper ipsum id sapien lobortis
                </p>
              </div>
              <div className="card-footer">
                <div className="wcf-left">
                  <span className="price">€ 7000</span>
                </div>
                <div className="wcf-right">
                  <a href="#" className="buy-btn">
                    <i className="zmdi zmdi-shopping-basket"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="services-img">
              <img
                src="./assets/images/servicesImage3.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="services-text">
              <div className="category">
                <span>Drone</span>
              </div>
              <div className="service-title">
                <h3> Lorem ipsum dolor</h3>
              </div>
              <div className="service-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sit amet viverra nisl. Aliquam a posuere neque. Sed
                  ullamcorper ipsum id sapien lobortis
                </p>
              </div>
              <div className="card-footer">
                <div className="wcf-left">
                  <span className="price">€ 8000</span>
                </div>
                <div className="wcf-right">
                  <a href="#" className="buy-btn">
                    <i className="zmdi zmdi-shopping-basket"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
