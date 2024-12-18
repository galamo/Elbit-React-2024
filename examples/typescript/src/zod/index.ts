import { z } from "zod";

// creating a schema for strings
// const mySchema = z.string();

// // parsing
// mySchema.parse("tuna"); // => "tuna"
// mySchema.parse(12); // => throws ZodError

// // "safe" parsing (doesn't throw error if validation fails)
// mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
// mySchema.safeParse(12); // => { success: false; error: ZodError }

export const UserScehma = z.object({
  url: z.string().min(8).optional(),
  name: z.string().max(20),
  age: z.number().min(2).max(3).optional(),
});

export type ZodBasedUser = z.infer<typeof UserScehma>;
