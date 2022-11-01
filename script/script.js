const body = document.querySelector("body");
const label = document.createElement("label");
const input = document.createElement("input");
const span = document.createElement("span");

body.append(label);
label.append(input);
label.append(span);

label.classList.add("switch");
input.id = "darkToggle";
input.classList.add("darkToggle");
input.type = "checkbox";
span.classList.add("slider", "round");

input.addEventListener("change", () => {
  body.classList.toggle("dark");
});
