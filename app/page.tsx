import Image from "next/image";
import Link from "next/link";

const recipes = [
  {
    slug: "pad-thai",
    title: "Pad Thai",
    description: "Classic stir-fried noodles with shrimp, tofu, and peanuts.",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    slug: "green-curry",
    title: "Thai Green Curry",
    description: "Spicy and aromatic curry with coconut milk and vegetables.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    slug: "massaman-curry",
    title: "Beef Massaman Curry",
    description: "Rich, mild curry with tender beef and potatoes.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    slug: "holy-basil-chicken",
    title: "Chicken Holy Basil and Chilli",
    description: "Stir-fried chicken with holy basil and spicy chillies.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <Image
            className="mx-auto mb-4 dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Thai Recipes App
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover authentic Thai flavors with our collection of traditional recipes.
            From stir-fries to curries, explore the taste of Thailand!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {recipes.map((recipe) => (
            <Link key={recipe.slug} href={`/recipe/${recipe.slug}`}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {recipe.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {recipe.description}
                  </p>
                  <div className="mt-4 text-orange-600 dark:text-orange-400 font-medium">
                    View Recipe →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="text-center mt-16 text-gray-500 dark:text-gray-400">
          <p>Built with Next.js and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}
