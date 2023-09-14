import "./style.css"
export default function Login() {

    return(<>
                    <h2>Bem Vindo !</h2>
                    <p className="texto" id="texto">O cliente está muito feliz. Não há nada a ganhar, mas acontecerá que aqueles que são preparados pelo
                        trabalho e aqueles que gostam das coisas as receberão de acordo.</p>
                    <input className="inputPag" id="inputPag" type="text" placeholder="U s u á r i o" /> 
                    <input className="inputPag" id="inputPag2" type="password" placeholder="s  e  n  h  a"/>
                    <a href="../esqueceuSenha/index.html">Esqueceu a Senha?</a>
                    <a className="btnAvan1" href="../VisaoGeral/index.html">
                        <button className="btnEsq" id="btnEsq">Conecte-se</button>
                    </a>

    </>)
}