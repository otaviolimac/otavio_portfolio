import ArticleLayout from "../components/ArticleLayout";
import CodeBlock from "../components/CodeBlock";
import styles from '../styles/About.module.css';
import blogStyles from '../styles/BlogItem.module.css'

function Tech() {
    return (
        <ArticleLayout 
            title={"Como comecei na área?"}
            inside={true}
            content={
                <div className={styles.container}>
                <div className={styles.text}>
                    <span className={blogStyles.span + ' text'}>Desde pequeno, sempre tive curiosidade por tecnologia, jogos e sites. Sempre ficava me perguntando como aquilo era feito, como funcionava por trás. Com 12 anos comecei a realmente estudar, fazendo o curso de JavaScript do Gustavo Guanabara, do Curso em Vídeo.</span>
                    <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Comecei entendendo como os sites eram construídos com HTML e CSS, mas logo percebi que não era só aparência. Existia lógica por trás de tudo. Foi quando comecei a estudar JavaScript e a entender que podia fazer o site reagir, tomar decisões e executar ações.</span>
                    <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Uma das primeiras coisas que aprendi foi trabalhar com condições. A ideia de: “se acontecer isso, então faça aquilo.”</span>
                    <CodeBlock language="JavaScript" code={
`
let idade = 12;

if (idade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}`} />
                    <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Ver esse código funcionando me fez entender que programar é basicamente ensinar o computador a pensar, seguir regras e tomar decisões.</span>
                    <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Depois de aprender sobre condições, comecei a entender funções. Uma função é basicamente um pedaço de código que você cria para executar uma tarefa sempre que quiser, sem precisar repetir o mesmo código várias vezes.</span>
                    <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Por exemplo, algo que me ajudou muito a fixar esse conceito foi criar uma função que verifica se um número é par ou ímpar.</span>
                     <CodeBlock language="JavaScript" code={
`
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " é par");
  } else {
    console.log(numero + " é ímpar");
  }
}

verificarParOuImpar(7);
verificarParOuImpar(10);
`} />
                    <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Esse tipo de lógica, que parece simples, foi o que me fez perceber que dava pra automatizar tarefas, criar ferramentas, sistemas e tudo aquilo que eu via na internet.</span>
                    <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>A cada coisa nova que aprendia, minha cabeça abria mais. O que antes parecia impossível, começou a fazer sentido. Aprendi que errar faz parte, que quebrar a cabeça faz parte, e que todo problema tem solução se você tiver paciência e continuar tentando.</span>
                    <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Foi assim que comecei na programação. Por curiosidade, tentando entender como tudo funcionava, testando, errando, melhorando e, principalmente, nunca parando de aprender.</span>
                </div>
                </div>
            }
        />
    )
}

export default Tech;