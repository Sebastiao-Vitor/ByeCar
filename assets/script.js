let Cards = document.querySelectorAll(".Carrocel-list li");
let Info = document.querySelector("popUp");
let index = 0;

function show(increase) {
  index = index + increase;
  index = Math.min(Math.max(index, 0), Cards.length - 1);
  Cards[index].scrollIntoView({ behavior: "smooth" });
}

setInterval(() => {
  if (index === Cards.length - 1) {
    show(index - 2);
  } else {
    show(index + 1);
  }
}, 5000);

const Moto_Card = [
  {
    XButton: "/images/XButton.svg",
    TitleMoto: "Scooter Elétrica Voltz EV1",
    paragraph: "O câmbio de 5 marchas da Scooter oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
    img: "/images/moto1.svg",
    button: "Quero Assinar!",
  },
  {
    XButton: "/images/XButton.svg",
    TitleMoto: "Honda CB 500X",
    paragraph: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
    img: "/images/moto2.svg",
    button: "Quero Assinar!",
  },
];

function InfoCardShow(index) {
  popUp.innerHTML = ""
  popUp.innerHTML = `
  <div class="popup">
    <div class="Info-Card">
      <button class="XButton">
        <img src="${Moto_Card[index].XButton}" alt="Letra X" onclick="InfoCardClose()" />
      </button>
      <h1>${Moto_Card[index].TitleMoto}</h1>
      <p>
        ${Moto_Card[index].paragraph}
      </p>
      <div id="CB500">
        <img src="${Moto_Card[index].img}" alt="Imagem de uma Moto">
      </div>
      <button id="PresButton">${Moto_Card[index].button}</button>
    </div>
  </div>
  `;
  popUp.style.visibility = "visible";
}

function InfoCardClose(index) {
  popUp.style.visibility = "hidden";
}