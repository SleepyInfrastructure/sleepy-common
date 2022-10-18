export const StatisticTypePreviousMapping: Record<StatisticType, StatisticType> = {
    MINUTE: "MINUTE",
    HOUR: "MINUTE",
    DAY: "HOUR",
    MONTH: "DAY",
    YEAR: "MONTH"
}
export const StatisticTypeNextMapping: Record<StatisticType, StatisticType> = {
    MINUTE: "HOUR",
    HOUR: "DAY",
    DAY: "MONTH",
    MONTH: "YEAR",
    YEAR: "YEAR"
}
export const StatisticTimeMapping: Record<StatisticType, number> = {
    MINUTE: 60,
    HOUR: 3600,
    DAY: 86400,
    MONTH: 2628000,
    YEAR: 31536000
}

export const NET_HIGH_LOAD = 1048576 * 60; // 60 MiB (network usage is per minute)
export const DISK_HIGH_LOAD = 1048576; // 1 MiB (disk load is per second)
export const DISK_HIGH_LATENCY = 30;