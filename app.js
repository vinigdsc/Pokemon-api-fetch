const pic = document.getElementById("pic");

const btn = document.getElementById("btn1");

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
      console.log(data);
      document.getElementById("nome").innerHTML = data["name"];
      document.getElementById("numero").innerHTML = data["id"];
      let img = data["sprites"]["front_default"];
      document.getElementById("pic").setAttribute("src", img);
    })
    .catch((erro) => {
      console.log("Erro: " + erro);
    });
});

document.getElementById("btn1").onclick = load();
