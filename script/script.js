"use strict";
const body = document.querySelector("body");
const label = document.createElement("label");
const input = document.createElement("input");
const slider = document.createElement("span");

body.append(label);
label.append(input);
label.append(slider);

label.classList.add("switch");
input.type = "checkbox";
slider.classList.add("slider", "round");

input.addEventListener("change", () => {
  body.classList.toggle("dark");
});
