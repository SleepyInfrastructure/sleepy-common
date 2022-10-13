type SMBInstance = {
    id: string;
    author: string;
    server: string;
    name: string;
    recycle: boolean;
};
type SMBInstanceStructured = SMBInstance & {
    shares: SMBShare[];
    users: SMBUser[];
};

type SMBShareBase = {
    id: string;
    author: string;
    parent: string;
    name: string;
    path: string;
    browsable: boolean;
    readonly: boolean;
    guest: boolean;
};
type SMBShare = SMBShareBase & {
    users: string[];
    admins: string[];
};

type SMBUser = {
    id: string;
    author: string;
    parent: string;
    name: string;
};

/* Calls */
type SMBInstanceCreate = {
    server: string;
    name: string;
    recycle: boolean;
};
type SMBInstanceEdit = {
    id: string;
    name?: string;
    recycle?: boolean;
};

type SMBShareCreate = {
    parent: string;
    name: string;
    path: string;
    browsable: boolean;
    readonly: boolean;
    guest: boolean;
    users: string[];
    admins: string[];
};
type SMBShareEdit = {
    id: string;
    name?: string;
    path?: string;
    browsable?: boolean;
    readonly?: boolean;
    guest?: boolean;
    users?: string[];
    admins?: string[];
};

type SMBUserCreate = {
    parent: string;
    name: string;
};
type SMBUserEdit = {
    id: string;
    name?: string;
};