import React from 'react'
import { motion } from 'framer-motion'
//import global styles
import {
	Button,
	FlexContainer,
	Heading,
	PaddingContainer,
	ParaText,
} from '../../styles/Global/styled'

//import project styles
import {
	ProjectImage,
	ProjectImageContainer,
	TechStackCard,
} from '../../styles/MyProject.styled'
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants'

interface ProjectProps {
	projectName: string
	projectDesc: string
	techStack: string[]
	projectImg: string
	githubUrls: string | string[]
	reverse: boolean
}

const Project: React.FC<ProjectProps> = ({
	projectName,
	projectDesc,
	techStack,
	projectImg,
	githubUrls,
	reverse,
}) => {
	return (
		<FlexContainer $fullWidthChild $direction={reverse ? 'row-reverse' : ''}>
			{/* left section project content*/}
			<motion.div
				variants={reverse ? fadeInRightVariant : fadeInLeftVariant}
				initial='hidden'
				whileInView='visible'
			>
				<Heading as='h3' $size='h3'>
					{projectName}
				</Heading>

				<PaddingContainer $top='1rem'>
					<FlexContainer $gap='1.5rem'>
						{techStack.map((technology) => (
							<TechStackCard key={technology}>{technology}</TechStackCard>
						))}
					</FlexContainer>
				</PaddingContainer>

				<ParaText $top='1.5rem' $bottom='2rem'>
					{projectDesc}
				</ParaText>

				{Array.isArray(githubUrls) ? (
					<FlexContainer
						$gap='2rem'
						$responsiveFlex
						$responsiveDirection='column'
					>
						<Button href={githubUrls[0]} target='_blank'>
							View client source code
						</Button>
						<Button href={githubUrls[1]} target='_blank'>
							View server source code
						</Button>
					</FlexContainer>
				) : (
					<Button href={githubUrls} target='_blank'>
						View source code
					</Button>
				)}
			</motion.div>

			{/* right section project image*/}

			<ProjectImageContainer
				as={motion.div}
				variants={reverse ? fadeInLeftVariant : fadeInRightVariant}
				initial='hidden'
				whileInView='visible'
				$justify={reverse ? 'flex-start' : 'flex-end'}
			>
				<ProjectImage src={projectImg} alt={projectName} />
			</ProjectImageContainer>
		</FlexContainer>
	)
}

export default Project
