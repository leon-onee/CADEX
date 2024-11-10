import { Box, Container, Grid2, Typography } from '@mui/material'
import AdvantagesItem from '../../components/AdvantagesItem'
import ContactUsBtn from '../../components/ContactUsBtn'

const Advantages = () => {
	return (
		<Box component={'section'} sx={{ py: '40px', bgcolor: '#fff' }}>
			<Container>
				<Typography variant='h1' component='h2' textAlign='center'>
					Also very important title
				</Typography>
				<Grid2 container spacing={2} mt='60px'>
					{Array(6)
						.fill(null)
						.map((_, index) => (
							<AdvantagesItem key={index} />
						))}
				</Grid2>
				<Box sx={{ mt: '24px', textAlign: 'center' }}>
					<ContactUsBtn />
				</Box>
			</Container>
		</Box>
	)
}

export default Advantages
