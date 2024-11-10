import { Box, Container } from '@mui/material'
import ContactUsBtn from '../components/ContactUsBtn'
import Logo from '../components/Logo'

const Header = () => {
	return (
		<Box
			component='header'
			sx={{
				py: '24px',
				borderBottom: '1px solid grey',
				position: 'sticky',
				top: '0',
				bgcolor: '#fff',
				zIndex: '1',
			}}
		>
			<Container>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: '12px',
						flexWrap: 'wrap',
					}}
				>
					<Logo />
					<ContactUsBtn />
				</Box>
			</Container>
		</Box>
	)
}

export default Header
