// Programming Quiz - Navigating the Food Chain(3 - 8)
//     *
//  * Use a series of ternary operator to set the category to one of the following:
//  * - "herbivore" if an animal eats plants
//     * - "carnivore" if an animal eats animals
//         * - "omnivore" if an animal eats plants and animals
//             * - undefined if an animal doesn't eat plants or animals
//                 *
//  * Notes
//                 * - use the variables`eatsPlants` and`eatsAnimals` in your ternary expressions

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") :
    (eatsAnimals ? "carnivore" : undefined);

    console.log(category)