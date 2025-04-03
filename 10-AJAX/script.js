// JavaScript source code//
//document.write("Hello!")

var xmlResponse = null;
function loadfile() {

	let request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("responce").innerHTML = this.responseText;
			//console.log(xmlResponse = this.responseXML);
			//xmlResponse = this.responseXML;
			formatXML(this.responseXML);
		}
	};

	request.open("GET", "DataBase.xml", true)
	request.send();

	//console.log(xmlResponse);

	//console.log(request.getResponseHeader());
	/*
	abort() - закрывает соединение
	getResponseHeader() получаем заголовок ответа 
	getAllResponseHeaders()
	setRequestHeader()
	*/

	//Properties


}

function formatXML(file) {

	/*console.log(file);
	////let student = file.getElementsByTagName("student");
	////console.log(student);
	let group = file.getElementsByTagName("group");
	console.log(group);

	console.log(group[0].children[0]);
	console.log("***********************************************");
	console.log(file.documentElement.children);
	let elements = file.documentElement.children;
	//console.log(elements[0]);
	for (let i = 0; i < elements.length; i++) {

		console.log(elements[i]);
	}*/

	console.log(file);
	let group = file.getElementsByTagName("group");
	const tableBody = document.querySelector("#xmlTable tbody");
	const tablethead = document.querySelector("#xmlTable thead");

	let elements = file.documentElement.children;

	for (let i = 0; i < elements.length; i++) {

		if (i === 1) {
			const row1 = document.createElement("tr");
			row1.innerHTML = `<th>${elements[i].childNodes[1].nodeName}</th><th>${elements[i].childNodes[3].nodeName}</th><th>${elements[i].childNodes[5].nodeName}</th><th>${elements[i].childNodes[7].nodeName}</th>`;
			tablethead.appendChild(row1);
		}

		if (elements[i].childNodes.length > 0) {
			const row = document.createElement("tr");
			//console.log(elements[i].childNodes);
			row.innerHTML = `<td>${elements[i].childNodes[1].innerHTML}</td><td>${elements[i].childNodes[3].innerHTML}</td><td>${elements[i].childNodes[5].innerHTML}</td><td>${elements[i].childNodes[7].innerHTML}</td>`;
			tableBody.appendChild(row);
		}
	}

	/*console.log(file);
	let group = file.getElementsByTagName("group");
	
		console.log(group);
		console.log(group[0].childNodes[0].nodeValue);
		console.log("\n-------------------------\n");
		let elements = file.documentElement.childNodes;
		for (let i = 0; i < elements.length; i++) {
			console.log(elements[i].childNodes);
		}*/
}

