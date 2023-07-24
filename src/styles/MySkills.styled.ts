import { styled } from 'styled-components'

export const SkillsCardContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 2rem;
	padding: 0 5%;
	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		padding: 0;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: block;
	}
`

export const SkillsCard = styled.div`
	width: 230px;
	border: 1px solid #fff;
	padding: 3rem 0;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.primary_light};
	@media (max-width: 1024px) {
		width: 150px;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		width: 100%;
		margin-top: 2rem;
	}
`
