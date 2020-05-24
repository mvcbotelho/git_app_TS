import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/git_logo.svg';

import { Title, Form, Repositories } from './styled';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo da aplicação" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/7614138?s=460&u=e337a9050f6d807f2833ba2ad4ed74c852183672&v=4"
            alt="Foto do usuário"
          />
          <div>
            <strong>Marcus</strong>
            <p>Descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
