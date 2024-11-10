import { Box, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ContactUsForm from '../components/ContactUsForm'

const ContactPage = () => {
	const [isSuccess, setIsSuccess] = useState(false)
	const [successMessage, setSuccessMessage] = useState('')

	useEffect(() => {
		setTimeout(() => {
			setIsSuccess(false)
			setSuccessMessage('')
		}, 5000)
	}, [isSuccess])

	return (
		<Box
			component={'section'}
			sx={{ py: '100px', bgcolor: '#e2e8f0', textAlign: 'center' }}
			flexGrow={1}
		>
			<Container>
				{!isSuccess ? (
					<Box>
						<Typography variant='h1' component='h1' sx={{}}>
							Only CTA on the page
						</Typography>

						<Box
							sx={{
								maxWidth: '500px',
								mt: '40px',
								mx: 'auto',
							}}
						>
							<ContactUsForm
								setIsSuccess={setIsSuccess}
								setSuccessMessage={setSuccessMessage}
							/>
						</Box>
					</Box>
				) : (
					<Typography variant='h1' component='h1' sx={{}}>
						{successMessage}
					</Typography>
				)}
			</Container>
		</Box>
	)
}

export default ContactPage
