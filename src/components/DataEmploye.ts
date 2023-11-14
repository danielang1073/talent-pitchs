export interface DummyItem {
  id: number;
  title: string;
  level?: boolean;
  img: string;
  items: Item[];
}
export interface Item {
  id: number;
  text: string;
}
export interface dataEmployeeDetail {
  description: string;
  email: string;
  phone: string;
  statesSearch: string;
  name: string;
}
export interface JobData {
  audio: string;
  comments_count: number;
  company_id: number;
  company_logo: string;
  company_name: string;
  compatibility: null | any;
  compatibility_reason: null | any;
  connected: boolean;
  contract_type: string;
  created_at: string;
  creator: string;
  description: string;
  desired_states: string;
  id: number;
  image: string;
  interest_areas: string;
  level_experience: string;
  name: string;
  optional_requirements: string;
  pitches_count: number;
  presentation: boolean;
  proposed_count: number;
  requirements: string;
  review: number;
  salary: string;
  selected_count: number;
  sent_pitch: boolean;
  video: string;
  views_count: number;
  work_methods: string;
}
export const dummyData: DummyItem[] = [
  {
    id: 1,
    title: "Áreas de interés",
    img: require("@/assets/Bullseye_Pointer.png"),
    items: [
      {
        id: 1,
        text: "Copy",
      },
      {
        id: 2,
        text: "Copy",
      },
      {
        id: 3,
        text: "Copy",
      },
    ],
  },
  {
    id: 2,
    title: "Vacantes sugeridas por AI",
    img: require("@/assets/Head.png"),
    items: [
      {
        id: 1,
        text: "Copy",
      },
      {
        id: 2,
        text: "Copy",
      },
      {
        id: 3,
        text: "Copy",
      },
    ],
  },
];

export const PerfilSearch: DummyItem[] = [
  {
    id: 1,
    title: "Conocimientos",
    img: require("@/assets/Brain.png"),
    items: [
      {
        id: 1,
        text: "Copy",
      },
      {
        id: 2,
        text: "Copy",
      },
      {
        id: 3,
        text: "Copy",
      },
      {
        id: 4,
        text: "Copy",
      },
      {
        id: 5,
        text: "Copy",
      },
      {
        id: 6,
        text: "Copy",
      },
      {
        id: 7,
        text: "Copy",
      },
      {
        id: 8,
        text: "Copy",
      },
    ],
  },
  {
    id: 2,
    title: "Habilidades",
    img: require("@/assets/Paperclip.png"),
    items: [
      {
        id: 1,
        text: "Copy",
      },
      {
        id: 2,
        text: "Copy",
      },
      {
        id: 3,
        text: "Copy",
      },
      {
        id: 4,
        text: "Copy",
      },
      {
        id: 5,
        text: "Copy",
      },
      {
        id: 6,
        text: "Copy",
      },
      {
        id: 7,
        text: "Copy",
      },
      {
        id: 8,
        text: "Copy",
      },
    ],
  },
  {
    id: 3,
    title: "Herramientas",
    img: require("@/assets/Tools.png"),
    items: [
      {
        id: 1,
        text: "Copy",
      },
      {
        id: 2,
        text: "Copy",
      },
      {
        id: 3,
        text: "Copy",
      },
      {
        id: 4,
        text: "Copy",
      },
      {
        id: 5,
        text: "Copy",
      },
      {
        id: 6,
        text: "Copy",
      },
      {
        id: 7,
        text: "Copy",
      },
      {
        id: 8,
        text: "Copy",
      },
    ],
  },
  {
    id: 4,
    title: "Idiomas",
    level: true,
    img: require("@/assets/Language.png"),
    items: [
      {
        id: 1,
        text: "Inglés",
      },
      {
        id: 2,
        text: "Francés",
      },
      {
        id: 3,
        text: "Alemán",
      },
    ],
  },
];

export const Metodologías: DummyItem[] = [
  {
    id: 1,
    title: "Metodologías",
    img: require("@/assets/List.png"),
    items: [
      {
        id: 1,
        text: "Copy",
      },
      {
        id: 2,
        text: "Copy",
      },
      {
        id: 3,
        text: "Copy",
      },
      {
        id: 4,
        text: "Copy",
      },
    ],
  },
];

export const InformationEmployee: DummyItem[] = [
  {
    id: 1,
    title: "Beneficios que ofrecemos",
    img: require("@/assets/Badge_Check.png"),
    items: [
      {
        id: 1,
        text: "Copy",
      },
      {
        id: 2,
        text: "Copy",
      },
      {
        id: 3,
        text: "Copy",
      },
      {
        id: 4,
        text: "Copy",
      },
    ],
  },
  {
    id: 2,
    title: "Formas de trabajo que ofrecemos ",
    img: require("@/assets/Briefcase.png"),
    items: [
      {
        id: 1,
        text: "Copy",
      },
      {
        id: 2,
        text: "Copy",
      },
      {
        id: 3,
        text: "Copy",
      },
      {
        id: 4,
        text: "Copy",
      },
    ],
  },
  {
    id: 3,
    title: "Cultura que ofrecemos",
    img: require("@/assets/Comments.png"),
    items: [
      {
        id: 1,
        text: "Copy",
      },
      {
        id: 2,
        text: "Copy",
      },
      {
        id: 3,
        text: "Copy",
      },
      {
        id: 4,
        text: "Copy",
      },
    ],
  },
  {
    id: 4,
    title: "Comunidades",
    img: require("@/assets/Users.png"),
    items: [
      {
        id: 1,
        text: "Copy",
      },
      {
        id: 2,
        text: "Copy",
      },
      {
        id: 3,
        text: "Copy",
      },
      {
        id: 4,
        text: "Copy",
      },
    ],
  },
];

export const informationEmployeeCard: dataEmployeeDetail[] = [
  {
    description:
      "En ac telecom somos expertos en telecomunicaciones con mas de 25 años comprobables en el mercado, brindando empleo a mas de 321 empleados al rededor de todo el mundo",
    email: "danielcc89@gmail.com",
    phone: "3507304331",
    statesSearch: "Emprendedor, practicas, primer empleo",
    name: "Lider UX",
  },
];
