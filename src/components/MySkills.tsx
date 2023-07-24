import { motion } from 'framer-motion'
//import global styles
import {
	FlexContainer,
	Heading,
	IconContainer,
	PaddingContainer,
	ParaText,
	SecondaryText,
} from '../styles/Global/styled'

//import My skills styles
import { SkillsCard, SkillsCardContainer } from '../styles/MySkills.styled'

import { Skills } from '../utils/Data'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'

const MySkills = () => {
	return (
		<PaddingContainer
			id='Skills'
			$top='10%'
			$bottom='10%'
			$responsiveLeft='1rem'
			$responsiveRight='1rem'
			$responsiveTop='15%'
		>
			<FlexContainer
				$fullWidthChild
				$responsiveFlex
				$responsiveDirection='column-reverse'
			>
				{/* left content */}
				<SkillsCardContainer
					as={motion.div}
					variants={fadeInLeftVariant}
					initial='hidden'
					whileInView='visible'
				>
					{Skills.map((skill) => (
						<SkillsCard key={skill.tech}>
							<IconContainer
								href={skill.url}
								target='_blank'
								as={motion.a}
								whileHover={{ scale: 1.2 }}
								$size='5rem'
								$color='secondary'
							>
								{skill.icon}
							</IconContainer>
							<Heading as='h4' $size='h4'>
								{skill.tech}
							</Heading>
						</SkillsCard>
					))}
				</SkillsCardContainer>

				{/* right content */}
				<motion.div
					variants={fadeInRightVariant}
					initial='hidden'
					whileInView='visible'
				>
					<Heading as='h4' $size='h4'>
						MY SKILLS
					</Heading>
					<Heading as='h2' $size='h2' $top='0.5rem'>
						What <SecondaryText>I can do</SecondaryText>
					</Heading>

					<ParaText $top='2rem' $bottom='1.5rem'>
						As a Developer, I have extensive knowledge and experience in
						building complex web applications, covering both client and server
						side. Here are my key skills:
					</ParaText>
					<ParaText $bottom='1.5rem'>
						<SecondaryText>Front-end </SecondaryText>I have a strong command of
						modern JavaScript, including ES6 and TypeScript, which allows me to
						write efficient and maintainable code for web applications. My deep
						understanding of React.js enables me to create dynamic and
						responsive user interfaces, enhancing the overall user experience. I
						am proficient in utilizing Redux Toolkit and MobX for state
						management, ensuring a smooth and organized flow of data in the
						application.
					</ParaText>
					<ParaText>
						<SecondaryText>Back-end </SecondaryText>I am proficient in Node.js
						language, which enables me to implement efficient and scalable
						server-side logic, thereby improving the performance of web
						applications. My experience with Nest.js helps me to develop
						well-structured and maintainable web applications, making the
						application development process more optimized. I have hands-on
						experience with databases such as PostgreSQL and MongoDB, which
						enables me to manage data efficiently and ensure data integrity.
						Using Swagger, I am able to create comprehensive API documentation,
						ensuring seamless integration with other developers.
					</ParaText>
				</motion.div>
			</FlexContainer>
		</PaddingContainer>
	)
}

export default MySkills
