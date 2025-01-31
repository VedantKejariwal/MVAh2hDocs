---
sidebar_label: 'ProducerChoice'
sidebar_position: 4
---

# <span class="h1style">Producer Choice</span>
Welcome to the documentation for the Producer Choice stage! This guide will help understand the code and its features. This page is verified by: *Vedant Kejariwal*

## <span class="h2style">Functions</span>
This is the list of functions that are defined on this page.
- [addItem()](#function-additem)
- [chooseLow()](#function-chooselow)
- [chooseHigh()](#function-choosehigh)
- [selectWarrant()](#function-selectwarrant)
- [deselectWarrant()](#function-deselectwarrant)
- [clearButton()](#function-clearbutton)
- [handleSubmit()](#function-handlesubmit)

---

### <span class="custom-function-heading">Component: ProducerChoice</span>

#### <span class="custom-heading">Description</span>
The `ProducerChoice` component manages the producer's decision-making stage in the game. It allows producers to choose product quality, manage warranties, and update game state accordingly.

#### <span class="custom-heading">Key Features</span>

1. **Product Quality Selection:**
   - Producers can choose between "low" or "high" quality products.

2. **Warranty Management:**
   - Producers can opt to warrant their product's quality and incur additional costs.

3. **Capital Management:**
   - Ensures that producers cannot produce products or warranties without sufficient capital.

4. **Feedback and UI Integration:**
   - Provides toast notifications for user actions and errors.

5. **Dynamic Updates:**
   - Updates the producer's data, including product quality, warranty status, and capital.

---

### <span class="custom-function-heading">Function: addItem()</span>

#### <span class="custom-heading">Description</span>
Adds the selected product quality to the producer's product history and updates the game state.

#### <span class="custom-heading">Parameters</span>
- `newItem` (string): The quality of the product ("low" or "high").

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
/**
  This function adds in the current round's produced item's quality into an array of strings.
  @returns {[string]} The list of producer's product qualities with the appended string.
  @example
  addItem("low") -> ["low"];
  // Returns the list of the producer's product qualities with the appended product.
  */
  const addItem = (newItem) => {
    setItems((items) => [...items, newItem]);
    player.set("productQuality", [...items, newItem]);
  };
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Add to State:**
   - Updates the `items` state to include the new product quality.

2. **Persist Data:**
   - Updates the producer's product quality in the game state.

---

### <span class="custom-function-heading">Function: chooseLow()</span>

#### <span class="custom-heading">Description</span>
Selects "low" as the product quality and updates the game state.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
const chooseLow = () => {
    if (currentQuality !== "low") {
      toast.info("You chose to produce a low quality product!");
    }
    setCurrentQuality("low");
    setClearChoice(false);
  };
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Update Product Quality:**
   - Sets `currentQuality` to "low".

2. **Clear Previous Choices:**
   - Resets the `clearChoice` state to false.

---

### <span class="custom-function-heading">Function: chooseHigh()</span>

#### <span class="custom-heading">Description</span>
Selects "high" as the product quality and updates the game state.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
const chooseHigh = () => {
    if (currentQuality !== "high") {
      toast.info("You chose to produce a high quality product!");
    }
    setCurrentQuality("high");
    setClearChoice(false);
  };
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Update Product Quality:**
   - Sets `currentQuality` to "high".

2. **Clear Previous Choices:**
   - Resets the `clearChoice` state to false.

---

### <span class="custom-function-heading">Function: selectWarrant()</span>

#### <span class="custom-heading">Description</span>
Enables the warranty for the selected product.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
const selectWarrant = () => {
    if (!warrantStatus) {
      toast.info(
        "You chose to warrant the claim of your high product quality!"
      );
    }
    setWarrantStatus(true);
    setClickCounter(clickCounter + 1);
  };
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Enable Warranty:**
   - Sets `warrantStatus` to true.

2. **Track Changes:**
   - Increments `clickCounter` to track user interactions.

---

### <span class="custom-function-heading">Function: deselectWarrant()</span>

#### <span class="custom-heading">Description</span>
Disables the warranty for the selected product.

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
const deselectWarrant = () => {
    if (warrantStatus) {
      toast.info(
        "You chose to not warrant the claim of your high product quality!"
      );
    }
    setWarrantStatus(false);
    setClickCounter(clickCounter + 1);
  };
```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Disable Warranty:**
   - Sets `warrantStatus` to false.

2. **Track Changes:**
   - Increments `clickCounter` to track user interactions.

---

### <span class="custom-function-heading">Function: clearButton()</span>

#### <span class="custom-heading">Description</span>
Clears all selections made by the producer and allows the producer
to go to the next stage without producing any products in the current stage

#### <span class="custom-heading">Parameters</span>
None

#### <span class="custom-heading">Returns</span>
None

#### <span class="custom-heading">Code</span>

<div class="custom-code-block">

```javascript
const clearButton = () => {
    /*
    Clear Button to clear all the seletions that the producer made and allow the producer
    to go to the next stage without producing any products in the current stage
    */
    toast.info(
      "Warning: This yields 0 points!"
    )
    setClearChoice(true);
    setCurrentQuality("");
    setWarrantStatus(false);
  }

```
</div>

#### <span class="custom-heading">Logic Explanation</span>

1. **Reset Choices:**
   - Sets `currentQuality` to an empty string and `warrantStatus` to false.

2. **Enable Clear Choice:**
   - Sets `clearChoice` to true.

---

### <span class="custom-function-heading">Function: handleSubmit()</span>

#### <span class="custom-heading">Description</span>
Handles the submission of the producer's choices, updating relevant game data.

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

1. **Validate Capital:**
   - Ensures the producer has sufficient capital for the selected product and warranty.

2. **Calculate Costs:**
   - Determines production cost based on product quality and warranty status.

3. **Update Capital:**
   - Deducts the production cost from the producer's capital.

4. **Persist Data:**
   - Updates the producer's product quality and warranty status in the game state.

5. **Submit Stage:**
   - Marks the stage as submitted using `player.stage.set("submit", true)`.

:::tip[Supplementary]

If the clearChoice variable is true then the producer is prompted on the screen to select a product quality.

<div class="custom-code-block">

```javascript
if (currentQuality === "" && clearChoice === false) {
      toast.error("Please select a product quality!");
      player.stage.set("submit", false);
      return;
    }
```
</div>

:::

---