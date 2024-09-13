import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../routes';

describe('Componente <App />', () => {
  test('Deve permitir adicionar uma transação em Extrato', () => {
    render(<App />, { wrapper: BrowserRouter });

    const select = screen.getByRole('combobox');
    const campoValor = screen.getByPlaceholderText('Digite um valor');
    const botao = screen.getByRole('button');

    userEvent.selectOptions(select, ['Depósito']);
    userEvent.type(campoValor, '100');
    userEvent.click(botao);

    const novaTransacao = screen.getByTestId('lista-transacoes');
    const itemExtrato = screen.getByRole('listitem');

    expect(novaTransacao).toContainElement(itemExtrato);
  });
  test('Deve navegar até a pagina correspondente ao link clicado', async () => {
    render(<AppRoutes />, { wrapper: BrowserRouter });

    const linkPaginaCartoes = screen.getByText('Cartões');
    expect(linkPaginaCartoes).toBeInTheDocument();

    userEvent.click(linkPaginaCartoes);

    const tituloPaginaCartoes = await screen.findByText('Meus cartões');

    expect(tituloPaginaCartoes).toBeInTheDocument();
  });
  test('Deve navegar até a pagina de Investimentos', async () => {
    render(<AppRoutes />, { wrapper: BrowserRouter });
    const linkPaginaInvestimentos = screen.getByText('Investimentos');
    expect(linkPaginaInvestimentos).toBeInTheDocument();

    userEvent.click(linkPaginaInvestimentos);

    const textoDeRendaVariável = await screen.findByText('Renda variável');

    expect(textoDeRendaVariável).toBeInTheDocument();
  });
});
