---
sidebar_label: 'ConsumerChoice'
sidebar_position: 2
---

# <span class="h1style">Consumer Choice</span>
Welcome to the documentation for the Consumer Choice component! This guide will help understand the code and its features. This page is verified by: *Vedant Kejariwal*

## <span class="h2style">Functions</span>
This is the list of functions that are defined on this page.
- [Purchase()](#function-purchase)
- [useEffect Hook](#function-useeffect)

---

### <span class="custom-function-heading">Component: ConsumerChoice</span>

#### <span class="custom-heading">Description</span>
The `ConsumerChoice` component represents the consumer choice stage in the game. It manages player actions, displays product options, and provides visual and interactive elements for the consumer to make decisions.

#### <span class="custom-heading">Key Features</span>

1. **Player Role Management:**
   - Automatically submits decisions for players with the "producer" role.

2. **Product Display:**
   - Includes child components like `<Profile />` and `<ProductCard />` to render product and player profiles.

3. **Stage Timer Integration:**
   - Alerts the player with a warning toast when the timer is about to expire.

4. **Dynamic Producer List:**
   - Filters players to identify producers and manages them as a distinct list (`producers` and `producersArray`).

#### <span class="custom-heading">Key Variables</span>
- **`player`**: Represents the current player.
- **`producers`**: Array of players with the producer role.
- **`timer`**: Manages the stage timer and its state.
- **`toastShown`**: Tracks whether a toast has already been shown to avoid duplicate warnings.

---

### <span class="custom-function-heading">Function: Purchase()</span>

#### <span class="custom-heading">Description</span>
This function handles the player's decision submission during the consumer choice stage. It marks the stage as submitted for the current player.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
function Purchase() {
    // Basic handle submit function that just submits the stage.
    player.stage.set("submit", true);
  }
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Submit the Stage:**
   - Sets the stage status to submitted by calling `player.stage.set("submit", true)`.

---

### <span class="custom-function-heading">useEffect Hook</span>

#### <span class="custom-heading">Description</span>
This hook monitors the remaining time in the current stage and triggers a warning toast when there are 15 seconds left.

#### <span class="custom-heading">Parameters</span>
None (depends on `timer` and `toastShown`).

#### <span class="custom-heading">Returns</span>
None (executes side effects).

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
useEffect(() => {
    if (timer?.remaining || timer?.remaining === 0) {
      const remainingSeconds = Math.round(timer.remaining / 1000); 

      if (remainingSeconds <= 15 && !toastShown) {
        toast.warning("Hurry up! Only 15 seconds left!"); 
        setToastShown(true); 
      }
    }
  }, [timer, toastShown]);
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Monitor Remaining Time:**
   - Checks the remaining time in the stage using the `timer.remaining` property.

2. **Trigger Warning:**
   - If 15 seconds or less remain and a toast hasn't been shown, it displays a warning using the `toast.warning` function.

3. **Update State:**
   - Sets `toastShown` to true to prevent multiple warnings.

---