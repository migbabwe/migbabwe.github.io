import { createFileRoute, Link } from '@tanstack/react-router'
import dogs from '@/data/dogs'

export const Route = createFileRoute('/dogs')({
  component: DogsPage,
})

function DogsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-800 mb-3">Available Dogs</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          All our puppies are raised with love, fully vaccinated, and vet-checked. Each one is ready to become part of your family.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dogs.map((dog) => (
          <div
            key={dog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-amber-100 hover:shadow-xl transition-shadow flex flex-col"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={dog.image}
                alt={`${dog.name} the ${dog.breed}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Details */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-xl font-bold text-amber-900">{dog.name}</h2>
                <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full">
                  {dog.available ? 'Available' : 'Reserved'}
                </span>
              </div>

              <p className="text-amber-600 font-medium text-sm mb-1">{dog.breed}</p>

              <div className="flex gap-4 text-xs text-gray-500 mb-3">
                <span>Age: {dog.age}</span>
                <span>Gender: {dog.gender}</span>
                {dog.vaccinated && <span className="text-green-600 font-medium">✓ Vaccinated</span>}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{dog.shortDescription}</p>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-amber-50">
                <span className="text-2xl font-bold text-amber-800">${dog.price.toLocaleString()}</span>
                <Link
                  to="/contact"
                  search={{ dog: dog.name }}
                  className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-700 transition-colors"
                >
                  Inquire
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-amber-50 rounded-2xl p-8 text-center border border-amber-100">
        <h2 className="text-2xl font-bold text-amber-800 mb-2">Don't See Your Perfect Match?</h2>
        <p className="text-gray-600 mb-4">
          We regularly have new litters available. Contact us and we'll let you know when a dog matching your preferences becomes available.
        </p>
        <Link
          to="/contact"
          className="bg-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors"
        >
          Get on Our Waitlist
        </Link>
      </div>
    </div>
  )
}
