import {INIT_BASE} from '_consts/initBase';
import {CommonApiName} from '_enums/common';
import {Folder, Tag, Task} from '_types/common';
import {makeStoreObject, openConnection} from '_utils/indexedDB';
import {makeApi} from '_utils/makeApi';

const STORE_NAME_LIST = [CommonApiName.TaskList, CommonApiName.FolderList, CommonApiName.TagList];

const connection = openConnection({
    dbName: 'FYB',
    version: 1,
    onUpdate: db => {
        switch (db.version) {
            default: {
                STORE_NAME_LIST.forEach(storeName => {
                    const objectStore = db.createObjectStore(storeName, {keyPath: 'id'});
                    INIT_BASE[storeName].forEach((item: unknown) => {
                        objectStore.add(item);
                    });
                });
            }
        }
    }
});

export const commonApi = {
    taskList: makeApi(makeStoreObject<Task>(connection, CommonApiName.TaskList)),
    folderList: makeApi(makeStoreObject<Folder>(connection, CommonApiName.FolderList)),
    tagList: makeApi(makeStoreObject<Tag>(connection, CommonApiName.TagList)),
};
