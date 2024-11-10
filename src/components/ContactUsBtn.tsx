import { Button, SxProps, Theme } from '@mui/material'
import { Link } from 'react-router-dom'

type ContactUsBtnProps = {
	sx?: SxProps<Theme>
}

const ContactUsBtn: React.FC<ContactUsBtnProps> = ({ sx }) => {
	return (
		<Button sx={sx} component={Link} to='/contact' variant='contained'>
			Contact us
		</Button>
	)
}

export default ContactUsBtn
