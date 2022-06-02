function getBotResponse(input) {
    var hlpMssg = "Choose the number of the question you want to ask" + "</br>" +"1 How to apply for bursaries" + "</br>" + "2 How to apply for universities" + "</br>" + "3 Who qulifies for applying" + "</br>"  + "Please type bye when you are done";
    if (input == "hello") {
        return hlpMssg;
    } else if (input == "1") {
        return "Navigate to the bursary page";
    } else if (input == "2") {
        return "Navigate to the university page";
    }else if (input == "3"){
        return "Everyone who needs financial assistance can apply for a bursary using this platform";
    }else if (input == "bye"){
        return "Bye I hope i was able to help you "
    }else{
        return "please try again";
    }
   
    
}