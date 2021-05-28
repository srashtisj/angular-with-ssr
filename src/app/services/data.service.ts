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
        Image: 'Isaiah_Abiodun.png'
      },
      {
        Id: 7,
        Name : 'Ritesh P. Kurve',
        About : 
          'Founder @OnlineGadchiroli | Full Stack Web Developer | Intern @TechVraksh',
        TechStack : 
          'Java, Materialize CSS, VueJS, PHP, MySQL, Codeigniter',
        Image: 'ritesh_kurve.jpg'
      },
      {
        Id: 8,
        Name : 'Saketh Gollapudi',
        About :
          'I am a computer science student with a passion for web development. I aspire to become a full-stack web developer',
        TechStack :
          'HTML, CSS, JavaScript, Bootstrap, React',
        Image: 'saketh-gollapudi.jpeg'
      },
      {
        Id: 9,
        Name : 'Arbaj Saiyyed',
        About : 
          'Learning Full Stack Web Development | Intern @TechVraksh',
        TechStack : 
          'Full Stack Development | Python | C++ | C | Java | HTML | CSS',
        Image:'default.png '
      },
      {
        Id: 10,
        Name : 'Mayank Jha',
        About : 
          'CS Undergrad | Python developer | Opensource contributor | GSSoC 21 Participant | Assistant Organiser- AWS community | Competitive Programmer',
        TechStack : 
          'Python, C, Data structure and algorithm, HTML, Cloud Computing, CSS',
        Image:'default.png',
      },
      {
        Id: 11,
        Name :' Nidhi Nivedita',
        About : 
          'Sophomore | CSE Undergrad | Co-organizer- AWS Community | Chapter Lead- InfosecGirls Ranchi | Team Lead- DRISTI(NGO)',
        TechStack : 
          'C, Java, Python, HTML, DSA',
        Image: 'Nidhi_Nivedita.jpg ',
      },
      {
        Id: 12,
        Name :' Nur A Alam Patwary',
        About : 
          'Nuclear Engineer, Comp-bio & Bioinformatics Software Development Enthusiast, Image Processing Fanatic',
        TechStack : 
          'Python | Javascript| C | Matlab | SQLite | Data Structure and Algorithm | Bioinformatics Algorithms',
        Image: 'Nur_A_Alam_Patwary.jpg',
      },
      {
        Id: 13,
        Name:' Kommineni Vamsi',
        About:
          'I studied my 10th class in Viswabharati High School, Gudivada(2017-2018),I completed my intermediate in Narayana Junior College, Vijayawada. My hobbies are playing chess, listening to songs, watching movies.',
        TechStack:
          ' Html | Css | JavaScript | ReactJs',
        Image:' Kommineni_Vamsi.png ',
      },
      {
        Id: 14,
        Name:' Gutta Sumanth',
        About:
          'I am a computer science student with a passion for web development. I aspire to become a full-stack web developer',
        TechStack:
          ' Html | Css | JavaScript | Angular| Java | python | MySql',
        Image:' Sumanth_Gutta.jpg ',
      },
      {
        Id: 15,
        Name:' Akshay V',
        About:
          'Passionate about Technology & Loves to Solve problems there by improving my skills Open Source Contributer,Tech Lover and Trying to Updating My Self Every Day',
        TechStack:
          ' Html | Css | JavaScript | Angular| Java | python | MySql',
        Image:'default.png',
       },
      {
        Id: 16,
        Name:' Nirupama singh',
        About:
          'I was born and raised in delhi, completed my schooling here only. A part of me believes that my creative instincts define me. I like to write and paint apart from the whole tech part.',
        TechStack:
          ' Html | Css | JavaScript | Angular',
        Image:'nirupama_singh.jpg',
      },
      {
        Id: 17,
        Name:'Sahil Agarwal',
        About:
          'Intern: TechVraksh',
        TechStack:
          ' Html | Css | JavaScript | Angular|ReactJs',
        Image:'sahil_agrawal.jpg',
      },
      {
        Id: 18,
        Name:'Siddhant Sipoliya',
        About:
          'I have done my 10 and 12th from Orai, Uttar Pradesh. Currently in my final year of BE from Sai Vidya Institute Of Technology. I love playing Table Tennis ,watching Science/fiction movies. I am a friendly person.',
        TechStack:
          ' Html | Css | JavaScript | Angular|ReactJs|Mysql|Github',
        Image:'Siddhant_Sipoliya.jpeg',
      },
      {
        Id: 19,
        Name:'Siddharth jain',
        About:
          'TechVraksh|Intern.',
        TechStack:
          ' Html | Css | JavaScript | Angular|ReactJs|Mysql|Github',
        Image:'default.png',
      },
    ];
  }

  // tslint:disable-next-line:typedef
  public getProfileById(id: number) {
    return this.teamList.find((x) => x.Id === id) || this.defaultProfile;
  }
}
