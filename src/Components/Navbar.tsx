import "../styles/navbar.css";
const Navbar = () => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const activeTab = document.getElementsByClassName("active")[0];
    activeTab.classList.remove("active");
    (event.target as HTMLElement).classList.add("active");
  };
  return (
    <div
      className="topnav flex-col align-middle gap-4 md:flex-row py-6 md:py-10"
      id="myTopnav"
    >
      <div className="topnav-logo  md:mr-auto">
        <a href="#">4D Productions</a>
      </div>
      <div className="menu">
        <a href="#home" className="active" onClick={handleClick}>
          Home
        </a>
        <a href="#about" onClick={handleClick}>
          About
        </a>
        <a href="#services" onClick={handleClick}>
          Services
        </a>
        <a href="#team" onClick={handleClick}>
          Team
        </a>
        <a href="#contact" onClick={handleClick}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
