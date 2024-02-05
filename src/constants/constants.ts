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
