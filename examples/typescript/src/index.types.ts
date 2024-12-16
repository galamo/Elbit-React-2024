enum Companies {
  IBM = 1,
  Elbit,
  Google,
  Facebook,
}

type User = {
  userName: string;
  company: Companies;
};

const user1: User = {
  userName: "galamouyal88@gmail.com",
  company: Companies.IBM,
};
const user2: User = { userName: "eli@gmail.com", company: Companies.Elbit };

type Company = {
  location: CompanyLocation;
  name: string;
  id: number;
  cfo: string;
};

type CompanyLocation = {
  city: string;
  address: string;
  street: number;
};

const company: Company = {
  name: "IBM",
  id: 124,
  cfo: "Naor",
  location: { city: "Givatayim", address: "arieal sharon", street: 4 },
};
