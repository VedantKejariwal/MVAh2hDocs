---
sidebar_label: 'Client Stage Component'
sidebar_position: 1
---

# <span class="h1style">Stage Component</span>
This document explains the `Stage` component, its logic, functionality, and its role within the application. This component manages the rendering of different stages in the game based on the current state. This page is verified by: *Vedant Kejariwal*

---

### <span class="h2style">Overview</span>

The `Stage` component is a dynamic React component responsible for rendering specific stages of the game. The application uses Empirica's `usePlayer`, `usePlayers`, `useRound`, and `useStage` hooks to manage and interact with game data.

---

### <span class="h2style">Component Features</span>

1. **Dynamic Stage Rendering:**
   - Based on the current stage name retrieved using `stage.get("name")`, the component dynamically renders different stages such as `SelectRole`, `ConsumerChoice`, `ProducerChoice`, `Feedback`, and `Results`.

2. **Waiting State:**
   - If the player has already submitted their data for the stage (`player.stage.get("submit")`), the component shows a waiting screen until all players have submitted.

3. **Timer Integration:**
   - Displays a countdown timer for stages where a timer is applicable.

4. **Conditional Content:**
   - Differentiates content shown to `consumer` and `producer` roles using `player.get("role")`.

---

### <span class="h2style">Logic Explanation</span>

#### <span class="custom-heading">1. Player Submission Check</span>

The component begins by checking whether the current player has submitted their actions for the stage. If they have:
- A waiting screen is displayed, instructing the player to wait for others.
- The `PayoffMatrix` component is rendered based on the player's role.

#### <span class="custom-heading">2. Stage Rendering Logic</span>

If the player has not yet submitted their data, the component renders a stage based on the value of `stage.get("name")`:
- **SelectRole**: Renders the role selection screen.
- **Tutorial**: Displays the tutorial.
- **ConsumerChoice**: Allows consumers to make decisions.
- **ProducerChoice**: Allows producers to create their products.
- **Feedback**: Displays the feedback phase.
- **Results**: Shows the round results.
- A default loading screen is rendered for unrecognized stages.

---

### <span class="h2style">Key Imported Components</span>

#### <span class="custom-heading">1. PayoffMatrix</span>
- Displays the payoff matrix for consumers and producers based on their roles and actions.

#### <span class="custom-heading">2. Timer</span>
- Displays a countdown timer for time-limited stages.

#### <span class="custom-heading">3. Stage-Specific Components</span>
- **SelectRole**: Enables role selection.
- **Tutorial**: Guides players through the game.
- **ConsumerChoice**: Allows consumers to make decisions.
- **ProducerChoice**: Allows producers to create products.
- **Feedback**: Collects feedback.
- **Results**: Displays the results of the round.

---

### <span class="h2style">Logical Flow</span>

1. **Fetch Player and Stage Information:**
   - The component retrieves the current player, players list, round, and stage data.

2. **Handle Waiting State:**
   - If the player has submitted their data, a waiting state is displayed with role-specific information.

3. **Render Appropriate Stage:**
   - If the player has not submitted their data then based on the stage name, the corresponding stage component is rendered.

4. **Dynamic Role-Based Rendering:**
   - Adjusts displayed content based on the player's role (`consumer` or `producer`).
   - If the player is a consumer then a PayoffMatrix component tailored for the consumer is rendered. Additional consumer-specific UI or instructions are displayed.
   
   - If the player is a producer then a different PayoffMatrix component for the producer is shown. Producer-specific instructions or options are displayed.

---

### <span class="h2style">Conclusion</span>
The `Stage` component is essential for dynamically rendering the game's stages. It uses Empirica hooks to interact with the game state, ensures a seamless experience for players, and adapts to role-specific content dynamically. This modular approach makes it easy to extend and maintain.

:::tip[Supplementary]
`player.stage.set("submit", true)` is a mechanism to:

- Signal task completion for the player in the current stage.
- Enable synchronization of game flow between players.
- Ensure state persistence across the front end and back end.
:::