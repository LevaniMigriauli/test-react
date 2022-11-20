import Logo from "../Logo";
import Name from "../Name";
import Button from "../Button";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Name />
      <Button />
    </header>
  );
};

export default Header;
