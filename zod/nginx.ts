import { z } from "zod";
import { IDSchema, IDZod } from "./base";

export const NginxInstanceCreateSchema = z.object({
    server: IDZod,
    name: z.string().min(3).max(64),
    networks: z.array(z.string().min(3).max(64))
});
export type NginxInstanceCreateSchemaType = z.infer<typeof NginxInstanceCreateSchema>;
export const NginxInstanceEditSchema = z.intersection(z.object({
    server: IDZod.optional(),
    name: z.string().min(3).max(64).optional(),
    networks: z.array(z.string().min(3).max(64)).optional()
}), IDSchema);
export type NginxInstanceEditSchemaType = z.infer<typeof NginxInstanceEditSchema>;

export const NginxServerCreateSchema = z.object({
    parent: IDZod,
    name: z.string().min(3).max(64),
    domain: z.string().min(3).max(512),
    expires: z.string().min(1).max(16),
    origins: z.array(z.string().min(3).max(512)),
    httpRedirect: z.boolean(),
    http2: z.boolean()
});
export type NginxServerCreateSchemaType = z.infer<typeof NginxServerCreateSchema>;
export const NginxServerEditSchema = z.intersection(z.object({
    name: z.string().min(3).max(64).optional(),
    domain: z.string().min(3).max(512).optional(),
    expires: z.string().min(1).max(16).optional(),
    origins: z.array(z.string().min(3).max(512)).optional(),
    httpRedirect: z.boolean().optional(),
    http2: z.boolean().optional()
}), IDSchema);
export type NginxServerEditSchemaType = z.infer<typeof NginxServerEditSchema>;

export const NginxLocationCreateSchema = z.object({
    parent: IDZod,
    name: z.string().min(3).max(64),
    type: z.enum(["STATIC", "API", "WS"]),
    path: z.string().max(512),
    endpoint: z.string().min(3).max(512)
});
export type NginxLocationCreateSchemaType = z.infer<typeof NginxLocationCreateSchema>;
export const NginxLocationEditSchema = z.intersection(z.object({
    name: z.string().min(3).max(64).optional(),
    type: z.enum(["STATIC", "API", "WS"]).optional(),
    path: z.string().max(512).optional(),
    endpoint: z.string().min(3).max(512).optional()
}), IDSchema);
export type NginxLocationEditSchemaType = z.infer<typeof NginxLocationEditSchema>;