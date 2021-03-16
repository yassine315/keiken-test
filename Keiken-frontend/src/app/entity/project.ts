export class Project {
  projectName:string;
  technologies:string[];


  constructor(projectName: string, Technologies: string[]) {
    this.projectName = projectName;
    this.technologies = Technologies;
  }
}
