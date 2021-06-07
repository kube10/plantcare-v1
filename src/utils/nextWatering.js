export const getNextWateringDate = (plant) => {
  const last = new Date(plant.watering.lastWatering);
  const interval = plant.watering.intervalDays;
  const next = new Date();

  next.setDate(last.getDate() + interval);
  return next;
};

export const sortByNextWateringDate = (plants) => {
  const sortedPlants = plants.sort((a, b) => {
    const a_next = getNextWateringDate(a);

    const b_next = getNextWateringDate(b);

    return a_next - b_next;
  });

  return sortedPlants;
};

export const getNextWatering = (plant) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const next = getNextWateringDate(plant);
  const now = new Date();

  const tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1);

  let string =
    weekdays[next.getDay()] +
    " " +
    next.getDate() +
    " " +
    months[next.getMonth()];

  if (next.getDate() === now.getDate() && next.getMonth() === now.getMonth()) {
    string = "Today";
  } else if (
    next.getDate() === tomorrow.getDate() &&
    next.getMonth() === tomorrow.getMonth()
  ) {
    string = "Tomorrow";
  }

  return string;
};
