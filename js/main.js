// declare Variables from the DOM
const inpKey = document.querySelector("#inpKey");
const rmKey = document.querySelector("#rmKey");
const inpValue = document.querySelector("#inpValue");
const lsOutput = document.querySelector("#lsOutput");
const btnInsert = document.querySelector("#btnInsert");
const btnRemove = document.querySelector("#btnRemove");
const btnClear = document.querySelector("#btnClear");
const rmDisplay = document.querySelector("#rmDisplay");

//  print to the DOM the values in localStorage
const printToDom = () => {
  // Empty the Output Div
  lsOutput.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    const opKey = localStorage.key(i);
    const opValue = localStorage.getItem(opKey);

    lsOutput.innerHTML += `${opKey} : <---> ${opValue} <br/>`;
  }
};

// Insert Data into localStorage
btnInsert.addEventListener("click", () => {
  let key = inpKey.value;
  let value = inpValue.value;

  if (key !== " " && value !== " " && (key !== "" && value !== "")) {
    localStorage.setItem(key.trim().toUpperCase(), value.trim());
    inpKey.value = "";
    rmKey.value = "";
    inpValue.value = "";
    rmDisplay.innerHTML = "";
    printToDom();
  } else if (key === " " || value === " " || (key === "" || value === "")) {
    lsOutput.innerHTML =
      ' <h2 id="warning"> Please Enter A Valid Key / Value Pair...</h2>';
    rmDisplay.innerHTML = "";
    inpKey.value = "";
    rmKey.value = "";
    inpValue.value = "";
  }
});

// Remove data by key
btnRemove.addEventListener("click", () => {
  let key = rmKey.value;

  if (key !== "" && key !== " ") {
    key = key.trim().toUpperCase();
    if (localStorage.getItem(key) !== null) {
      localStorage.removeItem(key);
      rmDisplay.innerHTML = `<h2> ( ${key} ) was successfully removed from Local Storage.</h2>`;
      printToDom();
      rmKey.value = "";
    } else {
      rmDisplay.innerHTML = `<h2 id="warning"> Warning!!! ( ${key} ) is not in local Storage </h2> <br/> <h2> Please Enter A Valid Key...</h2>`;
      rmKey.value = "";
      printToDom();
    }
  } else {
    rmDisplay.innerHTML = ' <h2 id="warning"> Please Enter A Valid Key...</h2>';
    rmKey.value = "";
    printToDom();
  }
});

// Clear Local Storage
btnClear.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
  lsOutput.innerHTML = "";
  rmDisplay.innerHTML = "";
  inpKey.value = "";
  rmKey.value = "";
  inpValue.value = "";
});
