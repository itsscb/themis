import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  constructor(private taskService: TasksService) {}
  tasks: Task[] = []

  clonedTasks: { [s: number]: Task } = {};

  ngOnInit(){
    this.tasks = this.taskService.getAll()
  }

  onRowEditInit(task: Task) {
    this.clonedTasks[task.id as number] = { ...task };
}

onRowEditSave(task: Task) {
    // if (task.price > 0) {
        delete this.clonedTasks[task.id as number];
        // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task is updated' });
    // } 
    // else {
        // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
    // }
}

onRowEditCancel(task: Task, index: number) {
    this.tasks[index] = this.clonedTasks[task.id as number];
    delete this.clonedTasks[task.id as number];
}
}
