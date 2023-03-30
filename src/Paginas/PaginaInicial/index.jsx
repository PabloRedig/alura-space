import Cabecalho from "../../Componentes/Cabecalho";
import Menu from "../../Componentes/Menu";
import banner from "./banner.png"
import styles from "./PaginaInicial.module.scss"

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                <Menu />
                <div className={styles.principal__imagem}>
                    <h1>A galeria mais completa do Espaço</h1>
                    <img src={banner} alt="A imagem da terra vista do Espaço" />
                </div>
                </section>
            </main>

        </>
    )
}