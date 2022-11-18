const pic = document.getElementById("pic");

const btn = document.getElementById("btn1");

const btn2 = document.getElementById("btn2");

// (index , valor)

var poketype = new Map();
poketype.set("bug", "#ADFF2F");
poketype.set("grass", "#00FF7F");
poketype.set("fairy", "#FFC0CB");
poketype.set("normal", "#F5F5DC");
poketype.set("dragon", "#4169E1");
poketype.set("psychic", "#FF69B4");
poketype.set("ghost", "#4B0082");
poketype.set("earth", "#A52A2A");
poketype.set("steel", "#708090");
poketype.set("fire", "#FF8C00");
poketype.set("flying", "#F0FFFF");
poketype.set("ice", "#B0E0E6");
poketype.set("electric", "#FFFF00");
poketype.set("rock", "#EEE8AA");
poketype.set("ground", "#A0522D");
poketype.set("dark", "#363636");
poketype.set("water", "#00BFFF");
poketype.set("fighting", "#800000");
poketype.set("poison", "#9400D3");

function clicando(value) {
  const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //o que fazer com o Json

      document.getElementById("nome").innerHTML = `${data["name"]}`;

      document.getElementById("numero").innerHTML = `Numero : ${data["id"]}`;

      // pegando o types, quebrando a array
      let { types } = data;
      let tipos = types.map(({ type }) => type);

      //pegando a quantidade de tipos da array, para cada tipo add o nome e o estilo de cor mapeado em poketype
      document.getElementById("stats-container").innerHTML = "";
      for (let i = 0; i < tipos.length; i++) {
        var span = document.createElement("span");
        span.setAttribute("class", "tipos");
        document.getElementById("stats-container").appendChild(span);
        span.innerHTML = tipos[i].name;
        span.style.backgroundColor = poketype.get(tipos[i].name);
      }

      var color1 = poketype.get(tipos[0].name);
      var color2 = poketype.get(tipos[tipos.length - 1].name);

      document.getElementById(
        "container"
      ).style.backgroundImage = `linear-gradient(to bottom right, ${color1} 30%, ${color2} 70%)`;

      poketype.get(tipos);

      let img = data["sprites"]["front_default"];

      document.getElementById("pic").setAttribute("src", img);
      document.getElementById("inset").style.visibility = "visible";
    })
    .catch((erro) => {
      document.getElementById("nome").innerHTML = "Nome/ID Invalido";
    });
}

//chama a função com o input
btn.addEventListener("click", function (e) {
  e.preventDefault();
  input = document.querySelector("#input");
  value = input.value;
  clicando(value);
});

//chama a função com o parametro random
btn2.addEventListener("click", function (random) {
  random.preventDefault();
  value2 = Math.floor(Math.random() * (900 - 1 + 1) + 1);
  clicando(value2);
});

document.getElementById("btn1").onclick = load();
