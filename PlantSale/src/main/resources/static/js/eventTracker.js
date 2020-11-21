window.addEventListener('load', function(){
	console.log('Script loaded');
	init()
});


function init() {
	console.log('in init() still ');
		//TODO: set up event listeners for buttons etc.
	listPlants();
}


function listPlants(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/plants/')

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4) {
			if (xhr.status === 200) {
				// console.log(xhr.responseText);
				let plantList = JSON.parse(xhr.responseText)
				displayPlantList(plantList)
				displayInventoryValue(plantList)
			}
		}
	}

	xhr.send();
}


function displayPlantList(list){
	table = document.createElement('table')
	keys = ['id', 'name','description', 'price', 'rare', 'variegation', 'image' ]

	let tr = document.createElement('tr');
	for (const key of keys) {
		let th = document.createElement('th');
		th.textContent = key;
		tr.appendChild(th)
	}
	table.appendChild(tr)


	for (const plant of list) {
		let tr = document.createElement('tr');

		// loop through keys
		for (const key of keys) {
			// make a td
			let td = document.createElement('td');
			// set td to plant[key]
			td.textContent = plant[key];
			// tr append td
			tr.appendChild(td)
		}
		
		table.appendChild(tr)
	}


	let plTable = document.getElementById('plantList');
	plTable.replaceWith(table)
}


function displayInventoryValue(list) {
	let total = 0;
	for (const plant of list) {
		total += plant.price;
	}
	document.getElementById('inventoryValue').textContent = total;
}