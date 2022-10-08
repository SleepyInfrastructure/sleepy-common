import { z } from "zod";
import { IDSchema } from "./base";

export const ServerCreateSchema = z.object({
    name: z.string().min(3).max(64),
    color: z.string().min(6).max(6).optional()
});
export type ServerCreateSchemaType = z.infer<typeof ServerCreateSchema>;
export const ServerEditSchema = z.intersection(z.object({
    name: z.string().min(3).max(64).optional(),
    color: z.string().min(6).max(6).optional()
}), IDSchema);
export type ServerEditSchemaType = z.infer<typeof ServerEditSchema>;