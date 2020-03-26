import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoimg from '../../assets/logo.svg';

export default function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            cidade,
            uf
        };

        try {
            const response = await api.post('/dentista', data);
            alert(`Seu ID de acesso ${response.data.id}`);
            
            history.push('/');
        } catch(err) {
            alert('Erro no cadastro. Tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="iDentista" />

                    <h1>Cadastro</h1>
                    <p>Faca o seu cadastro e ajude seus pacientes a encontrar sua clinica.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para a home
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome do Dentista" 
                        value={nome}
                        onChange={ e => setNome(e.target.value) }
                    />
                    <input 
                        placeholder="Email" 
                        value={email}
                        onChange={ e => setEmail(e.target.value) }    
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={cidade}
                            onChange={ e => setCidade(e.target.value) }     
                        />

                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            value={uf}
                            onChange={ e => setUf(e.target.value) }     
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}