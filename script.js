
const btnTopo = document.getElementById("btnTopo");


window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};


btnTopo.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
};

const btn = document.getElementById("refsbtn");
const texto = document.getElementById("refs");

btn.addEventListener("click", () => {
  texto.classList.toggle("esconder");
  btn.textContent = texto.classList.contains("esconder") ? "Mostrar referências" : "Fechar referências";
});

