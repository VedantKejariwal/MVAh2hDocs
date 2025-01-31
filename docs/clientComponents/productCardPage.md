---
sidebar_label: 'ProductCard'
sidebar_position: 2
---

# <span class="h1style">Product Card</span>
Welcome to the documentation for the Product Card! This guide will help understand the code and its features. This page is verified by: *Vedant Kejariwal*

## <span class="h2style">Functions</span>
This is the list of functions that are defined on this page.
- [UpdateBasket()](#function-updatebasket)

---

### <span class="custom-function-heading">Function: UpdateBasket()</span>

#### <span class="custom-heading">Description</span>
This function handles adding or removing a product from the consumer's cart. It also updates the player's wallet based on the product's price and whether a warranty is added.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
function UpdateBasket() {
  /**
   * This function handles adding and removing a producer's product from the consumer's cart.
   * It checks whether the product is already in the cart and toggles its state accordingly.
   */

  // Check if the producer's product is not in the current cart
  if (currentCart.indexOf(producer.get("name")) === -1) {
    // Ensure the consumer has enough money in their wallet
    if (player.get("wallet") >= productPrice) {
      // Add the producer's product to the cart
      currentCart.push(producer.get("name"));

      // Check if the product has a warranty
      if (String(warrants.slice(-1)[0]).toUpperCase() === "TRUE") {
        // Deduct the product price plus warranty cost from the wallet
        player.set("wallet", player.get("wallet") - (productPrice + warrantCost));
      } else {
        // Deduct only the product price from the wallet
        player.set("wallet", player.get("wallet") - productPrice);
      }

      // Update the player's cart with the modified cart array
      player.set("cart", currentCart);

      // Notify the user that the product has been added to the cart
      toast("🛒 Product added to cart!");
    }
  } else if (currentCart.indexOf(producer.get("name")) !== -1) {
    // If the product is already in the cart, remove it and refund the money

    // Remove the product from the cart using a filter
    currentCart = currentCart.filter((p) => p !== producer.get("name"));

    // Update the player's cart with the modified cart array
    player.set("cart", currentCart);

    // Check if the product had a warranty
    if (String(warrants.slice(-1)[0]).toUpperCase() === "TRUE") {
      // Refund the product price plus warranty cost to the wallet
      player.set("wallet", player.get("wallet") + (productPrice + warrantCost));
    } else {
      // Refund only the product price to the wallet
      player.set("wallet", player.get("wallet") + productPrice);
    }

    // Notify the user that the product has been removed from the cart
    toast("🚮 Product removed from cart!");
  }

  // Debugging information (optional)
  // console.log("currentCart: ", currentCart);
}
```
</div>


#### <span class="custom-heading">Logic Explanation</span>

1. Check if the product is already in the cart:
   - Uses `currentCart.indexOf(producer.get("name"))` to determine if the product is in the cart.
   - If not in the cart (`-1`), it adds the product to the cart.
   - If in the cart, it removes the product.

2. Handle wallet updates:
   - Deducts the product price (and warranty cost, if applicable) when adding a product.
   - Refunds the product price (and warranty cost, if applicable) when removing a product.

3. Update the cart and wallet:
   - Uses `player.set("cart", currentCart)` to update the cart.
   - Uses `player.set("wallet", player.get("wallet") ± productPrice)` to update the wallet balance.

4. Notifications:
   - Displays a toast message indicating whether the product was added or removed from the cart.

---
