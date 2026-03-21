import Link from "next/link";
import Image from "next/image";

const recipes = {
  "pad-thai": {
    title: "Pad Thai",
    thaiName: "Pad Thai",
    description: "Classic Thai stir-fried noodles with shrimp, tofu, and peanuts.",
    image: "/images/pad-thai.jpg",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    serves: "2–3",
    ingredients: [
      "200g flat rice noodles (medium width), soaked 30 mins",
      "200g shrimp, chicken, or firm tofu",
      "2 eggs",
      "3 tbsp fish sauce (or soy sauce for vegan)",
      "2 tbsp tamarind paste",
      "1 tbsp oyster sauce",
      "2 tsp sugar",
      "3 tbsp neutral oil",
      "3 garlic cloves, minced",
      "2 shallots, thinly sliced",
      "2 green onions, chopped",
      "1/2 cup bean sprouts",
      "1/4 cup roasted peanuts, roughly crushed"
    ],
    instructions: [
      "Soak rice noodles in room-temperature water for 30 minutes until pliable but not fully soft. Drain.",
      "Mix the sauce: combine fish sauce, tamarind paste, oyster sauce, and sugar. Stir well and set aside.",
      "Heat oil in a wok over high heat. Add garlic and shallots, stir-fry 30 seconds.",
      "Add shrimp/chicken/tofu and cook until done. Push to the side of the wok.",
      "Crack eggs into the wok and scramble lightly until just set, then mix with the protein.",
      "Add drained noodles and pour the sauce over everything. Toss quickly over high heat for 2–3 minutes until noodles absorb the sauce and caramelise slightly.",
      "Add bean sprouts and green onions, toss for 30 more seconds. Remove from heat.",
      "Serve topped with crushed peanuts, lime wedges, coriander, and chilli flakes."
    ],
    tip: "High heat is key — a screaming hot wok gives you that signature smoky 'wok hei' flavour. Cook in batches if doubling the recipe."
  },
  "green-curry": {
    title: "Chicken Thai Green Curry",
    thaiName: "Gaeng Keow Wan Gai",
    description: "Spicy and aromatic curry with coconut milk and vegetables.",
    image: "/images/green-curry.jpg",
    video: "https://www.youtube.com/watch?v=2u9p8K8Z5fM",
    serves: "4",
    ingredients: [
      "500g chicken thighs, sliced",
      "400ml coconut milk",
      "2–3 tbsp green curry paste",
      "1 tbsp fish sauce",
      "1 tsp sugar",
      "6 kaffir lime leaves, torn",
      "1 cup Thai eggplant, quartered",
      "1 cup baby spinach or Thai basil",
      "1 tbsp oil"
    ],
    instructions: [
      "Heat oil in a wok, fry green curry paste for 1 minute until fragrant.",
      "Add half the coconut milk and stir until it splits and oils appear.",
      "Add chicken, cook until sealed.",
      "Pour in remaining coconut milk, eggplant, fish sauce, sugar, and lime leaves.",
      "Simmer 12 minutes. Finish with Thai basil. Serve with jasmine rice."
    ],
    tip: "For extra richness, use full-fat coconut milk."
  },
  "massaman-curry": {
    title: "Beef Massaman Curry",
    thaiName: "Gaeng Massaman Nuea",
    description: "Rich, mild curry with tender beef and potatoes.",
    image: "/images/massaman-curry.jpg",
    video: "https://www.youtube.com/watch?v=6zNp8Hn5P5A",
    serves: "4",
    ingredients: [
      "600g beef chuck, cubed",
      "400ml coconut milk + 200ml water",
      "3 tbsp massaman curry paste",
      "2 potatoes, cubed",
      "1 onion, quartered",
      "2 tbsp tamarind paste",
      "1 tbsp palm sugar",
      "2 tbsp fish sauce",
      "1/4 cup roasted peanuts",
      "3 cardamom pods",
      "2 bay leaves"
    ],
    instructions: [
      "Fry curry paste in oil for 1 minute. Add coconut milk, bring to simmer.",
      "Add beef, potatoes, onion, cardamom, bay leaves, and water.",
      "Season with tamarind, palm sugar, and fish sauce.",
      "Simmer low and slow for 1.5–2 hours until beef is melt-tender.",
      "Top with peanuts. Serve with roti or jasmine rice."
    ],
    tip: "This curry gets better the next day — make it ahead!"
  },
  "holy-basil-chicken": {
    title: "Minced Chicken Holy Basil & Chilli",
    thaiName: "Gai Pad Krapow",
    description: "Stir-fried chicken with holy basil and spicy chillies.",
    image: "/images/holy-basil-chicken.jpg",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    serves: "2–3",
    ingredients: [
      "400g minced chicken",
      "1 cup holy basil leaves",
      "4–6 Thai bird's eye chillies, sliced",
      "4 garlic cloves, minced",
      "1 tbsp oyster sauce",
      "1 tbsp fish sauce",
      "1 tsp dark soy",
      "1 tsp sugar",
      "2 tbsp oil"
    ],
    instructions: [
      "Heat oil on very high heat. Fry garlic and chillies for 30 seconds.",
      "Add minced chicken, break up and cook until browned.",
      "Add oyster sauce, fish sauce, dark soy, and sugar. Toss well.",
      "Kill heat, add holy basil and stir through until just wilted.",
      "Serve over rice, topped with a runny fried egg."
    ],
    tip: "Holy basil (krapow) is different from Thai sweet basil — use the real thing for authentic flavour."
  },
  "duck-red-curry": {
    title: "Duck Red Curry",
    thaiName: "Gaeng Phed Ped Yang",
    description: "Luxurious red curry with tender duck meat and pineapple.",
    image: "/images/duck-red-curry.jpg",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    serves: "4",
    ingredients: [
      "1 roasted duck, meat removed and sliced",
      "400ml coconut milk",
      "2–3 tbsp red curry paste",
      "1/2 cup pineapple chunks",
      "1/2 cup cherry tomatoes",
      "6 kaffir lime leaves",
      "2 tbsp fish sauce",
      "1 tsp sugar",
      "Thai basil to finish"
    ],
    instructions: [
      "Fry red curry paste in a little coconut milk until fragrant.",
      "Add remaining coconut milk and bring to a gentle simmer.",
      "Add duck, pineapple, tomatoes, lime leaves, fish sauce, and sugar.",
      "Simmer 10 minutes — don't overcook the duck.",
      "Finish with Thai basil. Serve with steamed rice."
    ],
    tip: "Buy a pre-roasted duck from a Chinese BBQ shop to save time."
  },
  "tom-yum-king-prawn": {
    title: "Tom Yum King Prawn",
    thaiName: "Tom Yum Goong",
    description: "Hot and sour soup with king prawns and lemongrass.",
    image: "/images/tom-yum.jpg",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    serves: "4",
    ingredients: [
      "300g king prawns, shell-on",
      "1L chicken or prawn stock",
      "3 stalks lemongrass, bruised",
      "4 kaffir lime leaves",
      "4 slices galangal",
      "2–3 bird's eye chillies",
      "200g oyster mushrooms",
      "2 tbsp fish sauce",
      "2 tbsp lime juice",
      "1 tbsp roasted chilli paste (nam prik pao)"
    ],
    instructions: [
      "Bring stock to boil with lemongrass, galangal, lime leaves, and chillies.",
      "Simmer 5 minutes to infuse. Add mushrooms and cook 3 minutes.",
      "Add prawns and cook just until pink (about 2 minutes).",
      "Stir in fish sauce, lime juice, and chilli paste.",
      "Taste and balance: sour, spicy, salty. Garnish with coriander."
    ],
    tip: "Keep the prawn shells on during cooking for deeper flavour."
  },
  "tom-kha-chicken": {
    title: "Tom Kha Chicken Soup",
    thaiName: "Tom Kha Gai",
    description: "Creamy coconut soup with chicken and galangal.",
    image: "/images/tom-kha.jpg",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    serves: "4",
    ingredients: [
      "400g chicken breast, thinly sliced",
      "400ml coconut milk + 400ml chicken stock",
      "3 stalks lemongrass, bruised",
      "6 slices galangal",
      "4 kaffir lime leaves",
      "200g mushrooms",
      "2 tbsp fish sauce",
      "2 tbsp lime juice",
      "1 tsp sugar",
      "2 red chillies, sliced"
    ],
    instructions: [
      "Combine coconut milk, stock, lemongrass, galangal, and lime leaves. Bring to simmer.",
      "Add chicken and mushrooms. Cook 8–10 minutes until chicken is cooked through.",
      "Season with fish sauce, lime juice, and sugar.",
      "Ladle into bowls with chilli and coriander on top."
    ],
    tip: "Tom Kha should taste coconutty, sour, and fragrant — milder than Tom Yum."
  },
  "laab-chicken": {
    title: "Laab Chicken",
    thaiName: "Laab Gai",
    description: "Spicy minced chicken salad with herbs and lime.",
    image: "/images/laab-chicken.jpg",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    serves: "2–3",
    ingredients: [
      "400g minced chicken",
      "3 tbsp fish sauce",
      "3 tbsp lime juice",
      "1 tbsp toasted rice powder (khao khua)",
      "1 tsp roasted chilli flakes",
      "2 shallots, thinly sliced",
      "2 spring onions, sliced",
      "Large handful fresh mint + coriander"
    ],
    instructions: [
      "Make toasted rice powder: dry toast raw rice in pan until golden, then grind.",
      "Cook minced chicken in a dry pan with a splash of water — no oil needed.",
      "Once cooked, remove from heat and let cool slightly.",
      "Season with fish sauce, lime juice, chilli flakes, and toasted rice powder.",
      "Toss in shallots, spring onions, mint, and coriander.",
      "Serve with sticky rice, lettuce cups, and cucumber."
    ],
    tip: "Toasted rice powder is the secret ingredient — don't skip it!"
  },
  "yum-beef-salad": {
    title: "Yum Beef Salad",
    thaiName: "Yum Nua",
    description: "Tangy grilled beef salad with chili and lime dressing.",
    image: "/images/beef-salad.jpg",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    serves: "2–3",
    ingredients: [
      "400g sirloin or flank steak",
      "2 tbsp fish sauce",
      "3 tbsp lime juice",
      "1 tsp sugar",
      "2–3 bird's eye chillies, finely sliced",
      "2 shallots, sliced",
      "1 stalk lemongrass (tender part), finely sliced",
      "Cherry tomatoes, halved",
      "Cucumber, sliced",
      "Fresh mint and coriander"
    ],
    instructions: [
      "Grill or pan-sear steak to medium-rare. Rest 5 minutes, then slice thinly.",
      "Whisk together fish sauce, lime juice, sugar, and chillies.",
      "Toss beef with dressing, shallots, lemongrass, tomatoes, and cucumber.",
      "Pile on a platter with fresh herbs on top."
    ],
    tip: "Slice beef against the grain for the most tender result."
  },
  "seafood-salad": {
    title: "Seafood Salad",
    thaiName: "Yum Talay",
    description: "Fresh mixed seafood with spicy lime dressing.",
    image: "/images/seafood-salad.jpg",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    serves: "3–4",
    ingredients: [
      "150g shrimp",
      "150g squid rings",
      "100g mussels",
      "100g white fish pieces",
      "3 tbsp fish sauce",
      "3 tbsp lime juice",
      "1 tsp sugar",
      "3–4 bird's eye chillies, sliced",
      "3 garlic cloves, minced",
      "2 shallots, sliced",
      "1 stalk lemongrass, finely sliced",
      "Celery stalks and leaves, chopped",
      "Cherry tomatoes",
      "Mint, coriander"
    ],
    instructions: [
      "Blanch all seafood briefly in salted boiling water — shrimp 2 mins, squid 1 min, fish 2 mins.",
      "Make dressing: mix fish sauce, lime juice, sugar, garlic, and chillies.",
      "Toss warm seafood with dressing, shallots, lemongrass, tomatoes, and celery.",
      "Top with mint and coriander. Serve immediately."
    ],
    tip: "Serve while the seafood is still warm — it absorbs the dressing better."
  },
  "som-tom-green-papaya-salad": {
    title: "Som Tum Green Papaya Salad",
    thaiName: "Som Tum Thai",
    description: "Shredded papaya with spicy, sour, and sweet dressing.",
    image: "/images/som-tom.jpg",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    serves: "2",
    ingredients: [
      "2 cups green papaya, julienned or grated",
      "6–8 cherry tomatoes, halved",
      "1/4 cup long beans, cut into 2cm pieces",
      "2–4 bird's eye chillies",
      "2 garlic cloves",
      "2 tbsp fish sauce",
      "2 tbsp lime juice",
      "1 tbsp palm sugar",
      "2 tbsp dried shrimp",
      "2 tbsp roasted peanuts"
    ],
    instructions: [
      "In a large mortar, pound chillies and garlic to a rough paste.",
      "Add long beans and lightly bruise. Add tomatoes and crush gently.",
      "Add fish sauce, lime juice, and palm sugar — pound lightly to combine.",
      "Add papaya and dried shrimp, toss and lightly pound to mix and bruise.",
      "Plate and top with peanuts. Serve with sticky rice."
    ],
    tip: "The pounding technique (not blending) is what gives Som Tum its unique texture."
  },
  "mango-sticky-rice": {
    title: "Mango Sticky Rice",
    thaiName: "Khao Niao Mamuang",
    description: "Sweet coconut sticky rice served with fresh mango.",
    image: "/images/mango-sticky-rice.jpg",
    video: "https://www.youtube.com/watch?v=8v0M5jz7s0I",
    serves: "4",
    ingredients: [
      "1 cup glutinous (sticky) rice, soaked overnight",
      "400ml coconut milk",
      "3 tbsp sugar",
      "1/2 tsp salt",
      "2 ripe mangoes, sliced",
      "Coconut topping: 3 tbsp coconut milk + pinch salt + 1 tsp rice flour"
    ],
    instructions: [
      "Steam soaked sticky rice for 20–25 minutes until fully cooked.",
      "Warm coconut milk with sugar and salt — do not boil. Stir to dissolve.",
      "Pour warm coconut milk over hot cooked rice. Stir, cover, and rest 20 minutes to absorb.",
      "Make coconut topping: gently heat coconut milk with salt and rice flour until just thickened.",
      "Plate rice alongside sliced mango, drizzle coconut sauce over the rice."
    ],
    tip: "Use Nam Dok Mai mangoes if you can find them — fragrant, sweet, and buttery."
  }
};

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes[slug as keyof typeof recipes];

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Recipe Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The recipe you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 mb-6 transition-colors">
          <span>←</span>
          Back to Recipes
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="h-64 md:h-80 overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                {recipe.title}
              </h1>
              {recipe.thaiName && (
                <p className="text-xl text-orange-600 dark:text-orange-400 font-medium mb-2">
                  {recipe.thaiName}
                </p>
              )}
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {recipe.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="bg-orange-100 dark:bg-orange-900 px-3 py-1 rounded-full">
                  Serves {recipe.serves}
                </span>
              </div>
            </div>

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

            {recipe.tip && (
              <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  💡 Pro Tip
                </h3>
                <p className="text-orange-700 dark:text-orange-300">
                  {recipe.tip}
                </p>
              </div>
            )}

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