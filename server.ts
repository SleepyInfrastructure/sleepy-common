type Server = {
    id: string;
    author: string;
    timestamp: number;
    name: string;
    config: string;
    network: string | null;
    color: string;
    memory: number;
    swap: number;
    netInterfaces: string[];
};
type ServerStructured = Server & {
    config: ServerConfig;
    network: Network;
    software: ServerSoftware[];
    disks: DiskStructured[];
    zfsPools: ZFSPoolStructured[];
    containers: ContainerStructured[];
    databases: Database[];
    smb: SMBInstanceStructured[];
    public: PublicServerListing;
};

type ServerConfig = {
    id: string;
    author: string;
    statsInterval: number;
    statsCleanAge: number;
    databaseBackupInterval: number | null;
};

type ServerSoftware = {
    id: string;
    author: string;
    server: string;
    name: string;
    version: string;
};

/* Public */
type PublicServerListing = {
    id: string;
    author: string;
    statistics: boolean;
};
type PublicServer = {
    id: string;
    author: string;
    name: string;
    memory: number;
    swap: number;
};
type PublicServerStructured = PublicServer & {
    statistics: Statistic[];
};

/* Calls */
type ServerCreate = {
    name: string;
    color: string;
}; 
type ServerEdit = ServerCreate & {
    id: string;
}; 