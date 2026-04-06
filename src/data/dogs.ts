export interface Dog {
  id: number
  name: string
  breed: string
  age: string
  price: number
  image: string
  description: string
  shortDescription: string
  gender: 'Male' | 'Female'
  vaccinated: boolean
  available: boolean
}

const dogs: Array<Dog> = [
  {
    id: 1,
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '8 weeks',
    price: 1800,
    image: 'https://picsum.photos/seed/goldenretriever/600/400',
    description:
      'Buddy is a sweet and playful Golden Retriever puppy full of energy and love. He gets along great with children and other animals. He has had his first round of vaccinations and is vet-checked. A wonderful family companion waiting for his forever home.',
    shortDescription: 'Sweet and playful, great with kids and other pets.',
    gender: 'Male',
    vaccinated: true,
    available: true,
  },
  {
    id: 2,
    name: 'Bella',
    breed: 'French Bulldog',
    age: '10 weeks',
    price: 3200,
    image: 'https://picsum.photos/seed/frenchbulldog/600/400',
    description:
      'Bella is an adorable French Bulldog with a big personality packed into a small frame. She loves cuddles and is already crate-trained. Comes with health certificate and microchip. Perfect for apartment living.',
    shortDescription: 'Big personality, loves cuddles, great for apartments.',
    gender: 'Female',
    vaccinated: true,
    available: true,
  },
  {
    id: 3,
    name: 'Max',
    breed: 'German Shepherd',
    age: '12 weeks',
    price: 2400,
    image: 'https://picsum.photos/seed/germanshepherd/600/400',
    description:
      'Max is a confident and intelligent German Shepherd puppy from champion bloodlines. He is already showing great potential for obedience training. Comes with pedigree papers and full health guarantee.',
    shortDescription: 'Intelligent, confident, champion bloodlines.',
    gender: 'Male',
    vaccinated: true,
    available: true,
  },
  {
    id: 4,
    name: 'Luna',
    breed: 'Labrador Retriever',
    age: '9 weeks',
    price: 1600,
    image: 'https://picsum.photos/seed/labrador/600/400',
    description:
      'Luna is a gentle and friendly Labrador Retriever with a beautiful chocolate coat. She is incredibly social and loves to play fetch. She has been raised with children and is completely at ease around people of all ages.',
    shortDescription: 'Gentle, friendly, loves to play fetch with everyone.',
    gender: 'Female',
    vaccinated: true,
    available: true,
  },
  {
    id: 5,
    name: 'Charlie',
    breed: 'Beagle',
    age: '8 weeks',
    price: 1200,
    image: 'https://picsum.photos/seed/beagle/600/400',
    description:
      'Charlie is a curious and merry Beagle puppy with a nose always ready to explore. He is playful and loving, great with kids, and adapts well to most living situations. Vet-checked, vaccinated, and ready to go home.',
    shortDescription: 'Curious, merry explorer — great with the whole family.',
    gender: 'Male',
    vaccinated: true,
    available: true,
  },
  {
    id: 6,
    name: 'Daisy',
    breed: 'Poodle',
    age: '11 weeks',
    price: 2800,
    image: 'https://picsum.photos/seed/poodle/600/400',
    description:
      'Daisy is a hypoallergenic Standard Poodle puppy with a brilliant mind. Poodles are known for their intelligence and trainability, making Daisy an excellent choice for first-time dog owners. She is affectionate, non-shedding, and always eager to please.',
    shortDescription: 'Hypoallergenic, intelligent, and eager to please.',
    gender: 'Female',
    vaccinated: true,
    available: true,
  },
]

export default dogs
