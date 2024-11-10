import { Box, Container, Typography } from '@mui/material'
import YouTubeEmbed from '../../components/YouTubeEmbed'

const Promo = () => {
	return (
		<Box component={'section'} sx={{ py: '40px', bgcolor: '#e2e8f0' }}>
			<Container>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: '12px',
						flexDirection: {
							xs: 'column',
							md: 'row',
						},
					}}
				>
					<Box
						sx={{
							maxWidth: {
								md: '400px',
							},
						}}
					>
						<Typography
							variant='h1'
							component='h1'
							sx={{
								maxWidth: {
									xs: '100%',
									md: '300px',
								},
							}}
						>
							Most important title on the page
						</Typography>
						<Typography variant='body1' sx={{ mt: '24px' }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							mattis, leo et condimentum ultricies, sem urna convallis metus,
							vel suscipit nibh lacus tincidunt ante
						</Typography>
					</Box>
					<Box sx={{
						width: '100%',
						maxWidth: '500px',
						mt: {
							sm: '20px',
							md: '0'
						}
					}}>
						<YouTubeEmbed videoId='dQw4w9WgXcQ' width='500px' height='300px' />
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Promo
