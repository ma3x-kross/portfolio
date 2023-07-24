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

//import showcase styles
import {
	Particle,
	ShowCaseImageCard,
	ShowcaseParticleContainer,
} from '../styles/Showcase.styled'

//import assets
import ShowCaseImg from '../assets/showcase-img.png'
import BackgroundImg from '../assets/particle.png'

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'
import { Links } from '../utils/Data'

const Showcase = () => {
	return (
		<PaddingContainer
			id='Home'
			$left='3%'
			$right='10%'
			$top='18%'
			$bottom='10%'
			$responsiveLeft='1rem'
			$responsiveRight='1rem'
			$responsiveTop='8rem'
		>
			<FlexContainer $align='center' $fullWidthChild>
				{/* left content */}
				<motion.div
					variants={fadeInLeftVariant}
					initial='hidden'
					whileInView='visible'
				>
					<Heading as='h4' $size='h4'>
						Hello!
					</Heading>

					<Heading as='h2' $size='h2'>
						I'm <SecondaryText>Sigutin Vadim</SecondaryText>
					</Heading>

					<Heading as='h3' $size='h3'>
						I'm a <SecondaryText>Web Developer</SecondaryText>
					</Heading>

					<ParaText as='p' $top='2rem' $bottom='4rem'>
						Hello, my name is Sigutin Vadim, and I am a full-stack developer. I
						specialize in creating user-friendly websites and web applications
						using JavaScript.
					</ParaText>

					{/* social-icons */}
					<FlexContainer $gap='20px' $responsiveFlex>
						{Links.map((link) => (
							<IconContainer
								as={motion.a}
								whileHover={{ scale: 1.2 }}
								key={link.id}
								href={link.url}
								$color='white'
								$size='1.5rem'
								target='_blank'
							>
								{link.icon}
							</IconContainer>
						))}
					</FlexContainer>
				</motion.div>

				{/* right content */}

				<FlexContainer
					$justify='flex-end'
					as={motion.div}
					variants={fadeInRightVariant}
					initial='hidden'
					whileInView='visible'
				>
					<ShowcaseParticleContainer>
						<ShowCaseImageCard>
							<img src={ShowCaseImg} alt='showcase'></img>
						</ShowCaseImageCard>

						<Particle
							as={motion.img}
							animate={{
								x: [0, 100, 0],
								rotate: 360,
								scale: [1, 0.5, 1],
							}}
							transition={{ duration: 20, repeat: Infinity }}
							src={BackgroundImg}
							alt='particle'
							$top='-80px'
							$left='20px'
							$rotate='60deg'
						/>
						<Particle
							as={motion.img}
							animate={{
								y: [0, 100, 0],
								rotate: 360,
								scale: [1, 0.8, 1],
							}}
							transition={{ duration: 18, repeat: Infinity }}
							src={BackgroundImg}
							alt='particle'
							$top='50px'
							$right='-70px'
						/>
						<Particle
							as={motion.img}
							animate={{
								y: [0, -100, 0],
								rotate: 360,
								scale: [1, 0.9, 1],
							}}
							transition={{ duration: 15, repeat: Infinity }}
							src={BackgroundImg}
							alt='particle'
							$bottom='10px'
							$left='-70px'
							$rotate='50deg'
						/>
					</ShowcaseParticleContainer>
				</FlexContainer>
			</FlexContainer>
		</PaddingContainer>
	)
}

export default Showcase
