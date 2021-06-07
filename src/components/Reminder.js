import Button from "./Button";
import ListItem from "./ListItem";
import plantImage from "../assets/plant-image.png";
import { useState, useEffect } from "react";
import { getNextWatering } from "../utils/nextWatering";
import FadeIn from "./animations/FadeIn";

const Reminder = ({ plants, onDone }) => {
  const [show, setShow] = useState(false);

  const plantsToShow = plants.filter(
    (plant) => getNextWatering(plant) === "Today"
  );

  const done = (plant) => {
    const now = new Date();
    onDone({
      ...plant,
      watering: {
        amount: plant.watering.amount,
        intervalDays: plant.watering.intervalDays,
        lastWatering: now,
      },
    });
  };

  const listItems = plantsToShow.map((plant) => {
    return (
      <ListItem
        slim
        key={plant.id}
        plant={plant}
        onDone={done}
        nextWatering={getNextWatering}
      />
    );
  });

  useEffect(() => (listItems.length > 0 ? setShow(true) : setShow(false)));

  return (
    <>
      {show && (
        <FadeIn duration={450}>
          {" "}
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
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Reminder;
