import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>(); 

   private recipes: Recipe[] = [
        new Recipe(
          'A test recipe',
          'description',
          'https://aht.seriouseats.com/images/2012/09/20120918-222541-checkers-rallys-fry-lovers-burger-primary.jpg',[
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20)
          ])
      ];

      constructor(private slService: ShoppingListService) {}
      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
       this.slService.addIngredients(ingredients);  
      }
}