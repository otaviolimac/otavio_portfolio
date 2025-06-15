import ArticleLayout from "../components/ArticleLayout";
import profilePhoto from '../assets/profile_photo.jpeg';

import styles from '../styles/About.module.css';
import blogStyles from '../styles/BlogItem.module.css';

import Typewriter from 'typewriter-effect';
import IconButton from "../components/IconButton";
import { FaGithub } from "react-icons/fa";

function About() {
    return (
        <ArticleLayout 
            title="Sobre"
            inside={true}
            content={
                <>
                <div className={styles.container}>
                    <img className={styles.photo} src={profilePhoto} alt="Profile Photo" />
                    <div className={blogStyles.textColor + ' text'}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                .typeString("Olá, meu nome é Otávio Lima, eu tenho 14 anos e sou apaixonado por tecnologia! Decidi me tornar desenvolvedor pelo meu gosto por jogos e sites, ou tecnologia no geral. Sou brasileiro nativo, sei falar inglês, não fluentemente. Atualmente estou dedicado nos estudos!")
                                .start();
                            }}
                            options={{
                                delay: 30,
                                loop: false,
                            }}
                        />

                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Sempre fui uma pessoa curiosa e apaixonada por tecnologia. Quando eu era jovem, gostava de entender como os sites, aplicativos e jogos funcionavam. Foi essa curiosidade que me fez, aos 12 anos, começar a estudar programação, através do curso do Gustavo Guanabara.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Comecei entendendo como criar páginas, como funcionava o HTML, CSS e as primeiras interações com JavaScript. Depois de um tempo, percebi que não queria só fazer a parte visual, queria entender como as coisas funcionavam por trás, como os dados eram processados e como tudo se conectava.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Hoje trabalho tanto na parte de desenvolvimento de interfaces quanto na parte lógica, criando funcionalidades, resolvendo problemas e buscando sempre criar soluções mais eficientes.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Atualmente, já tenho domínio sobre diversas tecnologias, algumas delas são:</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}><ul><li><strong>TypeScript</strong> - JavaScript com tipagem, que ajuda a escrever códigos mais seguros e organizados.</li><li><strong>React</strong> - Framework front-end usado para criar interfaces modernas e interativas.</li><li><strong>SQL</strong> - Linguagem usada para trabalhar com bancos de dados relacionais. Com SQL você consegue inserir, buscar, atualizar e deletar dados em tabelas de forma organizada.</li><li><strong>Node</strong> - Ambiente que permite rodar JavaScript no servidor, usado para criar APIs, servidores e lógica de back-end.</li></ul></span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Também me aprofundei em lógica de programação, estruturação de projetos e construção de APIs.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Uma coisa que sempre me ajudou foi estudar inglês desde cedo. Isso me abriu portas para acessar documentações, conteúdos, vídeos e me comunicar melhor, o que facilita muito na área de tecnologia.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Gosto de aprender coisas novas o tempo todo. Sempre estou estudando, criando projetos, testando ideias e buscando melhorar tanto minhas habilidades técnicas quanto minha visão como desenvolvedor. Meu objetivo é continuar evoluindo, construir projetos cada vez mais profissionais e, no futuro, poder trabalhar em grandes empresas, quem sabe até fora do país.</span>
                        <span style={{marginTop: '30px'}} className={blogStyles.span + ' text'}>Foi assim que cheguei até aqui, e é assim que sigo: com muita disciplina, curiosidade e vontade de sempre aprender mais.</span>
                        <span style={{marginTop: '30px', marginBottom: '30px'}} className={blogStyles.span + ' text'}>Irei deixar meu GitHub aí em baixo para que você possa ver meus outros projetos, ou fazer networking comigo!</span>
                    </div>
                    <IconButton
                    icon={<FaGithub color="white" size={24} />}
                    backgroundColor="#1c1c1c"
                    borderColor="#1c1c1c"
                    to={"https://github.com/otaviolimaco"}
                />
                </div>
                </>
            }
        />
    )
}

export default About;