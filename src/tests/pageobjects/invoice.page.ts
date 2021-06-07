import Page from "./page";

class InvoicePage extends Page{

    get invoiceFullName(){return $("div.col-12.col-lg-8").$("ul.confirmation-list").$$("li")[2].$$("span")[1]};
    get invoiceFullAddress(){return $("div.col-12.col-lg-8").$("ul.confirmation-list").$$("li")[3].$$("span")[1]};
    get invoicePhone(){return $("div.col-12.col-lg-8").$("ul.confirmation-list").$$("li")[4].$$("span")[1]};
    get invoiceName1(){return $("div.col-12.col-lg-8").$("ul.confirmation-list").$$("li")[5].$$("span")[1]};
    get invoiceNumber1(){return $("div.col-12.col-lg-8").$("ul.confirmation-list").$$("li")[6].$$("span")[1]};
    get invoiceAge1(){return $("div.col-12.col-lg-8").$("ul.confirmation-list").$$("li")[7].$$("span")[1]};
    get invoiceName2(){return $("div.col-12.col-lg-8").$("ul.confirmation-list").$$("li")[8].$$("span")[1]};
    get invoiceNumber2(){return $("div.col-12.col-lg-8").$("ul.confirmation-list").$$("li")[9].$$("span")[1]};
    get invoiceAge2(){return $("div.col-12.col-lg-8").$("ul.confirmation-list").$$("li")[10].$$("span")[1]};

}

export default new InvoicePage();