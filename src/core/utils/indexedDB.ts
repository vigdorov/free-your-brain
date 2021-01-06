enum TransactionMode {
    ReadOnly = 'readonly',
    ReadWrite = 'readwrite',
    VersionChange = 'versionchange',
}

enum OpenRequestEvent {
    Success = 'success',
    Error = 'error',
    UpgradeNeeded = 'upgradeneeded',
    Blocked = 'blocked',
}

enum StoreRequestEvent {
    Success = 'success',
    Error = 'error',
}

export const openConnection = (
    {dbName, version, onUpdate, onBlocked}: {
        dbName: string;
        version: number;
        onUpdate: (db: IDBDatabase) => void;
        onBlocked?: (db: IDBDatabase) => void;
    }
): Promise<IDBDatabase> => {
    const openRequest = indexedDB.open(dbName, version);
    return new Promise((resolve, reject) => {
        openRequest.addEventListener(OpenRequestEvent.Success, () => {
            resolve(openRequest.result);
        });
        openRequest.addEventListener(OpenRequestEvent.Error, () => {
            reject(openRequest.error);
        });
        openRequest.addEventListener(OpenRequestEvent.UpgradeNeeded, () => {
            onUpdate(openRequest.result);
        });
        openRequest.addEventListener(OpenRequestEvent.Blocked, () => {
            onBlocked?.(openRequest.result);
        });
    });
};

const makeTransaction = (
    connection: Promise<IDBDatabase>,
    storeName: string,
) => async (mode: TransactionMode): Promise<IDBObjectStore> => {
    const db = await connection;
    const transaction = db.transaction(storeName, mode);
    return transaction.objectStore(storeName);
};

const makeStoreRequest = <T>(request: IDBRequest): Promise<T> => new Promise((resolve, reject) => {
    request.addEventListener(StoreRequestEvent.Success, () => {
        resolve(request.result);
    });
    request.addEventListener(StoreRequestEvent.Error, () => {
        reject(request.error);
    });
});

export const makeStoreObject = <T>(connection: Promise<IDBDatabase>, storeName: string) => {
    const makeStore = makeTransaction(connection, storeName);
    return {
        getAll: async () => {
            const store = await makeStore(TransactionMode.ReadOnly);
            return makeStoreRequest<Array<T>>(store.getAll());
        },
        add: async (task: T) => {
            const store = await makeStore(TransactionMode.ReadWrite);
            return makeStoreRequest<void>(store.add(task));
        },
        put: async (task: T) => {
            const store = await makeStore(TransactionMode.ReadWrite);
            return makeStoreRequest<void>(store.put(task));
        },
        delete: async (id: string) => {
            const store = await makeStore(TransactionMode.ReadWrite);
            return makeStoreRequest<void>(store.delete(id));
        },
    };
};
