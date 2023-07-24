import React from 'react'
import { motion } from 'framer-motion'

//import global styles
import { FlexContainer, PaddingContainer } from '../../styles/Global/styled'

//import navbar styles
import {
	MenuIcon,
	MenuItem,
	NavMenuContainer,
} from '../../styles/Navbar.styled'

import { AiOutlineClose } from 'react-icons/ai'
import { NavLinks } from '../../utils/Data'
import { slideInLeft } from '../../utils/Variants'

interface NavMenuProps {
	handleClose: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ handleClose }) => {
	return (
		<NavMenuContainer
			as={motion.div}
			variants={slideInLeft}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			{/* close button */}
			<PaddingContainer $left='5%' $right='5%' $top='2rem'>
				<FlexContainer $justify='flex-end' $responsiveFlex>
					<MenuIcon
						as={motion.a}
						whileHover={{ scale: 1.2 }}
						onClick={handleClose}
					>
						<AiOutlineClose />
					</MenuIcon>
				</FlexContainer>
			</PaddingContainer>
			{/* menu items */}
			<PaddingContainer $top='8%'>
				<FlexContainer $direction='column' $align='center' $responsiveFlex>
					{NavLinks.map((link) => (
						<MenuItem
							as={motion.a}
							whileHover={{ scale: 1.2 }}
							key={link.id}
							href={`#${link.href}`}
							onClick={handleClose}
						>
							{link.name}
						</MenuItem>
					))}
				</FlexContainer>
			</PaddingContainer>
		</NavMenuContainer>
	)
}

export default NavMenu
