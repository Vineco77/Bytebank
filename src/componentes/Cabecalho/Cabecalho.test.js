import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('Deve renderizar o nome do usúario logado', () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText('Vinicius Ribeiro');
  expect(nomeUsuario).toBeInTheDocument();
});
