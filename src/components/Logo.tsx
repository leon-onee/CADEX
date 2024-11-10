import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Logo = () => {
	return (
		<Typography variant='h4' sx={{ fontWeight: '700' }}>
			<Link to='/' style={{ textDecoration: 'none' }}>
				SomeLogo
			</Link>
		</Typography>
	)
}

export default Logo
