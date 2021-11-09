import React, { FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import smileIcon from '../../assets/images/icons/smile.svg'
import './styles.css'
import api from '../../services/api'

export interface Contato {
    "id": number,
    "nome": string,
    "email": string,
    "telefone": string,
}

interface ContatoItemProps {
    contato: Contato
}

const ContatoItem: React.FC<ContatoItemProps> = ({ contato }) => {
    const history = useHistory()
    async function deleteContato(e: FormEvent) {
        e.preventDefault()
        await api.delete(`contato/${contato.id}`)
        history.push('/')
    }
    function editarContato(e: FormEvent) {
        e.preventDefault()
        history.push(`editarContato/${contato.id}`)
        console.log(1)
    }
    return (
        <article className="contato-item">
            <header>
                <img src={smileIcon} alt="icone" />

                <div>
                    <strong>{contato.nome}</strong>
                    <span>{contato.email}</span>
                    <p>{contato.telefone}</p>

                </div>
                <form id="editar-contato" onSubmit={editarContato}>
                    <button type="submit">
                        Editar
                    </button>
                </form>
                <form id="deletar-contato" onSubmit={deleteContato}>
                    <button type="submit">
                        Deletar
                    </button>
                </form>
            </header>

        </article>
    )
}

export default ContatoItem