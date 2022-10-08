type User = {
    id: string;
    timestamp: number;
    username: string;
    password?: string;
};

type UserFile = {
    id: string;
    author: string;
    name: string;
    type: string;
    size: number;
    path?: string;
};

/* Calls */
type UserCreate = {
    username: string;
    password: string;
};