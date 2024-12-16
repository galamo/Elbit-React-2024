"use strict";
var Companies;
(function (Companies) {
    Companies[Companies["IBM"] = 1] = "IBM";
    Companies[Companies["Elbit"] = 2] = "Elbit";
    Companies[Companies["Google"] = 3] = "Google";
    Companies[Companies["Facebook"] = 4] = "Facebook";
})(Companies || (Companies = {}));
const user1 = {
    userName: "galamouyal88@gmail.com",
    company: Companies.IBM,
};
const user2 = { userName: "eli@gmail.com", company: Companies.Elbit };
const company = {
    name: "IBM",
    id: 124,
    cfo: "Naor",
    location: { city: "Givatayim", address: "arieal sharon", street: 4 },
};
