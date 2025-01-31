---
sidebar_label: 'Empirica.onGameStart()'
sidebar_position: 2
---

# <span class="h1style">Game Callbacks</span>
Welcome to the documentation for the `onGameStart()` function! This guide will explain how the game initializes, assigns roles, and structures rounds. This page is verified by: *Vedant Kejariwal*

## <span class="h2style">Functions</span>
This function defines the **game structure**, **player attributes**, and **round stages**. It ensures that the simulation starts with the correct conditions.

---

### <span class="custom-function-heading">Function: `Empirica.onGameStart()`</span>

#### Explanation:
- This function is executed **at the start of the game**.
- It defines the **game parameters**, **round stages**, and **assigns roles to players**.
- It ensures that all players begin with the correct attributes based on whether they are **producers or consumers**.

---

### <span class="custom-function-heading">Game Parameters</span>

#### Explanation:
- The game starts by retrieving key settings from **treatment parameters**.
- These variables determine the structure of the game.

##### **Extracted Game Parameters**
- **`playerCount`** → Total number of players.
- **`warrantTreatment`** → Specifies the use of warranties in the game.
- **`producerCount`** → Number of **producers** in the game.
- **`consumerCount`** → Number of **consumers** in the game.
- **`numRounds`** → Total number of rounds in the game.

---

### <span class="custom-function-heading">Adding Rounds</span>

#### Explanation:
- The function **iterates** through the total number of rounds (`numRounds`).
- Each **round** consists of different **stages** that represent the phases of gameplay.

##### **Stages in Each Round**
1. **First Round Only**
   - **`if (i === 1)`** → The first round has two **additional** stages:
     - **`"SelectRole"`** → Players are assigned their roles.
     - **`"Tutorial"`** → Introduces game mechanics.
   
2. **Stages in Every Round**
   - **`"ProducerChoice"`** → Producers make decisions on quality and branding.
   - **`"ConsumerChoice"`** → Consumers decide which producers to purchase from.
   - **`"Feedback"`** → Consumer challenges and reviews are processed.
   - **`"Results"`** → Updates players' attributes and displays outcomes.

Each round ensures that **producers and consumers interact, trade, and provide feedback**.

---

### <span class="custom-function-heading">Assigning Roles</span>

#### Explanation:
- Players are **randomly shuffled** before roles are assigned.
- The function **determines** whether a player will be a **producer** or a **consumer**.

##### **Shuffling Players**
- **`const shuffledPlayers = shuffleArray([...game.players]);`**  
  - Ensures **random role distribution**.
  - Prevents predictable player positioning.

---

### <span class="custom-function-heading">Producer Initialization</span>

#### Explanation:
- Producers represent businesses that **sell products**.
- Each producer starts with **a unique brand, capital, and attributes**.

##### **Key Producer Attributes**
- **`player.set("role", "producer");`** → Assigns producer role.
- **`player.set("capital", initialCapital);`** → Starting funds for investments.
- **`player.set("brandName", getRandomName());`** → Assigns a random brand name.
- **`player.set("currentQuality", "");`** → Quality is **chosen later** in the round.
- **`player.set("profits", [0]);`** → Tracks profits over time.
- **`player.set("claims", [0, 0]);`** → Tracks **successful vs. failed claims**.
- **`player.set("sold", []);`** → List of consumers who purchased from them.

##### **Tracking Performance**
- **`player.set("reviews", [[0, 0]]);`** → Tracks **positive & negative feedback**.
- **`player.set("score", []);`** → Individual round scores.
- **`player.set("totalScore", [0]);`** → Cumulative game score.
- **`player.set("totalProfits", 0);`** → Total profit throughout the game.

##### **Challenge & Branding Mechanics**
- **`player.set("warrants", []);`** → Tracks **if a producer issued warranties**.
- **`player.set("challenges", []);`** → Tracks **who challenged them**.
- **`player.set("changedBrand", []);`** → Tracks if they **rebranded**.

By initializing these attributes, the function ensures that **producers have everything they need to operate in the game**.

---

### <span class="custom-function-heading">Consumer Initialization</span>

#### Explanation:
- Consumers **purchase products**, issue challenges, and earn points based on their choices.

##### **Key Consumer Attributes**
- **`player.set("role", "consumer");`** → Assigns consumer role.
- **`player.set("wallet", initialWallet);`** → Starting budget for purchases.
- **`player.set("cart", []);`** → Stores selected products each round.
- **`player.set("purchasedFrom", []);`** → Tracks producers they bought from.

##### **Challenge & Review System**
- **`player.set("consumerReviews", {});`** → Stores **feedback on producers**.
- **`player.set("currentChallenge", []);`** → List of **producers they challenge**.
- **`player.set("challenged", []);`** → List of **all past challenges**.

##### **Tracking Performance**
- **`player.set("score", []);`** → Individual round scores.
- **`player.set("totalScore", [0]);`** → Cumulative game score.
- **`player.set("roundScore", []);`** → Score for each round.

By initializing these attributes, the function ensures that **consumers have a structured way to engage with the game**.

---

### <span class="custom-function-heading">Logical Flow of the Function</span>

1. **Define Game Parameters**
   - Retrieve **player count, rounds, and game rules** from `treatment`.

2. **Create Rounds**
   - Generate **rounds** with **specific stages** for gameplay progression.

3. **Shuffle Players**
   - Randomize **player order** to ensure fair role assignment.

4. **Assign Producers**
   - **Give producers** capital, brand names, and tracking variables.

5. **Assign Consumers**
   - **Give consumers** wallets, tracking systems, and purchase abilities.
