import Link from "next/link";

const recipes = [
  { slug: "pad-thai", title: "Pad Thai" },
  { slug: "green-curry", title: "Thai Green Curry" },
  { slug: "massaman-curry", title: "Beef Massaman Curry" },
  { slug: "holy-basil-chicken", title: "Chicken Holy Basil and Chilli" },
];

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-black py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-block mb-8 text-orange-600 hover:text-orange-700 font-medium">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          All Thai Recipes
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <Link key={recipe.slug} href={`/recipe/${recipe.slug}`}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {recipe.title}
                </h2>
                <p className="text-orange-600 dark:text-orange-400 font-medium">
                  View Recipe →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}