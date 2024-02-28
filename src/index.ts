function sayHi(name: string) {
  return "Hi, " + name;
}

document.addEventListener("DOMContentLoaded", () => {
  const title = sayHi("apx");
  document.getElementById("title").innerText = title;
  console.log(title);
});
