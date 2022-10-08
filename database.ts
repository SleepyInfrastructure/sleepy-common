type Database = {
    id: string;
    author: string | null;
    server: string;
    name: string;
    credentials: boolean;
};

/* Calls */
type DatabaseCreate = {
    name: string;
    server: string;
};
type DatabaseEdit = {
    id: string;
    name?: string;
    server?: string;
};