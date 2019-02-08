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

  private exercises: Exercise[] = [];

  getAvailableExercice() {
    return this.availableExercise.slice();
  }

  startExercise( exerciseId: string) {
    const selectesExercise = this.availableExercise.find(exercise => exercise.id === exerciseId);
    this.runningExercise = selectesExercise;
    this.exerciseChanged.next({...this.runningExercise});
  }

  getRunningExercise() {
    return {...this.runningExercise};
  }

  completeExercise() {
    this.exercises.push({...this.runningExercise, date: new Date(), state: 'completed'});
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.exercises.push({...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'});
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getCompletedOrCanceledExercise() {
    return this.exercises.slice();
  }
}
