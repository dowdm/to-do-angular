export class Task {
  public done = false;
  constructor(public description: string,  public priority: number) { }
  markDone() {
    this.done = true;
  }

}
