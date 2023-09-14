import "./style.css"
import React from "react";
import YoutubeEmbed from "../../componentes/Youtube";

import img1 from "../../assets/img/ximagem_sustentabilidade_como-funciona-a-comercializacao-de-credito-de-carbono_ecotax_5.jpg.pagespeed.ic.YlejGfzOy8.jpg"
import img2 from "../../assets/img/gestão-offseting.png"
import img3 from "../../assets/img/servicos-de-armazenamento-em-nuvem.jpg"






export default function VisaoGeral() {
    return (<>
        <script src="../scrpt/VisaoGeral.js" defer></script>

        <div className="geral">
            <section className="grid">

                <div className="graph Month">


                </div>

                <a className="graph Donutleft" href="https://blog.waycarbon.com/2021/10/waycarbon-lanca-modulo-de-gestao-de-offsetting-focado-em-gestao-de-creditos-de-carbono/" target="_blank">
                    <div >
                        <img src={img2} alt="" />
                    </div>
                </a>

                <a className="graph Barsright" href="https://sebrae.com.br/sites/PortalSebrae/como-funciona-a-comercializacao-de-credito-de-carbono,88dbbc6d15757810VgnVCM1000001b00320aRCRD" target="_blank">
                    <div>
                        <img src={img1} alt="" />
                    </div>
                </a>

                <a className="graph Barsleft" href="https://blog.ingrammicro.com.br/cloud-e-solucoes-digitais/servicos-de-armazenamento-em-nuvem/" target="_blank">
                    <div >
                        <img src={img3} alt="" />
                    </div>
                </a>

                <div className="graph Donutright">

                    <YoutubeEmbed className="videoYoutb" embedId="p3j_4-WA8FQ" />

                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/p3j_4-WA8FQ?si=_t_DkMzvvCvMb60L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-me> */}
                </div>

            </section>
        </div>


    </>)
}