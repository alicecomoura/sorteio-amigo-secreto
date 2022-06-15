import { atom } from "recoil";

export const listaDePartipantesState = atom<string[]>({
    key: 'listaDePartipantesState',
    default: []
})