const StatisticTypePreviousMapping: Record<StatisticType, StatisticType> = {
    [StatisticType.MINUTE]: StatisticType.MINUTE,
    [StatisticType.HOUR]: StatisticType.MINUTE,
    [StatisticType.DAY]: StatisticType.HOUR,
    [StatisticType.MONTH]: StatisticType.DAY,
    [StatisticType.YEAR]: StatisticType.MINUTE
}
const StatisticTypeNextMapping: Record<StatisticType, StatisticType> = {
    [StatisticType.MINUTE]: StatisticType.HOUR,
    [StatisticType.HOUR]: StatisticType.DAY,
    [StatisticType.DAY]: StatisticType.MONTH,
    [StatisticType.MONTH]: StatisticType.YEAR,
    [StatisticType.YEAR]: StatisticType.YEAR
}
const StatisticTimeMapping = {
    [StatisticType.MINUTE]: 60,
    [StatisticType.HOUR]: 3600,
    [StatisticType.DAY]: 86400,
    [StatisticType.MONTH]: 2628000,
    [StatisticType.YEAR]: 31536000
}