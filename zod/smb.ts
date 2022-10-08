import { z } from "zod";
import { IDSchema, IDZod } from "./base";

export const SMBInstanceCreateSchema = z.object({
    server: IDZod,
    name: z.string().min(3).max(64),
    recycle: z.boolean()
});
export type SMBInstanceCreateSchemaType = z.infer<typeof SMBInstanceCreateSchema>;
export const SMBInstanceEditSchema = z.intersection(z.object({
    server: IDZod.optional(),
    name: z.string().min(3).max(64).optional(),
    recycle: z.boolean().optional()
}), IDSchema);
export type SMBInstanceEditSchemaType = z.infer<typeof SMBInstanceEditSchema>;

export const SMBShareCreateSchema = z.object({
    parent: IDZod,
    name: z.string().min(3).max(64),
    path: z.string().min(3).max(1024),
    browsable: z.boolean(),
    readonly: z.boolean(),
    guest: z.boolean(),
    users: z.array(z.string()),
    admins: z.array(z.string())
});
export type SMBShareCreateSchemaType = z.infer<typeof SMBShareCreateSchema>;
export const SMBShareEditSchema = z.intersection(z.object({
    name: z.string().min(3).max(64).optional(),
    path: z.string().min(3).max(1024).optional(),
    browsable: z.boolean().optional(),
    readonly: z.boolean().optional(),
    guest: z.boolean().optional(),
    users: z.array(z.string()).optional(),
    admins: z.array(z.string()).optional()
}), IDSchema);
export type SMBShareEditSchemaType = z.infer<typeof SMBShareEditSchema>;

export const SMBUserCreateSchema = z.object({
    parent: IDZod,
    name: z.string().min(3).max(64)
});
export type SMBUserCreateSchemaType = z.infer<typeof SMBUserCreateSchema>;
export const SMBUserEditSchema = z.intersection(z.object({
    name: z.string().min(3).max(64).optional()
}), IDSchema);
export type SMBUserEditSchemaType = z.infer<typeof SMBUserEditSchema>;