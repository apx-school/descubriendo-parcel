import "./index.css";
import logo from "./apx.png";

function sayHi(name: string) {
  return "Hola, " + name;
}

document.addEventListener("DOMContentLoaded", () => {
  const title = sayHi("apx");
  document.getElementById("title").innerText = title;
  console.log(title);

  const imgEl = document.querySelector<HTMLImageElement>(".logo");

  imgEl.src = logo;
  imgEl.style.width = "300px";
});
