// JavaScript source code
document.write(`<h1>Academy</h1>`);

class Human {
	#last_name;
	#first_name;
	#age;

	constructor(last_name, first_name, age) {

		/*if (last_name instanceof Human) {
			this.last_name = last_name.last_name;
			this.first_name = last_name.first_name;
			this.age = last_name.age;
		}
		else {*/
		this.#last_name = last_name;
		this.#first_name = first_name;
		this.#age = age; //}
		//console.log("HConstuctor");

	}

	get last_name(){ return this.#last_name; }
	get first_name(){ return this.#first_name; }
	get age() { return this.#age; }
	set last_name(value) { this.#last_name = value; }
	set first_name(value) { this.#first_name = value; }
	set age(value) { this.#age= value; }

	/*toString() {
		return "<br>"  + ` ${this.last_name} ${this.first_name}  ${this.age}`;
	}*/
	toString() {
		return `${this.last_name};${this.first_name};${this.age};`;
	}

}
class Student extends Human {
	#speciality;
	#group;
	#rating;
	#attendance;

	constructor(last_name, first_name, age, speciality, group, rating, attendance) { 

		super(last_name, first_name, age);

		this.#speciality = speciality;
		this.#group = group;
		this.#rating = rating;
		this.#attendance = attendance;
		//console.log("HConstuctor");

	}

	get speciality() { return this.#speciality }
	get group() { return this.#group; }
	get rating() { return this.#rating; }
	get attendance() { return this.#attendance; }

	set speciality(value) { this.#speciality = value; }
	set group(value) { this.#group = value; }
	set rating(value) { this.#rating = value; }
	set attendance(value) { this.#attendance = value; }

	/*toString() {
		return "<br>" + super.toString() + `${this.speciality} ${this.group}  ${this.rating} ${this.attendance }`;
	}*/
	toString() {
		return super.toString() + `${this.speciality};${this.group};${this.rating};${this.attendance};`;
	}

}

class Teacher extends Human {
	#speciality;
	#experience;
	get speciality() { return this.#speciality; }
	get experience() { return this.#experience; }

	set speciality(value) { this.#speciality = value; }
	set experience(value) { this.#experience = value; }

	constructor(last_name, first_name, age, speciality, experience) {
		super(last_name, first_name, age);
		this.#speciality = speciality;
		this.#experience = experience;
		//console.log("HConstuctor");
	}

		/*toString() {
		return "<br>" + super.toString() + ` ${this.speciality} ${this.experience} `;

	}*/
	toString() {
		return super.toString() + `${this.speciality};${this.experience};`;

	}
}




let human = new Human("Montana", "Antonio", 25);
document.write(human);

let student = new Student("Pinkman", "Jessie", "22", "Chemisty", "WW_220", 90, 99);
document.write(student);

let teacher = new Teacher("White", "Walter", 50, "Chemistry",25);
document.write(teacher);

document.write(`<hr>`);

let group =
	[
		new Student("Pinkman", "Jessie", "22", "Chemisty", "WW_220", 90, 99),
		new Teacher("White", "Walter", 50, "Chemistry", 25),
		new Human("Montana", "Antonio", 25),
	];

for (let i in group) {
	 document.write(group[i] + `<hr>`);
}

var str = "";
for(let i in group){
	str +=  str === "" ?  group[i]:"\n" + group[i];
}

let _student =` {
	"type": "Student",
	"last_name": "Pinkman",
	"first_name": "Jessie",
	"age": 80,
	"speciality": "Chemistry",
	"group": "WW_220",
	"rating": 90,
	"attendance": 99
}`;

console.log(_student);

let _student_p = JSON.parse(_student);
console.log(_student_p);

console.log("-----------------------------------------------");
console.log(teacher);
let _student_s = JSON.stringify(_student_p);
console.log(_student_s);


//let human2 = new Human(human);
//document.write(human2);

/*const fs = require("fs");

function saveToFile(filename, data) {
	fs.writeFile(filename, data, (err) => {
		if (err) {
			console.error('Ошибка при записи файла:', err);
		} else {
			console.log('Файл успешно сохранен:', filename);
		}
	});
}

// Использование
saveToFile('example.txt', 'Hello, World!');*/
function saveToFile(filename, data) {
	// Создаем объект Blob с данными
	const blob = new Blob([data], { type: 'text/plain' });

	// Создаем ссылку на объект Blob
	const url = URL.createObjectURL(blob);

	// Создаем временный элемент <a> для скачивания
	const a = document.createElement('a');
	a.href = url;
	a.download = filename; // Имя файла при скачивании
	document.body.appendChild(a);
	a.click(); // Симулируем клик для скачивания
	document.body.removeChild(a); // Удаляем элемент после скачивания

	// Освобождаем URL
	URL.revokeObjectURL(url);
}

// Использование
//saveToFile('example.txt', str);

var group2 = [];

document.getElementById('fileInput').addEventListener('change', (event) => {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = (e) => {
			const content = e.target.result;
			document.getElementById('fileContent').textContent = content; // Отображение содержимого файла
			console.log('Содержимое файла:', content); // Логирование содержимого
			const lines = content.split('\n'); // Разделяем содержимое на строки
			lines.forEach((line, index) => {
				const value = line.split(';');
				if (value.length === 8) group2.push(new Student(value[0], value[1], value[2], value[3], value[4], value[5], value[6]));
				if (value.length === 6) group2.push(new Teacher(value[0], value[1], value[2], value[3], value[4]));
				if (value.length === 4) group2.push(new Human(value[0], value[1], value[2]));
				console.log("***group2[0]",group2[0]);

				console.log(`Строка ${index + 1}: ${line}`);
			});// Логируем каждую строку
			for (let i in group2) {
				document.write(group2[i] + `<hr>`);
			}
			
		};
		reader.onerror = (error) => {
			console.error('Ошибка чтения файла:', error);
		};
		reader.readAsText(file); // Чтение файла как текст
	}
});
console.log("*-----------------------------------------------\n");
console.table(group2);



/*for (let i in group2) {
	document.write(group2[i] + `<hr>`);
}

console.log("group2[0]",group2[0]);*/