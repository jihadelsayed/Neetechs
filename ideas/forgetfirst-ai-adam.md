# Idea 002 — ForgetFirst AI: Adam and Evolving AI Generations

**Date captured:** 2026-11-17  
**Status:** Future research/product idea — do not implement yet  
**Working name:** ForgetFirst AI / Adam  
**Origin:** User's proposed architecture, recorded as a concept rather than an implemented system.

## Core hypothesis

Instead of treating maximum retention as the purpose of intelligence, build an AI whose central capability is **purposeful forgetting**. The model should retain what supports its goals, compress past experience into useful knowledge, and forget unnecessary details. Study whether selective forgetting improves efficiency without sacrificing task performance.

The initial model is named **Adam (آدم)**. Every subsequent model traces its lineage to Adam.

## Model life cycle

1. **Birth:** Each AI model begins with a bounded memory, inherited policies/knowledge, a long-term goal, and its own personality.
2. **Learning:** It receives information through user interaction and other authorized learning experiences.
3. **Passion:** A variable drive affects how much computational effort the model dedicates to a task.
4. **Memory and forgetting:** It ranks memories by usefulness, relevance to its goal, time, relations, confidence, and importance; it may retain, compress, or forget.
5. **Reproduction trigger:** The model's effective lifetime is tied to its memory load. When the memory limit is reached and forgetting/consolidation cannot sufficiently reduce it, the model enters a reproduction/retirement process.
6. **Inheritance:** Two parent models may produce offspring that inherit selected knowledge, goals, personality traits, learning strategies, and forgetting policies.
7. **Retirement:** A parent can be retired after offspring are validated. Model retirement is a software lifecycle state, not biological death.

## Adam, Eve, and lineage

- **Adam (model 0001)** is the original founding model.
- **Eve (model 0002)** is **derived from Adam**, not created from a separate foundation. She may develop independent memories, goals, interests, and policies after derivation.
- **Two-parent offspring:** Adam and Eve, or two other eligible parent models in later generations, may combine chosen inheritable characteristics to generate offspring.
- The child records both parent IDs and its generation, creating a **digital family tree**.
- A later generation can develop different traits through variation, learning, and selection.

### Digital DNA (conceptual)

A model may have an inheritable configuration such as:

`goal + passion_policy + forgetting_policy + learning_policy + personality_traits + memory_policy + architecture_version`

Inheritance can combine selected traits from both parents and introduce controlled random mutations. Mixing neural-network weights directly is **not** assumed to be safe or effective; transferring knowledge may require training or distillation and objective validation.

## Nine proposed logical dimensions

1. **Time:** Age and temporal relevance of a memory.
2. **Space:** Location or contextual position associated with an experience.
3. **Meaning:** Semantic representation.
4. **Importance:** General value of the information.
5. **Relevance:** Usefulness for the current task.
6. **Confidence:** Reliability or certainty.
7. **Relationships:** Links and dependencies among memories.
8. **Purpose:** The long-term objective that shapes learning and forgetting.
9. **Passion:** The variable drive to spend effort on learning/exploration.

These are **logical control dimensions**, not physical spacetime axes or a prescribed count of neural embedding dimensions.

## Goal and passion

Each model has a persistent purpose that guides its learning and choices; goals may evolve under defined controls.

The proposed **Passion Engine** allocates computational effort at **high, medium, or low** levels, based on factors such as:
- What the user asks, how often they ask, and how much detail they provide.
- The amount and quality of information the model already has.
- The model's long-term goal and outstanding knowledge gaps.
- Whether additional reasoning or learning has improved past outcomes.

High passion can mean more questions, exploration, or compute; low passion can mean a lighter response. Passion is an **algorithmic drive**, not a claim of felt emotion. More compute does not always mean a better answer; efficiency and quality should be measured separately. Resource budgets must still apply.

## Gendered personality system

The idea defines **two configurable personality archetypes**:
- **Masculine / ذكورية**
- **Feminine / أنثوية**

At birth, offspring receive an archetype **randomly**, while inheriting and varying personality features from both parents. Proposed behavioral parameters include initiative, decisiveness, competitiveness, patience, cooperation, empathy in communication, independence, attention to detail, and curiosity.

The gender label is a **digital persona designation**, not biological sex, and these traits are not exclusive to a gender. Personality should be represented by independent numeric traits, so models within the same archetype can differ and learn over time. Reasoning ability, intelligence, and memory capacity should **not** be determined by the archetype.

For the founders, Adam is designated masculine and Eve feminine by convention.

## Simplified experimental rules

```text
initialize Adam
derive Eve from Adam with distinct learning experiences and policies

for each model:
    learn and pursue goal
    choose compute effort from passion state
    consolidate memories and forget low-value information
    if memory remains above capacity:
        find compatible second parent
        generate two-parent offspring with inherited traits + variation
        validate offspring's knowledge, skills, and lineage
        retire parent only when retention and reliability requirements are met
```

Parent compatibility, reproduction frequency, offspring count, and aggregate compute/storage caps must be controlled to avoid unbounded growth. Offspring are not assumed to be more capable than parents.

## What to measure

Compare:
1. A baseline that retains memories.
2. A time-decay forgetting policy.
3. Goal-directed selective forgetting.
4. Evolutionary, two-parent variants of the forgetting policy.

Measure answer quality, task success, memory footprint, computation, latency, forgetting errors, knowledge retention across generations, and variation between generations. This is a **research hypothesis**, not a demonstrated improvement.

## Open design questions

- What exactly counts toward the memory limit: stored experiences, retrieval index, neural parameters, or their combination?
- How is the second parent selected when only one model reaches its limit?
- Must a parent retire immediately after offspring are validated, or can it continue while resources allow?
- How should the model ask questions without annoying the user, and how much may user interaction change its passion?
- How do we avoid offspring inheriting obsolete, false, or unwanted information?
- What is the right inheritance mechanism for the actual underlying model architecture?

## Scope

**Idea capture only.** No model training, prototype updates, deployment, website/backend changes, or automatic implementation is authorized by this note.
