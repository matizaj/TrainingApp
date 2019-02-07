import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-next-training',
  templateUrl: './next-training.component.html',
  styleUrls: ['./next-training.component.css']
})
export class NextTrainingComponent implements OnInit {

  trainings: Exercise[] = [];

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.trainings = this.trainingService.getAvailableExercice();
  }
  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
