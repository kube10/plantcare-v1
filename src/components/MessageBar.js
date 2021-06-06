const MessageBar = ({ message, className }) => {
  return <div className={`message ${className}`}>{message}</div>;
};

export default MessageBar;
