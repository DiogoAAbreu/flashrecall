import './Footer.css';
import sad from '../../assets/images/sad.png';
import party from '../../assets/images/party.png'

export default function Footer({
    qtdQuestoes,
    listaRespostas,
    concluido }) {

    return (
        <footer className={concluido ? 'concluido' : ''}>
            {concluido && <Concluido listaRespostas={listaRespostas} />}
            {listaRespostas.length}/{qtdQuestoes} CONCLUÍDOS
            <div className='respostas'>
                {listaRespostas.map((resposta, index) => <ion-icon key={index} name={resposta}></ion-icon>)}
            </div>
        </footer>
    )
}

function Concluido({ listaRespostas }) {
    const naoPassou = listaRespostas.includes('close-circle-sharp');
    return (
        <div className='resultado'>
            <img src={naoPassou ? sad : party} />
            <span>{naoPassou ? 'Putz...' : 'Parabéns!'}</span>
            <p>{naoPassou ? 'Ainda faltam alguns... Mas não desanime!' : 'Você não esqueceu de nenhum flashcard!'}</p>
        </div>
    )
}