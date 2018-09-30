import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'products',
  pathMatch: 'full'
}, {
  path: 'products',
  component: ProductListComponent,
  data: { title: 'My products' }
}, {
  path: 'products/add',
  component: AddProductComponent,
  data: { title: 'Add new product' }
}];
