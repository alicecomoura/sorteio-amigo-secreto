import React from 'react'
import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { ListaDeParticipantes } from './ListaDeParticipantes'
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'

jest.mock('../../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaDeParticipantes />
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listitem')
    
        expect(itens).toHaveLength(0)
    })
})

describe('uma lista preenchida de participantes', () => {
    const participantes = ['Ana', 'Catarina']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaDeParticipantes />
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listitem')
    
        expect(itens).toHaveLength(participantes.length)
    })
})