import Form from "./Form";
import { Icon, InlineIcon } from "@iconify/react";
import wateringCanOutline from "@iconify/icons-mdi/watering-can-outline";
import chevronDown from "@iconify/icons-mdi/chevron-down";
import { useState } from "react";

const ListItem = ({
  plant,
  slim,
  nextWatering,
  onEdit,
  setMessage,
  onDelete,
}) => {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="plant-list-item">
      <div
        className="plant-item-heading"
        onClick={() => setShowEditForm(!showEditForm)}
      >
        <span className="plant-name">{plant.name}</span>
        <div className="watering">
          <Icon className="watering-icon" icon={wateringCanOutline} />
          {!slim && (
            <span className="watering-date">{nextWatering(plant)}</span>
          )}
          <span className="watering-amount">{plant.watering.amount}</span>
        </div>
        <span className={`type badge ${plant.type}`}>{plant.type}</span>
        {!slim && <Icon className="chevron-down-icon" icon={chevronDown} />}
      </div>
      {!slim && showEditForm && (
        <div className="form-wrap">
          <Form
            onDelete={onDelete}
            onSubmit={onEdit}
            setMessage={setMessage}
            edit
            plant={plant}
            onCancel={() => setShowEditForm(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ListItem;
