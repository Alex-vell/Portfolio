import {logo} from "../assets/image/logo";
import {projectsLogo} from "../assets/image/projectsLogo";

export interface ISkill {
    title: string,
    logo: string | null,
    id: number,
}

export interface IProject {
    title: string,
    logo: string,
    screens: string[],
    id: number,
    link: string | null,
    description: string,
}

export interface IUserData {
    aboutMe: string;
    skills: ISkill[];
    projects: IProject[];
}

export const user_data: IUserData = {
    aboutMe: 'I am a detail-oriented Front End Developer with experience in JavaScript,' +
        ' TypeScript, HTML, CSS, React and Redux. I am well versed in both standalone and' +
        ' collaborative projects, with an emphasis on web application development. \n' +
        ' I am open to work opportunities where I can contribute, learn and grow. If you have' +
        ' a good opportunity that matches my skills and experience, feel free to contact me.',
    skills: [
        {title: "JavaScript", logo: logo.js, id: 1,},
        {title: "TypeScript", logo: logo.ts, id: 2,},
        {title: "React", logo: logo.react, id: 3,},
        {title: "Next.js", logo: logo.nextJS, id: 4,},
        {title: "React Native", logo: logo.react_native, id: 5,},
        {title: "Redux", logo: logo.redux, id: 6,},
        {title: "MobX", logo: logo.mobX, id: 7,},
        {title: "Redux Toolkit", logo: logo.redux, id: 8,},
        {title: "HTML", logo: logo.html, id: 9,},
        {title: "CSS", logo: logo.css, id: 10,},
        {title: "SAAS", logo: logo.saas, id: 11,},
        {title: "Styled Components", logo: logo.styled_component, id: 12,},
        {title: "Webpack", logo: logo.webpack, id: 13,},
        {title: "Node.js", logo: logo.nodeJS, id: 14,},
        {title: "Git", logo: logo.git, id: 15,},
        {title: "Ant Design", logo: logo.ant, id: 16,},
        {title: "Material UI", logo: logo.mu, id: 17,},
    ],
    projects: [
        {
            title: "TermiNow",
            logo: projectsLogo.termiNow1,
            screens: [projectsLogo.termiNow1, projectsLogo.termiNow2, projectsLogo.termiNow3],
            link: null,
            id: 1,
            description: "TermiNow is a corporate web application for managing a network of dental" +
                " clinics. The application facilitates the work of employees and allows customers" +
                " to easily make an appointment online.",
        },
        {
            title: "Pflegerating",
            logo: projectsLogo.pflegerating,
            screens: [projectsLogo.pflegerating, projectsLogo.pflegerating2],
            link: "https://www.pflegerating.de",
            id: 2,
            description: "The Pflegeraiting portal is an independent and free information portal" +
                " that helps you and your loved ones to find the right nursing home throughout" +
                " Germany. For example, you will find information about sizes, costs, special forms" +
                " of care as well as the location and addresses of facilities.",
        },
        {
            title: "Todo list",
            logo: projectsLogo.todolist,
            screens: [projectsLogo.todo1],
            link: "https://alex-vell.github.io/TodoList_inc",
            id: 3,
            description: "",
        },
        {
            title: "Social Network",
            logo: projectsLogo.socialNetwork,
            screens: [projectsLogo.socialNetwork],
            link: "https://alex-vell.github.io/Social_Network_TS",
            id: 4,
            description: "",
        }
    ]
}
