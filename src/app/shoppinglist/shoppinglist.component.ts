import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription,Observable } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shoppinglist/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor( private loggingService: LoggingService,
    private store: Store<fromApp.AppState>
    ) { }

  ngOnInit(): void {
     this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged
    // .subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
    this.loggingService.printLog('sl');
  }

  onEditItem(index: number) {
   // this.slService.startedEditing.next(index);
   this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
 ngOnDestroy(): void {
  // this.subscription.unsubscribe();
 }
}
