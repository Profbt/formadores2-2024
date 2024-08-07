const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Quais são as  soluções que a escola está buscando  para a inclusão social, bem como as questões relacionadas aos direitos dos povos originários e como isso afeta os impactos causados pelo desmatamento ?",
        alternativas: [
            {
                texto: "Técnicas alternativas inovadoras",
                afirmacao:"A escola está explorando técnicas alternativas inovadoras para promover a inclusão social e abordar as questões relacionadas aos direitos dos povos originários."

            },
            {
                texto: "Ensino multidisciplinar",
                afirmacao:"educar os alunos sobre a importância da preservação ambiental e os impactos do desmatamento"
            },
            
        ]
    },
    {
        enunciado: "Qual o papel fundamental dos povos indígenas na luta contra a crise climática e preservação ambiental?",
        alternativas: [
            {
                texto:"Eles têm mostrado que é possível preservar a biodiversidade, manter os serviços ecossistêmicos e acalmar os efeitos das mudanças climáticas.",
                afirmacao:'Suas técnicas ancestrais têm sido eficazes na manutenção da biodiversidade e na proteção dos ecossistemas'
            },
            {
                texto:"Eles protegem e promovem a biodiversidade através de práticas tradicionais de manejo sustentável dos recursos naturais.",
                afirmacao:" A proteção e a gestão de seus territórios garantem a preservação de vastas áreas de florestas"
            },
                        
        ]
    },
    {
        enunciado: "Você acredita que  o conhecimento da cultura desenvolvida nas escola indígenas pode melhorar o entendimento da comunidade  em relação às mudanças climáticas atuais ?",
        alternativas: [
            {
                texto:"Eu acredito que pode ser uma grande contribuição.",
                afirmacao:"Através da educação sobre práticas tradicionais e visões de mundo indígenas, a comunidade pode aprender a interconectar os conhecimentos ancestrais com a ciência climática moderna"
            },

        {
            texto:"O método empregado não é benéfico para o meio ambiente.",
            afirmacao:"Embora promova uma consciência ecológica local, pode não oferecer a base necessária para abordar as questões globais das mudanças climáticas de forma abrangente."
        },
           
       ]
    },
   ];

   let atual = 0;
   let perguntaAtual;
   function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
   }

   function mostraAlternativas() {    
    for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            caixaAlternativas.appendChild (botaoAlternativas);
    }
   }

   const button = document.getElementById('mybutton');
   button.addEventListener('click', function() {
    alert('o botão foi clicado');
   })

   mostraPergunta();

   