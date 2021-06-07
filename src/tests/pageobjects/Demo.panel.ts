class Panel {
    protected defaultPanelSelector: string = ".wow.fadeInUp.col-md-4.animated";

    get fullCredentials() : string {
        return $$("div.col-md-12")[1].$("div.col-md-9");
    }

    get homepage() {
        return $$("div.wow.fadeInUp.col-md-4.animated")[0];
    }

    get admin() {
        return $$("div.wow.fadeInUp.col-md-4.animated")[1];
    }

    get supplier() {
        return $$("div.wow.fadeInUp.col-md-4.animated")[2];
    }
}

export default new Panel();