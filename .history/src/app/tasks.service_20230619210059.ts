import { Injectable } from '@angular/core';
import { Task } from './shared/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getAll(): Task[] {
    return [
      {
        id: 1,
        timestamp: new Date,
        begin: new Date('2023-01-06 18:00'),
        end: new Date('2023-01-06 19:00'),
        title: 'Test Task 1',
        category: [{
          name: 'test'
        }],
      },
      {
        id: 2,
        timestamp: new Date,
        begin: new Date('2023-02-06 18:00'),
        end: new Date('2023-02-06 19:00'),
        title: 'Test Task 2',
        category: [{
          name: 'test'
        },{
          name: 'reocurring'
        }],
      },
      {
        id: 3,
        timestamp: new Date,
        begin: new Date('2023-01-06 18:00'),
        end: new Date('2023-01-06 19:00'),
        title: 'Test Task 1',
        category: [{
          name: 'test'
        }],
      },
      {
        id: 4,
        timestamp: new Date,
        begin: new Date('2023-02-06 18:00'),
        end: new Date('2023-02-06 19:00'),
        title: 'Test Task 2',
        category: [{
          name: 'test'
        },{
          name: 'reocurring'
        }],
      },
    ]
  }
}
