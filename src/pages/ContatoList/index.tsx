import React, { useState, useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import './styles.css'
import ContatoItem, { Contato } from '../../components/ContatoItem'
import api from '../../services/api'

function ContatoList() {
    const [contatos, setContatos] = useState([{nome:'vitor',email:'teste',telefone:'80808800',id:2},{nome:'vitor',email:'teste',telefone:'80808800',id:3},{nome:'vitor',email:'teste',telefone:'80808800',id:1}])

    useEffect(() => {
        async function listarContatos() {
            const response = await api.get('contato/')
            setContatos(response.data)
        }
        
        listarContatos()

    } ,[])
    
   

    return (
        <div id="page-contato-list" className="container">
            <PageHeader title="Estes são os contatos disponíveis.">
            </PageHeader>
            <main>
                {contatos.map((contato: Contato) => {
                    return <ContatoItem key={contato.id } contato={contato} />
                })}
            </main>
        </div>
    )
}

export default ContatoList