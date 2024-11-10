import { Box, Container, Typography } from '@mui/material'
import ContactUsBtn from '../../components/ContactUsBtn'

const ContactUs = () => {
	return (
		<Box
			component={'section'}
			sx={{ py: '40px', bgcolor: '#e2e8f0', textAlign: 'center' }}
		>
			<Container>
				<Box>
					<Typography variant='h1' component='h3' sx={{}}>
						Less important title
					</Typography>
					<ContactUsBtn sx={{ mt: '24px' }} />
				</Box>
			</Container>
		</Box>
	)
}

export default ContactUs
