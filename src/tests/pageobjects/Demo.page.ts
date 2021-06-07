import Page from "./page";
//import Panel from "./Demo.panel";


class DemoPage extends Page{
    //private url: string = "https://phptravels.com/demo/";

    getUrl(): string{
        return this.url;
    }

    get url (){
        return "https://phptravels.com/demo/";
    }

    getTitle(): any {
        return browser.getTitle();
    }

    open(): void {
        browser.url(this.url);
    }

    get someVal(){
        return $$("ABCD")[0];
    }

    // targetPanel(panelType: string): void{
    //     Panel.targetPanel(panelType);
    // }
    //
    // getCredentials(): Array<string>{
    //     let email: string = Panel.getDemoEmail();
    //     let password: string = Panel.getDemoPassword();
    //     return [email, password];
    // }

}

export default new DemoPage();