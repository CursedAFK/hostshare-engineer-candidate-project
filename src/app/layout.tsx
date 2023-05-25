import { Metadata } from 'next'
import './globals.css'

interface Props {
	children: React.ReactNode
}

export const metadata: Metadata = {
	title: 'Vacation Homes and Condo Rentals - Hostshare',
	description:
		'Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Hostshare.',
	icons: '/logo.png'
}

const RootLayout = ({ children }: Props) => (
	<html lang='en'>
		<body>{children}</body>
	</html>
)

export default RootLayout
