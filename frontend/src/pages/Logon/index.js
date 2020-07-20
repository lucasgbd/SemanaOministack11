import React,  { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoimg from '../../assets/logo.svg';
import heroesimg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {

            const response = await api.post('/session', { id })

            localStorage.setItem('sessionId', id);
            localStorage.setItem('sessionNome', response.data.nome);

            history.push('/agenda');
        }
        catch(err){
            alert('Falha no login. Tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt="iDentista Logo" />

                <form onSubmit={handleLogin}>
                    <h1>Faca seu logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        value= {id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Nao tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesimg} alt="iDentista" />
        </div>
    );
}