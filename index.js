const arrMusic = [];
let i = 0;
const music = document.getElementById("music");
const total = document.getElementById("total");
const removeBtn = document.getElementById("removeBtn");
const res = document.getElementById("res");

function addBtn() {
  if (music.value === "") {
  } else {
    arrMusic.push(music.value);
    total.innerHTML = arrMusic.length;
    music.value = "";
    const add = document.createElement("div");
    const div = document.createElement("div");
    add.id = "favMusic";
    add.className = `Music${arrMusic.length}`;

    const text = document.createTextNode(` ${arrMusic.length}- ${arrMusic[i]}`);
    add.appendChild(div);
    div.appendChild(text);
    res.appendChild(add);
    i++;
    music.focus();
  }
}

music.addEventListener("keydown", function (ev) {
  ev.preventDefault;
  if (ev.key === "Enter") {
    addBtn();
  }
});

removeBtn.addEventListener("click", function () {
  const v = prompt("Qual música deseja remover?");

  const removeDiv = document.querySelector(`.Music${v}`);
  if (removeDiv) {
    removeDiv.parentNode.removeChild(removeDiv);
  }
});
