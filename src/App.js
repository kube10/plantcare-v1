import Header from "./components/Header";
import MessageBar from "./components/MessageBar";
import Reminder from "./components/Reminder";
import AddPlant from "./components/AddPlant";
import PlantList from "./components/PlantList";
import { getNextWatering } from "./utils/nextWatering";
import { useState, useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "./utils/LocalStorage";

function App() {
  const [plants, setPlants] = useState(getLocalStorage());
  const [showAddPlant, setShowAddPlant] = useState(false);

  const addPlant = (plant) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const id = plants.length + 1;
    console.log(plant.id);
    // const newPlant = { id, ...plant };
    setPlants([...plants, plant]);
  };

  const editPlant = (plantToEdit) => {
    setPlants(
      plants.map((plant) => (plant.id === plantToEdit.id ? plantToEdit : plant))
    );
  };

  const deletePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  useEffect(() => setLocalStorage(plants));

  return (
    <div className="App container">
      <Header onAddClick={() => setShowAddPlant(!showAddPlant)} />

      <AddPlant
        showAddPlant={showAddPlant}
        cancelForm={() => setShowAddPlant(!showAddPlant)}
        onAdd={addPlant}
      />

      <Reminder plants={plants} onDone={editPlant} />

      <PlantList
        plants={plants}
        nextWatering={getNextWatering}
        onEdit={editPlant}
        onDelete={deletePlant}
        noPlants={() => setShowAddPlant(true)}
        showAddForm={showAddPlant}
      />
    </div>
  );
}

export default App;
