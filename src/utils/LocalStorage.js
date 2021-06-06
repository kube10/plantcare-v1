function setLocalStorage(plants) {
  window.localStorage.setItem("plants", JSON.stringify(plants));
}

function getLocalStorage() {
  if (window.localStorage.getItem("plants")) {
    return JSON.parse(window.localStorage.getItem("plants"));
  } else {
    return [];
  }
}

export { setLocalStorage, getLocalStorage };
