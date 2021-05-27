import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public teamList: Array<Profile>;
  public readonly defaultProfile: Profile = {
    Id: 0,
    Name: '',
    TechStack: '',
    About: '',
    Image : '',
  };
  constructor() {
    this.teamList = [
      {
        Id: 1,
        Name: 'Srashti Jain',
        About:
          'Founder @TechVraksh | Microsoft MVP | Google Developer Expert (Angular)',
        TechStack: '.NET, MS SQL, Angular, NodeJS, Azure',
        Image: 'srashti_jain.jpg',
      },
      {
        Id: 2,
        Name: 'Vishal Jaiswal',
        About: 'Senior Engineer',
        TechStack: '.NET, MS SQL, VueJS',
        Image: 'vishal_jaiswal.jpg',
      },
      {
        Id: 3,
        Name: 'Atilla Karabacak',
        About:
          'Hello people, I am Atilla. I like learning new things and technologies. I love programming languages and i want to become a full stack developer. I am intern @TechVraksh',
        TechStack: 'HTML, CSS, Javascript, Node.js, MongoDB',
        Image: 'atilla_karabacak.jpg',
      },
      {
        Id: 4,
        Name: 'Saumya Ranjan Nayak',
        About:
          'Sophomore | Full Stack Web | Learning Machine & Deep Learning | Algorithms | YouTube Creator 👨‍💻 | Tech Blogger 📕',
        TechStack:
          'C++, Python, React ,Express, MongoDB,Bootstrap , Numpy, Matplotlib, Scikit Learn',
        Image: 'saumya.png',
      },
      {
        Id: 5,
        Name: 'Pulkit Singh',
        About:
          'Founder @PUGroups | Deeplearning.ai Event Ambassador | Author @FreeCodeCamp | Organiser @MLHacks | Community & Opensource Guy & more...',
        TechStack:
          'HTML, CSS, Javascript, Python, ML & AI, Cloud Computing ( Google Cloud, Azure, Digital Ocean ), Git , Github',
        Image: 'pulkit_singh.png',
      },
    ];
  }

  // tslint:disable-next-line:typedef
  public getProfileById(id: number) {
    return this.teamList.find((x) => x.Id === id) || this.defaultProfile;
  }
}
