import { useRecoilValue, useSetRecoilState } from 'recoil'
import { erroState, listaDePartipantesState } from '../atom'

export const useAdicionarParticipantes = () => {
    const setLista = useSetRecoilState(listaDePartipantesState)
    const lista = useRecoilValue(listaDePartipantesState)

    const setErro = useSetRecoilState(erroState)

    return (nomeDoParticipante: string) => {
        if(lista.includes(nomeDoParticipante)) {
            setErro('Nomes duplicados não são permitidos!')
            return
        }

        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}