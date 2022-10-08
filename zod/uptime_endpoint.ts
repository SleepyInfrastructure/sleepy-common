import { z } from "zod";
import { IDSchema } from "./base";

export const UptimeEndpointCreateSchema = z.object({
    name: z.string().min(3).max(64),
    host: z.string().min(3).max(256).optional(),
    requestEndpoint: z.string().min(3).max(256).optional()
});
export type UptimeEndpointCreateSchemaType = z.infer<typeof UptimeEndpointCreateSchema>;
export const UptimeEndpointEditSchema = z.intersection(z.object({
    name: z.string().min(3).max(64).optional(),
    host: z.string().min(3).max(256).optional(),
    requestEndpoint: z.string().min(3).max(256).optional()
}), IDSchema);
export type UptimeEndpointEditSchemaType = z.infer<typeof UptimeEndpointEditSchema>;