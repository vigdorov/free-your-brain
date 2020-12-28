import {v4} from 'uuid';
import {FolderType, Icon, TaskStatus} from '_enums/common';
import {Folder, Tag, Task} from '_types/common';

// Псевдоданные
export const TagList: Tag[] = [
    {id: '33', name: 'Tag', color: '#2fc036'},
    {id: '66', name: 'Tag', color: '#2fc036'},
    {id: '77', name: 'Tag', color: '#2fc036'},
    {id: '22', name: 'Tag', color: '#2fc036'},
];

export const FolderList: Folder[] = [
    {id: '4', name: 'Folder 1', type: FolderType.Information},
    {id: '6', name: 'Folder 34', type: FolderType.Information},
    {id: '7', name: 'Folder ffd', type: FolderType.Information},
    {id: '73', name: 'Folder ffd', type: FolderType.Information, folder: '7'},
];

export const TaskList: Task[] = [
    {id: v4(), title: 'Title number 1', body: 'Description', created_at: '2019-01-01T13:00', icon: Icon.Apple, status: TaskStatus.Progress, folder: '4'},
    {id: v4(), title: 'Title number 2', body: 'Description', created_at: '2019-01-01T13:00', icon: Icon.Apple, status: TaskStatus.Progress, folder: '4'},
    {id: v4(), title: 'Title number 3', body: 'Description', created_at: '2019-01-01T13:00', icon: Icon.Apple, status: TaskStatus.Progress, folder: '6'},
    {id: v4(), title: 'Title number 4', body: 'Description', created_at: '2019-01-01T13:00', icon: Icon.Apple, status: TaskStatus.Progress, tags: ['33', '77']},
    {id: v4(), title: 'Title number 5', body: 'Description', created_at: '2019-01-01T13:00', icon: Icon.Apple, status: TaskStatus.Progress},
    {id: v4(), title: 'Title number 6', body: 'Description', created_at: '2019-01-01T13:00', icon: Icon.Apple, status: TaskStatus.Progress},
    {id: v4(), title: 'Title number 7', body: 'Description', created_at: '2019-01-01T13:00', icon: Icon.Apple, status: TaskStatus.Progress, folder: '4'},
    {id: v4(), title: 'Title number 8', body: 'Description', created_at: '2019-01-01T13:00', icon: Icon.Apple, status: TaskStatus.Progress, folder: '4'},
    {id: v4(), title: 'Title number 9', body: 'Description', created_at: '2019-01-01T13:00', icon: Icon.Apple, status: TaskStatus.Progress, folder: '7'},
    {id: v4(), title: 'Title number 10', body: 'Description', created_at: '2019-01-01T13:00', icon: Icon.Apple, status: TaskStatus.Progress, folder: '7'},
    {id: v4(), title: 'Title number 11', body: 'Description', created_at: '2019-01-01T13:00', icon: Icon.Apple, status: TaskStatus.Progress, folder: '73'},
];
