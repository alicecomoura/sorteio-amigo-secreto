import { useNavigate } from 'react-router-dom'
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'

const Rodape = () => {
    const navigate = useNavigate()
    const participantes = useListaDeParticipantes()

    const iniciarSorteio = () => {
        navigate('/sorteio')
    }

    return (
        <footer>
            <button disabled={participantes.length < 3} onClick={iniciarSorteio}>
                Iniciar sorteio
            </button>
        </footer>
    )
}

export default Rodape