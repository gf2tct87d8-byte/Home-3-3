const count = Number(prompt("Сколько"));

if (Number.isInteger(count) && count > 0) {
	for (let index = 0; index < count; index += 1) {
		const line = document.createElement("p");
		line.textContent = "Hello, World!";
		document.body.appendChild(line);
	}
}
let 
