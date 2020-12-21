import { Injectable } from "@angular/core";
import { from } from "rxjs";

import { Project, mainItem } from "./myInterfaces";
//import { testData } from "./testData.json";

import sampleData from "./data.json";




const myTestProject: Project = {
  projectName: "ريحانة",
  projectNameEn: " Ryhana",
  notes: "test1",
  assignedUsers: [
    {
      userID: 1,
      privilegeCode: 1
    },
    {
      userID: 2,
      privilegeCode: 8
    },
    {
      userID: 3,
      privilegeCode: 16
    }
  ],
  buildingCount: 11,
  buildings: [
    {
      buildingID: 1,
      storyCount: 11,
      buildingName: "A",
      notes: ""
    },
    {
      buildingID: 2,
      storyCount: 11,
      buildingName: "B",
      notes: ""
    },
    {
      buildingID: 3,
      storyCount: 11,
      buildingName: "C",
      notes: ""
    },
    {
      buildingID: 4,
      storyCount: 11,
      buildingName: "D",
      notes: ""
    },
    {
      buildingID: 5,
      storyCount: 11,
      buildingName: "E",
      notes: ""
    },
    {
      buildingID: 6,
      storyCount: 11,
      buildingName: "F",
      notes: ""
    },
    {
      buildingID: 7,
      storyCount: 11,
      buildingName: "G",
      notes: ""
    },
    {
      buildingID: 8,
      storyCount: 11,
      buildingName: "H",
      notes: ""
    },
    {
      buildingID: 9,
      storyCount: 11,
      buildingName: "I",
      notes: ""
    },
    {
      buildingID: 10,
      storyCount: 11,
      buildingName: "J",
      notes: ""
    },
    {
      buildingID: 11,
      storyCount: 11,
      buildingName: "K",
      notes: ""
    }
  ],
  progress: [
    {
      subItemID: 15,
      percentage: 20,
      userID: 2,
      entryDate: new Date("23.05.2019 10:34")
    },
    {
      subItemID: 15,
      percentage: 40,
      userID: 2,
      entryDate: new Date("27.05.2019 12:20")
    },
    {
      subItemID: 12,
      percentage: 40,
      userID: 1,
      entryDate: new Date("27.05.2019 12:20")
    }
  ]
};

const myMainItems: mainItem[] = [
  {
    mainItemID: 1,
    mainItemNameEn: "Earthworks",
    mainItemNameAr: "اعمال ترابيه",
    subItems: [
      {
        subItemID: 1,
        mainItemID: 1,
        subItemNameEn: "excavation",
        subItemNameAr: "الحفر",
        subItemcode: "EX",
        isShow: true,
        displayOrder: 0,
        percentage: 10
      },
      {
        subItemID: 2,
        mainItemID: 1,
        subItemNameEn: "back fill",
        subItemNameAr: "الاحلال",
        subItemcode: "EF",
        isShow: true,
        displayOrder: 0,
        percentage: 50
      }
    ]
  },
  {
    mainItemID: 2,
    mainItemNameEn: "Plain Concrete",
    mainItemNameAr: "الخرسانات العادية",
    subItems: [
      {
        subItemID: 3,
        mainItemID: 2,
        subItemNameEn: "Basment Plain Concrete",
        subItemNameAr: "اساسات عادية",
        subItemcode: "PB",
        isShow: true,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 3,
    mainItemNameEn: "Reinforcement Concrete (RF)",
    mainItemNameAr: "الخرسانات المسلحة",
    subItems: [
      {
        subItemID: 4,
        mainItemID: 3,
        subItemNameEn: "Reinforcement Concrete (RF)",
        subItemNameAr: "اساسات مسلحة",
        subItemcode: "RB",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 5,
        mainItemID: 3,
        subItemNameEn: "RoofRoom",
        subItemNameAr: "الشخشيخة",
        subItemcode: "RR",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 6,
        mainItemID: 3,
        subItemNameEn: "Column RF",
        subItemNameAr: "اعمدة ميزانين الارضي",
        subItemcode: "RC",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 7,
        mainItemID: 3,
        subItemNameEn: "Slap RF",
        subItemNameAr: "سقف الميزانين الارضي",
        subItemcode: "RS",
        isShow: false,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 4,
    mainItemNameEn: "Building ",
    mainItemNameAr: "مباني",
    subItems: [
      {
        subItemID: 8,
        mainItemID: 4,
        subItemNameEn: "Basement Building",
        subItemNameAr: "مباني قصة الردم",
        subItemcode: "BB",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 9,
        mainItemID: 4,
        subItemNameEn: "Roof Builsing",
        subItemNameAr: "مباني الدروه",
        subItemcode: "BR",
        isShow: true,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 5,
    mainItemNameEn: "Plastering",
    mainItemNameAr: "بياض",
    subItems: [
      {
        subItemID: 10,
        mainItemID: 5,
        subItemNameEn: "Frontal view Pladtering",
        subItemNameAr: "بياض الواجهه امامية",
        subItemcode: "PVF",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 11,
        mainItemID: 5,
        subItemNameEn: "Back View Plastering",
        subItemNameAr: "بياض الواجهه خلفية",
        subItemcode: "PVB",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 12,
        mainItemID: 5,
        subItemNameEn: "Side 1  plastering",
        subItemNameAr: "بياض الواجهه الجانبيه 1",
        subItemcode: "PV1",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 13,
        mainItemID: 5,
        subItemNameEn: "Side 2  plastering",
        subItemNameAr: "بياض الواجهه الجانبيه 2",
        subItemcode: "PV2",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 14,
        mainItemID: 5,
        subItemNameEn: "Patheo Plastering",
        subItemNameAr: "بياض منور",
        subItemcode: "PL",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 15,
        mainItemID: 5,
        subItemNameEn: "Roof Pastering",
        subItemNameAr: "بياض الدروه",
        subItemcode: "PR",
        isShow: true,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 6,
    mainItemNameEn: "wood working",
    mainItemNameAr: "نجارة باب وشباك",
    subItems: [
      {
        subItemID: 16,
        mainItemID: 6,
        subItemNameEn: "Doors",
        subItemNameAr: "ابواب الشقق",
        subItemcode: "WD",
        isShow: true,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 7,
    mainItemNameEn: "Electrical works",
    mainItemNameAr: "كهرباء",
    subItems: [
      {
        subItemID: 17,
        mainItemID: 7,
        subItemNameEn: "Cabels",
        subItemNameAr: "صواعد",
        subItemcode: "EC",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 18,
        mainItemID: 7,
        subItemNameEn: "Lighting",
        subItemNameAr: " انارة الطرقات والسلالم",
        subItemcode: "EL",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 19,
        mainItemID: 7,
        subItemNameEn: "PLATES",
        subItemNameAr: "لوحات المدخل",
        subItemcode: "EP",
        isShow: true,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 8,
    mainItemNameEn: "Steel Works",
    mainItemNameAr: "كريتال",
    subItems: [
      {
        subItemID: 20,
        mainItemID: 8,
        subItemNameEn: "VIEW Steel Work",
        subItemNameAr: "كريتال واجهات",
        subItemcode: "KV",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 21,
        mainItemID: 8,
        subItemNameEn: "Stairs Steel Work",
        subItemNameAr: "كريتال سلالم",
        subItemcode: "KS",
        isShow: true,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 9,
    mainItemNameEn: "Painting",
    mainItemNameAr: "دهانات",
    subItems: [
      {
        subItemID: 22,
        mainItemID: 9,
        subItemNameEn: "View Painting",
        subItemNameAr: "واجهه",
        subItemcode: "NV",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 23,
        mainItemID: 9,
        subItemNameEn: "Stairs Painting",
        subItemNameAr: "سلالم وطرقات",
        subItemcode: "NS",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 24,
        mainItemID: 9,
        subItemNameEn: "Patheo Pinting",
        subItemNameAr: "مناور",
        subItemcode: "NP",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 25,
        mainItemID: 9,
        subItemNameEn: "Roof Painting",
        subItemNameAr: "الدروه",
        subItemcode: "NR",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 26,
        mainItemID: 9,
        subItemNameEn: "Entrance Painting",
        subItemNameAr: "المدخل",
        subItemcode: "NE",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 27,
        mainItemID: 9,
        subItemNameEn: "Basement 1 Painting",
        subItemNameAr: "دهانات البدروم السفلي",
        subItemcode: "NB1",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 28,
        mainItemID: 9,
        subItemNameEn: "Basement 2 Painting",
        subItemNameAr: "دهانات البدروم العلوي",
        subItemcode: "NB2",
        isShow: false,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 10,
    mainItemNameEn: "Sainatry",
    mainItemNameAr: "صحي",
    subItems: [
      {
        subItemID: 29,
        mainItemID: 10,
        subItemNameEn: "Sainatry vertical Pipes",
        subItemNameAr: "صواعد",
        subItemcode: "SV",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 30,
        mainItemID: 10,
        subItemNameEn: "Sainatry Horizontal Pipes",
        subItemNameAr: "مدادات",
        subItemcode: "SH",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 31,
        mainItemID: 10,
        subItemNameEn: "Sanatry Motors",
        subItemNameAr: "طلمبات",
        subItemcode: "SM",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 32,
        mainItemID: 10,
        subItemNameEn: "Roof Tanks",
        subItemNameAr: "صرف خزانات السطح",
        subItemcode: "ST",
        isShow: false,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 11,
    mainItemNameEn: "Elevators",
    mainItemNameAr: "المصاعد",
    subItems: [
      {
        subItemID: 33,
        mainItemID: 11,
        subItemNameEn: "Elevators Doors",
        subItemNameAr: "الدلائل والابواب",
        subItemcode: "VD",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 34,
        mainItemID: 11,
        subItemNameEn: "Elavator Mashine",
        subItemNameAr: "الماكينه",
        subItemcode: "VM",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 35,
        mainItemID: 11,
        subItemNameEn: "Elevator room",
        subItemNameAr: "الكابينه",
        subItemcode: "VR",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 36,
        mainItemID: 11,
        subItemNameEn: "Elavator Control System",
        subItemNameAr: "الكنترول",
        subItemcode: "VC",
        isShow: true,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 12,
    mainItemNameEn: "Curtain Walls",
    mainItemNameAr: "الواجهات الزجاجيه",
    subItems: [
      {
        subItemID: 37,
        mainItemID: 12,
        subItemNameEn: "Curtain Walls",
        subItemNameAr: "الواجهات الزجاجيه",
        subItemcode: "CW",
        isShow: true,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 13,
    mainItemNameEn: "Alomnume Works",
    mainItemNameAr: "اعمال المونيوم",
    subItems: [
      {
        subItemID: 38,
        mainItemID: 13,
        subItemNameEn: "Alomnume Works",
        subItemNameAr: "اعمال المونيوم",
        subItemcode: "AL",
        isShow: true,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 14,
    mainItemNameEn: "Marble",
    mainItemNameAr: "رخام",
    subItems: [
      {
        subItemID: 39,
        mainItemID: 14,
        subItemNameEn: " Stairs Marble",
        subItemNameAr: " سلم ",
        subItemcode: "MS",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 40,
        mainItemID: 14,
        subItemNameEn: "Coridor Marble",
        subItemNameAr: " الطرقات",
        subItemcode: "MC",
        isShow: true,
        displayOrder: 0
      },
      {
        subItemID: 41,
        mainItemID: 14,
        subItemNameEn: "Elevator Door Marble",
        subItemNameAr: " شمبران المصاعد",
        subItemcode: "MV",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 42,
        mainItemID: 14,
        subItemNameEn: "entrance marble",
        subItemNameAr: "المدخل",
        subItemcode: "ME",
        isShow: true,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 15,
    mainItemNameEn: "Isolation",
    mainItemNameAr: "العزل",
    subItems: [
      {
        subItemID: 43,
        mainItemID: 15,
        subItemNameEn: "Basment Isolation",
        subItemNameAr: "أساسات",
        subItemcode: "LB",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 44,
        mainItemID: 15,
        subItemNameEn: "Basment wall Isolation",
        subItemNameAr: "حوائط البدروم الخارجية",
        subItemcode: "LW",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 45,
        mainItemID: 15,
        subItemNameEn: "Roof water Isolation",
        subItemNameAr: "أسطح رطوبة",
        subItemcode: "LR",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 46,
        mainItemID: 15,
        subItemNameEn: "Roof heat Isolation",
        subItemNameAr: "أسطح حرارة",
        subItemcode: "LH",
        isShow: false,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 16,
    mainItemNameEn: "Concrete Flooring",
    mainItemNameAr: "خرسانة ميول",
    subItems: [
      {
        subItemID: 47,
        mainItemID: 16,
        subItemNameEn: "Basment Concrete flooring ",
        subItemNameAr: "البدروم",
        subItemcode: "HB",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 48,
        mainItemID: 16,
        subItemNameEn: "Roff Concrete flooring ",
        subItemNameAr: "السطح",
        subItemcode: "HR",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 49,
        mainItemID: 16,
        subItemNameEn: "Ramps",
        subItemNameAr: "الرامبات",
        subItemcode: "HM",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 50,
        mainItemID: 16,
        subItemNameEn: "Roof Isolation Cover",
        subItemNameAr: "اللياسة",
        subItemcode: "HL",
        isShow: false,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 17,
    mainItemNameEn: "Fire",
    mainItemNameAr: "الحريق",
    subItems: [
      {
        subItemID: 51,
        mainItemID: 17,
        subItemNameEn: "Basement Fire System",
        subItemNameAr: "شبكات البدروم",
        subItemcode: "FB",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 52,
        mainItemID: 17,
        subItemNameEn: "Fire vertical Pipes",
        subItemNameAr: "صواعد الحريق",
        subItemcode: "FP",
        isShow: false,
        displayOrder: 0
      },
      {
        subItemID: 53,
        mainItemID: 17,
        subItemNameEn: "Fire Boxes",
        subItemNameAr: "صناديق الحريق",
        subItemcode: "FX",
        isShow: false,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 18,
    mainItemNameEn: "Flooring tiles",
    mainItemNameAr: "ارضيات",
    subItems: [
      {
        subItemID: 54,
        mainItemID: 18,
        subItemNameEn: "Roof Flooring",
        subItemNameAr: "بلاط أسطح",
        subItemcode: "TR",
        isShow: true,
        displayOrder: 0
      }
    ]
  },
  {
    mainItemID: 19,
    mainItemNameEn: "Bridge Steel Works",
    mainItemNameAr: "اعمال معدنية",
    subItems: [
      {
        subItemID: 55,
        mainItemID: 19,
        subItemNameEn: "Steel Bridges",
        subItemNameAr: "كباري معدنية",
        subItemcode: "DS",
        isShow: true,
        displayOrder: 0
      }
    ]
  }
];

@Injectable({
  providedIn: "root"
})
export class DbconnectionService {
  Users: any = sampleData;
  //myMainItems :mainItem[] =myMainItems;
  //projectData: any = testData;

  constructor() {
    // myD:any=testData;
    //console.log(this.projectData);
    //console.log(myTestProject);
  }

  getProject(): Project {
    //console.log(myTestProject);
    return myTestProject;
  }

  getAllItems(): mainItem[] {
    //console.log(myTestProject);
    return myMainItems;
  }

  
}
