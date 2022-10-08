const enum TaskType {
    BACKUP_DATABASE = "BACKUP_DATABASE",
    BACKUP_DATABASE_SCHEMA = "BACKUP_DATABASE_SCHEMA",
    REQUEST_CONTAINER_LOG = "REQUEST_CONTAINER_LOG"
}
const enum TaskStatus {
    RUNNING = "RUNNING",
    FAILED = "FAILED",
    FINISHED = "FINISHED"
}

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