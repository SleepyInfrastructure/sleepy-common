import { z } from "zod";
import { IDSchema } from "./base";

export const NetworkCreateSchema = z.object({
    name: z.string().min(3).max(64),
    ipv4: z.string().min(3).max(256).optional()
});
export type NetworkCreateSchemaType = z.infer<typeof NetworkCreateSchema>;
export const NetworkEditSchema = z.intersection(NetworkCreateSchema, IDSchema);
export type NetworkEditSchemaType = z.infer<typeof NetworkEditSchema>;