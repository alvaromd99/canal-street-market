import { EventInformation } from '../types/types'
import pencilIcon from '../assets/pencil.svg'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'

export const AboutEventsInfo: EventInformation[] = [
	{
		date: '09/21',
		info: 'Small Business Retail Pop Up Weekend!',
	},
	{
		date: '02/07',
		info: 'New Balance x Paperboy Paris by Greenhouse @ Canal Street Market',
	},
	{
		date: '12/11',
		info: 'Hack City 12/11',
	},
]

export const linkCards = [
	{
		imgSrc: pencilIcon,
		text: 'Email us',
	},
	{
		imgSrc: facebookIcon,
		text: 'Follow us on Facebook',
	},
	{
		imgSrc: instagramIcon,
		text: 'Follow us on Instagram',
	},
]
