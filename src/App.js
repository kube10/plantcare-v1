import Header from "./components/Header";
import MessageBar from "./components/MessageBar";
import Reminder from "./components/Reminder";
import AddPlant from "./components/AddPlant";
import PlantList from "./components/PlantList";
import Footer from "./components/Footer";
import About from "./components/About";
import { getNextWatering } from "./utils/nextWatering";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "./utils/LocalStorage";

function App() {
  const [plants, setPlants] = useState([]);
  const [showAddPlant, setShowAddPlant] = useState(false);

  useEffect(() => {
    const getPlants = async () => {
      const plantsFromServer = await fetchPlants();
      setPlants(plantsFromServer);
    };
    getPlants();
  }, []);

  const fetchPlants = async () => {
    const res = await fetch("http://localhost:5000/plants");
    const data = await res.json();

    return data;
  };

  const fetchPlant = async (id) => {
    const res = await fetch(`http://localhost:5000/plants/${id}`);
    const data = await res.json();

    return data;
  };

  const addPlant = async (plant) => {
    const res = await fetch("http://localhost:5000/plants", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(plant),
    });
    const data = await res.json();
    setPlants([...plants, data]);
  };

  const editPlant = async (plantToEdit) => {
    const res = await fetch(`http://localhost:5000/plants/${plantToEdit.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(plantToEdit),
    });

    setPlants(
      plants.map((plant) => (plant.id === plantToEdit.id ? plantToEdit : plant))
    );
  };

  const deletePlant = async (id) => {
    await fetch(`http://localhost:5000/plants/${id}`, {
      method: "DELETE",
    });
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  return (
    <Router>
      <div className="App container">
        <Header onAddClick={() => setShowAddPlant(!showAddPlant)} />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
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
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
