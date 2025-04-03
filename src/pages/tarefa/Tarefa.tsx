import { useState, useEffect } from "react";

function Tarefa() {
/* controla se a tarefa foi concluída ou não (inicialmente false) */
    const [completed, setCompleted] = useState(false);
    /* armazena o texto da tarefa (inicialmente vazio) */
    const [tarefa, setTarefa] = useState('');

    /* será executado sempre que o estado 'completed' mudar */
    useEffect(() => {
        if (completed) {
          /* Se a tarefa foi concluída (completed = true), atualiza o estado 'tarefa' com a mensagem */
            setTarefa('Parabéns! Você concluiu a tarefa!');
        }
    }, [completed]);

    return (
        <div>
            <h2>Componente Tarefa</h2>
            {/* Exibe a mensagem da tarefa (caso esteja vazia, nada será exibido) */}
            <h3>{tarefa}</h3>
            <p>Conclua a tarefa</p>
             {/* Ao clicar no botão, define 'completed' como true, ativando o useEffect */}
            <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
        </div>
    )
}

/*Exporta o componente para ser utilizado em outras partes da aplicação0 */
export default Tarefa