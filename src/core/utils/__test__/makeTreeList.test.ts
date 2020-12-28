import {Folder, Task} from '_types/common';
import {FolderType, TaskStatus} from '_enums/common';
import {makeMap, makeTreeList, ROOT_TREE} from '../makeTreeList';

const Folder_1 = {id: '1', name: '1', type: FolderType.Information};
const Folder_2 = {id: '2', name: '2', type: FolderType.Information, folder: '999'};
const Folder_3 = {id: '3', name: '3', type: FolderType.Information};
const Folder_4 = {id: '4', name: '4', type: FolderType.Information, folder: '1'};

const Task_1 = {id: '11', created_at: '', status: TaskStatus.Progress};
const Task_2 = {id: '22', created_at: '', status: TaskStatus.Progress, folder: '1'};
const Task_3 = {id: '33', created_at: '', status: TaskStatus.Progress, folder: '4'};
const Task_4 = {id: '44', created_at: '', status: TaskStatus.Progress, folder: '999'};

const folders: Folder[] = [Folder_1, Folder_2, Folder_3, Folder_4];
const tasks: Task[] = [Task_1, Task_2, Task_3, Task_4];

describe('makeTreeList', () => {
    it('Создает хеш-таблицу', () => {
        expect(makeMap(folders, tasks)).toEqual({
            [ROOT_TREE]: [Folder_1, Folder_2, Folder_3, Task_1, Task_4],
            '1': [Folder_4, Task_2],
            '2': [],
            '3': [],
            '4': [Task_3],
        });
    });

    it('Создает дерево', () => {
        expect(makeTreeList(folders, tasks)).toEqual([
            {
                data: Folder_1,
                children: [
                    {
                        data: Folder_4,
                        children: [
                            {data: Task_3},
                        ],
                    },
                    {data: Task_2},
                ],
            },
            {data: Folder_2},
            {data: Folder_3},
            {data: Task_1},
            {data: Task_4},
        ]);
    });
});
