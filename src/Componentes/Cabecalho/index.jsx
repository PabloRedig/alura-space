import logo from './logo.png'
import search from './search.png'
import style from './Cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header className={style.cabecalho}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={style.cabecalho__container}>
                <input className={style.cabecalho__input} type="text" placeholder="O que você Procura?" />
                <img src={search} alt="icone Lupa" />
            </div>
        </header>
    )
}