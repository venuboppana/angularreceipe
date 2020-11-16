import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
    },
    // { 
    //     path : 'shopping-list',
    //     loadChildren: './shoppinglist/shopping-list.module#ShoppingListModule'
    // },
    // {
    //     path: 'auth',
    //     loadChildren: './auth/auth.module#AuthModule'
    // }
    { 
        path : 'shopping-list',
        loadChildren: () => import('./shoppinglist/shopping-list.module').then(s => s.ShoppingListModule)
    },
    {
            path: 'auth',
             loadChildren: () => import('./auth/auth.module').then(n => n.AuthModule)
         }
];

@NgModule({
imports: [
          RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })
    ],
exports: [RouterModule]

})
export class AppRoutingModule {

}