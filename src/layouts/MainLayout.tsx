import { ReactNode } from 'react'
import { Navbar } from '../components/Navbar'

interface Props {
	children: ReactNode
}

export const MainLayout = ({ children }: Props) => {
	return (
		<div className="relative">
			<Navbar startProject={() => null} />
			{children}
		</div>
	)
}
