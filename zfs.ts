type ZFSPool = {
    id: string;
    author: string | null;
    server: string;
    name: string;
    size: number;
    used: number;
    compression: string | null;
    compressRatio: number;
    encryption: boolean;
    atime: boolean;
    version: number;
    deduplication: boolean;
    relatime: boolean;
};
type ZFSPoolStructured = ZFSPool & {
    partitions: ZFSPartition[];
};

type ZFSPartition = {
    id: string;
    author: string | null;
    parent: string;
    server: string;
    size: number;
    used: number;
};