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
      {
        Id: 6,
        Name: 'Isaiah Abiodun',
        About:
          'Hello All, I am Isaiah. An aspiring software engineer from Lagos, Nigeria. Currently, interning @TechVraksh',
        TechStack:
          'HTML, CSS, Javascript, React.js, Node.js, MongoDB',
        Image: ''
      },
      {
        Id: 7,
        Name : 'Ritesh P. Kurve',
        About : 
          'Founder @OnlineGadchiroli | Full Stack Web Developer | Intern @TechVraksh',
        TechStack : 
          'Java, Materialize CSS, VueJS, PHP, MySQL, Codeigniter',
        Image: ''
      },
      {
        Id: 7,
        Name : 'Ritesh P. Kurve',
        About : 
          'Founder @OnlineGadchiroli | Full Stack Web Developer | Intern @TechVraksh',
        TechStack : 
          'Java, Materialize CSS, VueJS, PHP, MySQL, Codeigniter',
        Image: ''
      },
      {
        Id: 8,
        Name : 'Saketh Gollapudi',
        About :
          'I am a computer science student with a passion for web development. I aspire to become a full-stack web developer',
        TechStack :
          'HTML, CSS, JavaScript, Bootstrap, React',
        Image: ''
      },
      {
        Id: 9,
        Name : 'Arbaj Saiyyed',
        About : 
          'Learning Full Stack Web Development | Intern @TechVraksh',
        TechStack : 
          'Full Stack Development | Python | C++ | C | Java | HTML | CSS',
        Image:' '
      },
      {
        Id: 10,
        Name : 'Mayank Jha',
        About : 
          'CS Undergrad | Python developer | Opensource contributor | GSSoC 21 Participant | Assistant Organiser- AWS community | Competitive Programmer',
        TechStack : 
          'Python, C, Data structure and algorithm, HTML, Cloud Computing, CSS',
        Image:'',
      },
      {
        Id: 11,
        Name :' Nidhi Nivedita',
        About : 
          'Sophomore | CSE Undergrad | Co-organizer- AWS Community | Chapter Lead- InfosecGirls Ranchi | Team Lead- DRISTI(NGO)',
        TechStack : 
          'C, Java, Python, HTML, DSA',
        Image: ' ',
      },
      {
        Id: 12,
        Name :' Nur A Alam Patwary',
        About : 
          'Nuclear Engineer, Comp-bio & Bioinformatics Software Development Enthusiast, Image Processing Fanatic',
        TechStack : 
          'Python | Javascript| C | Matlab | SQLite | Data Structure and Algorithm | Bioinformatics Algorithms',
        Image: '',
      }
      
      
      
    ];
  }

  // tslint:disable-next-line:typedef
  public getProfileById(id: number) {
    return this.teamList.find((x) => x.Id === id) || this.defaultProfile;
  }
}
