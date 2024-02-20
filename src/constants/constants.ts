import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import pencilIcon from '../assets/pencil.svg'
import {
	CommunityFeaturesInformation,
	EventInformation,
	EventsPageInformation,
} from '../types/types'

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

export const CommunityFeaturesInfo: CommunityFeaturesInformation[] = [
	{
		location: 'csm-community--amdc',
		name: 'American Design Club',
		communityName: 'CSM Community - AMDC',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/ad63bd2481b47c4b95e0ce8eb265658541ace7f4_001-1-1.jpg?auto=compress,format',
		secondaryPhoto:
			'https://images.prismic.io/canalstreetmarket/d9c946b6a7fe1cff84a760ff910425b1488f3917_american-design.jpg?auto=compress,format',
		asidePhoto:
			'https://images.prismic.io/canalstreetmarket/35b63b73f8bf1c9b4317f83217deaf9b80aaa8b1_american-design-club-hero.jpg?auto=compress,format',
		link: '/retail/american-design-club',
		type: 'Design Objects',
		ownerName: 'Kiel Mead',
		ownerDescription: 'Owner of the American Design Club',
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
				question: 'How did the idea of AMDC come to be?',
				response:
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
		location: 'csm-community--joe-rong',
		name: "Joe's Steam Rice Rolls",
		communityName: "CSM Community - Joe's Steam Rice Rolls",
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/9c41db6b59d689aeda46a6a6405d8767649629c4_joejoe.jpg?auto=compress,format',
		secondaryPhoto:
			'https://images.prismic.io/canalstreetmarket/1a414bdd7ac06e7038e47436b9a35970a08aa7bb_jj-for-joe-2.jpg?auto=compress,format',
		asidePhoto:
			'https://images.prismic.io/canalstreetmarket/02074214fef758434124320a62917c03c8490581_new-york-food-market-rice-roll.png?auto=compress,format',
		link: "/food/joe's-steam-rice-roll",
		type: 'Cantonese Steamed Rice Rolls',
		ownerName: 'Joe Rong',
		ownerDescription: 'The founder of Joe’s Steam Rice Rolls in NYC',
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
	{
		location: 'csm-community--berop-tech',
		name: 'Beroep Tech',
		communityName: 'CSM Community - Beroep Tech',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/b41fd97ada7c19360a17c6007020ddcc3aba6b6f_002-1.jpg?auto=compress,format',
		secondaryPhoto:
			'https://images.prismic.io/canalstreetmarket/60ed27b89c2b906f6e1a558c763f3d93b2c6bfa8_004-1.jpg?auto=compress,format',
		asidePhoto:
			'https://images.prismic.io/canalstreetmarket/b17c842be3127c52d2a033edbc34a59c18e03244_new-york-retail-space-beroep.jpg?auto=compress,format',
		link: '/retail/beroep-tech',
		type: 'Jewelry',
		ownerName: 'Akiko Kato',
		ownerDescription: 'Founder and designer of Beroep Tech',
		questions: [
			{
				question: 'How did you get started?',
				response:
					'I originally studied classical music. I played the piano. But I always knew I didn’t want to be a teacher. I was surrounded by teachers. My aunt and grandma used to be a teacher but I wanted to live a different way. I was given an electronic organ when I was about 3 years old but I got tired of playing the organ because it was so easy. But then my mom suggested I start the piano.',
			},
			{
				question: 'How did you transition to the industry you’re in now?',
				response:
					'I moved to NY in the 90s and studied product design at Parsons and back then there was a metal major. Now that doesn’t exist. I really enjoyed studying there, especially because my style wasn’t classic. I knew my style was contemporary, modern. I was given the space to develop my ideas fully.',
			},
			{
				question: 'How did the idea of your brand come to be?',
				response:
					'My brand name is strange: Beroep Tech. Beroep means profession in dutch and I put tech at the end. Most jewelry designers use their name and then jewelry design at the end. For example, my name is Akiko Kato and the name would typically be Akiko Kato jewelry design. I tried to be really different and get people to question my brand. I wanted them to think, what is this? How do you pronounce it? Using my name would have given people an idea of the brand before seeing it. Like “Oh, she is from Japan” or “She’s a Japanese designer”. That’s giving people an initial impression that I want to avoid. I also don’t want people to think this is women’s jewelry or men’s jewelry. I want to make it gender neutral. And then people say, unisex. But the unisex idea is based on 2 genders and I don’t have those ideas. The name is neutral and encompasses that idea.',
			},
			{
				question: 'After graduating, how did you start your own brand?',
				response:
					'I had no idea because school never taught me how to make a business. They just taught me how to develop design skills but I had to figure out the business side. I used to work for other designers but it was really hard and strict. I was so exhausted. Back then I created jewelry in an organic style because that was more mainstream and I felt people wouldn’t accept my contemporary style. But I wasn’t satisfied by doing that so I started to launch some contemporary pieces and it was picked up by New Museum shop and some other museum shops. That’s when I first felt I could develop my own line.',
			},
			{
				question: 'What kind of community are you trying to create?',
				response:
					'It’s for a wide range of age, any race, any gender, that’s my concept. It’s an inclusive community. I don’t target a specific kind of community.',
			},
			{
				question: 'Why did you decide to join CSM?',
				response:
					'I passed by one day and I recognized this space was being constructed. I was wondering what was happening inside. And I sensed it was going to be a really beautiful place and that really good things would come of this place. And I looked up the space and emailed them. I just followed my intuition. This is a really good location and a nice environment. It’s an Asian themed market and I’m so happy to be a part of this.',
			},
			{
				question: 'What kind of community has CSM created in chinatown?',
				response:
					'I think as an Asian living in NYC we are a minority. And we feel ignored in a way. The Asian community is so much bigger than we think and exposure is so small so that’s why in general, Asian people think there aren’t as many of us. But CSM helps expose how big the community is. And this place is very forward thinking. The space captures what is going on today. For example they have a podcast station. It’s hard to trust the media and I don’t watch TV anymore and I’m not sure if the newscaster is telling the truth so I feel like the kind of podcasts created at CSM really represent the people’s voice.',
			},
			{
				question: 'What is your go-to vendor at CSM?',
				response:
					'Samurice because they have a grilled fish that reminds me of home. And I like Office Coffee. They carry Supermoon Bakery and I’m a big fan of them. It’s the best. I like the salted caramel donuts. It’s so sweet and dangerous. I usually stay away from sugar but that is one of the best.',
			},
			{
				question: 'Tell me about a memorable experience that happened at CSM',
				response:
					'Recently, one customer was looking for a certain style of earring and she told me that she was in South Africa and she saw a lady who wore big hoops and asked her, where did you get those hoops? And the lady told her, she bought it at Canal Street Market. This happened in South Africa!! I was really touched. She was super excited that she found my earrings in South Africa.',
			},
		],
	},
	{
		location: 'csm-community--izakaya',
		name: 'Izakaya Samurice',
		communityName: 'CSM-Community-Izayaka',
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/fe8a44c7efc3e71cd5443ec833069561bd3ff1a7_01-1.jpg?auto=compress,format',
		secondaryPhoto: '',
		asidePhoto:
			'https://images.prismic.io/canalstreetmarket/f14a4da6-69de-4f1c-a609-ac87f894c6c4_muchosarap.png?auto=compress,format',
		link: '/food/mucho-sarap',
		type: 'Filipino Inspired Taqueria',
		ownerName: 'Yudai Kanayama',
		ownerDescription: 'Creative Director for Izakaya Samurice',
		questions: [
			{
				question: 'How did you guys get started?',
				response:
					'Y; I came to the states as a student studying fashion. I came here 10 years ago and I was upstate for 3 years and transferred to FIT. I studied fashion merchandising which has nothing to do with food. But then I worked at a Japanese clothing store selling really expensive denim for like $1500 to rich people who are interested in Japan. I think that’s my base for anything that I do now. I know how to sell denim for that much money and how to explain the story about the product for one hour. When I quit that  job I started looking for something else to do. At that time I had a roommate who was a chef and he said to me, “Yudai, let’s open a restaurant and I know how to cook but I don’t know anything else. Can you do the other stuff?” And that’s how Izakaya started. I said “Ok, I think i can do it. It’s just a difference between selling clothes and food and I know how to sell clothes.” I was selling food the way I sold clothes, like explaining the story of cabbage for 5-10mins. I was explaining things that didn’t need any explanation. It’s not just a place to eat but to learn the culture. For some people in the same industry they might say “Yudai you talk too much”, but people like it. Keisuke joined 3 years ago. He was in a different industry in Japan. K: I was in the agriculture industry. I used to work at a Japanese rice company. I started Samurice in order to share the great taste of Japanese rice with others. I came to NY in order to share it with a lot of people outside of Japan.',
			},
			{
				question: 'How did you meet?',
				response:
					'Y: One of my partners back then was a friend of Keisuke’s so he decided to join our team. We met in the restaurant. The most important thing for us is to serve what we really like, not just what people like. We try to provide what we think is the best, not what we think people like. I don’t like that style of business because then we are serving things we don’t believe in. If we love it, we serve it.',
			},
			{
				question: 'What is the concept of Izakaya Samurice?',
				response:
					'Keisuke came here to introduce Japanese rice. That’s what his company is about. Importing and exporting. Samurice actually has a different location in Singapore and they are importing a lot of rice from Japan. But he wanted to do the same in NY. So we take their rice to create a bento box. We only use rice from Japan, not from California. You don’t really get to eat that rice except in expensive sushi restaurants in NY. And we serve it for a really reasonable price. We wanted to make a store where we can introduce that rice. It’s a daily thing. We hope that people come everyday. We see some people come 5 days a week. We want it to be inside their daily life. K: Goodbye coffee and bagel. Hello miso soup and rice. Miso soup is very healthy. Y: It’s a good start to the day. K: I think everyone should eat miso soup everyday. We have a points card.If you eat there 3 times, you get one free miso soup.',
			},
			{
				question: 'What do you want to do further?',
				response:
					'We just want to introduce something new to NY. And we want to help people who want to do something in NY. A lot of people from Japan want to come here and open a restaurant and we are helping them now. It’s not about money but if we believe in the idea, we want to help them. We are from Hokkaido so these people from Philadelphia were distributing beer from Hokkaido and now we are working together to open a Hokkaido restaurant in the LES. That’s the most recent one. And in the same neighborhood, we are opening a sake bar in the new Essex St Market.',
			},
			{
				question: 'What kind of community are you looking to create?',
				response:
					'It’s not our target but our customers tend to be the kind of people we used to be. I used to work in fashion and I have a lot of connection from when I used to work in that industry. So we are a lot of artists and I like that we are all trying to help each other.We want to collaborate with the fashion and art people and have done some of this in the past.',
			},
			{
				question: 'What do you want to communicate with your food?',
				response:
					'I think it’s important in America where people don’t know much about Japanese food, it’s important to talk about how it’s made and the preparation that it takes to make it. We don’t want people to think it’s just whatever. It takes a lot of work. A lot of things need explanation. You might not taste the hard work but you can hear the effort that’s put into it.',
			},
			{
				question: 'Why did you join Canal Street Market?',
				response:
					'A lot of my friends and I were told by many people about Canal Street Market and that it is going to be the next hot spot. And everyone was talking about that. We actually met Phil at Izakaya the restaurant and he was telling us about his market and that’s the area we actually wanted to be in. And it wasn’t a Chinatown style but something new on Canal Street that looked hot so we thought this is the place for us. We thought the next stop after Soho is kind of ideal would be Canal St.',
			},
			{
				question:
					'What kind of community do you think Canal Street Market has created in Chinatown?',
				response:
					'I think it’s a good market because they have a lot of office people and are trying to create something that is a part of daily life. K: I hope that at night, people come here more to drink. Y: we are also applying for a liquor license so it can turn into a night destination as well. K: A night club!	Y: Ya exactly.',
			},
			{
				question: 'What is your go-to vendor at CSM?',
				response:
					'K: I love the ceviche. Mission Ceviche! Y: Office coffee for me. K: Chanel Latte. Y: The latte has a chanel type logo.',
			},
			{
				question:
					'What’s a memorable moment you experienced at Canal Street Market?',
				response:
					'K: Sometimes we see the same person 5 days in a row. Y: I was also surprised to see that a lot of people love natto. I thought people wouldn’t like it. But a lot of american people, maybe health oriented people love it! They do something that we would never do. They create combinations like curry natto and it’s new to us. It’s really interesting. K: Also we had a tourist from France come to our stand, and they said to us that it was the most delicious rice they had in NY. And they asked for a second bowl. Y: It’s hard to find a good bento in NY. We are making a bento for people right in front of them.',
			},
		],
	},
]

export const EventsPageInfo: EventsPageInformation[] = [
	{
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/33dc8d36-4b94-4c4c-a5e7-056c279bbec8_GreenhouseXPaperboyXNewBalance22.jpg?auto=compress,format',
		date: 'February 7th- February 9th',
		time: '',
		title: 'New Balance x Paperboy Paris by Greenhouse @ Canal Street Market',
		description:
			"New Balance has teamed up with Paris-based “restaurant-meets-streetwear” brand Paperboy on collection that includes three menu inspired color ways of the New Balance 801's as well as apparel and accessories. Canal Street Market was host to a weekend long pop up shop experience that brought consumers and sneaker fans into an outdoor Parisian cafe where the exclusive product can be viewed and purchased. Opening night was celebrated during New York's fashion week with a launch with live music by Kittysayword and iconic sandwiches made by the Paperboy Team",
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/f28d9b73-a548-475d-ac91-392bc0466e76_GreenhouseXPaperboyXNewBalance83.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/9f5c2702-1a3b-4273-87eb-77a4e8498077_GreenhouseXPaperboyXNewBalance136.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/75477019-bd0f-404f-bc2b-89738b0accaa_GreenhouseXPaperboyXNewBalance09.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/e234d6d7-78fc-4ee2-a552-dd07914f48ab_GreenhouseXPaperboyXNewBalance142.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/a0d8ff41-fc1e-4a09-83bd-360a28af5f70_GreenhouseXPaperboyXNewBalance173.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/0a5d4ed2-0a26-49eb-bb4d-c6114602b1d1_GreenhouseXPaperboyXNewBalance04.jpg?auto=compress,format',
		],
	},
	{
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/64a019ce-90a6-468a-9570-2fd438094ef8_hackcity.jpg?auto=compress,format',
		date: 'December 11th- December 12th',
		time: '7:30pm - 9:30pm',
		title: 'Hack City 12/11',
		description:
			"If having an Asian guy on a comedy show is unusual, then having two is just overkill. But that’s what comics Fumi Abe and Michael Nguyen are trying to do with their Hack City comedy show — overkill on the funnies. Join the two as they host one of NYC’s most diverse comedy show, featuring comics from MTV, Comedy Central, and your Facebook feed. Doors at 7:30 p.m., show at 8:00 p.m. This month's line-up: Erica Spera Napoleon Emil Pedro Gonzalez Dylan Adler Sydnee Washington",
		secondaryPhotos: ['', '', '', '', '', ''],
	},
	{
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/cd40ba40e570956d372790c25d22cc8b1f803af9_ss2019_square-1.png?auto=compress,format',
		date: 'July 27th- July 28th',
		time: '',
		title: 'Taiwanese Wave',
		description:
			'【Taiwanese Waves Look Back】A Pop Up Exhibition. For the upcoming 4th Taiwanese Waves at SummerStage on August 3rd, we would like to invite New Yorkers to join us for a special two-day exhibition at Canal Street Market on July 27th and 28th. Throughout the exhibition, you can discover the behind the scene ideas for the previous line ups and have an interactive AR music immersive experience with the this year’s line up. On July 28th, there will also be a panel focusing on Asian women in music. Lastly, don’t forget to jump into the human-sized Taiwanese Waves poster set, and be part of the Taiwanese Waves poster. Please come join the WAVES!',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/13b89e6427f6f48e2548a615e03801b7761b942b_7.28-panel-1.jpg?auto=compress,format',
		],
	},
	{
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/7b6f08c25c32c6d2963da12fd806452686cf8551_csm_foodhall_web.jpg?auto=compress,format',
		date: 'April 26th- April 28th',
		time: '',
		title: 'Food Hall Family Discount - 10% OFF any ONE food item',
		description:
			'Celebrate the last weekend of April with your Food Hall Family at Canal Street Market! Present this page on your next visit for 10% OFF on any one food item from April 26 - 28, 2019. Offer cannot be exchanged for cash. Limit one per transaction per customer and one time use only. Expires April 28, 2019',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/a7373dddf78b93e234fb07c9c7e4f1a5f41a1be1_csm_foodhall_email.jpg?auto=compress,format',
		],
	},
	{
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/e406550648c95c04b821483755af3e57ed4aa9b8_https___cdn.evbuc.com_images_59581354_48297149940_1_original.jpg?auto=compress,format',
		date: '',
		time: 'April 18th - April 12th',
		title: 'Asian Creative Collective - Illustration / Tattoo',
		description:
			'*** Please make sure you apply for the admission ticket through Eventbrite https://www.eventbrite.com/e/asian-creative-collective-illustration-tattoo-tickets-58827335143		If you have 10 min to share your STORY to the entire world - what would that story be? Asian Creative Collective is the place for you to offer inspiration online & offline.Step out of your comfort zone and share your story. For this event, we will be inviting a collective of artists, designers, and tattooist to talk about their experiences and answer any questions you have.Each speaker will have 10 - 15 minutes followed by networking sessions.',
		secondaryPhotos: [
			'https://images.unsplash.com/photo-1564426622559-5af68da63b96?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
	{
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/30c2c64a27adc1ad31ee4b926210e224cd8406ad_2019-3-20-show.jpg?auto=compress,format',
		date: 'March 20th',
		time: '8pm - 10pm',
		title: 'Hack City Comedy Show',
		description:
			"Hack City ComedyIf having an Asian guy on a comedy show is unusual, then having two is just ove But that’s what comics Fumi Abe and Michael Nguyen are trying to do with their Hack City comedy show — overkill on the funnies. Join the two as they host one of NYC’s most diverse comedy show, featuring comics from MTV, Comedy Central, and your Facebook feed. Every 3rd Wednesday at Canal Street Market, 265 Canal St. Free admission! Doors at 730 p.m., show at 8:00 p.m. This month's line-up: Pedro Gonzalez (NY's Funniest Finalist) Anya Volz (Thirst Trap) Sam Evans (Just For Laughs) Aminah Imani (Comedy @ The Knitting Factory) Karen Chee (Late Night with Seth Meyers) + Special  guest NIMESH PATEL (SNL, Comedy Cellar, Joe Rogan Experience) 1. ALL ENTRY is 1st come 1st serve. Tickets/RSVPs do not guarantee entry if we hit capacity, so get there early! 2. Seating is limited but we have standing room. 3. Line-up is subject to change 4. Please buy something to support the venue and keep the show free!",
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/cc856596756f17938c034648aa7254ee9cb44ca6_hackcity_6.jpg?auto=compress,format',
		],
	},
	{
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/a4562bd846950c7828752f1326d9e64b7e22263a_hackcity_11.jpg?auto=compress,format',
		date: 'February 27th',
		time: '',
		title: 'Hack City Comedy Show 2/27',
		description:
			'Canal Street Market and Asian Not Asian Podcast presents Hack City!Featured comedians: Danny Decolle Khalid Rahmaan Tyler Fischer Karen Chee Ian Lara Sam Ruddy Hosted by: Mic Nguyen Fumi Abe',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/5d7a4c10943c19deda0af790a4b06b3a460a198f_hackcity_12.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/889113bbc32dfea20af3f810753af179b916392f_hackcity_10.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/a4562bd846950c7828752f1326d9e64b7e22263a_hackcity_11.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/998cbdde4a7118fcb4bc8757dd31ffba9446a5e8_hackcity_9.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/e4d58282b2aed19033ff88095b9607124bd63a34_hackcity_14.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/ba49e0a5c13265da6463c5c7f77dfd1f9929a4a7_hackcity_8.jpg?auto=compress,format',
		],
	},
	{
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/4aad3bc6caa580102730312af222bddd9bb0db23_yearpig_6.jpg?auto=compress,format',
		date: 'January 31st',
		time: '',
		title: 'Year Of The Pig: A Chinese New Year Party',
		description:
			'In honor of one of the most significant celebrations of the year in the Asian community, MáLà Project and Canal Street Market have joined forces to co-host a Chinese New Year Party. We celebrated the end of a 12-year lunar cycle and welcomed a new beginning alongside food & lifestyle industry peers, press, and influencers. The party featured finger foods, open bar, photo booth, lion dance, live music, gift bags, and more. Canal Street Market’s full roster of food vendors and MáLà Project will be offered exclusive dishes to welcome the New Year. In the spirit of celebrating the New Year with friends and family, we’ve also invited guest chefs/restaurants to come collaborate with Canal Street Market for special dishes.',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/2cfa9d0bada77412333ba0f38ac6450ac44242c3_yearpig_1.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/14c41cb07f866868e07e1916b0c644e1ebbd0f9a_yearpig_8.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/ee43b3262d077f79ceb8bf8bba7a26e55bde940a_yearpig_7.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/9efcbc04b4726a98a0ef28ce1577667ed5cce22f_yearpig_3.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/7ea992e2f8e77ea5f70702c8b058e0ec9e993509_yearpig_4.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/25eecbf2a187e1bf2e5f53a241c415544472011b_yearpig_5.jpg?auto=compress,format',
		],
	},
	{
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/37388b19a084812957da49d7632f37654c65bb63_kare_4.jpg?auto=compress,format',
		date: 'December 1st- December 4th',
		time: '7pm-11pm',
		title: 'Korean Night Market Pop-up curated by Kare Package',
		description:
			'Taking the shape of a two-week-long mini market inspired by the beloved Night Markets of Seoul, Kare Package hit the sweet spot that connects NY and Seoul shopping culture: a pop-up. We concepted and creative directed a world within the walls of Canal Street Market, thoughtfully curating some of Asia’s premiere beauty, art, and fashion items. As a modern holiday shopping experience, we decorated the pop-up with exclusive social media photo ops -- from the space’s installation to the Kare Package itself, both executed by a longtime partner, NY-based design collective And Or Forever. We then imbued the Kare Package experience with opportunities to discover international brands all in one place in a beautiful, stylish, and celebratory way. Korean bestsellers Oauhsommet, Yupan C Face Mask & Chewable Vitamin C, Ssanai, and Baebae were made available for the first time ever in a US retail space. These sat alongside K-beauty I handpicked from the Seoul markets. In addition, we recruited globally established labels MMParis, White Zinfandel, Trine Tuxen Jewelry, Kaarem, SKINRx Lab, Kosette, and ESL, as well as artists Eddie Kang and Soyoun Lee, to contribute merchandise for our shop. We glittered the space with self-produced events ranging from food (Spot Dessert Bar premiered its holiday “it” desserts), fashion (Trine Tuxen Jewelry Copenhagen brand hosted two special shopping nights with Tarot card reading), and of course, beauty (Yaeji’s makeup artist orchestrated 10 minute makeovers). The entire experience was previewed at our Night Market Party, a noeraebang-style gathering with a beauty talk show hosted by Very Good Light’s David Yi with guest celebrity hairstylist David Lopez, followed by drag performances by Bubble T’s very best (DJ Tito_Vida, West Dakota, Dynasty, Mahal Kita, and Bibing kamama). Joined by our creative friends from across the Pacific and the NY homebase alike, we celebrated the intersection and introduction of Korean culture and shopping on our own turf, and disseminated our beauty-brimming Kare Packages into the city.',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/b0938ad75f0f5ca88f0c78d45fcdeb517f5da2f1_kare_2.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/230db64574017f4204b1fe5eae6ba9b9e6878702_kare_8.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/43d180a52ca3061adfccf9e86b7f26c382097f66_kare_11.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/3dfa097870464c3f7f3eefc748fc4e27282771de_kare_15.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/8fe8bfbb4caf5c77eb99313a09429b8eebb05bf4_kare_1.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/3c4bf3d11e347ca5b06e7fe5df67245d82bd2554_kare_10.jpg?auto=compress,format',
		],
	},
	{
		principalPhoto:
			'https://images.prismic.io/canalstreetmarket/665f0b594846ef9660a22f0c42808f725f1ebf1d_bea793479d2d723464a3572d61444e7349eb7e7b_red_dot_canal_street-83-compressor.jpg?auto=compress,format',
		date: 'August 18th',
		time: '',
		title: 'Red Dot Campaign 3rd annual art show',
		description:
			'Red Dot Campaign is back for the 3rd annual art show and donation drive with food, jams, activities, and strangers that might teach you something new. Since Red Dot’s inception, creative expression has been our foundational approach to highlighting the social, cultural and political practices surrounding civil and reproductive rights. Our annual art show serves as a platform for artists within our community to display work geared towards our collective consciousness.',
		secondaryPhotos: [
			'https://images.prismic.io/canalstreetmarket/36d7425b861e1f55491a30ffe05054e233ce6a62_reddot_8.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/933e7e9c6d61cb603fe6b07f1cf1a0414857e680_reddot_5.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/f7e2dfaad84fa8148d52b993b935c16e5c6d2533_reddot_3.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/f01e9214b61da6a8a09deb9e1d5ece3c395f3aaf_reddot_9.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/79bee1869b479798290c292c1fddb794b7a30c82_reddot_6.jpg?auto=compress,format',
			'https://images.prismic.io/canalstreetmarket/5b7985d1cdcacbebc5a60f511529113b4a33d170_reddot_7.jpg?auto=compress,format',
		],
	},
]
