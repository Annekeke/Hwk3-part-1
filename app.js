const rElement = document.getElementById("r");
const gElement = document.getElementById("g");
const bElement = document.getElementById("b");

rElement.innerHTML = "red";
gElement.innerHTML = "green";
bElement.innerHTML = "blue";

console.log(document.getElementsByClassName("mode"));
const levels = Array.from(document.getElementsByClassName("mode"));
console.log(levels);

console.log(document.getElementsByClassName("reset"));

let gamelevel = levels.find((level) => {
    const classlist = Array.from(level.classList);
    return classlist.includes("selected");
}).innerHTML;

console.log(gamelevel);

levels.forEach(level =>{
    level.addEventListener("click", function () {
        levels.forEach(mode => mode.classList.remove("selected"));
        this.classList.add("selected");
        gamelevel = this.innerHTML;
    });
});
    




