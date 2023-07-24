import { ThemeProvider } from 'styled-components'
import { Container, MainBody } from './styles/Global/styled'
import { theme } from './utils/Theme'

// import components
import Showcase from './components/Showcase'
import MySkills from './components/MySkills'
import MyProjects from './components/MyProjects'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<MainBody>
				<Navbar />
				<Container>
					<Showcase />
					<MySkills />
					<MyProjects />
					<Footer />
				</Container>
			</MainBody>
		</ThemeProvider>
	)
}

export default App
