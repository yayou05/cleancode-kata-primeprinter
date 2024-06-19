import Monstera from '../assets/Monstera.jpg'
import Lyrata from '../assets/Lyrata.jpg'
import Olivier from '../assets/olivier.jpg'
import succulente from '../assets/succulente.jpg'
import geranium from '../assets/geranium.jpg'
import aloe from '../assets/aloe.jpg'
import basilique from '../assets/basilique.jpg'
import yucca from '../assets/yucca2.png'
import photos from '../assets/photos.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: Monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		price: 16,
		id: '2ab',
		light: 1,
		water: 3,
		cover: Lyrata,
		price: 13
		

	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 2,
		water: 3,
		cover:photos,
		price:42
	},
	{
		name: ' yucca',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 1,
		cover: yucca,
		price: 22
	},
	{
		name: ' olivier',
		category: 'extérieur',
		id: '5pl',
		light: 2,
		water: 2,
		cover: Olivier,
		price: 55
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 1,
		water: 3,
		cover: geranium,
		price: 11
	},
	{
		name: ' basilique',
		category: 'extérieur',
		id: '7ie',
		isSpecialOffer: true,
		light: 3,
		water: 2,
		cover: basilique,
		price: 34
	},
	{
		name: ' aloe vera',
		category: 'plante grasse',
		id: '8fp',
		isSpecialOffer: true,
		light: 3,
		water: 3,
		cover: aloe,
		price: 21

	},
	{
		name: ' succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 3,
		water: 1,
		cover: succulente,
		price: 200
	}
]