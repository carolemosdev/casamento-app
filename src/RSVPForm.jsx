import { useState } from "react";

const RSVPForm = () => {
  const FORM_ENDPOINT = "https://formsubmit.co/carolina.contato85@gmail.com";

  const [formData, setFormData] = useState({
    nome: "",
    mensagem: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const dataToSend = {
      _subject: "Confirmação RSVP Casamento Lívia & Carolina",
      ...formData,
    };

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Ocorreu um erro ao confirmar. Tente novamente.");
      }
    } catch (error) {
      alert("Erro na conexão. Verifique sua internet.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rsvp-form" style={{ textAlign: "center" }}>
        <h3>🎉 Presença Confirmada!</h3>
        <p>
          Obrigado(a), <strong>{formData.nome}</strong>! Sua confirmação foi
          registrada com sucesso.
        </p>
        <p>Qualquer alteração, entre em contato com os noivos 💌</p>
      </div>
    );
  }

  return (
    <div className="rsvp-form">
      <p className="text-center" style={{ marginBottom: "20px" }}>
        Por favor, confirme sua presença até{" "}
        <strong>23 de Novembro de 2025</strong> para nos ajudar com a
        organização.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Seu Nome Completo:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          disabled={isLoading}
          style={{ color: "var(--color-text-body)" }}
        />

        <label htmlFor="mensagem">
          Deixe uma mensagem para os noivos (Opcional):
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          rows="4"
          disabled={isLoading}
          style={{ color: "var(--color-text-body)" }}
        ></textarea>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Confirmar Presença"}
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;
