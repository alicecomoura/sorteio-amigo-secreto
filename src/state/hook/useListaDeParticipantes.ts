import { useRecoilValue } from "recoil"
import { listaDePartipantesState } from '../atom'

export const useListaDeParticipantes = () => {
    return useRecoilValue(listaDePartipantesState)
}