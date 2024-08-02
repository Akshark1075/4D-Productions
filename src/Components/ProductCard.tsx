import "../styles/productCard.css";
const ProductCard = () => {
  return (
    <div className="shell">
      <div className="container">
        <div className="row">
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
    </div>
  );
};
export default ProductCard;
