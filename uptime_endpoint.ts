type UptimeEndpoint = {
    id: string;
    author: string;
    name: string;
    interval: number;
    host: string | null;
    requestEndpoint: string | null;
};
type UptimeEndpointStructured = UptimeEndpoint & {
    statistics: UptimeEndpointStatistic[];
};

type UptimeEndpointStatistic = {
    id: string;
    author: string;
    parent: string;
    timestamp: number;
    pingTime: number | null;
    requestTime: number | null;
};

/* Calls */
type UptimeEndpointCreate = {
    name: string;
    host?: string;
    requestEndpoint?: string;
};
type UptimeEndpointEdit = {
    id: string;
    name?: string;
    host?: string;
    requestEndpoint?: string;
};