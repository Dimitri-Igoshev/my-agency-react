import { MdOutlineLanguage } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { useOpenCloseToggle } from '../hooks/useOpenCloseToggle'
import { useOutSideClick } from '../hooks/useOutsideClick'
import { useRef } from 'react'

const languages = ['en', 'de', 'ru']

export const Language = () => {
	const { i18n } = useTranslation()
	const lngs: string[] = languages.filter((l) => l !== i18n.resolvedLanguage)

	const [isOpened, open, close, toggle] = useOpenCloseToggle()
	const ref = useRef<HTMLDivElement>(null);
	useOutSideClick(ref, () => close());

	return (
		<div ref={ref} className="flex relative items-center gap-[5px] text-base cursor-pointer hidden lg:flex" onClick={toggle}>
			<MdOutlineLanguage className="text-[24px] text-primary" />
			<span className="mt-px hover:text-primary capitalize">{i18n.resolvedLanguage}</span>
			{isOpened && (
				<div className="absolute transition-all duration-500 top-[32px] right-0">
					<ul className="flex flex-col gap-[7px]">
						{lngs?.map(lng => (
							<li
								key={lng}
								className="transition-all duration-500 hover:text-primary capitalize"
								onClick={() => i18n.changeLanguage(lng)}
							>
								{lng}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
