import './Footer.css'
export default function Footer({ qtdQuestoes, listaRespostas }) {
    return (
        <footer>
            <Respostas qtdQuestoes={qtdQuestoes} listaRespostas={listaRespostas} />
        </footer>
    )
}

function Concluido() {
    return (
        <>
        </>
    )
}

function Respostas({ qtdQuestoes, listaRespostas }) {
    return (
        <>
            {listaRespostas.length}/{qtdQuestoes} CONCLUÍDOS
            <div className='respostas'>
                {listaRespostas.map(resposta => <ion-icon name={resposta}></ion-icon>)}
            </div>
        </>
    )
}