import "./style.css"
import img2Fundo from "../../assets/img/img_fundo-removebg-preview.png"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NovaSenha from "../../pages/NovaSenha";
import Login from "../../pages/Login"
import EsqueceuSenha from "../../pages/EsqueceuSenha/Index";

export default function Fundo() {

    return (<>
        <div className="todaBosta">
            <section className="esquerdinha" >
                <div className="pagina_esquerda" id="pagina_esquerda">
                    <Routes>
                        <Route path='/' element={<Login/>} />
                        <Route path='EsqueceuSenha' element={<EsqueceuSenha/>} />
                        <Route path='NovaSenha' element={<NovaSenha/>} />
                    </Routes>
                </div>
            </section>

            <section className="ladoDireito" >
                <div className="pagina_direita">
                    <p className="pagina_direita_texto">
                            Economize energia<br/>
                            reduza emissões GEE,<br/>
                            conecte-se com o <br/>
                            futuro sustentável.</p>
                    <img src={img2Fundo} alt="img_fundo"/>
                </div>
            </section>
        </div>
    </>)
}