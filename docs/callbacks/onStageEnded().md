---
sidebar_label: 'Empirica.onStageEnded()'
sidebar_position: 3
---

# <span class="h1style">Game Callbacks - Stage End</span>
Welcome to the documentation for the `onStageEnded()` function! This guide will help understand the code and its features. This page is verified by: *Vedant Kejariwal*

## <span class="h2style">Functions</span>
This is the list of sections that are defined in this function:
- **Condition: `if (stage.get("name") === "SelectRole")`**
- **Condition: `if (stage.get("name") === "ProducerChoice")`**
- **Condition: `if (stage.get("name") === "ConsumerChoice")`**
- **Condition: `if (stage.get("name") === "Results")`**
- **Condition: `if (stage.get("name") === "Feedback")`**

---

### <span class="custom-function-heading">Condition: `if (stage.get("name") === "SelectRole")`</span>

#### Explanation:
- This condition checks if the game has reached the `SelectRole` stage.
- At this stage, each producer is assigned a unique brand name.
- The function `getRandomName()` is used to generate a new brand identity, ensuring brand differentiation among players.

---

### <span class="custom-function-heading">Condition: `if (stage.get("name") === "ProducerChoice")`</span>

#### Explanation:
- This condition ensures that necessary updates occur when the game enters the `ProducerChoice` stage.
- The `ProducerChoice` stage is where producers make strategic decisions about product quality, branding, and pricing.
- Resetting and updating values at this stage ensures a fair restart for all players.

**`if (player.get("role") === "producer")`**

#### Explanation:
- This block checks if the player is a producer.
- The producer’s `changedBrand` flag is updated to `false` at the beginning of this stage.
- This ensures that the producer’s decision to change their brand in a previous round does not persist into future rounds.

**`if (player.get("role") === "consumer")`**

#### Explanation:
- This block checks if the player is a consumer.
- The consumer’s `consumerReviews` object is reset to `{}`, ensuring previous feedback does not influence future rounds.
- The consumer’s wallet is increased by `3 * highQualProdCost` to simulate income for the next round.
- The `wallet` update is crucial as it allows consumers to participate in the upcoming product selection.

---

### <span class="custom-function-heading">Condition: `if (stage.get("name") === "ConsumerChoice")`</span>

#### Explanation:
- This condition ensures that updates are made when the `ConsumerChoice` stage is reached.
- Consumers make purchasing decisions in this stage, selecting products from available producers.
- At this stage, the game needs to track which consumers have purchased from which producers.

**`if (player.get("role") === "producer")`**

#### Explanation:
- This block checks if the player is a producer.
- The function identifies which consumers have purchased from the producer by checking `consumer.cart`.
- The list of consumers who bought from the producer is stored in `sold`.

**`if (player.get("role") === "consumer")`**

#### Explanation:
- This block checks if the player is a consumer.
- The function updates `purchasedFrom`, which stores the list of producers each consumer has bought from.

---

### <span class="custom-function-heading">Condition: `if (stage.get("name") === "Results")`</span>

#### Explanation:
- This condition executes when the game reaches the `Results` stage.
- The `Results` stage processes the final calculations for each round and resets necessary attributes.

**`if (player.get("changedBrand").slice(-1)[0] === true)`**

#### Explanation:
- This block checks if the producer decided to change their brand at the end of the round.
- If `changedBrand` is `true`, the producer is assigned a new brand name using `getRandomName()`.
- The `reviews` array is reset with `[0,0]`, ensuring the producer starts with a fresh reputation.

**`if (player.get("role") === "consumer")`**

#### Explanation:
- This block resets the consumer’s `consumerReviews` object.
- The consumer’s `wallet` is increased, ensuring they have sufficient funds for the next round.

**`else (for producers)`**

#### Explanation:
- This block updates producer finances.
- The producer’s `capital` is increased, ensuring they have resources for the next round.
- The `claims` array is reset to `[0, 0]`, ensuring fairness by clearing previous claim records.

---

### <span class="custom-function-heading">Condition: `if (stage.get("name") === "Feedback")`</span>

#### Explanation:
- This condition executes when the game reaches the **Feedback** stage.
- The **Feedback** stage processes consumer challenges, producer adjustments, and score updates.
- At this point, the game determines which producers were challenged, which claims were successful, and how players' reputations and scores should be updated.
- This is a critical part of the game, as it **resolves interactions between consumers and producers** by verifying product quality and ensuring fair market mechanisms.

---

#### **Fetching Consumers**  
**`const consumers = players.filter((p) => p.get("role") === "consumer");`**  

- The function first retrieves all players with the **consumer** role.
- This is necessary because **consumers are the ones who issue challenges**, and their actions must be processed at this stage.
- By filtering players based on role, the function ensures that only consumers' challenges are considered when evaluating producers' performance.

---

#### **Processing Producer Challenges**  
**`if (player.get("role") === "producer")`**  

#### Explanation:
- This block ensures that updates for **producers** occur correctly.
- A **challenge tracking array** (`challengeOnRound`) is initialized to store the names of consumers who challenged a given producer.
- The function loops over **all consumers** to determine who issued a challenge against the producer.

##### **Identifying Challengers**  
**`if (currentChallenge.length === 0)`**  

- Each consumer's `currentChallenge` array is checked to see if it contains the producer’s name.
- If a consumer has **not** issued a challenge, `"No Challenge"` is recorded.
- This means that the consumer **accepted** the producer’s product without questioning its quality.

**`else if (currentChallenge.indexOf(player.get("name")) !== -1)`**  

- If a consumer **has** issued a challenge, their name is added to the `challengeOnRound` list.
- This ensures that each producer knows **which consumers have disputed their product claims**.
- After looping through all consumers, `player.get("challenges")` is updated with the new list of challenges.

##### **Updating Producer Reviews**  
**`let reviews = player.get("reviews"); reviews.push(most_recent_review);`**  

- The producer's `reviews` array is updated by adding a duplicate of the most recent review entry.
- This ensures that **only new feedback impacts the producer’s reputation**, rather than overwriting past reviews.
- Reviews are **persistent**, meaning that each round accumulates new consumer feedback.

---

#### **Evaluating Challenge Outcomes**  

##### **If the product had no warranties or was not sold**  
**`if ((warrants === null || warrants.slice(-1)[0] === false) && player.get("sold").slice(-1)[0].length > 0)`**  

- If the producer **did not issue a warranty** and their product **was sold**, then the outcome is based on **consumer feedback**.
- The consumer’s reviews are checked to determine whether the producer receives a **positive or negative** rating.
- **Why does this check matter?**
  - If a product **was not warranted**, a **negative review** from a consumer holds more weight.
  - Producers that consistently **fail to provide warranties** are more susceptible to negative ratings.

##### **If the product was sold, but there were no challenges**  
**`if (player.get("sold").slice(-1)[0].indexOf(cons.get("name")) === -1)`**  

- If a consumer bought the product but **did not challenge it**, the producer **automatically gains a positive review**.
- The `challengesLost` array is updated with `"N/A"`, meaning the producer **did not lose a challenge**.
- **Why is this important?**
  - If a producer sells a product and **no consumer disputes it**, it suggests that the product met expectations.
  - This helps **reinforce market credibility** for producers.

##### **If the product was sold and challenged**  
**`if (player.get("challenges").slice(-1)[0].includes(cons.get("name")) )`**  

- If a consumer **challenged** the producer, the function determines whether the challenge was **successful or unsuccessful** based on product quality.
- The producer’s financials and reputation are updated accordingly.

###### **If the producer’s product was high quality**  
**`if (player.get("productQuality").slice(-1)[0] === "high")`**  

- The producer **wins** the challenge.
- Their **capital is increased** by the **warrant cost refund**.
- Their `challengesLost` array records `"Challenge Won"`.
- Their **positive review count** increases.
- They gain a **score boost** due to **providing high-quality products**.
- **Why does capital increase?**
  - Since the product **was high quality**, the challenge was unjustified.
  - The producer **recovers** the cost of the warranty, reinforcing **trust in self-certification**.

###### **If the producer’s product was low quality**  
**`else if (player.get("productQuality").slice(-1)[0] === "low")`**  

- The producer **loses** the challenge.
- The **consumer is refunded** their challenge cost.
- The producer’s **capital decreases** by the **challenge reward**.
- Their **negative review count** increases.
- Their `challengesLost` array records `"Challenge Lost"`.
- They **lose score points** due to **false advertising**.
- **Why does the producer lose money?**
  - Since they **misled consumers**, they **forfeit** money to compensate for their deception.
  - This discourages producers from **selling low-quality products under false claims**.

##### **If a product was warranted but not challenged**  
**`if (prod.get("warrants").slice(-1)[0])`**  

- If the producer **issued a warranty** and **was not challenged**, they gain **a small positive reputation boost**.
- **Why does this happen?**
  - Offering a warranty builds consumer trust.
  - Even if no one **needed to challenge the product**, the act of warranting **signals reliability**.

---

#### **Processing Consumer Score Updates**  
**`if (player.get("role") === "consumer")`**  

#### Explanation:
- This block processes **consumer-side updates**.
- The consumer’s `cart` is **reset** to an empty array to prepare for the next round.
- The function identifies **which producers the consumer purchased from** and updates the `purchasedFrom` array.

##### **Updating Consumer Scores**  
**`const playersPurchased = purchasedFrom.map((name) => players.find((p) => p.get("name") === name));`**  

- The function loops over **all producers the consumer purchased from**.
- Each producer's **challenge records** are checked to determine **how the consumer should be scored**.

###### **If the consumer purchased a low-quality product but did not challenge it**  
**`if (!(roundChallenges.includes(player.get("name"))))`**  

- Their score **decreases**.
- This reflects **failing to detect misinformation** in the marketplace.

###### **If the consumer purchased a low-quality product and challenged it**  
**`else if (roundChallenges.includes(player.get("name")))`**  

- Their score **increases**.
- This reflects **actively identifying misinformation** and holding producers accountable.

###### **If the consumer purchased a high-quality product**  
**`if (!roundChallenges.includes(player.get("name")))`**  

- Their score **remains neutral or increases slightly** depending on whether they challenged the producer.

##### **Finalizing Consumer Score Updates**  
**`player.set("totalScore", totalArr);`**  

- The consumer’s total score is updated by summing all **individual round scores**.
- This cumulative total is stored in `totalScore` for long-term tracking.

---

### Logical Flow

1. **Identify Consumers**  
   - Consumers are identified because they **issue challenges** and must be processed first.

2. **Process Producer Challenges**  
   - Identify which **producers were challenged**.
   - Update **producer reviews** and **track challenge outcomes**.

3. **Evaluate Challenge Outcomes**  
   - Determine **whether producers won or lost challenges**.
   - Update producer **capital, reputation, and score**.

4. **Update Consumer Scores**  
   - Check **which producers consumers purchased from**.
   - Evaluate **whether consumers correctly identified misinformation**.
   - Update **consumer scores accordingly**.
