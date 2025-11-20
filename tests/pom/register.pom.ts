//Imports
import { type Page, type Locator, expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';
//End imports

//Consts
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const address = faker.location.streetAddress();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    const gender = 'Male';
    const cricket =  'checked';
    const skills = 'Java';
    const countries = 'Select Country';
    const year = '2011';
    const month = 'March';
    const day = '11';
    const firstPassword = 'Senha123!';
    const secondPassword = firstPassword;
//End consts

//Class
export class RegisterPage {
    public name = "RegisterPage";
    
    //Locators
        readonly page: Page;
        //readonly registerURL: Locator;
        readonly firstNameInput: Locator;
        readonly lastNameInput: Locator;
        readonly addressInput: Locator;
        readonly emailInput: Locator;
        readonly phoneInput: Locator;
        readonly genderRadio: Locator;
        readonly cricketCheckbox: Locator;
        readonly skillsSelect: Locator;
        readonly countriesSelect: Locator;
        readonly yearSelect: Locator;
        readonly monthSelect: Locator;
        readonly daySelect: Locator;
        readonly firstPasswordInput: Locator;
        readonly secondPasswordInput: Locator;
    //End Locators

    constructor(page: Page, name = 'RegisterPage POM') {
        this.page = page;
        this.name = name;

        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.addressInput = page.locator('textarea[ng-model="Adress"]');
        this.emailInput = page.locator('input[type="email"]');
        this.phoneInput = page.locator('input[type="tel"]');
        this.genderRadio = page.getByRole('radio', { name: gender, exact: true });
        this.cricketCheckbox = page.locator('#checkbox1');
        this.skillsSelect = page.locator('#Skills');
        this.countriesSelect = page.locator('#countries');
        this.yearSelect = page.locator('#yearbox');
        this.monthSelect = page.locator('select[placeholder="Month"]');
        this.daySelect = page.locator('#daybox');
        this.firstPasswordInput = page.locator('#firstpassword');
        this.secondPasswordInput = page.locator('#secondpassword');
    //End locators
    }
    async goto() {
        await this.page.goto('https://demo.automationtesting.in/Register.html');
    }

    async fillRegisterForm() {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.addressInput.fill(address);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.genderRadio.check();
        await this.cricketCheckbox.check();
        await this.skillsSelect.selectOption(skills);
        await this.countriesSelect.selectOption(countries);
        await this.yearSelect.selectOption(year);
        await this.monthSelect.selectOption(month);
        await this.daySelect.selectOption(day);
        await this.firstPasswordInput.fill(firstPassword);
        await this.secondPasswordInput.fill(secondPassword);
    }

    async submit() {
        await this.page.click('#submitbtn');
    }
}
//End Class
test.beforeEach(async ({ page }) => {
    const register: RegisterPage = new RegisterPage(page);
    await register.goto();
});