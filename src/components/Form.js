import TextField from "./form-components/TextField";
import SelectField from "./form-components/SelectField";
import TextArea from "./form-components/TextArea";
import Button from "./Button";
import { useState } from "react";

const Form = ({ edit, onCancel, plant, onSubmit, setMessage, onDelete }) => {
  const [id, setId] = useState(
    edit ? plant.id : Math.floor(Math.random() * 10000) + 1
  );
  const [name, setName] = useState(edit ? plant.name : "");
  const [type, setType] = useState(edit ? plant.type : "");
  const [amount, setAmount] = useState(edit ? plant.watering.amount : "");
  const [intervalDays, setIntervalDays] = useState(
    edit ? plant.watering.intervalDays : 0
  );
  const [lastWatering, setLastWatering] = useState(
    edit ? plant.watering.lastWatering : ""
  );
  const [sunlight, setSunlight] = useState(edit ? plant.sunlight : "");
  const [notes, setNotes] = useState(edit ? plant.notes : "");

  const [error, setError] = useState("");

  const submitForm = () => {
    if (!name || !type || !amount || !intervalDays || !lastWatering) {
      //VALIDATION ERROR
      setError("Please fill in all required fields.");
      return;
    }

    onSubmit({
      id,
      name,
      type,
      watering: {
        amount,
        intervalDays: parseInt(intervalDays),
        lastWatering,
      },
      sunlight,
      notes,
    });

    const message = {
      text: edit
        ? `${plant.name} successfully edited!`
        : `${name} successfully added!`,
      className: "success",
    };
    setMessage(message);

    onCancel();
  };

  const onRemovePlant = () => {
    onDelete(id);
    onCancel();
  };

  return (
    <form>
      <div className="row">
        <div className="six columns">
          <TextField
            id="name-field"
            type="text"
            name="Name"
            value={edit && plant.name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            required
          />
        </div>
        <div className="six columns">
          <SelectField
            id="type-field"
            name="Type"
            onChange={(e) => {
              setError("");
              setType(e.target.value);
              console.log("type change, target-value: " + e.target.value);
            }}
            required
            options={[
              {
                value: null,
                text: "Pick one...",
              },
              {
                value: "Indoor",
                text: "Indoor",
              },
              {
                value: "Outdoor",
                text: "Outdoor",
              },
            ]}
            value={edit && plant.type}
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <TextField
            id="amount-field"
            type="text"
            onChange={(e) => {
              setError("");
              setAmount(e.target.value);
            }}
            value={edit && plant.watering.amount}
            name="Amount of water"
            required
          />
        </div>
        <div className="six columns">
          <SelectField
            id="interval-field"
            name="Every..."
            onChange={(e) => {
              setError("");
              setIntervalDays(e.target.value);
            }}
            value={edit && plant.watering.intervalDays}
            required
            options={[
              {
                value: null,
                text: "Pick one",
              },
              {
                value: 1,
                text: "Day",
              },
              {
                value: 2,
                text: "Two days",
              },
              {
                value: 3,
                text: "Three days",
              },
              {
                value: 4,
                text: "Four days",
              },
              {
                value: 5,
                text: "Five days",
              },
              {
                value: 6,
                text: "Six days",
              },
              {
                value: 7,
                text: "Week",
              },
            ]}
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <SelectField
            id="sunlight-field"
            name="Sunlight exposure"
            onChange={(e) => {
              setError("");
              setSunlight(e.target.value);
            }}
            value={edit && plant.sunlight}
            options={[
              { value: null, text: "Pick one..." },
              { value: "None", text: "None" },
              { value: "Indirect", text: "Indirect" },
              { value: "A lot", text: "A lot" },
            ]}
          />
        </div>
        <div className="six columns">
          <TextField
            id="lastWatering-field"
            type="date"
            name="Last watering"
            onChange={(e) => {
              setError("");
              setLastWatering(e.target.value);
            }}
            value={
              edit &&
              new Date(plant.watering.lastWatering).toISOString().substr(0, 10)
            }
            required
          />
        </div>
      </div>
      <div className="row">
        {" "}
        <div className="twelve columns">
          <TextArea
            id="notes-field"
            name="Additional notes"
            onChange={(e) => {
              setError("");
              setNotes(e.target.value);
            }}
            value={edit && plant.notes}
          />
        </div>
      </div>
      {error && <div className="error">{error}</div>}
      <div className="button-group">
        <Button action={onCancel} type="secondary" text="Cancel" />
        {edit && (
          <Button type="warning" action={onRemovePlant} text="Remove plant" />
        )}
        <Button
          action={submitForm}
          type="primary"
          text={edit ? "Edit plant" : "Add plant"}
        />
      </div>
    </form>
  );
};

export default Form;
