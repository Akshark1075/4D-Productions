import "../styles/footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <footer id="contact">
      <div>
        <p>&copy; 2024 4D Productions</p>
        <ul>
          <li>
            <a href="#">
              {" "}
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <XIcon />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
