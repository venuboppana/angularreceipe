import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shopping-list.service';

@Injectable()

export class RecipeService {
 recipesChanged = new Subject<Recipe[]>();

//    private recipes: Recipe[] = [
//         new Recipe(
//           'Burger',
//           'description',
//           'https://aht.seriouseats.com/images/2012/09/20120918-222541-checkers-rallys-fry-lovers-burger-primary.jpg',[
//               new Ingredient('Meat', 1),
//               new Ingredient('Buns', 2),
//               new Ingredient('French Fries', 2)
//           ]),
//           new Recipe(
//             'Sandwich',
//             'description',
//             'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/egg-cress-club-sandwich_0-43a103c.jpg?quality=90&resize=768,574',[
//                 new Ingredient('Bread', 4),
//                 new Ingredient('Chicken Salad', 4)
//             ])
//       ];

private recipes: Recipe[] = [];
      constructor(private slService: ShoppingListService) {}
      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
       this.slService.addIngredients(ingredients);  
      }

      addRecipe(recipe: Recipe) {
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index: number, newRecipe: Recipe) {
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
}