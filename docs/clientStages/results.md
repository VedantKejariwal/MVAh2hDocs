---
sidebar_label: 'Results Component'
sidebar_position: 5
---

# <span class="h1style">Results</span>
Welcome to the documentation for the Results stage! This guide will help understand the code and its features. This page is verified by: *Vedant Kejariwal*

## <span class="h2style">Functions</span>
This is the list of functions that are defined on this page.
- [handleSubmit()](#function-handlesubmit)
- [switchBrand()](#function-switchbrand)
- [keepBrand()](#function-keepbrand)
- [useEffect Hook](#function-useeffect)

---

### <span class="custom-function-heading">Component: Results</span>

#### <span class="custom-heading">Description</span>
The `Results` component represents the results stage in the game. It manages player feedback, brand switching decisions, and timer-based warnings for user actions.

#### <span class="custom-heading">Key Features</span>

1. **Timer Integration:**
   - Notifies players when only 15 seconds remain in the stage using toast notifications.

2. **Brand Switching:**
   - Allows players to switch brands, reset reputation, or keep their current brand.

3. **Results Display:**
   - Includes child components like `<ResultsCard />` to display detailed feedback for producers and consumers.

4. **Data Persistence:**
   - Updates game state with player decisions such as brand changes and stage submissions.

#### <span class="custom-heading">Key Variables</span>
- **`player`**: Represents the current player.
- **`consumers`**: Array of all players who are not the current player.
- **`cheated`**: Boolean indicating whether the player's current quality is "low."
- **`warrants`**: Array tracking the player's warranty status.
- **`reviews`**: Reviews received by the producer.
- **`timer`**: Tracks the remaining time for the stage.
- **`toastShown`**: State to track whether the warning toast has already been displayed.
- **`brandStatus`**: State representing whether the player has decided to switch brands or not.

---

### <span class="custom-function-heading">Function: handleSubmit()</span>

#### <span class="custom-heading">Description</span>
Handles the submission of the player's decisions at the end of the results stage.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
const handleSubmit = () => {
    player.set("boughtStock", false);
    player.stage.set("submit", true);
  };
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Reset Stock Purchase:**
   - Sets the player's `boughtStock` attribute to `false`.

2. **Submit Stage:**
   - Marks the stage as submitted using `player.stage.set("submit", true)`.

---

### <span class="custom-function-heading">Function: switchBrand()</span>

#### <span class="custom-heading">Description</span>
Allows the player to switch their brand, resetting their reputation.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
const switchBrand = () => {
      setBrandStatus(true);
      let brandArray = player.get("changedBrand");
      brandArray.pop();
      brandArray.push(true);
      player.set("changedBrand", brandArray);
      console.log('before toast');
      toast.success("You changed brands! Your reputation will be reset.")
    };
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Update Brand Status:**
   - Sets the `brandStatus` state to `true`.

2. **Modify Brand Array:**
   - Updates the player's `changedBrand` array to reflect the brand change.

3. **Display Feedback:**
   - Shows a toast message to confirm the brand switch.

---

### <span class="custom-function-heading">Function: keepBrand()</span>

#### <span class="custom-heading">Description</span>
Allows the player to retain their current brand and reputation.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
const keepBrand = () => {
      setBrandStatus(false);
      let brandArray = player.get("changedBrand");
      brandArray.pop();
      brandArray.push(false);
      player.set("changedBrand", brandArray);
      toast.success("You will keep your current brand and reputation.");
    };
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Update Brand Status:**
   - Sets the `brandStatus` state to `false`.

2. **Modify Brand Array:**
   - Updates the player's `changedBrand` array to reflect no change in brand.

3. **Display Feedback:**
   - Shows a toast message to confirm the decision to keep the current brand.

---

### <span class="custom-function-heading">useEffect Hook</span>

#### <span class="custom-heading">Description</span>
Monitors the remaining time in the stage and triggers a warning toast when 15 seconds remain.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

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

1. **Monitor Timer:**
   - Checks the remaining time in the stage using the `timer.remaining` property.

2. **Trigger Warning:**
   - If 15 seconds or less remain and a warning toast hasn’t been shown, displays a warning using `toast.warning`.

3. **Prevent Duplicate Warnings:**
   - Updates `toastShown` to `true` to avoid multiple warnings.

---