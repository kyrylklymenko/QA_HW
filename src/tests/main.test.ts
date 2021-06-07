import DemoPage from "./pageobjects/Demo.page";
import Panel from "./pageobjects/Demo.panel";
import TravelsPage from "./pageobjects/travels.page";
import LoginPage from"./pageobjects/login.page";
import AccountPage from "./pageobjects/account.page";
import BookingPage from "./pageobjects/booking.page";
import InvoicePage from "./pageobjects/invoice.page";
import loginData from "./data/dummylogindata.json";

let email: string;
let password: string;
let dummyEmail: string = "testmail@gmail.com";
let dummyPassword: string = "qwerty1111";
let targetAdultsCount = 2;

let accountFirstName: string;
let accountLastName: string;
let accountEmail: string;
let accountAddress1: string;
let accountAddress2: string;
let accountPhone: string;



describe('Credentials page', () => {

    it('user is exactly on correct website and saves credentials', () => {
        browser.setTimeout({ 'script': 100000 });
        DemoPage.open();
        expect(browser).toHaveUrl(DemoPage.url);
        const fullCredentials = (Panel.homepage).getText().split("\n");
        email = (fullCredentials[2].split(" ")[1]);
        password = (fullCredentials[3].split(" ")[1]);
        console.log("\n" + email + "\n" + password + "\n");
    });
});

describe('Login page', () => {
    it('login via credentials', () => {
        browser.setTimeout({ 'script': 100000 });
        TravelsPage.open();
        TravelsPage.chooseCurrency("USD");
        TravelsPage.loginDropdownMenu.click();
        TravelsPage.login.click();

        LoginPage.login(loginData.email, loginData.password);
        expect(browser).toHaveUrl(AccountPage.url);

        AccountPage.profileTab.click();
        accountFirstName = AccountPage.firstName.getValue();
        accountLastName = AccountPage.lastName.getValue();
        accountEmail = AccountPage.email.getValue();
        accountAddress1 = AccountPage.address1.getValue();
        accountAddress2 = AccountPage.address2.getValue();
        accountPhone = AccountPage.phone.getValue();

        console.log("\n" + accountFirstName + " " + accountLastName + "\n" + accountEmail + "\n"
        + accountAddress1 + " " + accountAddress2 + "\n" + accountPhone + "\n");
    })
});

describe('Choose the tour', () => {
    it ('Should fill and find the match', () => {
        TravelsPage.open();
        TravelsPage.toursPanel.click();
        TravelsPage.tourLocationSearchbar.click();
        TravelsPage.chooseTour("Big Bus Tour of Dubai");
        TravelsPage.chooseTourType("Ferry");
        TravelsPage.toursDate.setValue("05/07/2021");
        let currentAdultsCount = TravelsPage.toursAdults.getValue();
        console.log("\n\n" + currentAdultsCount + "\n\n");

        while (currentAdultsCount < targetAdultsCount) {
            TravelsPage.toursAdultsIncreaseCount.click();
            currentAdultsCount++;
        }

        while (currentAdultsCount > targetAdultsCount) {
            TravelsPage.toursAdultsDecreaseCount.click();
            currentAdultsCount--;
        }

        TravelsPage.searchTour.click();
        TravelsPage.cookieButton.click();

        BookingPage.bookNow.click();

        let passportName1: string = "Name1";
        let passportNumber1: string = "1111";
        let passportAge1: string = "10";
        let passportName2: string = "Name2";
        let passportNumber2: string = "2222";
        let passportAge2: string = "20";

        BookingPage.passportName1.setValue(passportName1);
        BookingPage.passportNumber1.setValue(passportNumber1);
        BookingPage.passportAge1.setValue(passportAge1);
        BookingPage.passportName2.setValue(passportName2);
        BookingPage.passportNumber2.setValue(passportNumber2);
        BookingPage.passportAge2.setValue(passportAge2);

        TravelsPage.cookieButton.click();
        BookingPage.confirmBooking.click();

        AccountPage.open();
        AccountPage.invoiceList[0].click();

        const handles = browser.getWindowHandles();
        browser.switchToWindow(handles[1]);
        console.log(browser.getUrl());

        expect(InvoicePage.invoiceFullName.getText()).toBe(accountFirstName + " " + accountLastName);
        expect(InvoicePage.invoiceFullAddress.getText()).toBe(accountAddress1 + " " + accountAddress2);
        expect(InvoicePage.invoicePhone.getText()).toBe(accountPhone);
        expect(InvoicePage.invoiceName1.getText()).toBe(passportName1);
        expect(InvoicePage.invoiceNumber1.getText()).toBe(passportNumber1);
        expect(InvoicePage.invoiceAge1.getText()).toBe(passportAge1);
        expect(InvoicePage.invoiceName2.getText()).toBe(passportName2);
        expect(InvoicePage.invoiceNumber2.getText()).toBe(passportNumber2);
        expect(InvoicePage.invoiceAge2.getText()).toBe(passportAge2);
    })
})
