import {sortBy} from 'lodash';
import {isNotEmpty} from '_referers/common';
import {Folder, Task} from '_types/common';

export type FolderItem = {
    data: Folder;
    children?: TreeList;
};

export type TaskItem = {
    data: Task;
};

export type TreeList = Array<FolderItem | TaskItem>;

export type FolderTaskMap = Record<string, Array<(Folder | Task)> | undefined>;

export const isFolderItem = (item: FolderItem | TaskItem): item is FolderItem => (
    'type' in item.data
);
export const isTaskItem = (item: FolderItem | TaskItem): item is TaskItem => (
    'status' in item.data
);

export const ROOT_TREE = '__root__';

export const makeMap = (folders: Folder[], tasks: Task[]) => {
    const INIT_MAP: FolderTaskMap = {
        [ROOT_TREE]: [],
    };

    /**
     * Собираем хеш-таблицу существующих папок с предзаполненным root элементом
     */
    const map = folders.reduce<FolderTaskMap>((acc, folder) => ({
        ...acc,
        [folder.id]: [],
    }), INIT_MAP);

    /**
     * Наполняем хеш-таблицу мутабельно для скорости. Если у папки или таски folder.id,
     * которого уже не существует, то кладем их в root
     */
    folders.forEach(folder => {
        const parent = folder.folder ?? ROOT_TREE;
        (map[parent] ?? map[ROOT_TREE])?.push(folder);
    });

    tasks.forEach(task => {
        const parent = task.folder ?? ROOT_TREE;
        (map[parent] ?? map[ROOT_TREE])?.push(task);
    });

    return map;
};

const makeTree = (parentId: string, map: FolderTaskMap): TreeList | undefined => {
    const list = map[parentId];

    if (isNotEmpty(list)) {
        return sortBy(list, ['type']).map(item => {
            if ('type' in item) {
                const children = makeTree(item.id, map);
                return {
                    ...(children ? {children} : {}),
                    data: item,
                };
            }
            return {
                data: item,
            };
        });
    }
};

export const makeTreeList = (folders: Folder[], tasks: Task[]) => {
    return makeTree(ROOT_TREE, makeMap(folders, tasks));
};
