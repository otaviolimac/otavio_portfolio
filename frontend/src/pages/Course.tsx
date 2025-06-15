import ArticleLayout from "../components/ArticleLayout";
import CodeBlock from "../components/CodeBlock";

import styles from '../styles/About.module.css';
import blogStyles from '../styles/BlogItem.module.css'

function Course() {
    return (
        <ArticleLayout 
            title={"O que pretendo estudar?"}
            inside={true}
            content={
                <div className={styles.container}>
                    <div className={styles.text}>
                        <span className={blogStyles.span + ' text'}>Tenho 14 anos e desde cedo estou focado em construir uma carreira na área de tecnologia. Já fiz vários cursos na Alura, que me ajudaram muito a entender tanto o desenvolvimento front-end quanto o back-end. Além disso, faço curso de inglês na InFlux, por isso já consigo entender inglês tranquilo. Aprendi a trabalhar com bancos de dados relacionais usando SQL, e também com bancos NoSQL, como o MongoDB, que são ótimos para armazenar dados mais flexíveis.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Eu me sinto confortável tanto na criação da parte visual e interativa dos sites e aplicações (front-end), quanto na construção da lógica e servidores que fazem tudo funcionar por trás (back-end). Também estudo inglês para poder acessar conteúdos internacionais, me comunicar melhor e aproveitar mais oportunidades.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Para praticar o que aprendo, criei uma pequena biblioteca em TypeScript que ajuda a manipular arrays de forma simples e eficiente. Vou mostrar três funções que criei, usando recursos do TypeScript para deixar o código mais seguro e fácil de entender.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>A primeira função remove valores duplicados de um array, usando um Set para garantir que cada elemento apareça só uma vez:</span>
                        <CodeBlock language="TypeScript" code={
`
class MeuArrayUtils {
  unique<T>(array: T[]): T[] {
    return Array.from(new Set(array));
  }
}`} />
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>A segunda função divide um array em pedaços menores, de tamanho que eu escolher. Isso é útil quando quero processar listas grandes em partes:</span>
                        <CodeBlock language="TypeScript" code={
`
chunk<T>(array: T[], size: number): T[][] {
    const resultado: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      resultado.push(array.slice(i, i + size));
    }
    return resultado;
}`} />
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>A terceira função “achata” um array que pode ter outros arrays dentro, juntando tudo num único nível, para facilitar o uso depois:</span>
                        <CodeBlock language="TypeScript" code={
`
flatten<T>(array: (T | T[])[]): T[] {
    const resultado: T[] = [];
    array.forEach(item => {
      if (Array.isArray(item)) {
        resultado.push(...item);
      } else {
        resultado.push(item);
      }
    });
    return resultado;
  }
}`} />
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Para conseguir usar essa biblioteca, eu crio um objeto da classe e chamo as seguintes funções:</span>
                        <CodeBlock language="TypeScript" code={
`
const utils = new MeuArrayUtils();

const numeros = [1, 2, 2, 3, 4, 4, 5];
console.log(utils.unique(numeros)); // Saída: [1, 2, 3, 4, 5]

const pedaços = utils.chunk(numeros, 2);
console.log(pedaços); // Saída: [[1, 2], [2, 3], [4, 4], [5]]

const aninhado = [1, [2, 3], 4, [5]];
console.log(utils.flatten(aninhado)); // Saída: [1, 2, 3, 4, 5]
`} />
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Atualmente, eu estou estudando Java, por ser ótima para back-end, multiplataforma, segura, robusta e etc. Na Alura, estou fazendo cursos para que eu aprenda a linguagem da melhor forma possível.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Quero me aprofundar mais na linguagem e acho que, com esforço e disciplina, posso chegar muito longe.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Esse pequeno código que fiz acima foi apenas uma amostra do que sou capaz de fazer. Eu sempre utilizo o auxílio de IA enquanto estou codando, mas não para copiar e colar código, e sim para entender melhor o que estou fazendo.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Acredito que sou capaz de realizar muita coisa e que ainda posso aprender muito. Estudo todos os dias para evoluir e criar projetos que me ajudem a aprender mais e a mostrar o que sei.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Sei que, com disciplina e paixão, posso construir uma carreira sólida, trabalhando como full-stack, usando tecnologias diferentes e aproveitando o inglês para conseguir um emprego fora do meu país.</span>
                    </div>
                </div>
            }
        />
    )
}

export default Course;