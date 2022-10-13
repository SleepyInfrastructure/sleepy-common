type NFSInstance = {
    id: string;
    author: string;
    server: string;
    name: string;
};
type NFSInstanceStructured = NFSInstance & {
    exports: NFSExport[];
    machines: NFSMachine[];
};

type NFSExportBase = {
    id: string;
    author: string;
    parent: string;
    name: string;
    path: string;
};
type NFSExport = NFSExportBase & {
    guests: string[];
    users: string[];
};

type NFSMachine = {
    id: string;
    author: string;
    parent: string;
    name: string;
    address: string;
    uid?: number;
    gid?: number;
};

/* Calls */
type NFSInstanceCreate = {
    server: string;
    name: string;
};
type NFSInstanceEdit = {
    id: string;
    name?: string;
};

type NFSExportCreate = {
    parent: string;
    name: string;
    path: string;
};
type NFSExportEdit = {
    id: string;
    name?: string;
    path?: string;
};

type NFSMachineCreate = {
    parent: string;
    name: string;
    address: string;
    uid?: number;
    gid?: number;
};
type NFSMachineEdit = {
    id: string;
    name?: string;
    address?: string;
    uid?: number;
    gid?: number;
};