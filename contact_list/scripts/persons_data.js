(function () {
    var personsData = persons.PersonDatabase;
    var siteUrl = "http://www.filltext.com?rows=5" +
        "&firstName={firstName}&lastName={lastName}" +
        "&city={city}&address={streetAddress}" +
        "&email={email}&phone={phone|format}";

    var getDataFromUrl = function (url) {
        var htmlRequest = new XMLHttpRequest();
        htmlRequest.open("GET", url, true);
        htmlRequest.onreadystatechange = function () {
            if (htmlRequest.readyState != 4 || htmlRequest.status != 200) {
                var data = JSON.parse(htmlRequest.responseText);
                setPersonDatabase(data);
                writePersonsToPage();
            }
        };
        htmlRequest.send();
    };

    var setPersonDatabase = function (data) {
        for (var i = 0; i < data.length; i++) {
            personsData[i] = new persons.Person(
                data[i].firstName, data[i].lastName,
                data[i].city, data[i].address,
                data[i].email, data[i].phone);
        }
    };

    var writePersonsToPage = function () {
        var person;
        var contacts = document.getElementById("contacts");
        for (var c = 0; c < personsData.length; c++) {
            person = personsData[c];
            contacts.innerHTML +=
                "<ul id='contact" + (c + 1) + "'>" +
                "<li id='firstName'>" + person.firstName + "</li>" + "<li id='lastName'>" + person.lastName + "</li>" +
                "<li id='city'>" + person.city + "</li>" + "<li id='address'>" + person.address + "</li>" +
                "<li id='email'>" + person.email + "</li>" + "<li id='phone'>" + person.phone + "</li>" +
                "</ul>";
        }
    };

    document.onload = getDataFromUrl(siteUrl);
})();
