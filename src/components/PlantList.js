import ListItem from "./ListItem";
import { useState } from "react";
import { sortByNextWateringDate } from "../utils/nextWatering";
import MessageBar from "./MessageBar";
import Button from "./Button";
import EmptyListState from "./EmptyListState";
import FadeIn from "./animations/FadeIn";

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

  const listItems = sortByNextWateringDate(plants).map((plant) => {
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
        <FadeIn>
          <MessageBar message={message.text} className={message.className} />
        </FadeIn>
      )}
      {listItems}
    </div>
  );
};

export default PlantList;
