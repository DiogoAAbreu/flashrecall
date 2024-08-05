import logoP from '../../assets/images/logo-pequeno.png'
import './Perguntas.css'

const questoes = [
    { pergunta: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript' },
    { pergunta: 'O React é __ ', resposta: 'uma biblioteca JavaScript para construção de interfaces' },
    { pergunta: 'Componentes devem iniciar com __', resposta: 'letra maiúscula' },
    { pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões' },
    { pergunta: 'O ReactDOM nos ajuda __', resposta: 'interagindo com a DOM para colocar componentes React na mesma' },
    { pergunta: 'Usamos o npm para __', resposta: 'gerenciar os pacotes necessários e suas dependências' },
    { pergunta: 'Usamos props para __', resposta: 'passar diferentes informações para componentes' },
    { pergunta: 'Usamos estado (state) para __', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' },
]

export default function Perguntas({ escondido, esconderTela }) {
    return (
        <div className={` ${escondido ? 'escondido' : ''}`}>
            <Logo />
            <div className='perguntas'>
                {questoes.map((questao, index) => <Pergunta key={index} index={index} />)}
            </div>
            <Footer qtdQuestoes={questoes.length} />
        </div>
    )
}

function Logo() {
    return (<header className='logo'>
        <img src={logoP} />
        <span>ZapRecall</span>
    </header>)
}

function Pergunta({ index }) {
    return (
        <div className='pergunta'>
            Pergunta {index + 1}
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}

function Footer({ qtdQuestoes }) {
    return (
        <footer>
            0/{qtdQuestoes} CONCLUÍDOS
        </footer>
    )
}

