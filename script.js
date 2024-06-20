let id = document.querySelector(".idno");
let message = document.querySelector(".message");
let btn = document.querySelector(".button");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log(json.slip.id);
      id.innerText = json.slip.id;
      message.innerText = `"${json.slip.advice}"`;
    });
});
