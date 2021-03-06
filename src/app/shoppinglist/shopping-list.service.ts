import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Oranges',5),
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredients: Ingredient) {
          this.ingredients.push(ingredients);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
}