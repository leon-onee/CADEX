import {
	Button,
	CircularProgress,
	Stack,
	styled,
	TextField,
} from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type ContactUsFormProps = {
	setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
	setSuccessMessage: React.Dispatch<React.SetStateAction<string>>
}

type FormValues = {
	name: string
	email: string
	message: string
}

const StyledTextField = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		'&:hover fieldset': {
			borderColor: 'blue',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'green',
		},
	},
})

const ContactUsForm: React.FC<ContactUsFormProps> = ({
	setIsSuccess,
	setSuccessMessage,
}) => {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<FormValues>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	})

	const { register, handleSubmit, formState } = form
	const { errors } = formState

	const onSubmit = async (data: FormValues) => {
		try {
			setIsLoading(true)
			const response = await axios.post(
				'https://codex-server-8pec.onrender.com/submit',
				data
			)
			if (response.status === 200) {
				setIsSuccess(true)
				setSuccessMessage(response.data)
				console.log('Form submitted successfully:', response.data)
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error('Axios error:', error.response?.data || error.message)
			} else {
				console.error('Unknown error:', error)
			}
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Stack spacing={2}>
				<StyledTextField
					label='Name'
					type='text'
					{...register('name', {
						required: 'Name is required',
					})}
					error={!!errors.name}
					helperText={errors.name?.message}
				/>
				<StyledTextField
					label='Email'
					type='email'
					{...register('email', {
						required: 'Email is required',
						validate: {
							validEmail: value =>
								/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ||
								'Invalid email address',
						},
					})}
					error={!!errors.email}
					helperText={errors.email?.message}
				/>
				<StyledTextField
					label='Message'
					type='text'
					multiline
					maxRows={4}
					{...register('message', {
						required: 'Message is required',
					})}
					error={!!errors.message}
					helperText={errors.message?.message}
				/>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					sx={{ height: '40px' }}
					disabled={isLoading}
				>
					{!isLoading ? 'Submit' : <CircularProgress size={'24px'} />}
				</Button>
			</Stack>
		</form>
	)
}

export default ContactUsForm
