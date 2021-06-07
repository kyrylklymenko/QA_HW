import Page from "./page";

class AccountPage extends Page{
    get url(){
        return "https://www.phptravels.net/account";
    }

    get profileTab(){
        return $("a[href='#profile']");
    }

    get invoiceList(){
        return $("#bookings").$$("a*=Invoice");
    }

    get firstName(){return $("[name='firstname']");}
    get lastName(){return $("[name='lastname']");}
    get email(){return $("[name='email']");}
    get address1(){return $("[name='address1']");}
    get address2(){return $("[name='address2']");}
    get phone(){return $("[name='phone']");}

    open(){
        browser.url(this.url);
    }
}

export default new AccountPage();