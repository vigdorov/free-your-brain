import {v4} from 'uuid';
import {TaskStatus} from '../enums/common';
import {Task} from '../types/common';
import {createService} from '../utils/createService';
import {makeLocalStorageService} from './LocalStorageService';

const TASK_STORAGE_NAME = 'FYB_TASK_STORAGE';

const INIT_TASKS: Task[] = [
    {
        id: v4(),
        status: TaskStatus.Progress,
        created_at: '2021-03-01T13:00+03:00',
        title: 'Первая таска',
        body: 'Описание таски',
    },
    {
        id: v4(),
        status: TaskStatus.Progress,
        created_at: '2021-03-01T13:00+03:00',
        title: 'Вторая таска',
        body: 'Описание таски',
    },
    {
        id: v4(),
        status: TaskStatus.Progress,
        created_at: '2021-03-01T13:00+03:00',
        title: 'Третья таска',
        body: 'Описание таски',
    },
];

const taskListService = makeLocalStorageService(INIT_TASKS, TASK_STORAGE_NAME);

export const tasksService = createService(taskListService.get(), {
});
