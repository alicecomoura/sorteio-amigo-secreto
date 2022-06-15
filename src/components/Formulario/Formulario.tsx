import { useRef, useState } from "react"

import { useAdicionarParticipantes } from '../../state/hook/useAdicionarParticipantes'

const Formulario = () => {
    const adicionarParticipantes = useAdicionarParticipantes()

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarParticipamentes = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarParticipantes(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (
        <form onSubmit={adicionarParticipamentes}>
            <input
                ref={inputRef}
                type='text'
                value={nome}
                onChange={evento => setNome(evento.target.value)} 
                placeholder='Insira os nomes dos participantes'
            />

            <button disabled={!nome}>
                Adicionar
            </button>
        </form>
    )
}

export default Formulario