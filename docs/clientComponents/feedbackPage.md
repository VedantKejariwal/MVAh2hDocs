---
sidebar_label: 'FeedbackPage'
sidebar_position: 1
---

# <span class="h1style">Feedback Page</span>
Welcome to the documentation for the Feedback Page! This guide will help understand the code and its features. This page is verified by: *Vedant Kejariwal*

## <span class="h2style">Functions</span>
This is the list of functions that are defined on this page.
- [positive()](#function-positive)
- [negative()](#function-negative)
- [UpdateWarrant()](#function-updatewarrant)

---

### <span class="custom-function-heading">Function: positive()</span>

#### <span class="custom-heading">Description</span>
This function sets a positive review for the producer by updating the state to indicate a positive rating and modifying the consumer's reviews for the producer.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
function positive() {
    setRatingStatus(1); // Updates the rating state to positive
    consumerReviews[producerName] = 1; // Sets the producer's review to positive in the consumer's reviews
}
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. Update Rating Status:
   - Sets the `ratingStatus` state to `1`, indicating a positive review.

2. Modify Consumer Reviews:
   - Updates the `consumerReviews` object to reflect the positive review for the producer.

---

### <span class="custom-function-heading">Function: negative()</span>

#### <span class="custom-heading">Description</span>
This function sets a negative review for the producer by updating the state to indicate a negative rating and modifying the consumer's reviews for the producer.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">


```javascript
function negative() {
    setRatingStatus(-1); // Updates the rating state to negative
    consumerReviews[producerName] = -1; // Sets the producer's review to negative in the consumer's reviews
}
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. Update Rating Status:
   - Sets the `ratingStatus` state to `-1`, indicating a negative review.

2. Modify Consumer Reviews:
   - Updates the `consumerReviews` object to reflect the negative review for the producer.

---

### <span class="custom-function-heading">Function: UpdateWarrant()</span>

#### <span class="custom-heading">Description</span>
This function handles adding or removing a producer from the current challenge list. It ensures that a producer can only be challenged once and can toggle between being challenged and not being challenged.

#### <span class="custom-heading">Parameters</span>
None (it operates on global variables like `currentChallenge` and `producer`).

#### <span class="custom-heading">Returns</span>
None (updates the `currentChallenge` array directly).

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
function UpdateWarrant() {
    if (currentChallenge.indexOf(producer.name) === -1) {
        currentChallenge.push(producer.name); // Add the producer to the list
        player.currentChallenge = currentChallenge; // Save changes
    } else {
        currentChallenge = currentChallenge.filter((p) => p !== producer.name); // Remove producer
        player.set("currentChallenge", currentChallenge); // Save changes
    }
}
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. Check if the producer is already in the challenge list:

- The function uses `currentChallenge.indexOf(producer.name)` to determine whether the producer is already challenged.
- If the producer is not found (`-1`), they are added to the `currentChallenge` array.
- If the producer is found (`!== -1`), they are removed from the `currentChallenge` array.

2. Add a producer to the challenge list:
- The function uses `currentChallenge.push(producer.name)` to add the producer’s name to the array.

3. Remove a producer from the challenge list:
- The function uses `currentChallenge.filter((p) => p !== producer.name)` to create a new array without the producer’s name and update `currentChallenge`.

4. Update the player's current challenge list:
- The updated list is assigned back to `player.set("currentChallenge", currentChallenge)` to save the changes.

---
