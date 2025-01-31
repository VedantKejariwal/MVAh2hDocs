---
sidebar_label: 'Callbacks Component'
sidebar_position: 1
---

# <span class="h1style">Callbacks</span>
Welcome to the documentation for the Callbacks module! This guide will help you understand the core functions and logic behind **game initialization, player assignments, stage transitions, and score calculations**. This page is verified by: *Vedant Kejariwal*

## <span class="h2style">Overview</span>
The `callbacks.js` file is the **core logic handler** for initializing and managing game states in the **Empirica framework**. It defines:
- **Player attributes** for both **producers** and **consumers**.
- **Game rules** that dictate the **economy and player interactions**.
- **Stage progression** that structures each round.
- **Scorekeeping mechanisms** for tracking performance.

It utilizes Empirica's **`ClassicListenersCollector`** to manage game lifecycle events such as:
- **Game Start**
- **Round Transitions**
- **Stage Completions**

---

## <span class="h2style">Variables</span>

### <span class="custom-heading">Explanation</span>

1. **Imported Constants and Modules**:
   - The game **imports multiple constants** from `constants.js`, which store **predefined values** such as:
     - **`productPrice`**
     - **`warrantCost`**
     - **`challengeCost`**
     - **Scoring parameters**
   - Hooks from **`@empirica/core`** allow interaction with **player data** and **game states**.

2. **Player Variable Assignments**:
   - The game initializes **player attributes** using `player.set()`, defining their:
     - **Role** → (`"producer"` or `"consumer"`)
     - **Resources** → (`wallet`, `capital`)
     - **Tracking Metrics** → (`score`, `reviews`, `claims`, etc.)
   - Many variables are stored as **arrays**, allowing the game to **track historical data** across multiple rounds.

---

## <span class="h2style">Functions</span>
This is the list of functions that are defined in this file:

- [Empirica.onGameStart()](./onGameStart().md)
- [Empirica.onRoundStart()](./onRoundStart().md)
- [Empirica.onStageEnded()](./onStageEnded().md)

Click on any of these functions to view **detailed documentation** on their role in game execution.

---

## <span class="h2style">Logical Flow</span>

1. **Game Initialization (`onGameStart`)**
   - Defines **game parameters**.
   - **Assigns players** as **producers or consumers**.
   - Sets **initial attributes** for each player.

2. **Round Start (`onRoundStart`)**
   - **Resets player variables** for the new round.
   - Updates **financial resources, reviews, and claims**.
   - Ensures producers and consumers **begin fresh**.

3. **Stage Completion (`onStageEnded`)**
   - Executes **core game logic** at the **end of each stage**.
   - Processes **transactions, challenges, reviews, and scoring**.
   - Updates **player history and market conditions**.
