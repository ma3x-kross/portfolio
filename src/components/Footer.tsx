import { motion } from 'framer-motion'
//import global styles
import {
	Button,
	FlexContainer,
	Heading,
	PaddingContainer,
	SecondaryText,
} from '../styles/Global/styled'

import { ContactForm, FormInput, FormLabel } from '../styles/Footer.styled'
import { fadeInBottomVariant } from '../utils/Variants'

const Footer = () => {
	return (
		<PaddingContainer
			as={motion.div}
			variants={fadeInBottomVariant}
			initial='hidden'
			whileInView='visible'
			id='Contacts'
			$top='10%'
			$bottom='10%'
			$responsiveTop='15%'
		>
			<Heading as='h4' $size='h4' $align='center'>
				MY CONTACT
			</Heading>

			<Heading as='h2' $size='h2' $align='center' $top='0.5rem'>
				Contact <SecondaryText>Me Here</SecondaryText>
			</Heading>

			<PaddingContainer $top='3rem'>
				<FlexContainer $justify='center'>
					<ContactForm
						target='_blank'
						action='https://formsubmit.co/c1dd79481509b2bd76e1591b39edb36c'
						method='POST'
					>
						<PaddingContainer $bottom='2rem'>
							<FormLabel>Name:</FormLabel>
							<FormInput
								type='text'
								placeholder='Enter your name'
								name='name'
							></FormInput>
						</PaddingContainer>
						<PaddingContainer $bottom='2rem'>
							<FormLabel>Email:</FormLabel>
							<FormInput
								type='email'
								placeholder='Enter your email'
								name='email'
							></FormInput>
						</PaddingContainer>
						<PaddingContainer $bottom='2rem'>
							<FormLabel>Message:</FormLabel>
							<FormInput
								as='textarea'
								placeholder='Enter your message'
								name='message'
							></FormInput>
						</PaddingContainer>
						<FlexContainer $justify='center' $responsiveFlex>
							<Button as='button' type='submit'>
								Send Message
							</Button>
						</FlexContainer>
					</ContactForm>
				</FlexContainer>
			</PaddingContainer>
		</PaddingContainer>
	)
}

export default Footer
