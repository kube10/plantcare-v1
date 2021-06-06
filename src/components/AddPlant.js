import Form from "./Form";
import { useState } from "react";
import MessageBar from "./MessageBar";

const AddPlant = ({ showAddPlant, cancelForm, onAdd }) => {
  const [message, setMessage] = useState();
  const newMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };
  return (
    <div>
      {message && (
        <MessageBar message={message.text} className={message.className} />
      )}
      {showAddPlant && (
        <>
          <h3>Add a new plant</h3>
          <Form
            onCancel={cancelForm}
            onSubmit={onAdd}
            setMessage={newMessage}
          />
        </>
      )}
    </div>
  );
};

export default AddPlant;
