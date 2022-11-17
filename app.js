const pic = document.getElementById("pic");

const btn = document.getElementById("btn1");

const btn2 = document.getElementById("btn2");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  input = document.querySelector("#input");
  value = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //o que fazer com o Json
      document.getElementById("tipo1").innerHTML = "";
      document.getElementById("tipo2").innerHTML = "";
      document.getElementById("nome").innerHTML = `Nome: ${data["name"]}`;
      console.log(`Nome: ${data["name"]}`);
      document.getElementById("numero").innerHTML = `Numero : ${data["id"]}`;
      document.getElementById("tipo").innerHTML = "tipo: ";

      let { types } = data;
      let tipos = types.map(({ type }) => type);

      for (let i = 1; i <= tipos.length; i++) {
        document.getElementById(`tipo${i}`).innerText = tipos[i - 1].name;
      }

      let img = data["sprites"]["front_default"];

      document.getElementById("pic").setAttribute("src", img);
    })
    .catch((erro) => {
      document.getElementById("nome").innerHTML = "Nome/ID Invalido";
    });
});

btn2.addEventListener("click", function (random) {
  random.preventDefault();
  value2 = Math.floor(Math.random() * (900 - 1 + 1) + 1);
  console.log(value2);
  const url = `https://pokeapi.co/api/v2/pokemon/${value2}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("nome").innerHTML = `Nome: ${data["name"]}`;
      document.getElementById("numero").innerHTML = `Numero: ${data["id"]}`;
      let img = data["sprites"]["front_default"];
      document.getElementById("pic").setAttribute("src", img);
      document.getElementById("tipo").innerHTML = "Tipo: ";
      let tipex = data["types"]["0"]["type"].name;
      let tipey = data["types"]["1"]["type"].name;
      document.getElementById("tipo1").innerText = tipex;
      document.getElementById("tipo2").innerText = tipey;
    });
});

document.getElementById("btn1").onclick = load();
