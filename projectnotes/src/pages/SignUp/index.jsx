
import {FiUser, FiMail, FiLock} from 'react-icons/fi';

import {Link} from 'react-router-dom';

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import {Container, Form, Background} from './styles';

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Project Notes</h1>
        <p>Uma aplicação para gerenciamento de notas e lembretes.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser}></Input>

        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha" type="password" icon={FiLock}></Input>
         
       <Button title="Cadastrar" />

        <Link to="/">
          Voltar para o login
        </Link>

      </Form>
    </Container>
  );
}

