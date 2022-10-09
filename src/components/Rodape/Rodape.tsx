import { useNavigate } from 'react-router-dom'
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'
import { useSorteador } from '../../state/hook/useSorteador'

import './styles.css'

const Rodape = () => {
    const navigate = useNavigate()
    const participantes = useListaDeParticipantes()
    const sortear = useSorteador()

    const iniciarSorteio = () => {
        sortear()
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