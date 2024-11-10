import { Box, Container } from '@mui/material'
import Logo from '../components/Logo'

const Footer = () => {
	return (
		<Box
			component='footer'
			sx={{
				py: '50px',
				position: 'sticky',
				bottom: '0',
				bgcolor: '#fff',
				zIndex: '1',
			}}
		>
			<Container>
				<Box sx={{ textAlign: 'center' }}>
					<Logo />
				</Box>
			</Container>
		</Box>
	)
}

export default Footer
