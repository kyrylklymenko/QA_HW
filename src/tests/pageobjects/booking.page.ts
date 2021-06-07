import Page from "./page";

class BookingPage extends Page{

    get bookNow(){
        return $("button*=Book Now");
    }

    get confirmBooking(){
        return $("button*=CONFIRM THIS BOOKING");
    }

    get passportName1(){
        return $("[name='passport[1][name]']");
    }

    get passportNumber1(){
        return $("[name='passport[1][passportnumber]']");
    }

    get passportAge1(){
        return $("[name='passport[1][age]']");
    }

    get passportName2(){
        return $("[name='passport[2][name]']");
    }

    get passportNumber2(){
        return $("[name='passport[2][passportnumber]']");
    }

    get passportAge2(){
        return $("[name='passport[2][age]']");
    }
}

export default new BookingPage();