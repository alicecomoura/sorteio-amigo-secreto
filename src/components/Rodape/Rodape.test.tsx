import { render, screen, fireEvent } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'
import Rodape  from './Rodape'

jest.mock('../../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

jest.mock('../../state/hook/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
})

describe('onde não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    
    test('a brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.queryByRole('button')

        expect(botao).toBeDisabled()
    })
})

describe('onde existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Pedro'])
    })
    test('o sorteio pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.queryByRole('button')

        expect(botao).not.toBeDisabled()
    })

    test('o sorteio foi iniciado', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        //expect(mockNavegacao).toHaveBeenCalledWidth('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})