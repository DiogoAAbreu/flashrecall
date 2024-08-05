import './Conteudo.css'
import Home from '../Home/Home'
import Perguntas from '../Perguntas/Perguntas'
import { useState } from 'react'

export default function Conteudo() {
    const [escondido, setEscondido] = useState(false)

    function esconderTela() {
        setEscondido(!escondido);
    }
    return (
        <div className='conteudo'>
            <Home escondido={escondido} esconderTela={esconderTela} />
            <Perguntas escondido={escondido} esconderTela={esconderTela} />
        </div>
    )
}