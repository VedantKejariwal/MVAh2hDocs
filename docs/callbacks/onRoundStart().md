---
sidebar_label: 'Empirica.onRoundStart()'
sidebar_position: 3
---

# <span class="h1style">Game Callbacks</span>
Welcome to the documentation for the `onRoundStart()` function! This guide will help understand the code and its features. This page is verified by: *Vedant Kejariwal*

## <span class="h2style">Functions</span>
This is the list of sections that are defined in this function:
- [Condition: if (player.get("changedBrand").slice(-1)[0] === true)](#condition-if-playerget"changedbrand"slice(1)[0]-true)
- [Condition: if (player.get("role") === "consumer")](#condition-if-playergetrole--consumer)
- [Condition: else (for producers)](#condition-else-for-producers)

---

### <span class="custom-function-heading">Condition: if (player.get("changedBrand").slice(-1)[0] === true)</span>

#### Explanation:
- This condition checks if the producer chose to change their brand in the previous round.
- If `changedBrand` is `true`, it means the producer has decided to reset their brand identity.
- The function assigns a new brand name using `getRandomName()`, ensuring that each producer can operate under a fresh identity when needed.
- **What does `reviews.push([0, 0]);` do?**  
  - The producer’s `reviews` array is updated with `[0,0]`, effectively resetting their reputation in the new round.
  - The `[0,0]` format represents **[positive reviews, negative reviews]**, ensuring that previous consumer ratings do not carry over.
  - This reset is crucial because changing a brand should also reset the market perception of the producer.

---

### <span class="custom-function-heading">Condition: if (player.get("role") === "consumer")</span>

#### Explanation:
- If the player is a consumer, their `consumerReviews` object is reset to an empty state (`{}`), clearing any previous feedback.
- **Why `player.set("consumerReviews", {});`?**  
  - This ensures that past purchase experiences do not influence new rounds unfairly.
  - If reviews were not cleared, consumers could be biased towards or against certain producers based on previous interactions.
- The consumer’s `wallet` is increased by `3 * highQualProdCost`, simulating an income or allowance increase at the beginning of the round.
- The function logs the new wallet value using `console.log("1" + wallet)`, which helps track wallet updates during debugging.
- The `player.set("wallet", wallet);` statement updates the consumer’s financial state for the new round.

---

### <span class="custom-function-heading">Condition: else (for producers)</span>

#### Explanation:
- If the player is not a consumer, they must be a producer.
- The producer’s `capital` is increased by `productPrice`, giving them additional funds to operate in the new round. This ensures that producers have increased funds to make strategic choices in the next/upcoming round.
- The update is logged to the console for debugging (`console.log(capital);`).
- The `claims` array is reset to `[0, 0]`, ensuring that the producer starts with no pending claims.
  - **What does `player.set("claims", [0, 0]);` do?**  
    - `[0,0]` represents **[successful claims, failed claims]**.
    - Resetting this ensures fairness, as producers must re-earn trust in every round.

---

### <span class="custom-function-heading">Logical Flow of the Function</span>

1. **Checks the Game Stage**  
   - The function begins by verifying that the current stage is `"ProducerChoice"`, ensuring that updates occur only when producers are making choices.

2. **Handles Producers Changing Brands**  
   - If a producer opted to change their brand, their name is reset, and their review history is cleared.

3. **Resets Consumer Attributes**  
   - If the player is a consumer, their reviews are cleared, and their wallet balance is updated.

4. **Updates Producer Attributes**  
   - If the player is a producer, their capital is increased, and their claims are reset.

By structuring the function in this way, it ensures that each round begins with updated player attributes, maintaining fairness and logical consistency in the simulation.

---