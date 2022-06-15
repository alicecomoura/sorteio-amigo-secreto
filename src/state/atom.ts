import { atom } from "recoil";

export const listaDePartipantesState = atom<string[]>({
    key: 'listaDePartipantesState',
    default: []
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})