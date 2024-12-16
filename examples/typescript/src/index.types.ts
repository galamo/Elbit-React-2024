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

console.log(company.cfo);

type Superuser = {
  isAdmin: boolean;
};

type Subscriber = {
  password: string;
  userName: string;
};

const subscriber: Subscriber & Superuser & Omit<User, "userName"> = {
  password: "aa",
  userName: "aa",
  isAdmin: true,
  company: Companies.Facebook,
};

type UserWithPermissions = {
  userName: string;
  roles: "admin" | "user";
  apartment: string;
  salary: number;
  dbId: number;
};

const u: Omit<UserWithPermissions, "dbId"> = {
  userName: "aa",
  roles: "admin",
  apartment: "",
  salary: 100000,
};

senduserToApi(u);
function senduserToApi(user: Partial<UserWithPermissions>) {
  return user;
}

const newSubscriber: Pick<Subscriber, "password"> & Superuser & User = {
  
};
