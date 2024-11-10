import { createTheme, ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './layout/Root'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: 'contact', element: <ContactPage /> },
		],
	},
])

const theme = createTheme({
	typography: {
		h1: {
			fontSize: 40,
			fontWeight: 700,
		},
		subtitle1: {
			fontSize: 22,
			fontWeight: 700,
		},
		body1: {
			fontSize: 16,
		}
	},
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: 'xl',
			},
		},
	},
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
