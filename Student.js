console.log('In Student.js');

class StudentModel {
	constructor() {
		this.initialize();
	}
	
	initialize() {
		this.getStudentData();
	}
	
	getStudentData() {
		console.log('In GetStudent()');
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
				this.students = JSON.parse(this.responseText);
				
				const element = document.querySelector('#root');
				let event = new CustomEvent('GetStudentData', {detail:this.students});
				element.dispatchEvent(event);
			 
			}
		};
		xhttp.open("GET", "http://localhost:22252/api/student", true);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send();
	}

}

class StudentView {
	constructor() {
		//this.createView();
	}
	
	// Create an element with an optional CSS class
	createElement(tag, classNames) {
		const element = document.createElement(tag)
		
		for (var className of classNames) {
			element.classList.add(className)
		}
		return element
	}

	// Retrieve an element from the DOM
	getElement(selector) {
		const element = document.querySelector(selector)

		return element
	}

	createView(studentData) {
		
		this.studentData = studentData.Students;
		
		this.app = this.getElement('#root');
		let title = this.createTitle();
		let cards = this.createCards();
		
		let container = this.createElement('div', ['container']);
		container.append(title, cards);
		
		this.app.append(container);
	}

	createTitle() {
	
		let title = this.createElement('div', ['title','h3', 'mt-4','mb-4']);
		title.textContent = 'Students';
		return title;
	}
	
	createCards() {
		console.log('Ready to Create Cards');
		
		let cardDeck = this.createElement('div', ['card-deck']);
		
		for(var student of this.studentData){
		
			let card = this.createElement('div', ['card']);
			let cardBody = this.createElement('div', ['card-body']);
			let cardTitle = this.createElement('div', ['card-title']);
			cardTitle.textContent = student.Name;
			let cardText = this.createElement('p', ['card-text']);
			cardText.textContent = student.Email;
		
			cardBody.append(cardTitle, cardText);
			card.append(cardBody);
			cardDeck.append(card);
		
		}
		return cardDeck;
	}
	

}

class StudentController {
	constructor(model, view) {
		this.model = model;
		this.view = view;


		const element = document.querySelector('#root');
		element.addEventListener('GetStudentData', function(event) {
			app.handleStudentData(event.detail);
		});
	}
	
	handleStudentData(student){
		this.view.createView(student);
	}
	
	
}


const app = new StudentController(new StudentModel(), new StudentView());

