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
console.log(company.cfo);
const subscriber = {
    password: "aa",
    userName: "aa",
    isAdmin: true,
    company: Companies.Facebook,
};
const u = {
    userName: "aa",
    roles: "admin",
    apartment: "",
    salary: 100000,
};
senduserToApi(u);
function senduserToApi(user) {
    return user;
}
// const newSubscriber: Pick<Subscriber, "password"> & Superuser & User = {
// };
const newSubscriber = {
    password: "aa",
    userName: "galamo",
    isAdmin: true,
};
getUser(111);
function getUser(userId) {
    return [];
}
