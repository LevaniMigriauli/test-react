import "./Logo.css";
import img from "../logo.jpeg";

const Logo = () => {
  return (
    <div className="img-container">
      <img className="img" src={img} alt="logo"></img>
    </div>
  );
};

export default Logo;
