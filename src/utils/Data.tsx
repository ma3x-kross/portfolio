import { FaReact, FaNode } from 'react-icons/fa'
import { SiTypescript, SiNestjs, SiMobx, SiRedux } from 'react-icons/si'
import { BsTelegram, BsGithub } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'

import Project1 from '../assets/project_1.png'
import Project2 from '../assets/project_2.png'
import Project3 from '../assets/project_3.png'
import Project4 from '../assets/project_4.png'

export const Links = [
	{
		id: 0,
		url: 'mailto:ma3x.kross@gmail.com',
		icon: <BiLogoGmail />,
	},
	{
		id: 1,
		url: 'https://github.com/ma3x-kross',
		icon: <BsGithub />,
	},
	{
		id: 2,
		url: 'https://t.me/vsi9am',
		icon: <BsTelegram />,
	},
]

export const Skills = [
	{
		id: 0,
		tech: 'React JS',
		icon: <FaReact />,
		url: 'https://react.dev/',
	},
	{
		id: 1,
		tech: 'Node JS',
		icon: <FaNode />,
		url: 'https://nodejs.org/',
	},
	{
		id: 2,
		tech: 'TypeScript',
		icon: <SiTypescript />,
		url: 'https://www.typescriptlang.org/',
	},

	{
		id: 3,
		tech: 'Redux Toolkit',
		icon: <SiRedux />,
		url: 'https://redux-toolkit.js.org/',
	},
	{
		id: 4,
		tech: 'Mobx',
		icon: <SiMobx />,
		url: 'https://mobx.js.org/',
	},
	{
		id: 5,
		tech: 'Nest JS',
		icon: <SiNestjs />,
		url: 'https://nestjs.com/',
	},
]

export const Projects = [
	{
		id: 0,
		projectName: 'Web application for project management',
		projectDesc:
			"There are 3 types of users in this application: manager, administrator, and developer. The manager can create, edit and delete projects. He can also assign developers to projects. The administrator has the functionality of the manager and can invite new users to the system, give them roles or remove them from the system. The administrator can also view reports (payroll and developers' time worked). Developers can mark the time worked for each project. The application allows you to manage projects and automatically calculate developer salaries and project margins. ",
		techStack: ['React TS', 'Mobx', 'MUI', 'Nest JS', 'PostgreSQL'],
		projectImg: Project1,
		githubUrls: [
			'https://github.com/ma3x-kross/proman_frontend',
			'https://github.com/ma3x-kross/proman_backend',
		],
		reverse: false,
	},
	{
		id: 1,
		projectName: 'Marvel Universe App',
		projectDesc:
			'A web application that provides information about comics and characters from the Marvel universe. The data is taken from a third-party Api developer.marvel.com. The user can search for characters, comics and series, add them to favorites, view detailed information and navigate to related items.',
		techStack: ['React TS', 'Mobx', 'Chakra UI'],
		projectImg: Project2,
		githubUrls:
			'https://github.com/ma3x-kross/effective-web-course/tree/develop/react-ts',

		reverse: true,
	},
	{
		id: 2,
		projectName: 'Pizza App',
		projectDesc:
			'A Web site that allows users to order pizza online. The user can search for the desired pizza, sort by category and filter. The site has a constructor in which the user can choose the size and dough of the pizza. Also can go to the page with detailed information about the pizza and add pizzas to the cart.',
		techStack: ['React TS', 'Redux Toolkit', 'Scss'],
		projectImg: Project3,
		githubUrls: 'https://github.com/ma3x-kross/react-pizza',
		reverse: false,
	},
	{
		id: 3,
		projectName: 'Notes',
		projectDesc:
			'Notes is a convenient web application with JWT authorization that allows you to create, edit and delete notes presented as a table. Sorting by title, description and date of creation provides easy access to the information you need. Authorization with JWT tokens ensures that only registered and authenticated users have access to their notes.',
		techStack: ['React TS', 'Mobx', 'Styled Components', 'Nest JS', 'MongoDB'],
		projectImg: Project4,
		githubUrls: 'https://github.com/ma3x-kross/notes',
		reverse: true,
	},
]

export const NavLinks = [
	{
		id: 0,
		name: 'Home',
		href: 'Home',
	},
	{
		id: 1,
		name: 'My Skills',
		href: 'Skills',
	},
	{
		id: 2,
		name: 'My Projects',
		href: 'Projects',
	},
	{
		id: 3,
		name: 'My Contact',
		href: 'Contacts',
	},
]
