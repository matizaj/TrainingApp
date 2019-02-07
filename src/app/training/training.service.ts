import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

export class TrainingService {

exerciseChanged = new Subject<Exercise>();

  availableExercise: Exercise[] = [
    {id: 'str', name: 'finger strenght', duration: 160, calories: 200},
    {id: 'end', name: 'endurance', duration: 240, calories: 700},
    {id: 'pow', name: 'power', duration: 60, calories: 500},
    {id: 'gen', name: 'general', duration: 90, calories: 480},
    {id: 'cli', name: 'lead climbing', duration: 300, calories: 950}
  ];
  private runningExercise: Exercise;
  getAvailableExercice() {
    return this.availableExercise.slice();
  }

  startExercise( exerciseId: string) {
    const selectesExercise = this.availableExercise.find(exercise => exercise.id === exerciseId);
    this.runningExercise = selectesExercise;
    this.exerciseChanged.next({...this.runningExercise});
  }
}
