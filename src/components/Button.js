import { Icon, InlineIcon } from "@iconify/react";
import plusIcon from "@iconify/icons-mdi/plus";

const Button = ({ type, text, icon, action }) => {
  const onClick = (e) => {
    e.preventDefault();
    action();
  };

  return (
    <button onClick={onClick} className={`btn ${type}`}>
      {text}
      {icon === "plus" && (
        <InlineIcon className="button-icon-large" icon={plusIcon} />
      )}
    </button>
  );
};

export default Button;
