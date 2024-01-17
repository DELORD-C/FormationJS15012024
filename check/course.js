//MIS EN CACHE DES INGREDIENTS DEJA COCHÉS
(function() {
	// variable to store our current state
	var cbstate;
	
	// bind to the onload event
	window.addEventListener('load', function() {
	  // Get the current state from localstorage
	  // State is stored as a JSON string
	  cbstate = JSON.parse(localStorage['CBState'] || '{}');
	
	  // Loop through state array and restore checked 
	  // state for matching elements
	  for(var i in cbstate) {
		var el = document.querySelector('input[name="' + i + '"]');
		if (el) el.checked = true;
	  }
	
	  // Get all checkboxes that you want to monitor state for
	  var cb = document.getElementsByClassName('save');
	
	  // Loop through results and ...
	  for(var i = 0; i < cb.length; i++) {
	
		//bind click event handler
		cb[i].addEventListener('click', function(evt) {
		  // If checkboxe is checked then save to state
		  if (this.checked) {
			cbstate[this.name] = true;
		  }
	  
	  // Else remove from state
		  else if (cbstate[this.name]) {
			delete cbstate[this.name];
		  }
	  
	  // Persist state
		  localStorage.CBState = JSON.stringify(cbstate);
		});
	  }
	});
})();








//
var todolist = document.querySelector('.todo__list');
var inputBtn = document.querySelector('input[name="add"]');
var plusBtn = document.getElementById('plus');
var filter = document.querySelector('.filter');
var max_id = 3;



function addTodo(inputVal) {
	let item = document.createElement("LI");
	let inputCheckbox = document.createElement('INPUT');
	let label = document.createElement('LABEL');
	let customCheckbox = document.createElement('SPAN');
	let labelWord = document.createElement('SPAN');
	let checkPointer = document.createElement('I');

	// increment max id
	let newID = (max_id += 1);

	// outer <li> initialize
	item.setAttribute('class', 'todo__item');

	// checkbox input initialize
	inputCheckbox.setAttribute('type', 'checkbox');
	inputCheckbox.setAttribute('id', `todo-${newID}`);
	inputCheckbox.addEventListener('change', (e) => {
		handleCheck(`todo-${newID}`);
	});

	// label initialize
	label.setAttribute('for', `todo-${newID}`);
	// customized checkbox
	customCheckbox.setAttribute('class', 'check__box');
	// label word
	labelWord.setAttribute('class', 'item__title');
	labelWord.textContent = inputVal;

	// check pointer
	checkPointer.setAttribute('class', 'far fa-check check__pointer');


	// combine elements
	customCheckbox.appendChild(checkPointer);
	
	label.appendChild(customCheckbox);
	label.appendChild(labelWord);

	item.appendChild(inputCheckbox);
	item.appendChild(label);
	if(filter.value === 'completed')
		item.classList.add('invisible');

	todolist.appendChild(item);
}

function filterTodo(filterType) {
	let Todos = document.querySelectorAll('.todo__item');

	Todos.forEach((item, index) => {
		let checkbox = item.querySelector('input[type="checkbox"]');

		if(filterType === 'all') {
			item.classList.remove("invisible");
		}
		else if(filterType === 'undo') {
			if(checkbox.checked)
				item.classList.add("invisible");
			else
				item.classList.remove("invisible");
		}
		else if (filterType === 'completed') {
			if(!checkbox.checked)
				item.classList.add("invisible");
			else
				item.classList.remove("invisible");
		}		
	});
}

function handleCheck(ID) {
	let checkbox = document.querySelector(`input[id=${ID}]`);
	let item = checkbox.parentElement;
	let filterType = filter.value;

	console.log(filterType, checkbox);

	if(filterType === 'undo' && checkbox.checked) {
		item.classList.add("invisible");
	}
	else if (filterType === 'completed' && !checkbox.checked) {
		item.classList.add("invisible");
	}
}

function handleAddInput() {
	let inputVal = inputBtn.value.trim();

	if(inputVal === "")
		return;

	addTodo(inputVal);
	inputBtn.value = "";
}

inputBtn.addEventListener('keypress', (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		handleAddInput();
	}
});

plusBtn.addEventListener('click', (e) => handleAddInput());
filter.addEventListener('change', (e) => {
	filterTodo(e.target.value);
});




document.getElementById('del').addEventListener('click', () => {
	let checkboxes = document.querySelectorAll("input[type='checkbox']");
	cbstate = JSON.parse(localStorage['CBState'] || '{}');
	for (let checkbox of checkboxes) {
		checkbox.checked = false;
		if (cbstate[checkbox.name]) {
			delete cbstate[checkbox.name];
		}
		localStorage.CBState = JSON.stringify(cbstate);
	}
})