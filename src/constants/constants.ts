import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import pencilIcon from '../assets/pencil.svg'
import { EventInformation } from '../types/types'

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

export const CommunityEventsInfo: EventInformation[] = [
	{
		date: '02/06',
		info: 'S4E1: Welcome to Season 4',
	},
	{
		date: '01/25',
		info: 'Madison Hammond Re-Signs With Angel City and Chats Her Life + United Soccer Coaches Convention Recap + NWSL Free Agency and Trades + WOSO Roundup',
	},
	{
		date: '05/22',
		info: 'Episode 13: Sarinya Srisakul',
	},
]

export const linkCards = [
	{
		imgSrc: pencilIcon,
		text: 'Email us',
		link: 'mailto:info@canalstreet.market',
	},
	{
		imgSrc: facebookIcon,
		text: 'Follow us on Facebook',
		link: 'https://www.facebook.com/canalstreetmarket',
	},
	{
		imgSrc: instagramIcon,
		text: 'Follow us on Instagram',
		link: 'https://www.instagram.com/canalstreetmarket/',
	},
]

export const foodPlates = [
	{
		id: 1,
		type: 'Khao Man Gai',
		name: 'Betong',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/056a1e39-af19-4901-9738-36ac5abbb0f9_Betong.png?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/f48ec466-919e-4eeb-bf0a-d861ed92d4bb_Betong.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/8e87d276-7b06-4891-837a-81c3305058ac_Betong+2.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/b7288248-c622-4a32-a1bb-a85fce8c75f5_Betong+3.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/e5b39a88-8fd9-4dae-bc89-38fe88b46ff1_Betong+4.jpg?auto=compress,format',
		],
		description:
			"Khao Man Gai is a treasured Thai variation of Hainanese Chinese rice, a dish that is extremely popular through Southeast Asia. Betong's Khao Man Gai is a reflection of Chef Noon's childhood growing up in Betong, Thailand.",
	},
	{
		id: 2,
		type: 'Coffee, Pastries & Smoothies',
		name: 'Chinatown Deli',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/c9a661b5b3a3f08fba455f06839c5bc2153550d4_food-vendor-new-york.png?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/a23fdb39afc303c89ee0312e6ca3b5705ad3e2e4_new-york-food-market-49.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/30dad87bf5025d9160f63bebc7b1d61f832eeb32_new-york-food-market-52.jpg?auto=compress,format',
		],
		description: 'Your favorite neighborhood coffee shop',
	},
	{
		id: 3,
		type: 'Artisanal Chocolate',
		name: 'Daniel Corpuz Chocolatier',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/e8af6535-7849-4464-83b2-0dc7fe451b4b_corpuz+chocolatier.png?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/21304cd6-316d-49bd-8016-e72021f91fdc_Daniel+Corpuz.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/5fc02165-9e77-4bb0-a9b0-e4f04eea6029_dcc_csm.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/06b25a96-a427-4b16-9bc1-42aadec7c93e_dcc1.jpeg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/7b1b8cdf-f8b7-4de0-a1b8-216e070bc4da_dcc2.jpeg?auto=compress,format',
		],
		description:
			'Daniel Joseph Corpuz is a pastry chef and chocolatier based in New York City. As a graduate of the Culinary Institute of America, Daniel achieved his Associates Degree in Baking and Pastry and his Bachelor’s Degree in Food Business Administration in 2019. Daniel has worked in several fine dining restaurants in New York City, of which include The Modern at MoMA, Manhatta, and One White Street. As a result of the pandemic, Daniel has shifted to work primarily with chocolate, creating bonbons, confections, and showpieces. His extensive work with chocolate, during a turbulent time in the food industry yielded the opportunity to be on Netflix’s new show, ‘School of Chocolate’ with world renowned Pastry Chef Amaury Guichon. Utilizing his Filipino-American background, he ultimately decided to launch Daniel Corpuz Chocolatier. This chocolate brand centers on his upbringing while amplifying his industry experience by utilizing Filipino and Asian ingredients and flavors into his chocolates.',
	},
	{
		id: 4,
		type: 'Napoli Style Pizza',
		name: 'Enzo Bruni La Pizza Gourmet',
		principalPhoto: '',
		secondaryPhotos: ['', ''],
		description: 'Enzo Bruni is a pizzaiolo from Naples, Italy.',
	},
	{
		id: 5,
		type: 'Chinese Classics',
		name: "Joe's Rice and Noodles",
		principalPhoto: '',
		secondaryPhotos: ['', ''],
		description: '',
	},
	{
		id: 6,
		type: 'Cantonese Steamed Rice Rolls',
		name: "Joe's Steam Rice Roll",
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/02074214fef758434124320a62917c03c8490581_new-york-food-market-rice-roll.png?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/dacc0a87-c923-454d-a82e-f9a20d5d8b4d_SELECTS+HIGH+Res+_65.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/06163891-f669-4ccf-a826-dea122d9f512_SELECTS+HIGH+Res+_30.jpg?auto=compress,format',
		],
		description:
			'Joe’s Steam Rice Roll started with Chef and Owner Joe Rong’s longing for a steamed rice roll—the way he had it growing up in China: fresh rice batter poured onto a tray, along with fresh meat and vegetables, and all cooked within a steamer. Serendipitously, Joe’s quest for the ideal steamed rice roll led him back home to Taishan, China, where he learned from masters of the craft as a humble student. What we do differently is how we make our rice batter: fresh rice grinded daily by a stone mill, and combined with our in-house secret mix to produce a one-of-a-kind soft and chewy texture. Our mission is to continuously improve and innovate to share our best version of an authentic taste of our culture with the World.',
	},
	{
		id: 7,
		type: 'Delicious Filipino Classics',
		name: 'Kabisera',
		principalPhoto: '',
		secondaryPhotos: ['', ''],
		description:
			'Since 2017, Kabisera has undergone a constant stream of reiterations and the ever-changing menu and frequent pop-up collaborations with other Filipino chefs and artists reflect that. Kabisera’s current mood is in offering a turo-turo style menu on top of their usual paninis, rice bowls, and salads, and utilizing their space to showcase specialty food products and artwork from local Filipino artists and entrepreneurs. Their pastries and kakanins, however, are what first put them on the map—like the biko, a sweet cake that uses glutinous rice and is topped with latik, a syrup made of coconut cream that will have you reassess your relationship with caramel.',
	},
	{
		id: 8,
		type: 'Bignsoo Sundaes & Bubble Tea',
		name: 'Lazy Sundaes',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/012a4823-3a84-499c-8bde-2da6d3b91565_LazySundaes.png?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/d7a5f452-2e4b-4049-926f-7f31fa3e3626_LazySundaes_BingsooGroup1_MinuHan.jpg?auto=compress,format',
		],
		description:
			'Lazy Sundaes is a refuge from the bustle of your day; an afternoon pick-me-up, the sweet spot in your evening. We believe in celebrating the small victories; life’s hard, and you’ve earned it.',
	},
	{
		id: 9,
		type: 'Sushi HandRolls & Chirasi',
		name: 'Mastunori',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/70e149b3-3d82-46ce-a09f-59e2b1c1b36f_mastunori.png?auto=compress,format',
		secondaryPhotos: [],
		description:
			"Matsunori is the kind of restaurant that attracts New Yorkers who like to be in the know. A hidden gem, you'll find fresh seafood, expertly prepared by a team of chefs that bring expertise from some of the finest sushi joints in the city. Take your friends and pull up a chair at the bar, where you'll be able to chat with the staff and watch dishes come to life. Specialty dishes include Chef's Choice Chirashi and Hand Rolls.",
	},
	{
		id: 10,
		type: 'Filipino Inspired Taqueria',
		name: 'Mucho Sarap',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/f14a4da6-69de-4f1c-a609-ac87f894c6c4_muchosarap.png?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/ff7d4c8a-c38a-4d06-9366-348b6148aff1_mucho1.png?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/e29f3939-8ae1-46ed-afee-ed2522cec617_mucho2.png?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/08542b51-4825-46e3-810f-5db777542f09_mucho3.png?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/b508b914-f366-4470-ad82-d029d23fae84_mucho4.png?auto=compress,format',
		],
		description:
			"Here at So Sarap's first brick-and-mortar, chef/owner VJ Navarro melds street food of the Philippines along with Mexican flavors for offerings like Taco de Longaniza (sweet Filipino sausage) and Taco de Nilaga (beef short ribs, cheek, and tongue).",
	},
]

export const retailObjects = [
	{
		id: 1,
		type: 'Design Objects',
		name: 'American Design Club',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/35b63b73f8bf1c9b4317f83217deaf9b80aaa8b1_american-design-club-hero.jpg?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/95cb429b813b0cf1774d8552aeee83dc5b10eab1_retail-space-downtown-new-york-42.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/5235f72ff6ba8ac42f7d958f9acd65d9a9bd5d8c_retail-space-downtown-new-york-61.png?auto=compress,format',
		],
		description:
			'Started in 2008, The American Design Club is a platform for designers to show, share, and sell their work. With a mission to discover and bring to the public, new and exciting products by independent designers and brands, The American Design Club supports a community of creative entrepreneurs.',
		openHours: ['Mon – Sat: 11AM – 7PM', 'Sun: 12AM – 6PM'],
		links: [
			'https://www.instagram.com/americandesignclub/',
			'https://www.americandesignclub.com/',
		],
	},
	{
		id: 2,
		type: 'Jewelry',
		name: 'Beeshaus & Raum NYC',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/9bfc4585bb8e64c7207d8694574bdb86f43320b4_e1ea768dc97f6880050e3f5bc8a68c21c5885336_new-york-retail-space-beeshaus-compressor.jpg?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/c3c131bb3d932426974fc70ba42c765f8b907f1f_selects-high-res--retail_77.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/3e5ad4665a8165d024c0c724bed59bd67f3ca6b7_retail-space-downtown-new-york-76.png?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/5b279b37daef4bb8cf37ff8ed8818fd3eae5db59_retail-space-downtown-new-york-30.jpg?auto=compress,format',
		],
		description:
			'Beeshaus is a handmade contemporary art jewelry collection that conveys a sense of simplicity and uniqueness from  geometric shapes. \nRaum NYC curates simple but unique accessories to help individuals to develop its own style. Raum NYC finds inspiration in a minimalist lifestyle and aims to present artists who shares the same pursuit from all over the world.',
		openHours: ['Mon – Sat: 11AM – 7PM', 'Sun: 12AM – 6PM'],
		links: ['https://www.instagram.com/beeshaus/', 'https://beeshaus.com/'],
	},
	{
		id: 3,
		type: 'Jewelry',
		name: 'Beroep Tech',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/b17c842be3127c52d2a033edbc34a59c18e03244_new-york-retail-space-beroep.jpg?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/9e0d4eb7604d787a858e3d53b0318ec85ca412e6_retail-space-downtown-new-york-75.png?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/419bb1770d21b723eab8688f120c645f9ea6f56c_retail-space-downtown-new-york-73.png?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/ba47b03900a925bc4dcd6613aec56e3caf83b879_retail-space-downtown-new-york-74.png?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/2f8c95ba179e4a380208794497d9aa14a8684a27_retail-space-downtown-new-york-57.png?auto=compress,format',
		],
		description:
			'beroep|tech was founded in 2014. A jewelry design and production brand specializing in minimal design, handmade, fashion and fine jewelry made with precious metals or gold filled. All pieces are uniquely designed and carried at some of the top museum stores, designer boutiques, Adornmilk, Not just a Label and the flagship Beroep Tech store in Canal Street Market. All jewelry pieces are designed and crafted by Akiko Kato who studied product design at Parsons School of Design. Her inspiration comes from everyday objects or surroundings which are commonly seen in everyday life. She proposes through her designs a view of finding beauty in everyday life and transforming monotonous items into tiny, wearable sculptures.',
		openHours: ['Mon – Sat: 11AM – 7PM', 'Sun: 12AM – 6PM'],
		links: [
			'https://www.instagram.com/beroeptech/',
			'https://www.notjustalabel.com/beroeptech',
		],
	},
	{
		id: 4,
		type: 'Bonsai Shop',
		name: 'Dandy Farmer Bonsai Shop',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/d2c3480f5b998a6e1d3c3a0c3af66e4b512c6e99_new-york-retail-space-dandy.jpg?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/746884db0ba5f924da5b44f54fc9d110d39dc967_selects-high-res--retail_63.jpg?auto=compress,format',
		],
		description:
			'Dandy Farmer is a Brooklyn, NY based bonsai design studio specializing in indoor and outdoor bonsai. We take plants to the next level so you can stay grounded and live better.\nWhen we started living in the city, we found a stronger need to connect with nature, but owning a garden was an expensive luxury. How could we make them smaller? Enter bonsai gardens. We suddenly found what was missing in our lives - trees. Trees we could tend to, and trees that could teach us to slow down.\nBonsai is an art form of growing trees in small containers. Some people say it should be done a certain way. We don’t. Sure, there are basic rules, but we take bonsai techniques and apply them to all plants. Why? Because the beauty of bonsai is being able to spend more quality time with plants, whether or not you know what a knob cutter’s for.\nTHIS IS ABOUT PROMOTING A HEALTHIER RELATIONSHIP THROUGH OBSERVING AND LEARNING ABOUT NATURE.\nWe treat plants like our friends. We get to know their personalities, give them nicknames, and furnish them with a good home. That’s why our handmade bonsai pots are sturdy and protect the roots from harsh temperatures. Our soil mix is adjusted for each plant to make them healthier, and each bonsai has been preened by devoted hands for countless hours. When you spend enough time with these little ones, you’ll start to see their outsized approach to life: Mila S. hates change while Emilio Thrush races to the edge, and Blue Star Ren likes to give furry hugs while ignoring that brick wall right outside your window.\nWe love bonsai because they teach us how to live grittier, better lives. They put dirt in our hands, give us something meaningful to care for, and let our minds escape into a mini forested playground. Learn more about how to care for bonsai and take one of our upcoming workshops for hands-on training. Go ahead, let mother nature ground you.',
		openHours: ['Mon – Sat: 11AM – 7PM', 'Sun: 12AM – 6PM'],
		links: [
			'https://www.instagram.com/dandyfarmer/',
			'https://dandyfarmer.com/',
		],
	},
	{
		id: 5,
		type: 'Fashion apparel',
		name: 'Friend Of A Friend Studio',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/8a7435e5b464e5e5686b616e4671bb2efa2df96c_promospread.jpg?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/4fa59e7e54e3648441254d5d6ee264480ed4f28c_yes_20190730_ks19025_foaf_01_016.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/bd96603b2a2f6c22b91181018dcefd961da3bfa1_20190730_ks19025_foaf_film_ks_03_000030850001.jpg?auto=compress,format',
		],
		description:
			'HELLO, WE ARE YOUR FRIENDLY DESIGN BRAND :)\nFriend of a Friend Studio creates limited-edition collections of playful goods inspired by New York City, and other places we travel to and revisit in our dreams. Our flagship corner shop at Canal Street Market showcases our current works and explorations. Friend of a Friend Studio supports art programs for local youth and other special causes with every sale. Come say hi! ',
		openHours: ['Mon – Sat: 11AM – 7PM', 'Sun: 12AM – 6PM'],
		links: [''],
	},
	{
		id: 6,
		type: 'Design Objects',
		name: 'Leibal',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/9373120be0bb6ae6e82f971602c6f2cb50a1fabf_new-york-retail-space-leibal.jpg?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/af550ffb2d706da6f76b4072da6283e69596b753_retail-space-downtown-new-york-39.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/f46dedabf1201010924356e882357c9b294a47a2_retail-space-downtown-new-york-37.jpg?auto=compress,format',
		],
		description:
			'Leibal curates a selection of objects focused on quality, minimalism, and functionality. Our mission is to provide a unique set of products that fascinate and inspire the user. We review each product, down to its packaging, to ensure that we continuously provide the best in both quality and design.',
		openHours: ['Mon – Sat: 11AM – 7PM', 'Sun: 12AM – 6PM'],
		links: ['https://www.instagram.com/leibal/', 'https://leibal.com/'],
	},
	{
		id: 7,
		type: 'K Pop Apparel and Merchandise',
		name: 'Mandu Apparel',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/46c67ce677f3e1394d2d8d2fdcd945f34b368790_retail-market-new-york-mandu.jpg?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/54a283e19dbfd50384b94c6d2e0b6c19a57f9f6a_retail-space-downtown-new-york-54.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/1a49b0429790a7399a965b7cdd64318d5f03ca9b_retail-space-downtown-new-york-50.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/bcf931a7a2d4bbff06e2f935a32c3926933defa1_retail-space-downtown-new-york-56.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/031054d4115bf63a82f03b44a19d1331daec69ad_retail-space-downtown-new-york-53.jpg?auto=compress,format',
		],
		description:
			'Mandu Apparel is a retail store that provides KPOP apparel and accessories to fans all over the world. All of the apparel we sell are printed in the USA using eco-friendly inks.',
		openHours: ['Mon – Sat: 11AM – 7PM', 'Sun: 12AM – 6PM'],
		links: [
			'https://www.instagram.com/manduapparel/',
			'https://manduapparel.com/',
		],
	},
	{
		id: 8,
		type: 'Home Goods',
		name: 'Mogutable',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/5129e430-7c35-4eac-ad5b-426655ac2b27_Mogu_Table_Day_1_Summer_Vacation_0067_+%281%29.jpg?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/09878f8c-4f3a-4aef-a771-f6682db0d0db_Mogu_Table_Day_1_Perfectionists_Selects_0172_+%281%29.jpg?auto=compress,format',
		],
		description:
			'Mogutable curates beautiful items for you to enjoy in your home and everyday life.\nWe are Yingchi and Yuchen, the people behind Mogutable. Originally from Taiwan, we are a Brooklyn-based sister duo. Our shop features a selection of unique, well-designed, aesthetically-pleasing objects, sourced from our favorite artisans, locally and internationally.\nWe hope Mogutable becomes a space to inspire—a community for artists, designers, and fans to come together and create something new.',
		openHours: ['Mon – Sat: 11AM – 7PM', 'Sun: 12AM – 6PM'],
		links: ['https://www.instagram.com/mogutable/', 'https://mogutable.com/'],
	},
	{
		id: 9,
		type: 'Jewelry',
		name: 'Mottive',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/8f565535-b400-4fb3-a814-57c60135073a_Screen+Shot+2020-01-03+at+3.25.02+PM.png?auto=compress,format',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/f8c4bce4-d2e9-44f8-b962-642fba80f12c_Screen+Shot+2020-01-03+at+3.28.48+PM.png?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/b5cd8024-a5eb-4950-a5f6-2628686fcece_Screen+Shot+2020-01-03+at+3.25.19+PM.png?auto=compress,format',
		],
		description:
			'Mottive is a range of unique minimalist jewelry handmade in Brooklyn, New York.\nEach piece is imagined and created for the wearer using ethically and sustainably sourced materials.',
		openHours: ['Mon – Sat: 11AM – 7PM', 'Sun: 12AM – 6PM'],
		links: [
			'https://www.instagram.com/mottive.inc/',
			'https://mottiveinc.com/',
		],
	},
	{
		id: 10,
		type: '',
		name: '',
		principalPhoto: '',
		secondaryPhotos: [''],
		description: '',
		openHours: [''],
		links: [''],
	},
	{
		id: 11,
		type: '',
		name: '',
		principalPhoto: '',
		secondaryPhotos: [''],
		description: '',
		openHours: [''],
		links: [''],
	},
]

export const communityFeatures = [
	{
		location: 'amdc',
		name: 'American Design Club',
		type: 'Design Objects',
		ownerName: 'Kiel Mead',
		ownerDescription: 'Owner of the American Design Club',
		communityName: 'CSM Community - AMDC',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/ad63bd2481b47c4b95e0ce8eb265658541ace7f4_001-1-1.jpg?auto=compress,format',
		secondaryPhoto:
			'https://images.prismic.io/canalstreetmarket/d9c946b6a7fe1cff84a760ff910425b1488f3917_american-design.jpg?auto=compress,format',
		asidePhoto:
			'https://images.prismic.io/canalstreetmarket/35b63b73f8bf1c9b4317f83217deaf9b80aaa8b1_american-design-club-hero.jpg?auto=compress,format',
		link: '/retail/american-design-club',
		questions: [
			{
				question: 'What do you do?',
				response:
					'I do everything from art direction of the company to consult with our brands to make their sales the best and to help shape the sales efforts so they are continuously showing new products to the people who come through CSM.',
			},
			{
				question: 'What is American design club?',
				response:
					'It’s a lot of the things but first and foremost we are a representation agency. We represent many designers and brands who are looking to put product out to the market. We mainly work with people who are emerging and could use a guide. We help brands get access to customers by showing them at trade shows and them allowing them to tap into the network of stores we’ve been selling to for a long time. We sort of champion that by having 2 retail outposts in NYC - one in Canal Street Market and the other at Artist Flea in Soho. We showcase them first in NYC because NYC has an amazing clientele: tourists, locals, and people from all types of socioeconomic situations. And that’s something we love about Canal Street Market. It’s all encompassing as far as who comes through the door.',
			},
			{
				question: 'How did you get started in the industry?',
				response:
					'I had a pretty successful jewelry line maybe 10 years ago or so. And through that, I created the AMDC as an entity that could help designers show their work, sell their work, and share their ideas of the process and their journey. If I were to cookie cutter sell it to you, we help designers show, share, and sell their work. That’s our manifesto. It started back in 2008, so we’ve been doing it for over a decade. We unapologetically show work from up and coming talented people.',
			},
			{
				question: 'What kinds of things do you show?',
				response:
					'We specifically focus on “the gift” market. We have everything from neon lights to greeting cards and onesies for kids and calendars, cologne, candles, ceramics… we have so much. And we fit it into one tiny booth. We have a plethora of product, which is what we pride ourselves on. We figure out how to show an immense amount of product in a small amount of space to so many people.',
			},
			{
				question:
					'It came to be through a group of friends who were coming from three different design schools who just wanted to show their work. We wanted to help alleviate the stress of showcasing your work alone. We are a support company for people who are struggling to be noticed. If you work with us, we will help create many opportunities for you to show and sell your work. The AMDC is really attracted to CSM because we see ourselves the same way we think CSM sees themselves, in strength in numbers. CSM is successful because there are 10 food vendors and close to 20 shopping vendors. And the AMDC is successful because we do it for 30 people. Because we do it for 30 people, those 30 will invite 10 of their friends. And then we have 300 eyes of everyone’s work. I think likeminds find each other sometimes. And we do it at a wholesale level and CSM does it at a retail and community level. We can co-exist and help each other.',
			},
			{
				question: 'What kind of people do you attract?',
				response:
					'All kinds. We get phone calls and emails from people who just see us doing cool things. We put up pictures of our display at CSM and that attracts people who wants those opportunities. We talk to jewelry makers, scarf makers, furniture and lighting designers. Eventually we need to curate ourselves and know who we are selling to and tailor our decisions to that. And we have so much data now and we are students of it. We translate all that information into data sets so we can sell to people anywhere. We are getting so much out of our experience at CSM that we wouldn’t have had before.',
			},
			{
				question: 'Why did you name your brand the American Design Club?',
				response:
					"We named ourselves AMDC because in 2008 when I was younger and more interested in furniture design and competing on a level with designers, America was being trashed on. We might still be, though I hope AMDC has had an effect on that. But Europe, like Milan furniture fair, all these other countries were asking what's up with your design world? I purposely named it AMDC so it almost seems like we are government funded and we are an entity in America that is helping and promoting design in America. Our logo is a turkey and the reason it’s a turkey is because Benjamin Franklin wanted the national bird to be a turkey instead of the bald eagle because he thought the bald eagle stole from other people. It was a predator. Whereas a turkey travels in packs and protects each other and has a warning call when predators get too close and work together for the benefit of the community. That’s why we call ourselves the ADC and logo’ed ourselves the turkey. That was our purpose. To feel as official as possible.",
			},
			{
				question: 'Why did you decide to join Canal Street Market?',
				response:
					'We decided to join Canal Street Market for a couple reasons. A few people we knew personally were a part of the market and having success. Another thing was we were looking to enter into the retail market and we thought that Canal Street market offered us one of the best packages that was out there, having storage and a clean aesthetic for selling our products, which we thought was really important.',
			},
			{
				question:
					'What kind of community has Canal Street Market created in Chinatown?',
				response:
					'Having food and shopping under one roof is the necessary recipe to start to create a community and have foot traffic. Especially food. You need food everyday and we want people to need something from us everyday. For a company like ours, it’s important that we are catering to three very different groups like the people who are coming in for lunch who are people that work in that area. Then you have locals, who are people living in the area. And then you have the tourists. We love Canal Street Market’s location. It’s such a prime location and it’s such a big draw in general for tourists because of the food and the shopping. It’s a perfect mix of things. I think that Canal Street made an amazing decision, a very conscious decision to keep space so they can rotate different vendors there. It’s a gift to us and the community. Every month there is something new to discover and i think that’s what the community really wants.',
			},
			{
				question: 'What is your go-to vendor at CSM?',
				response:
					'I am obsessed with the florist, Fox Fodder Farm. I buy my wife flowers from there all the time. Besides that, I like the coffee from Office Coffee.',
			},
			{
				question:
					'What’s a memorable moment you experienced at Canal Street Market?',
				response:
					'Being a part of a market and not having the key to the door, you put a lot of trust in your fellow vendors, and more importantly, the operations people who run the place. Having them have your back and they aren’t on your payroll, is something I treasure. That’s not something that you see anywhere else. That support is necessary for the future of what we are all doing retail wise, and engaging with the community. We need to be good first before we can be good to the public, and we have that at CSM.',
			},
		],
	},
	{
		location: 'joe-rong',
		name: "Joe's Steam Rice Rolls",
		type: 'Cantonese Steamed Rice Rolls',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/9c41db6b59d689aeda46a6a6405d8767649629c4_joejoe.jpg?auto=compress,format',
		secondaryPhoto:
			'https://images.prismic.io/canalstreetmarket/1a414bdd7ac06e7038e47436b9a35970a08aa7bb_jj-for-joe-2.jpg?auto=compress,format',
		asidePhoto:
			'https://images.prismic.io/canalstreetmarket/02074214fef758434124320a62917c03c8490581_new-york-food-market-rice-roll.png?auto=compress,format',
		ownerName: 'Joe Rong',
		ownerDescription: 'The founder of Joe’s Steam Rice Rolls in NYC',
		communityName: 'CSM Community - AMDC',
		questions: [
			{
				question: 'How did you get started?',
				response:
					'In China, steam rice rolls are a really simple thing. Every morning, we eat it for breakfast. It’s fast food and healthy. Here, there are rice rolls in some places but they don’t do it as well as in China, so I wanted to bring it here and let more people know about it and have a taste of it. There are thousands of restaurants like this in China but it made me really sad when I came here because I thought I wasn’t going to have this kind of food anymore. When my mom moved to NY, she cooked it for me once at home. It reminded me of my childhood, so I decided to open a restaurant to sell the rice rolls. I used to work at a Karaoke bar as a bartender but I never worked at a restaurant. I don’t cook. A lot of people think I’m a good chef but I can’t cook. I can learn though! I’m probably just dumb. When I had this idea, I just decided to open it. My family, even my wife, didn’t support me at first. But I wanted to do it and I spent my own money to go back to China to learn the recipe. When I got the idea and opened the store, it only took me 2 months. I didn’t have any support but it turned out pretty good.',
			},
			{
				question: 'How did it turn into something bigger?',
				response:
					'I had never worked at a restaurant before and I had imagined it would be easy and I thought I had figured out all the steps in my mind. But it wasn’t easy. At the beginning, I faced a lot of problems. But no matter what problem I faced, big or small, I had to figure it out on my own. We are more popular right now, but the first year we didn’t have a lot of customers. I was losing money. But we kept doing it and we improved the recipe. And when customers came, we treated them well and they loved the food and then they would tell their friends. That’s how we gained customers. It was through word of mouth. But it took about 1-2 years. We didn’t pay for advertising or do any promotions. It took a bit to get to this stage. It’s been about 3 years since we opened. When I opened this restaurant, my uncle gave me all the money to me to open this restaurant and he fully trusted me. He told me, “no matter what happens, no matter what kind of problem you are facing, just don’t give up. Even if you’re not making any money, if you keep going your dreams will come true.” It was hard but it was worth it. If I were to go back to that time, I probably wouldn’t do it again. Even if I know it’s going to be successful, I probably wouldn’t. It was really stressful.',
			},
			{
				question: 'How did you decide on the name?',
				response:
					'The name is pretty simple because the only thing we sell is steam rice rolls and Joe is my name. But in Chinese, the name is pretty funny. It’s chiang fung wong, which translate to, “We are the king of rice rolls”, like Burger King. A lot of Chinese restaurants are run by older people so when I started, I was only 24 years old and a lot of customers didn’t trust a young guy trying to start a restaurant. That was also a big hurdle.',
			},
			{
				question: 'What is the secret of your rice rolls?',
				response:
					'There is no secret. But we spend a lot of time making it. Some people go to the market to get rice powder to make the recipe but we use fresh rice. We soak the rice for 4 hours and everyday we prepare it and order 60 pounds of rice to grind it. We spend 2-3 hours grinding it into a powder. We spend a lot of time and put in a lot of effort to make it fresh.',
			},
			{
				question: 'What kind of community are you trying to create?',
				response:
					'It’s for everyone. At first, this kind of food was for Cantonese people. Only they knew what it was. A lot of people from China, from the north side, didn’t even know what it was. Now they are more familiar with it. My first store is located in Flushing. There are a lot of Korean people there and it’s funny because I started getting a lot of Korean customers. We started adding a spicy sauce, which was a really popular with them. We also continued to find new sauces to cater to more kinds of taste buds.',
			},
			{
				question: 'Why did you join Canal Street Market?',
				response:
					'I have a friend Eric, who is the owner of 886, a Taiwanese restaurant, and he introduced me to Phil, the founder of CSM. I really appreciate this opportunity. Before, I had only thought about expanding to Chinese neighborhoods like Flushing, Brooklyn, Elmhurst, and Chinatown but because of CSM, I get to share this food with a lot more people.',
			},
			{
				question:
					'What kind of community do you think Canal Street Market has created in Chinatown?',
				response:
					'A lot of my friends told me they used to have to go an hour to get to Flushing to eat this kind of food. I had never really thought about opening it in Manhattan. But Canal Street Market is really special because it brings this kind of food to a new kind of customer. It’s next to Soho and everyone is really open minded and nice. I used to talk to the customers and they are really open to talking and experiencing new things.',
			},
			{
				question: 'What is your go-to vendor at CSM?',
				response: 'Boba Guys. And also I love the curry at Izakaya Samurice.',
			},
			{
				question:
					'What’s a memorable moment you experienced at Canal Street Market?',
				response:
					'One time, there was a customer who came from SF and he said now I don’t have to buy a ticket to Guangdong. I can just buy a ticket to NY to get this kind of food. I love to make friends with the customers. In Chinese they always say “the customer is God”. But I always say, customers are your friends. You respect them and they respect you.',
			},
		],
	},
]
