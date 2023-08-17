import { useTranslation } from 'react-i18next'

export interface MenuItem {
	id: number
	title: string
	path: string
}

const menu: MenuItem[] = [
	{ id: 1, title: 'projects', path: '#projects'},
	{ id: 2, title: 'services', path: '#services'},
	{ id: 3, title: 'aboutUs', path: '#about'},
	{ id: 4, title: 'contacts', path: '#contacts'},
]

export const Menu = () => {
	const { t } = useTranslation();

	return (
		<ul className="flex items-center gap-[30px] text-base font-bold uppercase hidden lg:flex">
			{menu && menu.map((item: MenuItem) => (
				<li key={item.id}>
					<a href={item.path} className="transition-all duration-500 hover:text-primary">{t(`menu.${item.title}`)}</a>
				</li>
			))}
		</ul>
	)
}
