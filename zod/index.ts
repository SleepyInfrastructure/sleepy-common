import { DatabaseCreateSchema, DatabaseEditSchema } from "./database";
import { NetworkCreateSchema, NetworkEditSchema } from "./network";
import { ServerCreateSchema, ServerEditSchema } from "./server";
import { SMBInstanceCreateSchema, SMBInstanceEditSchema, SMBShareCreateSchema, SMBShareEditSchema, SMBUserCreateSchema, SMBUserEditSchema } from "./smb";
import { UptimeEndpointCreateSchema, UptimeEndpointEditSchema } from "./uptime_endpoint";

export default {
    "DATABASE_CREATE": DatabaseCreateSchema, "DATABASE_EDIT": DatabaseEditSchema,
    "NETWORK_CREATE": NetworkCreateSchema, "NETWORK_EDIT": NetworkEditSchema,
    "SERVER_CREATE": ServerCreateSchema, "SERVER_EDIT": ServerEditSchema,
    "SMB_INSTANCE_CREATE": SMBInstanceCreateSchema, "SMB_INSTANCE_EDIT": SMBInstanceEditSchema,
    "SMB_SHARE_CREATE": SMBShareCreateSchema, "SMB_SHARE_EDIT": SMBShareEditSchema,
    "SMB_USER_CREATE": SMBUserCreateSchema, "SMB_USER_EDIT": SMBUserEditSchema,
    "UPTIME_ENDPOINT_CREATE": UptimeEndpointCreateSchema, "UPTIME_ENDPOINT_EDIT": UptimeEndpointEditSchema
}