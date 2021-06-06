import Button from "./Button";
import ListItem from "./ListItem";
import plantImage from "../assets/plant-image.png";
import { useState, useEffect } from "react";
import { getNextWatering } from "../utils/nextWatering";

const Reminder = ({ plants, onDone }) => {
  const [show, setShow] = useState(false);

  const plantsToShow = plants.filter(
    (plant) => getNextWatering(plant) === "Today"
  );

  const listItems = plantsToShow.map((plant) => {
    return (
      <ListItem
        slim
        key={plant.id}
        plant={plant}
        nextWatering={getNextWatering}
      />
    );
  });

  const done = () => {
    const now = new Date();
    plantsToShow.forEach((plant) => {
      onDone({
        ...plant,
        watering: {
          amount: plant.watering.amount,
          intervalDays: plant.watering.intervalDays,
          lastWatering: now,
        },
      });
    });
    console.log(plantsToShow);
    setShow(false);
  };

  useEffect(() => (listItems.length > 0 ? setShow(true) : setShow(false)));

  return (
    <>
      {show && (
        <div className="reminder-card">
          <div
            className="image-wrap"
            style={{ backgroundImage: `url(${plantImage})` }}
          ></div>
          <div className="content">
            <h3>
              Don't forget to water these plants <strong>today!</strong>
            </h3>

            <div className="plantsList">{listItems}</div>
            <div className="align-self-end">
              <Button action={done} type="primary" text="Done!" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Reminder;
