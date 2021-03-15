import {Project} from './project';

export class Developer {

  name: string
  username: string
  urlAvatar: string
  projets: Project[]

  constructor(name, username, urlAvatar, projets) {
    this.name = name
    this.urlAvatar = urlAvatar
    this.username = username
    this.projets = projets
  }

}
