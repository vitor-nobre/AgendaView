import React, { useState, useEffect, FormEvent } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import warningIcon from '../../assets/images/icons/warning.svg'
import './styles.css'
import Input from '../../components/Input'
import api from '../../services/api'

function ContatoForm() {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const { idEdit } = useParams<{ idEdit?: string | undefined; }>()
    const history = useHistory()

    useEffect(() => {

        if (idEdit) {
            setId(idEdit)
            findContato()
        }
    }, [])

    async function findContato() {
        const { data } = await api.get(`contato/${id}`)
        if (data) {
            const contato = data[0]
            setId(contato.id)
            setNome(contato.nome)
            setEmail(contato.email)
            setTelefone(contato.telefone)
        }
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault()
        if (nome && (email || telefone)) {
            api.post('contato/', {
                id,
                nome,
                email,
                telefone,
            }).then(() => {
                alert('cadastro realizado')
                history.push('/')
            }).catch(() => {
                alert('erro')
            })
        }
    }

    return (
        <div id="page-contato-form" className="container">
            <PageHeader
                title="Contato"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name="name"
                            label="Nome Completo"
                            value={nome}
                            onChange={(event) => { setNome(event.target.value) }}
                        />
                        <Input
                            name="email"
                            label="Email"
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                        <Input
                            name="telefone"
                            label="Telefone"
                            value={telefone}
                            onChange={(event) => { setTelefone(event.target.value) }}
                        />
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Contato
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default ContatoForm