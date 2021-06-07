import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ onAddClick }) => {
  const location = useLocation();

  return (
    <div className="header">
      <h1 className="brand">PlantCare</h1>
      {location.pathname === "/" && (
        <Button type="primary circle" icon="plus" action={onAddClick} />
      )}
    </div>
  );
};

export default Header;
