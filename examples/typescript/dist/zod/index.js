"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScehma = void 0;
const zod_1 = require("zod");
// creating a schema for strings
// const mySchema = z.string();
// // parsing
// mySchema.parse("tuna"); // => "tuna"
// mySchema.parse(12); // => throws ZodError
// // "safe" parsing (doesn't throw error if validation fails)
// mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
// mySchema.safeParse(12); // => { success: false; error: ZodError }
exports.UserScehma = zod_1.z.object({
    url: zod_1.z.string().min(8).optional(),
    name: zod_1.z.string().max(20),
    age: zod_1.z.number().min(2).max(3).optional(),
});
