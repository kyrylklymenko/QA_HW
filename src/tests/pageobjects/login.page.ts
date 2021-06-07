import Page from './page';

class LoginPage extends Page{
    get inputUsername () { return $('input[type=email]') }
    get inputPassword () { return $('input[type=password]') }
    get btnSubmit () { return $('button=Login') }

    get url(){
        return "https://www.phptravels.net/login";
    }


    login (email: string, password: string) {
          this.inputUsername.setValue(email);
          this.inputPassword.setValue(password);
          this.btnSubmit.click();
    }

    open(){
        browser.url(this.url);
    }
}

export default new LoginPage();
