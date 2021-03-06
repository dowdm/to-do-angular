import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'crazy-app-selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homeworkd for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];
  // selectedTask: Task = this.tasks[0];
  selectedTask = null;

  addTask(newTask: Task) {
    this.masterTaskList.push(newTask);
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }
}
