import './Pergunta.css';
import setinha from '../../assets/images/setinha.png';
import { useState } from 'react';



export default function Pergunta(
    {
        index,
        questao,
        resposta,
        setListaRespostas,
        listaRespostas,
        setConcluido,
        qtdQuestoes,
        qtdRespostas
    }) {

    const [revelada, setRevelada] = useState(false);
    const [exibirResposta, setExibirResposta] = useState(false);
    const [respondida, setRespondida] = useState(undefined)

    //fazer varios componentes como, Resposta, Questao e alterar de acordo com o status
    return (
        <>
            {revelada ?
                <Revelada
                    questao={questao}
                    resposta={resposta}
                    exibirResposta={exibirResposta}
                    setExibirResposta={setExibirResposta}
                    setListaRespostas={setListaRespostas}
                    listaRespostas={listaRespostas}
                    setRevelada={setRevelada}
                    setRespondida={setRespondida}
                    setConcluido={setConcluido}
                    qtdQuestoes={qtdQuestoes}
                    qtdRespostas={qtdRespostas}
                />
                :
                <NaoRevelada
                    setRevelada={setRevelada}
                    index={index}
                    respondida={respondida}
                />}
        </>
    )
}


function NaoRevelada({
    setRevelada,
    index,
    respondida, }) {

    function revelar() {
        if (!respondida) {
            setRevelada(true)
        }
    }
    return (
        <div onClick={revelar} className='nao-revelada'>
            <p className={respondida}>{`Pergunta ${index + 1}`}</p>
            {!respondida && <ion-icon name="play-outline" ></ion-icon>}
            {respondida === 'errei' && <ion-icon name="close-circle"></ion-icon>}
            {respondida === 'quase' && <ion-icon name="remove-circle"></ion-icon>}
            {respondida === 'acertei' && <ion-icon name="checkmark-circle"></ion-icon>}
        </div>
    )
}

function Revelada({
    questao,
    resposta,
    exibirResposta,
    setExibirResposta,
    setListaRespostas,
    listaRespostas,
    setRevelada,
    setRespondida,
    setConcluido,
    qtdQuestoes,
    qtdRespostas }) {
    return (
        <div className='revelada'>
            {exibirResposta ? <p>{resposta}</p> : <p>{questao}</p>}
            {exibirResposta ?
                <Botoes
                    setListaRespostas={setListaRespostas}
                    listaRespostas={listaRespostas}
                    setRevelada={setRevelada}
                    setRespondida={setRespondida}
                    setConcluido={setConcluido}
                    qtdQuestoes={qtdQuestoes}
                    qtdRespostas={qtdRespostas} />
                :
                <img
                    className='setinha'
                    onClick={() => { setExibirResposta(true) }}
                    src={setinha}
                    alt="virar" />}
        </div>
    )
}

function Botoes({
    setRespondida,
    setListaRespostas,
    listaRespostas,
    setRevelada,
    setConcluido,
    qtdQuestoes,
    qtdRespostas }) {

    function responder(resultado, nameIcon) {
        setRespondida(resultado);
        setListaRespostas([...listaRespostas, nameIcon])
        setRevelada(false)
        console.log(qtdQuestoes, qtdRespostas)
        if ((qtdQuestoes - 1) === qtdRespostas) {
            setConcluido(true)
        }
    }
    return (
        <div className='botoes'>
            <div onClick={() => { responder('errei', 'close-circle-sharp') }} className='nao-lembrei'>
                Não lembrei
            </div>
            <div onClick={() => { responder('quase', 'remove-circle-sharp') }} className='quase-nao-lembrei'>
                Quase não lembrei
            </div>
            <div onClick={() => { responder('acertei', 'checkmark-circle-sharp') }} className='flash'>
                Flash!
            </div>
        </div>
    )
}
