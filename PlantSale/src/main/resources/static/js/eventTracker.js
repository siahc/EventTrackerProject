window.addEventListener("load", function () {
  console.log("Script loaded");
  init();
});

function init() {
  console.log("in init() still ");
  //TODO: set up event listeners for buttons etc.
  hide("updateFormDiv");
  hide("createFormDiv");
  listPlants();
}

function listPlants() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/plants/");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // console.log(xhr.responseText);
        let plantList = JSON.parse(xhr.responseText);
        displayPlantList(plantList);
        displayInventoryValue(plantList);
      }
    }
  };

  xhr.send();
}

function displayPlantList(list) {
  table = document.createElement("table");
  table.id = "plantList";
  keys = ["id", "name", "description", "price", "rare", "variegation", "image"];

  let tr = document.createElement("tr");
  for (const key of keys) {
    let th = document.createElement("th");
    th.textContent = key;
    tr.appendChild(th);
  }
  table.appendChild(tr);

  for (const plant of list) {
    let tr = document.createElement("tr");

    tr.onclick = function (e) {
      showUpdateForm(plant.id);
    };

    // loop through keys
    for (const key of keys) {
      // make a td
      let td = document.createElement("td");
      // set td to plant[key]
      td.textContent = plant[key];
      // tr append td
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  let plTable = document.getElementById("plantList");
  plTable.replaceWith(table);
}

function showUpdateForm(id) {
  console.log(id);

  // make an xhr object
  let xhr = new XMLHttpRequest();
  // GET /api/plants/ + id
  xhr.open("GET", "/api/plants/" + id);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // parse plant
        let plant = JSON.parse(xhr.responseText);
        console.log("show plant item for update: " + plant.id);
        // set values for all fields in the update form
        document.getElementById("update_id").value = plant.id;
        document.getElementById("update_name").value = plant.name;
        document.getElementById("update_price").value = plant.price;
        document.getElementById("update_description").value = plant.description;
        document.getElementById("update_rare").checked = plant.rare;
        document.getElementById("update_variegation").checked =
          plant.variegation;
        document.getElementById("update_image").value = plant.image;
        window.location = "#" + id; // TODO: back button still not working in update form
        hide("plantList");
        show("updateFormDiv");
      } else {
        console.log(
          "GET plant:" + plant.id + "for update, Error: " + xhr.status
        );
      }
    }
  };

  xhr.send();
}

function updatePlant() {
  // get the update_id
  let id = document.getElementById("update_id").value;
  // configure PATCH to the /api/plants/ + id
  let xhr = new XMLHttpRequest();
  xhr.open("PATCH", "/api/plants/" + id);
  xhr.setRequestHeader("Content-Type", "application/json");
  // parse the form, build a plant obj
  let plant = {
    name: document.getElementById("update_name").value,
    description: document.getElementById("update_description").value,
    rare: document.getElementById("update_rare").checked,
    variegation: document.getElementById("update_variegation").checked,
    image: document.getElementById("update_image").value,
  };

  let priceStr = document.getElementById("update_price").value;
  if (priceStr !== "") {
    let price = parseFloat(priceStr);
    price = Math.round(price * 100) / 100;
    plant.price = price;
  }

  let status = document.getElementById("update_status");
  // Validate the form client side
  if (plant.price !== null && Number.isNaN(plant.price)) {
    status.textContent = "form error:  Price is not a number";
    return;
  }

  // call PATCH to the server
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // on success print and then show table
        window.location = "";
        hide("updateFormDiv");
        listPlants();
      } else if (xhr.status === 400) {
        status.textContent =
          "Bad request; Please make sure price is non-negative";
      } else if (xhr.status === 404) {
        // print the error to the update_status element
        status.textContent = "Not Found";
      } else {
        status.textContent = "Error: " + xhr.status;
      }
    }
  };

  let reqBody = JSON.stringify(plant);
  xhr.send(reqBody);
}

function deletePlant() {
  // get the update_id
  let id = document.getElementById("update_id").value;
  // call DELETE to the server
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", "/api/plants/" + id);
  // on success print and then show table
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
		if ( xhr.status === 204) {
			window.location = "";
  hide("updateFormDiv");
  listPlants();
		} else if ( xhr.status === 404) {
			status.textContent = "Error: Not Found"
		} else if ( xhr.status === 400) {
			status.textContent = "Bad Id"
		} else {
			status.textContent = "Error: " + xhr.status;
		}
    }
  };
  
  xhr.send()
}

function displayInventoryValue(list) {
  let total = 0;
  for (const plant of list) {
    total += plant.price;
  }
  document.getElementById("inventoryValue").textContent = total;
}

// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function toggleHide(elementId) {
  let form = document.getElementById(elementId);
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function hide(elementId) {
  let form = document.getElementById(elementId);
  form.style.display = "none";
}

function show(elementId) {
  let form = document.getElementById(elementId);
  form.style.display = "block";
}

function createPlant() {
  let plant = {
    name: document.getElementById("create_name").value,
    description: document.getElementById("create_description").value,
    rare: document.getElementById("create_rare").checked,
    variegation: document.getElementById("create_variegation").checked,
    image: document.getElementById("create_image").value,
  };

  let priceStr = document.getElementById("create_price").value;
  if (priceStr !== "") {
    let price = parseFloat(priceStr);
    price = Math.round(price * 100) / 100;
    plant.price = price;
  }

  console.log(plant);
  console.log(JSON.stringify(plant));

  let status = document.getElementById("create_status");
  // Validate the form client side
  if (plant.price !== null && Number.isNaN(plant.price)) {
    status.textContent = "form error:  Price is not a number";
    return;
  }

  // Send Create Request
  let xhr = new XMLHttpRequest();
  xhr.open("PUT", "/api/plants");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        let newPlant = JSON.parse(xhr.responseText);
        status.textContent = "created plant id: " + newPlant.id;
        listPlants();
      } else if (xhr.status === 400) {
        status.textContent =
          "bad request, Please make sure price is non-negative";
      } else {
        status.textContent = "Error: " + xhr.status;
      }
    }
  };

  status.textContent = "...";
  xhr.send(JSON.stringify(plant));
}
