import styled from 'styled-components'

export const ShowcaseParticleContainer = styled.div`
	position: relative;
	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		display: none;
	}
`

export const ShowCaseImageCard = styled.div`
	border: 1px solid #fff;
	width: max-content;
	padding-top: 2rem;
	border-radius: 1rem;
	position: relative;
	overflow: hidden;
`

interface ParticleProps {
	$top?: string
	$left?: string
	$right?: string
	$bottom?: string
	$rotate?: string
}
export const Particle = styled.img<ParticleProps>`
	position: absolute;
	top: ${({ $top }) => $top};
	left: ${({ $left }) => $left};
	right: ${({ $right }) => $right};
	bottom: ${({ $bottom }) => $bottom};
	transform: rotate(${({ $rotate }) => $rotate});
`
