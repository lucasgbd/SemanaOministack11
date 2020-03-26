import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoimg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NovaAgenda() {
    const history = useHistory();

    const [descricao, setDescricao] = useState('');

    const sessionId = localStorage.getItem('sessionId');

    async function handleNovaAgenda(e) {
        e.preventDefault();

        const data = {
            descricao
        }

        try {
            await api.post('/agenda', data, {
                headers: {
                    Authorization: sessionId
                }
            });

            history.push('/agenda');
        }
        catch(err){
            alert('Erro ao cadastrar agenda. Tente novamente.');
        }
    }

    return (
        <div className="nova-agenda-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="iDentista" />

                    <h1>Cadastrar nova agenda</h1>
                    <p>Cadastre uma nova agenda e mantenha suas consultas organizadas.</p>

                    <Link className="back-link" to="/agenda">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handleNovaAgenda}>
                    <input 
                        placeholder="Titulo da agenda" 
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}