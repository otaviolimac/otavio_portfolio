import styles from '../styles/Footer.module.css';

interface FooterProps {
    footerhero?: boolean;
    inside?: boolean;
}

function Footer({ footerhero, inside }: FooterProps) {
    return (
        <footer className={
                footerhero
                ? `${styles.footer_herosection} footer_herosection`
                : inside
                ? styles.inside
                : `${styles.footer} footer`
            } >
            <p className='text'>Direitos autorais 2025 · Criado por Otávio</p>
            <a className='a' href="mailto:otavio.lima.co@gmail.com">otavio.lima.co@gmail.com</a>
        </footer>
    );
}

export default Footer;