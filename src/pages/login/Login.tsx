/* Importa o hook useState do React para gerenciar o estado do login */
import { useState } from "react";

/* Importa o componente Home para ser exibido após o login */
import Home from "../home/Home";

function Login() {
  /* Define um estado chamado isLogged, que controla se o usuário está logado ou não */
  /* / O valor inicial é 'false', ou seja, o usuário começa deslogado */
    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            {   /* Verifica se o usuário está logado */
                isLogged ? (  
                  /* Se estiver logado, exibe o componente Home com um título e uma mensagem de boas-vindas */
                    <Home
                        titulo="Componente Home "
                        texto="Bem-vindo de Volta!"
                    />
                ) : (
                  /* Se não estiver logado, exibe o formulário de login com um botão "Entrar" */
                    <div>
                        <h2>Componente Login</h2> 
                        <button onClick={() => setIsLogged(true)}>Entrar</button>
                    </div> 
                    /* Ao clicar no botão, altera o estado isLogged para true, mostrando o componente Home */
                )
            }
        </>
    )
}
/* Exporta o componente Login para ser utilizado em outras partes da aplicação */
export default Login