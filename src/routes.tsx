import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ContatoList from './pages/ContatoList'
import ContatoForm from './pages/ContatoForm'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/contatos" component={ContatoList}/>
            <Route path="/criarContato"  component={ContatoForm} />
            <Route path="/editarContato/:idEdit"  component={ContatoForm} />
        </BrowserRouter>
    )
}

export default Routes
