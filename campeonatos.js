const campeonatos = [
  { id: 1, nome: "Copa eChamp Paulista", modalidade: "Futebol", equipes: 16, formato: "Mata-mata", status: "andamento", statusTexto: "Em andamento" },
  { id: 2, nome: "eChamp Arena Cup", modalidade: "Futsal", equipes: 12, formato: "Grupos + mata-mata", status: "inscricoes", statusTexto: "Inscrições abertas" },
  { id: 3, nome: "Desafio eChamp Open", modalidade: "Vôlei", equipes: 8, formato: "Pontos corridos", status: "inscricoes", statusTexto: "Inscrições abertas" },
  { id: 4, nome: "Copa dos Campeões", modalidade: "Futebol", equipes: 16, formato: "Mata-mata", status: "encerrado", statusTexto: "Encerrado" },
  { id: 5, nome: "eChamp Junior", modalidade: "Futebol", equipes: 10, formato: "Grupos", status: "andamento", statusTexto: "Em andamento" },
  { id: 6, nome: "Liga eChamp 2026", modalidade: "Futsal", equipes: 14, formato: "Pontos corridos", status: "andamento", statusTexto: "Em andamento" }
];

const lista = document.getElementById("listaCampeonatos");
const busca = document.getElementById("busca");
const status = document.getElementById("status");
const resultado = document.getElementById("resultadoBusca");
const vazio = document.getElementById("vazio");

function renderizar() {
  const termo = busca.value.toLowerCase().trim();
  const filtroStatus = status.value;
  const filtrados = campeonatos.filter(c => {
    const combinaTexto = c.nome.toLowerCase().includes(termo) || c.modalidade.toLowerCase().includes(termo);
    const combinaStatus = filtroStatus === "todos" || c.status === filtroStatus;
    return combinaTexto && combinaStatus;
  });

  lista.innerHTML = filtrados.map(c => `
    <article class="card">
      <div class="card-top"><h2>🏆 ${c.nome}</h2><span class="status">${c.statusTexto}</span></div>
      <p>${c.modalidade} • competição organizada pelo eChamp.</p>
      <div class="dados">
        <div class="dado"><small>Equipes</small><strong>${c.equipes}</strong></div>
        <div class="dado"><small>Formato</small><strong>${c.formato}</strong></div>
      </div>
      <a class="ver" href="detalhe-campeonato.html?id=${c.id}">Ver campeonato →</a>
    </article>
  `).join("");

  resultado.textContent = `${filtrados.length} campeonato(s) encontrado(s).`;
  vazio.hidden = filtrados.length !== 0;
}

busca.addEventListener("input", renderizar);
status.addEventListener("change", renderizar);
renderizar();
