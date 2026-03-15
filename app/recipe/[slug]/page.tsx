import Link from "next/link";
import Image from "next/image";

const recipes = {
  "pad-thai": {
    title: "Pad Thai",
    description: "Classic Thai stir-fried noodles with shrimp, tofu, and peanuts.",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    ingredients: [
      "200g rice noodles",
      "2 tablespoons vegetable oil",
      "2 cloves garlic, minced",
      "1 cup shrimp or chicken, peeled and deveined",
      "2 eggs, beaten",
      "2 tablespoons fish sauce",
      "1 tablespoon soy sauce",
      "1 tablespoon tamarind paste",
      "1 tablespoon sugar",
      "1 cup bean sprouts",
      "2 green onions, chopped",
      "1/4 cup chopped peanuts",
      "Lime wedges for serving"
    ],
    instructions: [
      "Soak rice noodles in warm water for 10 minutes until soft, then drain.",
      "Heat oil in a wok or large pan over medium-high heat.",
      "Add garlic and stir-fry for 30 seconds.",
      "Add shrimp or chicken and cook until done, about 2-3 minutes.",
      "Push ingredients to one side and scramble eggs in the pan.",
      "Add noodles, fish sauce, soy sauce, tamarind paste, and sugar. Stir-fry for 2-3 minutes.",
      "Add bean sprouts and green onions, cook for another minute.",
      "Serve hot with chopped peanuts and lime wedges."
    ]
  },
  "green-curry": {
    title: "Thai Green Curry",
    description: "Spicy and aromatic green curry with coconut milk and vegetables.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=2u9p8K8Z5fM",
    ingredients: [
      "2 tablespoons green curry paste",
      "1 can (400ml) coconut milk",
      "1 cup chicken or vegetable broth",
      "2 tablespoons fish sauce",
      "1 tablespoon sugar",
      "1 cup chicken, sliced",
      "1 cup eggplant, cubed",
      "1 cup bell peppers, sliced",
      "1 cup bamboo shoots",
      "1/4 cup Thai basil leaves",
      "Jasmine rice for serving"
    ],
    instructions: [
      "Heat 2 tablespoons of thick coconut cream in a wok over medium heat.",
      "Add green curry paste and fry for 1-2 minutes until fragrant.",
      "Add chicken and cook until nearly done.",
      "Pour in remaining coconut milk and broth, bring to a simmer.",
      "Add fish sauce, sugar, eggplant, bell peppers, and bamboo shoots.",
      "Simmer for 10-15 minutes until vegetables are tender.",
      "Stir in Thai basil leaves just before serving.",
      "Serve hot with jasmine rice."
    ]
  },
  "massaman-curry": {
    title: "Beef Massaman Curry",
    description: "Rich, mild curry with tender beef and potatoes.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=6zNp8Hn5P5A",
    ingredients: [
      "2 tablespoons massaman curry paste",
      "1 can (400ml) coconut milk",
      "1 cup beef broth",
      "2 tablespoons fish sauce",
      "1 tablespoon sugar",
      "500g beef chuck, cubed",
      "2 potatoes, peeled and cubed",
      "1 onion, quartered",
      "1/4 cup peanuts",
      "2 tablespoons tamarind paste",
      "Cinnamon stick, cardamom pods (optional)",
      "Jasmine rice for serving"
    ],
    instructions: [
      "Heat coconut cream in a large pot over medium heat.",
      "Add massaman curry paste and fry for 2 minutes.",
      "Add beef cubes and brown on all sides.",
      "Pour in coconut milk and beef broth, bring to a boil.",
      "Add potatoes, onion, peanuts, tamarind paste, and spices.",
      "Simmer for 1-1.5 hours until beef is tender.",
      "Season with fish sauce and sugar to taste.",
      "Serve with jasmine rice."
    ]
  },
  "holy-basil-chicken": {
    title: "Chicken Holy Basil and Chilli",
    description: "Stir-fried chicken with holy basil and spicy chillies.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    ingredients: [
      "2 tablespoons vegetable oil",
      "3 cloves garlic, minced",
      "2-3 Thai chillies, chopped",
      "500g ground chicken",
      "2 tablespoons fish sauce",
      "1 tablespoon soy sauce",
      "1 tablespoon sugar",
      "1 cup holy basil leaves",
      "1 red bell pepper, sliced",
      "Jasmine rice for serving"
    ],
    instructions: [
      "Heat oil in a wok over high heat.",
      "Add garlic and chillies, stir-fry for 30 seconds.",
      "Add ground chicken and cook until browned.",
      "Add fish sauce, soy sauce, and sugar, stir well.",
      "Add bell pepper and cook for 1 minute.",
      "Toss in holy basil leaves and stir until wilted.",
      "Serve immediately with jasmine rice."
    ]
  },
  "duck-red-curry": {
    title: "Duck Red Curry",
    description: "Luxurious red curry with tender duck meat and pineapple.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=2u9p8K8Z5fM",
    ingredients: [
      "2 tablespoons red curry paste",
      "1 can (400ml) coconut milk",
      "1 cup duck stock or chicken broth",
      "2 tablespoons fish sauce",
      "1 tablespoon sugar",
      "500g duck meat, deboned and cubed",
      "1 cup pineapple chunks",
      "1 cup cherry tomatoes",
      "1 cup eggplant, cubed",
      "1/4 cup Thai basil leaves",
      "Jasmine rice for serving"
    ],
    instructions: [
      "Heat coconut cream in a wok over medium heat.",
      "Add red curry paste and fry for 2 minutes until fragrant.",
      "Add duck meat and cook until browned.",
      "Pour in remaining coconut milk and stock, bring to a simmer.",
      "Add fish sauce, sugar, pineapple, tomatoes, and eggplant.",
      "Simmer for 15-20 minutes until duck is tender.",
      "Stir in Thai basil leaves just before serving.",
      "Serve hot with jasmine rice."
    ]
  },
  "tom-yum-king-prawn": {
    title: "Tom Yum King Prawn",
    description: "Hot and sour soup with king prawns and lemongrass.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    ingredients: [
      "1 liter chicken or vegetable stock",
      "2 stalks lemongrass, bruised",
      "3 kaffir lime leaves",
      "2 tablespoons fish sauce",
      "1 tablespoon lime juice",
      "2-3 Thai chillies, bruised",
      "200g king prawns, peeled",
      "100g mushrooms, sliced",
      "2 tablespoons chili paste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Bring stock to a boil in a large pot.",
      "Add lemongrass, kaffir lime leaves, and chillies. Simmer for 5 minutes.",
      "Add chili paste and fish sauce, stir well.",
      "Add prawns and mushrooms, cook for 3-4 minutes until prawns are pink.",
      "Remove from heat and stir in lime juice.",
      "Garnish with cilantro and serve hot."
    ]
  },
  "tom-kha-chicken": {
    title: "Tom Kha Chicken",
    description: "Creamy coconut soup with chicken and galangal.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=2u9p8K8Z5fM",
    ingredients: [
      "1 liter chicken stock",
      "1 can (400ml) coconut milk",
      "2 stalks lemongrass, bruised",
      "3 slices galangal",
      "3 kaffir lime leaves",
      "2 tablespoons fish sauce",
      "1 tablespoon lime juice",
      "200g chicken breast, sliced",
      "100g mushrooms, sliced",
      "2-3 Thai chillies, bruised",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Bring chicken stock to a boil in a large pot.",
      "Add lemongrass, galangal, and kaffir lime leaves. Simmer for 5 minutes.",
      "Add coconut milk and bring back to a simmer.",
      "Add chicken and mushrooms, cook for 5-7 minutes until chicken is done.",
      "Season with fish sauce, lime juice, and chillies.",
      "Garnish with cilantro and serve hot."
    ]
  },
  "laab-chicken": {
    title: "Laab Chicken",
    description: "Spicy minced chicken salad with herbs and lime.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=6zNp8Hn5P5A",
    ingredients: [
      "500g ground chicken",
      "2 tablespoons fish sauce",
      "1 tablespoon lime juice",
      "2-3 Thai chillies, chopped",
      "2 shallots, thinly sliced",
      "1/4 cup fresh mint leaves",
      "1/4 cup fresh cilantro",
      "2 tablespoons toasted rice powder",
      "Lettuce leaves for serving"
    ],
    instructions: [
      "Cook ground chicken in a pan over medium heat until browned, breaking up lumps.",
      "In a bowl, mix cooked chicken with fish sauce, lime juice, and chillies.",
      "Add shallots, mint, cilantro, and toasted rice powder. Mix well.",
      "Serve on lettuce leaves as a fresh salad."
    ]
  },
  "yum-beef-salad": {
    title: "Yum Beef Salad",
    description: "Tangy grilled beef salad with chili and lime dressing.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    ingredients: [
      "300g beef sirloin, grilled and sliced",
      "2 tablespoons fish sauce",
      "1 tablespoon lime juice",
      "2-3 Thai chillies, chopped",
      "2 shallots, thinly sliced",
      "1 cucumber, sliced",
      "1 tomato, wedged",
      "1/4 cup fresh mint leaves",
      "1/4 cup fresh cilantro"
    ],
    instructions: [
      "Grill beef to medium-rare, then slice thinly.",
      "In a bowl, whisk together fish sauce, lime juice, and chillies.",
      "Add sliced beef, shallots, cucumber, tomato, mint, and cilantro.",
      "Toss everything together and serve immediately."
    ]
  },
  "seafood-salad": {
    title: "Seafood Salad",
    description: "Fresh mixed seafood with spicy lime dressing.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=2u9p8K8Z5fM",
    ingredients: [
      "200g mixed seafood (shrimp, squid, mussels)",
      "2 tablespoons fish sauce",
      "1 tablespoon lime juice",
      "2-3 Thai chillies, chopped",
      "2 shallots, thinly sliced",
      "1/4 cup fresh mint leaves",
      "1/4 cup fresh cilantro",
      "1 tablespoon palm sugar",
      "Lettuce for serving"
    ],
    instructions: [
      "Blanch seafood in boiling water for 1-2 minutes, then drain and cool.",
      "In a bowl, mix fish sauce, lime juice, palm sugar, and chillies.",
      "Add cooked seafood, shallots, mint, and cilantro.",
      "Toss well and serve on lettuce leaves."
    ]
  },
  "som-tom-green-papaya-salad": {
    title: "Som Tom Green Papaya Salad",
    description: "Shredded papaya with spicy, sour, and sweet dressing.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=6zNp8Hn5P5A",
    ingredients: [
      "1 green papaya, shredded",
      "2 tablespoons fish sauce",
      "1 tablespoon lime juice",
      "2-3 Thai chillies, chopped",
      "2 cloves garlic, minced",
      "1 tablespoon palm sugar",
      "1 cup cherry tomatoes, halved",
      "1/4 cup roasted peanuts",
      "1 carrot, shredded"
    ],
    instructions: [
      "Pound chillies and garlic in a mortar and pestle.",
      "Add fish sauce, lime juice, and palm sugar, mix well.",
      "In a bowl, combine papaya, carrot, tomatoes, and peanuts.",
      "Pour dressing over and toss thoroughly.",
      "Serve immediately as a fresh salad."
    ]
  },
  "mango-sticky-rice": {
    title: "Mango Sticky Rice",
    description: "Sweet coconut sticky rice served with fresh mango.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    ingredients: [
      "1 cup glutinous rice",
      "1 can (400ml) coconut milk",
      "1/2 cup sugar",
      "1/4 teaspoon salt",
      "2 ripe mangoes, peeled and sliced",
      "Sesame seeds for garnish (optional)"
    ],
    instructions: [
      "Soak glutinous rice in water for 4 hours, then steam for 20-25 minutes until tender.",
      "In a saucepan, heat coconut milk, sugar, and salt until sugar dissolves.",
      "Pour half the coconut sauce over the cooked rice and let soak for 30 minutes.",
      "Serve rice with sliced mango, drizzle remaining sauce on top.",
      "Garnish with sesame seeds if desired."
    ]
  }
};

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = recipes[params.slug as keyof typeof recipes];

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-black py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-block mb-8 text-orange-600 hover:text-orange-700 font-medium">
          ← Back to Recipes
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="h-64 overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {recipe.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {recipe.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Ingredients
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Instructions
                </h2>
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="font-semibold text-orange-600 mr-2">{index + 1}.</span>
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Enjoy your homemade {recipe.title}!
              </p>
              {recipe.video && (
                <a
                  href={recipe.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <span>🎥</span>
                  Watch Cooking Video
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}