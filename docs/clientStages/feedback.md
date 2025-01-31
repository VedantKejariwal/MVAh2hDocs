---
sidebar_label: 'FeedbackStage'
sidebar_position: 3
---

# <span class="h1style">Feedback Stage</span>
Welcome to the documentation for the Feedback Stage component! This guide will help understand the code and its features. This page is verified by: *Vedant Kejariwal*

## <span class="h2style">Functions</span>
This is the list of functions that are defined on this page.
- [handleSubmit()](#function-handlesubmit)
- [useEffect Hook](#function-useeffect)
- [ConsumerFeedback()](#function-consumerfeedback)

---

### <span class="custom-function-heading">Component: Feedback</span>

#### <span class="custom-heading">Description</span>
The `Feedback` component manages the feedback stage of the game. It gathers feedback data from consumers and producers and updates player data, including reviews and warrant status.

#### <span class="custom-heading">Key Features</span>

1. **Role-based Logic:**
   - Differentiates functionality based on whether the player is a consumer or a producer.

2. **Consumer Feedback:**
   - Allows consumers to provide reviews for products purchased during the game.

3. **Timer Integration:**
   - Alerts users when the timer is about to expire, providing a warning toast.

4. **Dynamic Player Filtering:**
   - Filters players into consumer and producer roles for targeted actions.

5. **Data Persistence:**
   - Updates player data, such as reviews and purchases, during the feedback stage.

---

### <span class="custom-function-heading">Function: handleSubmit()</span>

#### <span class="custom-heading">Description</span>
This function handles the submission of feedback data, updating each player's data with consumer reviews and producer performance during the feedback stage.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
function handleSubmit() {
    if (player.get("role") === "consumer") {
      // console.log(
      //   `Saving ${consumerReviews} to consumer ${player.get("name")}`
      // );
      // console.log("conbut sumerReviews in handleSubmit", consumerReviews);
      player.set("consumerReviews", consumerReviews);
    }
    player.stage.set("submit", true);

  }
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Consumer Reviews Update:**
   - If the player is a consumer, updates the `consumerReviews` field with the latest feedback data.

2. **Stage Submission:**
   - Marks the stage as submitted using `player.stage.set("submit", true)` to proceed to the next stage.

---

### <span class="custom-function-heading">useEffect Hook</span>

#### <span class="custom-heading">Description</span>
This hook monitors the stage timer and triggers a warning toast when there are 15 seconds left in the stage.

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

1. **Monitor Timer:**
   - Checks the remaining time in the stage using the `timer.remaining` property.

2. **Trigger Warning:**
   - Displays a warning toast when the time left is 15 seconds or less.

3. **Prevent Multiple Warnings:**
   - Uses the `toastShown` state to ensure the warning is displayed only once per stage.

---