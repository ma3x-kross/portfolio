import { motion } from 'framer-motion'
//import global styles
import {
	Heading,
	PaddingContainer,
	SecondaryText,
} from '../styles/Global/styled'

import { Projects } from '../utils/Data'
import Project from './layouts/Project'
import { fadeInTopVariant } from '../utils/Variants'

const MyProjects = () => {
	return (
		<PaddingContainer
			id='Projects'
			$top='6%'
			$bottom='5%'
			$responsiveTop='15%'
			$responsiveLeft='1rem'
			$responsiveRight='1rem'
		>
			<Heading
				as={motion.h4}
				variants={fadeInTopVariant}
				initial='hidden'
				whileInView='visible'
				$size='h4'
			>
				MY PROJECTS
			</Heading>
			<Heading
				as={motion.h2}
				variants={fadeInTopVariant}
				initial='hidden'
				whileInView='visible'
				$size='h2'
			>
				What <SecondaryText>I have built</SecondaryText>
			</Heading>

			{Projects.map((project) => (
				<PaddingContainer key={project.projectName} $top='5rem' $bottom='5rem'>
					<Project
						projectName={project.projectName}
						projectDesc={project.projectDesc}
						techStack={project.techStack}
						projectImg={project.projectImg}
						githubUrls={project.githubUrls}
						reverse={project.reverse}
					/>
				</PaddingContainer>
			))}
		</PaddingContainer>
	)
}

export default MyProjects
