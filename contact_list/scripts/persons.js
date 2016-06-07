(function (persons) {
    persons.PersonDatabase = [];

    persons.Person = function (firstName, lastName, city, address, email, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.address = address;
        this.email = email;
        this.phone = phone;
    };

})(window.persons = window.persons || {});
