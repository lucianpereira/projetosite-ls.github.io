import React, {useState} from "react";
import "./index.css";
import { Form, Button } from "react-bootstrap";

function Contact() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Está tudo certo com seu e-mail!');
    } else {
      setIsValid(false);
      setMessage("Esse não é um e-mail válido");
    }
  };

  return (
    <div className="form">
      <div>
        <h2>Formulário de Contato</h2>
      </div>
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control type="name" placeholder="Digite seu nome" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu e-mail"
              onChange={validateEmail}
            />
            <Form.Text className="text-muted">
              Não compartilharemos esse e-mail com ninguém.
              <div className={`message ${isValid ? "success" : "error"}`}>
                {message}
              </div>
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formGridState">
            <Form.Label>Motivo do Contato</Form.Label>
            <Form.Control as="select" defaultValue="Motivo...">
              <option>Motivo...</option>
              <option>Elogio</option>
              <option>Críticas</option>
              <option>Patrocínios</option>
              <option>Outros</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="LargeBox">
            <Form.Label>Motivo do contato</Form.Label>
            <Form.Control placeholder="Descreva aqui os motivos do contato" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
