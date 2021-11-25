let instructionBox = document.querySelector(".instruction_box");
let gameBoard = document.querySelector(".game_board");
let btn = document.querySelector(".btn");
let btnSub = document.querySelector(".btn_sub");
let input = document.querySelector(".input");
let form = document.querySelector(".form");
let errorBox = document.querySelector(".error_box");
let outputBox = document.querySelector(".output_box");
let closeBtn = document.querySelector(".close_btn");
let errMsg = document.querySelector(".error_box span");
let userName = document.querySelector("#name");
let userAge = document.querySelector("#age");
let userGen = document.querySelector("#gender");

btn.addEventListener("click", () => {
  instructionBox.classList.add("active");
  gameBoard.style.display = "block";
});

const errorShow = () => {
  errorBox.style.display = "none";
};

let save = [];
btnSub.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value == "") {
    errorBox.style.display = "block";
    errMsg.innerHTML = "Please enter a valid name";
    setTimeout(errorShow, 3000);
    // console.log("hello");
    // fetchApi(input.value);
  } else {
    outputBox.style.display = "block";
    fetch(`https://api.agify.io?name=${input.value}`)
      .then((res) => res.json())
      .then((data) => {
        let age = data.age;
        let name = data.name;
        // console.log(age, name);
        userName.innerHTML = name;
        userAge.innerHTML = age;
      });

    fetch(`https://api.genderize.io?name=${input.value}
        `)
      .then((res) => res.json())
      .then((data) => {
        let gen = data.gender;
        userGen.innerHTML = gen;
      });
    save.push(input.value);
    // fetchGen();
  }
  // console.log(save);
  input.value = "";
});

closeBtn.addEventListener("click", () => {
  outputBox.style.display = "none";
});
