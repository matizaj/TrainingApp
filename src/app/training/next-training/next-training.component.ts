import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-next-training',
  templateUrl: './next-training.component.html',
  styleUrls: ['./next-training.component.css']
})
export class NextTrainingComponent implements OnInit {
  trainings: Array<any> = [
    {value: '1', viewValue: 'Power'},
    {value: '2', viewValue: 'Strenght'},
    {value: '3', viewValue: 'Endurance'},
  ];

  @Output() trainingStart = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onStartTraining() {
    this.trainingStart.emit();
  }
}
