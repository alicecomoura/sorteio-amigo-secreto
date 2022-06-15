import { useSetRecoilState } from 'recoil'
import { listaDePartipantesState } from '../atom'

export const useAdicionarParticipantes = () => {
    const setLista = useSetRecoilState(listaDePartipantesState)

    return (nomeDoParticipante: string) => {
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}