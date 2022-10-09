import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'

import './styles.css'

const ListaDeParticipantes = () => {
    const participantes: string[] = useListaDeParticipantes()

    return (
        <ul className="list">
            <h2>Partipantes: {participantes.length}</h2>
            {participantes.map(participante => <li key={participante}>{participante}</li>)}
        </ul>
    )
}

export default ListaDeParticipantes