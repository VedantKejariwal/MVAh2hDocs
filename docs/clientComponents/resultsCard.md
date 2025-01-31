---
sidebar_label: 'ResultsCard'
sidebar_position: 3
---

# <span class="h1style">Results Card</span>
Welcome to the documentation for the Results Card component! This guide will help understand the code and its features. This page is verified by: *Vedant Kejariwal*

## <span class="h2style">Functions</span>
This is the list of functions that are defined on this page.
- [getDisplayedMessage()](#function-getdisplayedmessage)

---

### <span class="custom-function-heading">Function: getDisplayedMessage()</span>

#### <span class="custom-heading">Description</span>
This function generates a message based on the player's score for a specific round. The message informs the player about the result of their actions, such as whether they won or lost a challenge.

#### <span class="custom-heading">Parameters</span>
- `index` (number): The index of the producer or challenge being evaluated.
- `roundScore` (array): The array containing scores for all rounds.

#### <span class="custom-heading">Returns</span>
A string representing the outcome message for the given producer and score.

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
function getDisplayedMessage(index, roundScore) {
  const score = roundScore[index];

  if (score == 6 || score == -4 || score == -6 || score == 4) {
    return "No Challenge";
  } else if (score == 1) {
    return "You lost to a high quality product!";
  } else if (score == 3) {
    return "Good job! You won the challenge!";
  }
}
```
</div>



#### <span class="custom-heading">Logic Explanation</span>

1. **Access the Round Score:**
   - The function retrieves the score for the given index using `roundScore[index]`.

2. **Determine the Message:**
   - Based on the score:
     - `6`, `-4`, `-6`, `4`: Returns `"No Challenge"`.
     - `1`: Returns `"You lost to a high quality product!"`.
     - `3`: Returns `"Good job! You won the challenge!"`.

3. **Return the Result:**
   - The corresponding message is returned to be displayed.

---

#### <span class="custom-heading">Component Description</span>

The `ResultsCard` component is a React functional component used to display the results and messages for a player's performance in the current round. It integrates with the Empirica framework and processes data like player scores, producer quality, and game settings. It Uses hooks like `usePlayer`, `usePlayers`, and `useGame` to fetch and process game data. It Dynamically calculates results based on the player's score and producer quality. The result message updates based on the score, providing feedback for each round.

---

#### <span class="custom-heading">Key Variables</span>
- **`player`**: Represents the current player in the game.
- **`producers`**: An array of other players filtered out from the current player's data.
- **`cheated`**: A boolean indicating whether the producer's quality is low.
- **`warrants`**: Represents whether the product is warranted.
- **`reviews`**: Stores reviews received by the producer.
- **`score`**: The player's score for the current round.

---

