<h2 style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
  <span>Overview</span>
  <span id="launch-countdown" style="text-align: right; font-size: 0.9rem; line-height: 1.3;">
    <span style="color: #666; font-size: 0.85rem;">⏳ Time left until challenge launch</span><br>
    <span id="timer" style="font-weight: 600; color: #2a5bd7;">Loading...</span>
  </span>
</h2>

In this competition, you’ll develop machine learning models to simultaneously perform two tasks: **(a)** predict the immune state (e.g. disease, healthy) of individuals based on so-called adaptive immune repertoires (sets of protein sequences), and **(b)** identify immune state-associated receptor sequences (those that explain immune state in the first task). The goal is to expedite ML-based solutions for immunodiagnostics and therapeutics discovery.

![](https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F14003908%2Ff8d529ad950ffd04929db117896db2e3%2Foverview_figure_kaggle_wide.png?generation=1753695746756992&alt=media)

---

## Timeline

- **November 05, 2025** - Start Date.
- **November 19, 2025** - Entry Deadline. You must accept the competition rules before this date in order to compete.
- **November 19, 2025** - Team Merger Deadline. This is the last day participants may join or merge teams.
- **December 17, 2025** - Final Submission Deadline.


All deadlines are at 11:59 PM UTC on the corresponding day unless otherwise noted. The competition organizers reserve the right to update the contest timeline if they deem it necessary.

---

## How to Participate

The competition is open to everyone, and will be hosted on the popular **Kaggle** platform. All you need to do is create a Kaggle account, accept the competition rules, and start coding! The competition will be live on November 01 at the following URL: [https://www.kaggle.com/competitions/adaptive-immune-profiling-challenge-2025](https://www.kaggle.com/competitions/adaptive-immune-profiling-challenge-2025).

**Quick Links**

- [Prizes](prizes.md)
- [Further details](further_details.md)

---

## Prizes

### Monetary rewards

- **1st Place** - $ 5,000
- **2nd Place** - $ 3,000
- **3rd Place** - $ 2,000

#### Eligibility

To win the prize money, a prerequisite is that the participants make their **code open-source**.

#### Sponsorship

Competition prizes are kindly sponsored by The Research Council of Norway.

![](https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F14003908%2Ff9cd864bbd6877f0585d8ca0aefc4a2c%2FNFR-logo-eng-rgb.svg?generation=1753363349749194&alt=media)

---

### Scientific manuscript authorship

Top 10 performing participants on the final Leaderboard rankings will be invited to contribute their model descriptions, related discussions, and code to a scientific paper summarizing the competition's scientific outcome. 

---

## Further details

### Description of problem

Imagine your body's immune system as a vast, personal army, constantly on guard against invaders like viruses and bacteria. Each soldier in this army is an "immune receptor," a tiny protein designed to recognize and fight off threats. What is truly incredible is the sheer variety of these soldiers: you have billions of unique immune receptors, each one a potential weapon against a new disease!

When a new enemy (what researchers call an "antigen," like a specific virus variant) attacks, only a tiny handful of these billions of immune receptors are the perfect match to bind to it and neutralize the threat. It is like finding a needle in a haystack, but your body does it all the time.

Now, here is the exciting challenge: What if we could peek into this personal army of immune receptors from many different people? We will have collections of their unique immune receptors (called "repertoires"), and we will also know if those individuals have a certain immune state (e.g. diseased or healthy).

The **big questions** for this competition:

- Can we predict a person's disease just by looking at their immune receptor "fingerprint"? Without knowing which receptors fight which diseases, can your machine learning models learn to identify patterns in these immune receptor collections that tell us if someone is sick or healthy?
- Can we identify the "contributing" immune receptors? If our models can predict disease, can they also tell us which specific immune receptors are most strongly linked to a particular disease? This would be like finding the star soldiers in the immune army!

Solving these problems is a huge step forward for medicine. It could lead to new ways to diagnose diseases earlier and even develop targeted treatments based on our own immune system's unique capabilities. 

---
### Evaluation

There will be a total of eight training datasets and ten test datasets included in this competition. For each `repertoire_id` across all test datasets, the participants has to return a probability for the repertoire being label-positive. In addition, a ranked list of the top 50,000 unique rows (including junction_aa, v_call, and j_call) that best contribute to the optimal classification for each training dataset has to be returned, regardless of the data encoding used. Note that these label-associated sequences have to be sorted based on some form of importance scores from most important to less important; we may use only top-n sequences from the ordered list of 50k sequences for evaluation. These will be used to compute the performance metrics [**area under the ROC curve**](http://en.wikipedia.org/wiki/Receiver_operating_characteristic) and [**Jaccard similarity**](https://en.wikipedia.org/wiki/Jaccard_index), respectively, for each of the datasets. A **weighted average** of both measures across all the included datasets will be used as the basis for ranking on the leaderboard for the competition. 

![](https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F14003908%2Fe90dfb300794e8270759b3736310a748%2Fevaluation_illustration_for_kaggle_page.png?generation=1753343578933157&alt=media)

---

### Additional resources

Link to come: A pre-registered protocol describing all the details of the competition including extensive background information, dataset descriptions, evaluation process, and pilot data providing reference benchmarks

**What's the state-of-the-art in mining Adaptive Immune Repertoires?**

- [A summary from domain experts](https://www.sciencedirect.com/science/article/pii/S2452310020300524)

- [A perspective from domain experts](https://www.sciencedirect.com/science/article/pii/S2405471224003429)

**Examples of state-of-the-art methods**

- [Modern Hopfield Networks and Attention for Immune Repertoire Classification](https://doi.org/10.1101/2020.04.12.038158)

- [Immunosequencing of the T-Cell Receptor Repertoire Reveals Signatures Specific for Identification and Characterization of Early Lyme Disease](https://www.medrxiv.org/content/10.1101/2021.07.30.21261353v2.full)

- [Disease diagnostics using machine learning of B cell and T cell receptor sequences](https://pmc.ncbi.nlm.nih.gov/articles/PMC12061481/)

- [A platform for ML on adaptive immune repertoires with a wide collection of encodings and ML methods](https://pmc.ncbi.nlm.nih.gov/articles/PMC10312379/)

---

### Acknowledgements

Adaptive Biotechnologies has generously provided ~ 500 unpublished TCRβ repertoires from a cohort of donors with known status with respect to HSV-2 infection.


![](https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F14003908%2F9f42047718b1d3cb8e7f9ceae0c23369%2Fadaptive_logo_for_kaggle.png?generation=1753363734230191&alt=media)

Parse Biosciences has generously provided unpublished experimental antigen-specific TCR sequences for use in synthetic datasets. TCR Sequencing of 1 Million Antigen-Reactive Human T Cells in a Single Experiment, https://www.parsebiosciences.com/datasets/tcr-sequencing-of-1-million-antigen-reactive-human-t-cells-in-a-single-experiment/; Parse Biosciences, Seattle, USA, Accessed 13 March 2025.



![](https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F14003908%2F1de21aef70c06fce1410b029c3522c20%2FParse_Logo_rgb.png?generation=1753363655433325&alt=media)

---

### Citation

AIRR-ML-2025 Organizers. AIRR-ML-2025: Adaptive Immune Profiling Challenge. https://www.kaggle.com/competitions/adaptive-immune-profiling-challenge-2025, 2025. Kaggle.
