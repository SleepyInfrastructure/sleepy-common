type StatisticType = "MINUTE" | "HOUR" | "DAY" | "MONTH" | "YEAR";
type Statistic = {
    id: string;
    author: string;
    server: string;
    timestamp: number;
    type: StatisticType;
    cpuSystem: number;
    cpuUser: number;
    rx: number;
    tx: number;
    memory: number;
    swap: number;
};