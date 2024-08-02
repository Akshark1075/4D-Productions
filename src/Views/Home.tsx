import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import Team from "../Components/Team";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="section" id="home">
          <video width={"100%"} controls>
            <source src="./assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="section" id="about">
          <h3>WHAT WE DO</h3>
          <div className="heading-border"></div>
          <p className="highlight">
            Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit.{" "}
            <br /> Vestibulum aliquet, est a sagittis gravida, nulla dui lacinia
            nisi, ut <br /> porttitor libero elit non arcu. Duis tortor ex,
            sodales at lacinia vel, accumsan ut ligula. Sed laoreet diam eu leo
            fringilla dictum.
          </p>
          <p className="highlight">
            Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit.{" "}
            <br /> Vestibulum aliquet, est a sagittis gravida, nulla dui lacinia
            nisi, ut <br /> porttitor libero elit non arcu. Duis tortor ex,
            sodales at lacinia vel, accumsan ut ligula. Sed laoreet diam eu leo
            fringilla dictum.
          </p>
        </div>

        <div className="section" id="services">
          <h3>SERVICES</h3>
          <div className="heading-border"></div>
          <ProductCard />
        </div>

        <div className="section" id="team">
          <h3>Meet our Leadership Team</h3>
          <div className="heading-border"></div>
          <Team />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
