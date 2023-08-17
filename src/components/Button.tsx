import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import cn from 'classnames'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode
	size?: 's' | 'm' | 'l'
	theme?: 'filled' | 'outline'
	color?: 'primary'
}

export const Button = ({ children, size = 'm', theme = 'outline', color = 'primary', className, ...props }: ButtonProps) => {
	return (
		<button className={cn(
			'flex justify-center items-center rounded-full transition-all duration-500 font-bold',
			{
				['bg-transparent border-[2px] border-primary text-primary hover:bg-primary hover:text-white']: theme === 'outline',
				['bg-primary text-white hover:scale-110']: theme === 'filled',
				['text-base py-2 px-4']: size === 's',
				['text-base py-2 px-6']: size === 'm',
				['text-xl py-2.5 px-8']: size === 'l',
			},
			className
		)} { ...props } >
			{children}
		</button>
	)
}
