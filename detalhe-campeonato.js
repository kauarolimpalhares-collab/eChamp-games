const campeonatos = [
  { id:1, nome:"Copa eChamp Paulista", modalidade:"Futebol", equipes:16, formato:"Mata-mata", status:"Em andamento", temporada:"2026", descricao:"Uma competição estadual com confrontos eliminatórios e 16 equipes em busca do título.", sobre:"A Copa eChamp Paulista reúne equipes de futebol em uma disputa organizada em formato mata-mata. A página concentra as principais informações da competição selecionada.", info:["16 equipes participantes","Confrontos eliminatórios","Resultados registrados no eChamp"] },
  { id:2, nome:"eChamp Arena Cup", modalidade:"Futsal", equipes:12, formato:"Grupos + mata-mata", status:"Inscrições abertas", temporada:"2026", descricao:"Torneio de futsal com fase de grupos e confrontos eliminatórios.", sobre:"A eChamp Arena Cup foi criada para reunir equipes de futsal em uma competição dinâmica, com primeira fase em grupos e etapa final eliminatória.", info:["12 equipes previstas","Fase de grupos + mata-mata","Inscrições abertas"] },
  { id:3, nome:"Desafio eChamp Open", modalidade:"Vôlei", equipes:8, formato:"Pontos corridos", status:"Inscrições abertas", temporada:"2026", descricao:"Competição de vôlei em pontos corridos para oito equipes.", sobre:"O Desafio eChamp Open organiza a disputa entre equipes de vôlei em sistema de pontos corridos, valorizando a regularidade durante toda a competição.", info:["8 equipes previstas","Sistema de pontos corridos","Inscrições abertas"] },
  { id:4, nome:"Copa dos Campeões", modalidade:"Futebol", equipes:16, formato:"Mata-mata", status:"Encerrado", temporada:"2026", descricao:"Copa eliminatória já concluída, com histórico disponível para consulta.", sobre:"A Copa dos Campeões reuniu 16 equipes de futebol em confrontos eliminatórios. A competição está encerrada e permanece disponível para consulta.", info:["16 equipes participantes","Formato mata-mata","Competição encerrada"] },
  { id:5, nome:"eChamp Junior", modalidade:"Futebol", equipes:10, formato:"Grupos", status:"Em andamento", temporada:"2026", descricao:"Campeonato de futebol com dez equipes distribuídas em grupos.", sobre:"O eChamp Junior organiza equipes em grupos e permite acompanhar de forma simples as principais informações da competição.", info:["10 equipes participantes","Disputa em grupos","Competição em andamento"] },
  { id:6, nome:"Liga eChamp 2026", modalidade:"Futsal", equipes:14, formato:"Pontos corridos", status:"Em andamento", temporada:"2026", descricao:"Liga de futsal em pontos corridos com 14 equipes participantes.", sobre:"A Liga eChamp 2026 reúne 14 equipes em uma temporada de pontos corridos, permitindo acompanhar a competição em uma estrutura clara e centralizada.", info:["14 equipes participantes","Sistema de pontos corridos","Temporada 2026"] }
];

const id = Number(new URLSearchParams(window.location.search).get("id")) || 1;
const campeonato = campeonatos.find(c => c.id === id) || campeonatos[0];

document.title = `${campeonato.nome} | eChamp`;
document.getElementById("nome").textContent = campeonato.nome;
document.getElementById("descricao").textContent = campeonato.descricao;
document.getElementById("status").textContent = campeonato.status;
document.getElementById("modalidade").textContent = campeonato.modalidade;
document.getElementById("equipes").textContent = campeonato.equipes;
document.getElementById("formato").textContent = campeonato.formato;
document.getElementById("temporada").textContent = campeonato.temporada;
document.getElementById("sobre").textContent = campeonato.sobre;
document.getElementById("informacoes").innerHTML = campeonato.info.map(item => `<li>${item}</li>`).join("");

document.getElementById("acompanhar").addEventListener("click", () => {
  document.getElementById("mensagem").textContent = `✓ Você escolheu acompanhar ${campeonato.nome}.`;
});
