import logo from '../../assets/images/logo.png'
import './Home.css'

export default function Home({ escondido, esconderTela }) {

    return (
        <div className={`home ${escondido ? 'escondido' : ''}`}>
            <img className="img-home" src={logo} />
            <h1>FlashRecall</h1>
            <div className='botao' onClick={esconderTela}>Iniciar Recall!</div>
        </div>
    )
}

