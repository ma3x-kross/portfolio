import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
//import global styles
import {
	Container,
	FlexContainer,
	PaddingContainer,
	SecondaryText,
} from '../styles/Global/styled'
//import navbar styles
import { Logo, MenuIcon, NavbarContainer } from '../styles/Navbar.styled'

import { GiHamburgerMenu } from 'react-icons/gi'
import NavMenu from './layouts/NavMenu'
import { theme } from '../utils/Theme'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const [sticky, setSticky] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			window.scrollY > 50 ? setSticky(true) : setSticky(false)
		}
		window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])
	return (
		<NavbarContainer $bgColor={sticky ? theme.colors.primary : 'transparent'}>
			<PaddingContainer
				$top='1.2rem'
				$bottom='1.2rem'
				$responsiveLeft='1rem'
				$responsiveRight='1rem'
			>
				<Container>
					<FlexContainer $justify='space-between' $responsiveFlex>
						{/* left log */}
						<Logo>
							JustA<SecondaryText>Dev</SecondaryText>
						</Logo>
						{/* right menu icon */}
						<MenuIcon
							as={motion.a}
							whileHover={{ scale: 1.2 }}
							onClick={() => setOpen(true)}
						>
							<GiHamburgerMenu />
						</MenuIcon>
					</FlexContainer>
				</Container>
				<AnimatePresence>
					{open && <NavMenu handleClose={() => setOpen(false)}></NavMenu>}
				</AnimatePresence>
			</PaddingContainer>
		</NavbarContainer>
	)
}

export default Navbar
