import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RegisterPage } from '../pom/register.pom';

const url = 'https://demo.automationtesting.in/Register.html';

test('Cadastro simples na aba Register', async ({ page }) => {
  await page.goto(url);

  // Preenche os campos obrigatórios
  const registerPage = new RegisterPage(page);
  await registerPage.fillRegisterForm();

  // Envia o formulário
  await registerPage.submit();
  // Validação simples: verifica se foi redirecionado
  await expect(page).toHaveURL(/WebTable/);
});
