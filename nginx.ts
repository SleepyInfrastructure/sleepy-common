type NginxInstance = {
    id: string;
    author: string;
    server: string;
    name: string;
    networks: string[];
};
type NginxInstanceStructured = NginxInstance & {
    servers: NginxServerStructured[];
};

type NginxServer = {
    id: string;
    author: string;
    parent: string;
    name: string;
    domain: string;
    expires: number;
    origins: string[];
    ssl: string;
    httpRedirect: boolean;
    http2: boolean;
};
type NginxServerStructured = NginxServer & {
    locations: NginxLocation[];
};

type NginxLocationType = "STATIC" | "API" | "WS";
type NginxLocation = {
    id: string;
    author: string;
    parent: string;
    name: string;
    type: NginxLocationType;
    path: string;
    endpoint: string;
    cors: boolean;
};

/* Calls */
type NginxInstanceCreate = {
    server: string;
    name: string;
    networks: string[];
};
type NginxInstanceEdit = {
    id: string;
    name?: string;
    networks?: string[];
};

type NginxServerCreate = {
    parent: string;
    name: string;
    domain: string;
    expires: string;
    origins: string[];
    ssl: string;
    httpRedirect: boolean;
    http2: boolean;
};
type NginxServerEdit = {
    id: string;
    name?: string;
    domain?: string;
    expires?: string;
    origins?: string[];
    ssl?: string;
    httpRedirect?: boolean;
    http2?: boolean;
};

type NginxLocationCreate = {
    parent: string;
    name: string;
    type: NginxLocationType;
    path: string;
    endpoint: string;
    cors: boolean;
};
type NginxLocationEdit = {
    id: string;
    name?: string;
    type?: NginxLocationType;
    path?: string;
    endpoint?: string;
    cors?: boolean;
};