import shuffle from 'just-shuffle'
import { useSetRecoilState } from 'recoil'
import { resultadoDoAmigoSecreto } from '../atom'
import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const useSorteador = () => {
    const participantes = useListaDeParticipantes()

    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto)

    return () => {
        const totalDeParticipante = participantes.length

        const embaralhado = shuffle(participantes)

        const resultado = new Map<string, string>()

        for(let index = 0; index < totalDeParticipante; index++) {
            const indiceDoAmigo = index === (totalDeParticipante - 1) ? 0 : index + 1

            resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])

        }

        setResultado(resultado)
    }
}