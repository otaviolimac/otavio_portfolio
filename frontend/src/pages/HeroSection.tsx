import React from 'react';

import { useState } from 'react';

import axios from 'axios';

import styles from '../styles/HeroSection.module.css';
import CustomLink from '../components/CustomLink.tsx';
import Footer from '../components/Footer.tsx';
import Toast from '../components/Toast.tsx';

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import ToggleTheme from '../components/ToggleTheme.tsx';

function HeroSection() {
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState<{ msg: React.ReactNode; type: 'success' | 'error' } | null>(null);

  const showToast = (msg: React.ReactNode, type: 'success' | 'error') => {
    setToast({ msg, type });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      showToast(<><MdError /> Preencha este campo!</>, 'error');
      return;
    }

    try {
      await axios.post('http://localhost:3001/send-email', {
        to: 'otaviolima3005@gmail.com',
        subject: 'Nova mensagem do portfólio',
        message: message,
      });
      showToast(<><FaCheckCircle /> Mensagem enviada!</>, 'success');
      setMessage('');
    } catch (error) {
      showToast(<><MdError /> Algo deu errado.</>, 'error');
    }
  };

  return (
    <>
      <ToggleTheme />
      <section className={styles.hero}>
        {toast && (
          <Toast message={toast.msg} type={toast.type} onClose={() => setToast(null)} />
        )}
        
        <div className={styles.container}>
          <h1 className={styles.title + ' title'}>
            Daew! Eu me chamo Otávio e sou um desenvolvedor de software.
          </h1>
          <p className={styles.description + ' description'}>
            Comecei a estudar lá pra 2023, sou apaixonado por tecnologia, como jogos e sites desde novo. Então comecei a estudar, criando aplicações web modernas, eficientes e escaláveis. Trabalho tanto no front-end quanto no back-end, focando em sistemas que funcionam bem e entregam ótima experiência.
          </p>

          <nav className={styles.nav + ' nav'}>
            <CustomLink text='Sobre' to='/about' />
            <CustomLink text='Blogs' to='/blogs' />
            <CustomLink text='Projetos' to='/projects' />
            <CustomLink text='Redes' to='/networks' />
          </nav>

          <form className={styles.form + ' form'} onSubmit={handleSubmit}>
            <label htmlFor="text">Fale comigo!</label>
            <div className={styles.inputGroup + ' inputGroup'}>
              <input
                type="text"
                placeholder="Mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit"><MdKeyboardArrowRight /></button>
            </div>
          </form>

          <Footer footerhero={true}/>
        </div>
      </section>
    </>
  );
}

export default HeroSection;