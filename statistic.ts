const enum StatisticType {
    MINUTE = "MINUTE",
    HOUR = "HOUR",
    DAY = "DAY",
    MONTH = "MONTH",
    YEAR = "YEAR"
}
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