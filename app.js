const pic = document.getElementById("pic");

const btn = document.getElementById("btn1");

const btn2 = document.getElementById("btn2");

// (index , valor)

var poketype = new Map();
poketype.set("bug", "#ADFF2F");
poketype.set("grass", "#00FF00");
poketype.set("fairy", "#FF69B4");
poketype.set("normal", "#F5F5F5");
poketype.set("dragon", "#00008B");
poketype.set("psychic", "#FF1493");
poketype.set("ghost", "#4B0082");
poketype.set("earth", "#8B4513");
poketype.set("steel", "#708090");
poketype.set("fire", "#FF8C00");
poketype.set("flying", "#E6E6FA");
poketype.set("ice", "#B0E0E6");
poketype.set("electric", "#FFFF00");
poketype.set("rock", "#EEE8AA");
poketype.set("dark", "#363636");
poketype.set("water", "#00BFFF");
poketype.set("fighting", "#800000");
poketype.set("poison", "#A020F0");

function clicando(value) {
  const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //o que fazer com o Json
      document.getElementById("tipo1").innerHTML = "";
      document.getElementById("tipo1").style.backgroundColor = "";
      document.getElementById("nome").innerHTML = `Nome: ${data["name"]}`;
      console.log(`Nome: ${data["name"]}`);
      document.getElementById("numero").innerHTML = `Numero : ${data["id"]}`;
      document.getElementById("tipo").innerHTML = "tipo: ";

      // pegando o types, quebrando a array
      let { types } = data;
      let tipos = types.map(({ type }) => type);

      //pegando a quantidade de tipos da array, para cada tipo add o nome e o estilo de cor mapeado em poketype
      for (let i = 0; i < tipos.length; i++) {
        document.getElementById(`tipo${i}`).innerHTML = tipos[i].name;
        document.getElementById(`tipo${i}`).style.backgroundColor =
          poketype.get(tipos[i].name);
      }

      poketype.get(tipos);

      let img = data["sprites"]["front_default"];

      document.getElementById("pic").setAttribute("src", img);
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
