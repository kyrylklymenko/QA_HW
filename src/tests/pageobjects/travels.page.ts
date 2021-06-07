import Page from "./page";

class TravelsPage extends Page{

    get url(){
        return "https://phptravels.net/";
    }

    get loginDropdownMenu(){
        return $("a*=My Account");
    }

    get login(){
        return $("=Login");
    }

    get languageDropdownMenu(){
        return $("div.dropdown.dropdown-language");
    }

    get currencyDropdownMenu(){
        return $("div.dropdown.dropdown-currency");
    }

    get currencyList(){
        return $("div.dropdown-menu.dropdown-menu-right.show");
    }

    get toursPanel(){
        return $("a*=Tours");
    }

    get tourLocationSearchbar(){
        return $(".select2-container.form-control.hotelsearch.locationlisttours");
    }

    get toursDate(){
        return $("#tours").$("#DateTours");
    }

    get toursAdults(){
        return $("#tours").$("input[name='adults']");
    }

    get toursAdultsIncreaseCount(){
        return $("#tours").$("button*=+");
    }

    get toursAdultsDecreaseCount(){
        return $("#tours").$("button*=-");
    }

    get searchTour(){
        return $("#tours").$("button*=Search");
    }

    chooseTour(tourName:string){
        return $("div.select2-result-label*=+"+tourName);
    }

    chooseTourType(tourType:string){
        $("#tourtype_chosen").click();
        $("#tourtype_chosen").$("li*="+tourType).click();
    }





    open(){
        browser.url(this.url+"en");
    }

    chooseCurrency(currency: string){
        this.currencyDropdownMenu.click();
        this.currencyList.$("a*=" + currency.toUpperCase()).click();
    }
}

export default new TravelsPage();