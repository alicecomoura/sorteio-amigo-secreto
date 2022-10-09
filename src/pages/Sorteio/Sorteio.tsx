import { useState } from 'react'
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'
import { useResultadoDoSorteio } from '../../state/hook/useResultadoDoSorteio'

import './styles.css'

const Sorteio = () => {
    const participantes = useListaDeParticipantes()

    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')


    const resultado = useResultadoDoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return (
        <section className="sorteio__box">
            <h1>Selecione um nome para sortear</h1>
            <form onSubmit={sortear}>
                <h2>O participante da vez:</h2>
                <select 
                    required
                    name='participantesAtual'
                    id='participantesAtual'
                    placeholder='Selecione o seu nome'
                    value={participanteDaVez}
                    onChange={(evento) => setParticipanteDaVez(evento.target.value)}
                >
                    <option>
                        Selecione um nome
                    </option>
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}

                </select>
                <button>
                    Sortear
                </button>
            </form>
            {amigoSecreto && <p role='alert'>tirou <span>{amigoSecreto}</span></p>}
        </section>
    )
}

export default Sorteio