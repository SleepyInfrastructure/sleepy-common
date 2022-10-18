type Disk = {
    id: string;
    ptuuid: string | null;
    author: string;
    server: string;
    name: string;
    ssd: boolean;
    size: number;
    model: string | null;
};
type DiskStructured = Disk & {
    partitions: Partition[];
    statistics: DiskStatistic[];
};

type DiskStatistic = {
    id: string;
    author: string;
    parent: string;
    timestamp: number;
    type: StatisticType;
    read: number;
    write: number;
    readLatency: number;
    writeLatency: number;
};

type Partition = {
    id: string;
    uuid: string | null;
    partuuid: string | null;
    author: string;
    parent: string;
    server: string;
    name: string;
    type: string;
    size: number;
    used: number | null;
    mountpoint?: string;
};