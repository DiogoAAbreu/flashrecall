import './Pergunta.css'
import setinha from '../../assets/images/setinha.png'
import { useState } from 'react'



export default function Pergunta(
    {
        index,
        questao,
        resposta,
    }) {

    const [revelada, setRevelada] = useState(false);
    const [exibirResposta, setExibirResposta] = useState(false);

    //fazer varios componentes como, Resposta, Questao e alterar de acordo com o status
    return (
        <>
            {revelada ? <Revelada questao={questao} resposta={resposta} exibirResposta={exibirResposta} setExibirResposta={setExibirResposta} /> : <NaoRevelada setRevelada={setRevelada} index={index} />}
        </>
    )
}

function NaoRevelada({ setRevelada, index }) {
    return (
        <div onClick={() => { setRevelada(true) }} className='nao-revelada'>
            {`Pergunta ${index + 1}`}
            <ion-icon name="play-outline" ></ion-icon>
        </div>
    )
}

function Revelada({ questao, resposta, exibirResposta, setExibirResposta }) {
    return (
        <div className='revelada'>
            {exibirResposta ? <p>{resposta}</p> : <p>{questao}</p>}
            {exibirResposta ? <Botoes /> : <img className='setinha' onClick={() => { setExibirResposta(true) }} src={setinha} />}
        </div>
    )
}

function Resposta(resposta) {
    return (
        <div className='resposta'>
            {resposta}
            <Botoes />
        </div>
    )
}

function Botoes() {
    return (
        <div className='botoes'>
            <div className='nao-lembrei'>
                Não lembrei
            </div>
            <div className='quase-nao-lembrei'>
                Quase não lembrei
            </div>
            <div className='zap'>
                Zap!
            </div>
        </div>
    )
}
