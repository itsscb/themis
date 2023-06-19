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

  ngOnInit(){
    this.tasks = this.taskService.getAll()
  }
}
