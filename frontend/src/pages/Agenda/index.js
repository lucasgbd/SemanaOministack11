import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoimg from '../../assets/logo.svg';

export default function Agenda() {
    const [agendas, setAgendas] = useState([]);

    const sessionId = localStorage.getItem('sessionId');
    const sessionNome = localStorage.getItem('sessionNome');

    const history = useHistory();

    useEffect(() => {

        api.get('agenda', {
            headers: {
                Authorization: sessionId
            }
        }).then(response => {
            setAgendas(response.data);
        });

    }, [sessionId]);

    async function handleDeleteIncident(id) {
        try{
            await api.delete(`/agenda/${id}`, {
                headers: {
                    Authorization: sessionId
                }
            });

            setAgendas(agendas.filter(agenda => agenda.id !== id));
        }
        catch (err){
            alert('Erro ao deletar agenda. Tente novamente.');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="agenda-container">
            <header>
                <img src={logoimg} alt="iDentista" />
                <span>Bem vindo, {sessionNome}</span>

                <Link className="button" to="/agenda/new">Cadastrar nova agenda</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Agendas cadastradas</h1>

            <ul>
                { agendas.map(agenda => (
                    <li key={agenda.id}>
                        <strong>Descricao:</strong>
                        <p>{agenda.descricao}</p>

                        <strong>Dentista:</strong>
                        <p>{agenda.nome}</p>

                        <strong>Criado em:</strong>
                        <p>{ agenda.criadoEm }</p>

                        <button type="button" onClick={() => handleDeleteIncident(agenda.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};