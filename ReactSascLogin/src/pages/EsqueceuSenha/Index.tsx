import "./style.css"
import { IoChevronBackOutline } from "react-icons/io5";

export default function EsqueceuSenha() {
    return (<>
        <a id="return" href="../esqueceuSenha/index.html" ><IoChevronBackOutline/></a>
        <h2>Esqueceu a Senha ?</h2>
        <p className="texto">Informe o e-mail, número de celular ou nome de usuário associado à sua conta para alterar sua senha.</p>
        <input className="caixa_1" type="text" placeholder="U s u r á r i o" />
        <a className="avancar" href="../novaSenha/index.html"><button>Avançar</button></a>

    </>)
}