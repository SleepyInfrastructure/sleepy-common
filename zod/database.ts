import { z } from "zod";
import { IDSchema, IDZod } from "./base";

export const DatabaseCreateSchema = z.object({
    server: IDZod,
    name: z.string().min(3).max(64)
});
export type DatabaseCreateSchemaType = z.infer<typeof DatabaseCreateSchema>;
export const DatabaseEditSchema = z.intersection(z.object({
    server: IDZod.optional(),
    name: z.string().min(3).max(64).optional()
}), IDSchema);
export type DatabaseEditSchemaType = z.infer<typeof DatabaseEditSchema>;