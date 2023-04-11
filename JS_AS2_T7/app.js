function saveObjectToLocalStorage(obj) {
  // Save each property to localStorage
  for (const key in obj) {
    const value = obj[key];
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Retrieve the object from localStorage and return it as a new object
  const newObj = {};
  for (const key in localStorage) {
    const value = JSON.parse(localStorage.getItem(key));
    newObj[key] = value;
  }
  return newObj;
}
function saveAndRetrieveObject() {
  const myObj = { name: "John", age: 30, city: "New York" };
  const savedObj = saveObjectToLocalStorage(myObj);

  const outputElement = document.getElementById("output");
  outputElement.innerHTML = JSON.stringify(savedObj);
}
