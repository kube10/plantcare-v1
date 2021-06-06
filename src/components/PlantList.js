import ListItem from "./ListItem";
import { useState } from "react";
import MessageBar from "./MessageBar";
import Button from "./Button";
import EmptyListState from "./EmptyListState";

const PlantList = ({
  plants,
  nextWatering,
  onEdit,
  onDelete,
  noPlants,
  showAddForm,
}) => {
  const [message, setMessage] = useState();
  const newMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };
  const listItems = plants.map((plant) => {
    return (
      <ListItem
        onEdit={onEdit}
        onDelete={onDelete}
        key={plant.id}
        setMessage={newMessage}
        plant={plant}
        nextWatering={nextWatering}
      />
    );
  });
  return (
    <div className="list-wrapper">
      {listItems.length === 0 && (
        <EmptyListState showAddForm={showAddForm} onBtnClick={noPlants} />
      )}
      {listItems.length > 0 && (
        <h3 className="">
          <strong>My plants</strong>
        </h3>
      )}
      {message && (
        <MessageBar message={message.text} className={message.className} />
      )}
      {listItems}
    </div>
  );
};

export default PlantList;
