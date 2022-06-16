import { atom } from "recoil";

export const listaDePartipantesState = atom<string[]>({
    key: 'listaDePartipantesState',
    default: []
})

export const resultadoDoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoDoAmigoSecreto',
    default: new Map()
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})