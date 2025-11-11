// RSVPForm.jsx
import React, { useState } from 'react';

const RSVPForm = () => {
    // ESTADO PARA ARMAZENAR O E-MAIL DE DESTINO DO FORMSUBMIT
    const FORM_ENDPOINT = "https://formsubmit.co/carolina.contato85@gmail.com"; 

    // 1. Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        nome: '',
        convidados: 1, 
        mensagem: ''
    });

    // 2. Estado para feedback ao usuário após o envio
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Função para atualizar o estado do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => { 
        e.preventDefault();
        setIsLoading(true);

        // ATENÇÃO: Adicionei um campo 'Assunto' para facilitar a filtragem no seu Gmail
        const dataToSend = {
            _subject: "Confirmação RSVP Casamento Lívia & Carolina", // Assunto do e-mail
            ...formData 
        };

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error("Erro no envio:", response.statusText);
                alert("Ocorreu um erro ao confirmar. Tente novamente ou entre em contato.");
            }
        } catch (error) {
            console.error("Erro na rede:", error);
            alert("Ocorreu um erro na rede. Verifique sua conexão.");
        }
        
        setIsLoading(false);
        
        // Limpa o formulário após sucesso (opcional, remova se quiser manter os dados)
        if (isSubmitted) {
             setFormData({ nome: '', convidados: 1, mensagem: '' });
        }
    };

    if (isSubmitted) {
        return (
            <div style={{ padding: '20px', backgroundColor: '#e8f5e9', color: '#1b5e20', borderRadius: '8px', textAlign: 'center' }}>
                <h3>🎉 Presença Confirmada! 🎉</h3>
                <p>Obrigado(a), **{formData.nome}**! Sua confirmação foi registrada.</p>
                <p>Qualquer alteração, entre em contato!</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="rsvp-form">
            <p>Por favor, confirme sua presença até **23 de Dezembro de 2025** para nos ajudar com a organização.</p>
            
            <label htmlFor="nome">Seu Nome Completo:</label>
            <input 
                type="text" 
                id="nome" 
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required 
                disabled={isLoading}
            />

            <label htmlFor="mensagem">Deixe uma mensagem para os noivos (Opcional):</label>
            <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows="4"
                disabled={isLoading}
            ></textarea>

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Confirmar Presença'}
            </button>
        </form>
    );
};

export default RSVPForm;