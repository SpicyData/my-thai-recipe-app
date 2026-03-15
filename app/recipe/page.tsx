export default function Recipe() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-32 px-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-black p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-zinc-50">
          Pad Thai Recipe
        </h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Ingredients</h2>
          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>200g rice noodles</li>
            <li>2 tablespoons vegetable oil</li>
            <li>2 cloves garlic, minced</li>
            <li>1 cup shrimp or chicken, peeled and deveined</li>
            <li>2 eggs, beaten</li>
            <li>2 tablespoons fish sauce</li>
            <li>1 tablespoon soy sauce</li>
            <li>1 tablespoon tamarind paste</li>
            <li>1 tablespoon sugar</li>
            <li>1 cup bean sprouts</li>
            <li>2 green onions, chopped</li>
            <li>1/4 cup chopped peanuts</li>
            <li>Lime wedges for serving</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Instructions</h2>
          <ol className="list-decimal list-inside text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>Soak rice noodles in warm water for 10 minutes until soft, then drain.</li>
            <li>Heat oil in a wok or large pan over medium-high heat.</li>
            <li>Add garlic and stir-fry for 30 seconds.</li>
            <li>Add shrimp or chicken and cook until done, about 2-3 minutes.</li>
            <li>Push ingredients to one side and scramble eggs in the pan.</li>
            <li>Add noodles, fish sauce, soy sauce, tamarind paste, and sugar. Stir-fry for 2-3 minutes.</li>
            <li>Add bean sprouts and green onions, cook for another minute.</li>
            <li>Serve hot with chopped peanuts and lime wedges.</li>
          </ol>
        </div>
        <div className="text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            Enjoy your homemade Pad Thai!
          </p>
        </div>
      </div>
    </div>
  );
}