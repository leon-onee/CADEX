import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Root = () => {
	return (
		<>
			<Header />
			<Box
				component='main'
				sx={{
					flexGrow: '1',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Outlet />
			</Box>
			<Footer />
		</>
	)
}

export default Root
