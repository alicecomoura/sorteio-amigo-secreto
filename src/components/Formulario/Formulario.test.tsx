import React from 'react' 
import { render, screen, fireEvent } from '@testing-library/react'
import Formulario from './Formulario'
import { RecoilRoot } from 'recoil'

// Jest

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario />)
    
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    // encontrar o botão
    const botao = screen.getByRole('button')

    // garantir que o input esteja n o documento
    expect(input).toBeInTheDocument()
    
    // garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()

})

test('adiciona um participamente caso exista um nome preenchido', () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>
    )
    
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    // encontrar o botão
    const botao = screen.getByRole('button')

    // inserir um valor no input 
    fireEvent.change(input, {
        target: {
            value: 'Ana Catarina'
        }
    })

    // clicar no botão de submeter
    fireEvent.click(botao)

    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus()

    // garantir que o input não tenha valor
    expect(input).toHaveValue('')
    
})