type TaskType = "BACKUP_DATABASE" | "BACKUP_DATABASE_SCHEMA" | "REQUEST_CONTAINER_LOG";
type TaskStatus = "RUNNING" | "FAILED" | "FINISHED";
type Task = {
    id: string;
    author: string;
    type: TaskType;
    object: string | null;
    start: number;
    status: TaskStatus;
    progress: number;
    end: number | null;
    result: string | null;
};