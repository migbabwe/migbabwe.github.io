import { Link, createFileRoute } from '@tanstack/react-router'
import dogs from '@/data/dogs'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const breeds = [
  { name: 'Golden Retriever', emoji: '🦮', desc: 'Friendly, loyal, and great with families.' },
  { name: 'French Bulldog', emoji: '🐾', desc: 'Compact, playful, and loves to cuddle.' },
  { name: 'German Shepherd', emoji: '🐕‍🦺', desc: 'Intelligent, loyal, and highly trainable.' },
  { name: 'Labrador Retriever', emoji: '🐶', desc: 'Energetic, gentle, and endlessly loving.' },
  { name: 'Beagle', emoji: '🐕', desc: 'Curious, merry, and great for active families.' },
  { name: 'Poodle', emoji: '🐩', desc: 'Hypoallergenic, smart, and eager to please.' },
]

function HomePage() {
  const featured = dogs.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-700 to-amber-500 text-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-5xl mb-4">🐾</p>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Find Your Perfect Furry Companion</h1>
          <p className="text-xl text-amber-100 mb-8">
            At Happy Paws Kennel, we raise healthy, well-socialized puppies in a loving home environment.
            Every pup comes vet-checked, vaccinated, and ready to become your best friend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dogs"
              className="bg-white text-amber-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-100 transition-colors"
            >
              Browse Available Dogs
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-10">Why Choose Happy Paws?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: '💉', title: 'Fully Vaccinated', desc: 'All puppies are vet-checked and receive age-appropriate vaccinations before going home.' },
              { icon: '🏡', title: 'Home Raised', desc: 'Our puppies grow up in a caring family environment, making them well-socialized and confident.' },
              { icon: '📋', title: 'Health Guarantee', desc: 'We stand behind the health of every puppy with a written health guarantee and breeder support.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-amber-50 border border-amber-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-amber-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dogs */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-2">Featured Puppies</h2>
          <p className="text-center text-gray-500 mb-10">A few of our adorable pups looking for loving homes.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((dog) => (
              <div key={dog.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={dog.image} alt={dog.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-bold text-amber-900">{dog.name}</h3>
                    <span className="text-amber-700 font-semibold">${dog.price.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-amber-600 font-medium mb-2">{dog.breed} · {dog.age}</p>
                  <p className="text-gray-600 text-sm mb-4">{dog.shortDescription}</p>
                  <Link
                    to="/dogs"
                    className="block text-center bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/dogs"
              className="bg-amber-700 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-800 transition-colors"
            >
              View All Available Dogs
            </Link>
          </div>
        </div>
      </section>

      {/* Breeds We Offer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-2">Breeds We Specialize In</h2>
          <p className="text-center text-gray-500 mb-10">We carefully select and breed the most beloved family dogs.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {breeds.map((b) => (
              <div key={b.name} className="text-center p-5 rounded-2xl border border-amber-100 bg-amber-50 hover:border-amber-300 transition-colors">
                <div className="text-3xl mb-2">{b.emoji}</div>
                <h3 className="font-bold text-amber-900 mb-1 text-sm">{b.name}</h3>
                <p className="text-gray-500 text-xs">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-amber-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Ready to Meet Your New Best Friend?</h2>
          <p className="text-amber-200 mb-6">Browse our available puppies or reach out with any questions. We'd love to help you find the perfect match.</p>
          <Link
            to="/contact"
            className="bg-white text-amber-700 px-8 py-3 rounded-full font-bold hover:bg-amber-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
