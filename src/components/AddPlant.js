import Form from "./Form";
import { useState } from "react";
import MessageBar from "./MessageBar";
import FadeIn from "./animations/FadeIn";

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
        <FadeIn duration={450}>
          <MessageBar message={message.text} className={message.className} />
        </FadeIn>
      )}
      {showAddPlant && (
        <>
          <h3>Add a new plant</h3>
          <FadeIn duration={450}>
            <Form
              onCancel={cancelForm}
              onSubmit={onAdd}
              setMessage={newMessage}
            />
          </FadeIn>
        </>
      )}
    </div>
  );
};

export default AddPlant;
