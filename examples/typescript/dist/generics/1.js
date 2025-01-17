"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_1.default.get("");
        return result.data;
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield getUsers();
    });
}
function UserFactory() {
    return {
        email: "aaa",
        password: "111",
    };
}
function getSingleUser(users) {
    return users[0];
}
function getSingleProduct(products) {
    return products[0];
}
function getSingleObject(arr) {
    return Object.assign(Object.assign({}, arr[0]), { id: 1 });
}
const arrayOfProducts = [];
const productT = getSingleObject(arrayOfProducts);
