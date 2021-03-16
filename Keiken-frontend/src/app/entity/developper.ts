import {Project} from './project';

export class Developper {

  name: string
  githubUsername: string
  urlAvatar: string
  projects: Project[]

  constructor(name, githubUsername, urlAvatar, projects) {
    this.name = name
    this.urlAvatar = urlAvatar
    this.githubUsername = githubUsername
    this.projects = projects
  }

}
