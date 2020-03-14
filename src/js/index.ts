let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("inputField");

let operationElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("operation");

let doItButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("doItButton");
doItButton.addEventListener("click", doIt);

let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("result");

function doIt(): void {
    let str : string = inputElement.value;
    let op : string = operationElement.value;
    let result: string = "nothing";
    switch (op) {
        case "lower": result = str.toLowerCase(); break;
        case "upper": result = str.toUpperCase(); break; 
        case "spacing": result = str.split("").join(" "); break; // extra
        case "reverse": result = str.split("").reverse().join(""); break
        // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
    }
    resultElement.innerHTML = result;
}