import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';

import { FaCopy } from "react-icons/fa";

import styles from '../styles/CodeBlock.module.css';

interface CodeBlockProps {
  code: string;
  language?: string;
}

function CodeBlock({ code, language = 'typescript' }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles.container + ' container'} style={{ position: 'relative' }}>
      {language && <div className={styles.languageLabel + ' language'}>{language}</div>}
      <pre className={`language-${language} ${styles.pre}`}>
        <code ref={codeRef} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
      <button onClick={copyToClipboard} className={styles.button + ' button'}>
        {copied ? (
            <>
                <FaCopy style={{ width: '10px' }} /> Copiado!
            </>
        ) : (
            <>
                 <FaCopy style={{ width: '10px' }} /> Copiar
            </>
        )}
      </button>
    </div>
  );
}

export default CodeBlock;