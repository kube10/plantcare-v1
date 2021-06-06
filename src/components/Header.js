import Button from "./Button";

const Header = ({ onAddClick }) => {
  return (
    <div className="header">
      <h1 className="brand">PlantCare</h1>
      <Button type="primary circle" icon="plus" action={onAddClick} />
    </div>
  );
};

export default Header;
