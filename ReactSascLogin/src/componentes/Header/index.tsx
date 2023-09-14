import './style.css';

import Logo from "../../assets/img/Design_sem_nome-removebg-preview.png"
export default function Header(){
    
    return(<>
     <div className="cabecalho">
                <img src={Logo} alt="logo"/>
                <label >
                    <input type="checkbox" id= "checkbox" className="checkbox"/>
                    <span id="checkbox2">
                        <i></i>
                    </span>
                </label>
            </div>      
    </>)

}