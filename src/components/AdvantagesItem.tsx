import { Box, Grid2, Typography } from '@mui/material'

const AdvantagesItem = () => {
	return (
		<Grid2 size={{md: 4, sm: 6, xs: 12}}>
			<Box maxWidth='400px'>
				<Typography variant='subtitle1'>
					Most important title on the page
				</Typography>
				<Typography variant='body1' sx={{ mt: '12px' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					mattis, leo et condimentum ultricies, sem urna convallis metus, vel
					suscipit nibh lacus tincidunt ante
				</Typography>
			</Box>
		</Grid2>
	)
}

export default AdvantagesItem
