type AlertType = "SERVER_DOWN" | "SERVER_CPU_LOAD" | "SERVER_MEM_LOAD" | "SERVER_NET_LOAD" |
    "DISK_LOAD" | "DISK_LATENCY" | "PARTITION_LOW_SPACE" |
    "CONTAINER_DOWN" |
    "UPTIME_ENDPOINT_DOWN";
type Alert = {
    id: string;
    author: string;
    type: AlertType;
    object: string | null;
};