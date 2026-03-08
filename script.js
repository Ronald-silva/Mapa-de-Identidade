let perguntas = [
  {
    texto: "1. Quando surge um problema você:",
    opcoes: [
      ["Assume o controle imediatamente", "colerico"],
      ["Mobiliza pessoas para resolver", "sanguineo"],
      ["Mantém a calma e evita conflito", "fleumatico"],
      ["Analisa antes de agir", "melancolico"],
    ],
  },

  {
    texto: "2. Em um grupo você geralmente:",
    opcoes: [
      ["Lidera decisões", "colerico"],
      ["Anima e motiva o grupo", "sanguineo"],
      ["Mantém equilíbrio entre as pessoas", "fleumatico"],
      ["Organiza e planeja", "melancolico"],
    ],
  },

  {
    texto: "3. O que mais te motiva?",
    opcoes: [
      ["Resultados e conquistas", "colerico"],
      ["Experiências e pessoas", "sanguineo"],
      ["Paz e estabilidade", "fleumatico"],
      ["Excelência e qualidade", "melancolico"],
    ],
  },

  {
    texto: "4. Seu maior ponto forte:",
    opcoes: [
      ["Determinação", "colerico"],
      ["Comunicação", "sanguineo"],
      ["Paciência", "fleumatico"],
      ["Atenção aos detalhes", "melancolico"],
    ],
  },

  {
    texto: "5. Sob pressão você:",
    opcoes: [
      ["Age rapidamente", "colerico"],
      ["Procura apoio nas pessoas", "sanguineo"],
      ["Mantém a calma", "fleumatico"],
      ["Analisa todas possibilidades", "melancolico"],
    ],
  },

  {
    texto: "6. No trabalho você prefere:",
    opcoes: [
      ["Liderar projetos", "colerico"],
      ["Trabalhar com pessoas", "sanguineo"],
      ["Manter estabilidade", "fleumatico"],
      ["Criar estratégias", "melancolico"],
    ],
  },

  {
    texto: "7. Quando algo dá errado você:",
    opcoes: [
      ["Resolve imediatamente", "colerico"],
      ["Conversa e busca alternativas", "sanguineo"],
      ["Evita conflitos", "fleumatico"],
      ["Analisa o erro", "melancolico"],
    ],
  },

  {
    texto: "8. Você se considera:",
    opcoes: [
      ["Determinado", "colerico"],
      ["Entusiasmado", "sanguineo"],
      ["Tranquilo", "fleumatico"],
      ["Perfeccionista", "melancolico"],
    ],
  },

  {
    texto: "9. Seu estilo de decisão:",
    opcoes: [
      ["Rápido e direto", "colerico"],
      ["Intuitivo", "sanguineo"],
      ["Cauteloso", "fleumatico"],
      ["Analítico", "melancolico"],
    ],
  },

  {
    texto: "10. O que você mais busca na vida?",
    opcoes: [
      ["Conquistas", "colerico"],
      ["Relacionamentos", "sanguineo"],
      ["Harmonia", "fleumatico"],
      ["Propósito e excelência", "melancolico"],
    ],
  },
];

let pontuacao = {
  colerico: 0,
  sanguineo: 0,
  fleumatico: 0,
  melancolico: 0,
};

let atual = 0;

function mostrarPergunta() {
  let quiz = document.getElementById("quiz");

  if (atual >= perguntas.length) {
    mostrarResultado();
    return;
  }

  let p = perguntas[atual];

  let html = `<div class="pergunta">${p.texto}</div>`;

  p.opcoes.forEach((op) => {
    html += `<button onclick="responder('${op[1]}')">${op[0]}</button>`;
  });

  quiz.innerHTML = html;
}

function responder(tipo) {
  pontuacao[tipo]++;

  atual++;

  mostrarPergunta();
}

function mostrarResultado() {
  let perfil = Object.keys(pontuacao).reduce((a, b) =>
    pontuacao[a] > pontuacao[b] ? a : b,
  );

  let texto = "";

  if (perfil == "colerico") {
    texto =
      "Perfil Colérico: liderança, foco em resultados e alta capacidade de execução.";
  }

  if (perfil == "sanguineo") {
    texto =
      "Perfil Sanguíneo: comunicativo, entusiasta e excelente em conexão com pessoas.";
  }

  if (perfil == "fleumatico") {
    texto =
      "Perfil Fleumático: equilibrado, paciente e ótimo em manter harmonia.";
  }

  if (perfil == "melancolico") {
    texto =
      "Perfil Melancólico: analítico, detalhista e orientado à excelência.";
  }

  document.getElementById("quiz").style.display = "none";

  let r = document.getElementById("resultado");

  r.style.display = "block";

  r.innerHTML = `
<h2>Seu perfil dominante:</h2>
<h3>${perfil.toUpperCase()}</h3>
<p>${texto}</p>
<p><b>Este é um protótipo de sistema de diagnóstico de identidade.</b></p>
`;
}

mostrarPergunta();
