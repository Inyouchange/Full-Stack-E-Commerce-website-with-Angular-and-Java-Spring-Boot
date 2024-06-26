import { Component } from '@angular/core';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent {

  cartTiems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartServices: CartService) {}

  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
    // get a handle to the cart items
    this.cartTiems = this.cartServices.cartItems;

    // subscribe to the cart totalPrice
    this.cartServices.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartServices.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    // compute cart total price and quantity
    this.cartServices.computeCartTotals();
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartServices.addToCart(theCartItem);
  }
  decrementQuantity(theCartItem: CartItem) {
    this.cartServices.decrementQuantity(theCartItem);
  }
  remove(theCartItem: CartItem) {
    this.cartServices.remove(theCartItem);
  }
}
