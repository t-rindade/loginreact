import "./style.css"
import { IoChevronBackOutline } from "react-icons/io5";

export default function NovaSenha() {

    return (<>
        <a id="return" href="../esqueceuSenha/index.html" ><IoChevronBackOutline/></a>
        <h2>Esqueceu a Senha ?</h2>
        <p className="texto">Insira a sua nova senha, repita sua senha e confirme para finalizar.</p>
        <input className="caixa_1" type="password" placeholder="n o v a   s e n h a"/>
        <input className="caixa_2" type="password" placeholder="c o n f i r m e   a   s e n h a"/>
        <a className="confmSenha1" href="../home/index.html">
            <button className="confmSenha2">Avançar</button>
        </a>
    </>)
}