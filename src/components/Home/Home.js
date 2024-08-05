import logo from '../../assets/images/logo.png'
import './Home.css'

export default function Home({ escondido, esconderTela }) {

    return (
        <div className={`home escondido ${escondido ? 'escondido' : ''}`}>
            <img src={logo} />
            <h1>ZapRecall</h1>
            <div className='botao' onClick={esconderTela}>Iniciar Recall!</div>
        </div>
    )
}

