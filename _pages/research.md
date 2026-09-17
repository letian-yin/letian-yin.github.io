---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<script>
/* Shows/hides a collapsible panel; marks the button that controls it as active
   and keeps its aria-expanded state in sync. Use only block comments in here:
   the page is compressed to one line, so a line comment would swallow the rest
   of the script. */
function togglePanel(id, btn) {
  var el = document.getElementById(id);
  if (!el) return;
  var open = el.classList.toggle('show');
  if (btn) {
    btn.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
}
</script>

## Job Market Paper

<div class="paper-block">
  <div class="paper-title">Does Cash Buy Credit? Evidence from the Timing of Child-Related Tax Benefits</div>
  <div class="paper-buttons">
    <button type="button" class="toggle-btn" aria-expanded="false" aria-controls="jmp-abstract" onclick="togglePanel('jmp-abstract', this)">Abstract</button>
    <button type="button" class="toggle-btn" aria-expanded="false" aria-controls="jmp-presentations" onclick="togglePanel('jmp-presentations', this)">Presentations</button>
    <span style="align-self: center;">(draft coming soon!)</span>
  </div>
  <div class="paper-abstract" id="jmp-abstract">
    Many families are financially fragile after the birth of a first child, but whether cash transfers can have lasting effects on their financial well-being is unclear. I link California birth records to a panel of first-time parents' credit reports and exploit a discontinuity in child-related tax benefits that shifts their first receipt by about one year across otherwise similar families. Regression discontinuity estimates show that among financially vulnerable mothers, earlier receipt relaxes borrowing constraints and produces persistent gains: in the third year after the birth, debt in collections is 8% lower, credit limits are 4% higher, and credit card balances are 5% higher. I also find suggestive evidence that mortgage holding rises after the initial credit improvements and that the credit expansion extends to the family as a whole. Financially non-vulnerable mothers show no comparable response, suggesting that the timing of transfers has durable impacts for those who face binding liquidity constraints.
  </div>
  <div class="paper-presentations" id="jmp-presentations">
    <div>2026 All-California Labor Economics Conference (poster), <em>(scheduled)</em> 2026 APPAM Annual Conference, 2026 NTA Annual Conference</div>
  </div>
</div>

## Working Papers

<div class="paper-block">
  <div class="paper-title">Crowded at Birth: Lasting Effects of Maternity Ward Crowding in California</div>
  <div class="paper-meta">with <a href="https://sites.google.com/view/yulixu-econ">Yuli Xu</a></div>
  <div class="paper-meta"><em>Revise &amp; Resubmit</em>, <strong>Management Science</strong></div>
  <div class="paper-buttons">
    <a class="bookpage-btn" href="https://dx.doi.org/10.2139/ssrn.5036978" target="_blank" rel="noopener">Draft</a>
    <button type="button" class="toggle-btn" aria-expanded="false" aria-controls="crowded-abstract" onclick="togglePanel('crowded-abstract', this)">Abstract</button>
    <button type="button" class="toggle-btn" aria-expanded="false" aria-controls="crowded-presentations" onclick="togglePanel('crowded-presentations', this)">Presentations</button>
  </div>
  <div class="paper-abstract" id="crowded-abstract">
    We study how overcrowding during a woman's first childbirth influences both clinical practices and subsequent healthcare choices, using comprehensive administrative records on all California births between 1989 and 2017. Leveraging quasi-random, within-hospital variation in daily number of patients, we find that overcrowding reduces the intensity of medical interventions—such as C-sections, epidurals, inductions, and augmentations—consistent with efforts to relieve physician workload. Despite these adjustments, we find no detectable adverse effects on immediate maternal or infant health. Looking beyond the initial birth, we show that overcrowding does not alter future fertility but significantly increases the likelihood that mothers switch hospitals for subsequent deliveries. We find no systematic patterns in hospital selection, indicating that switching is driven primarily by negative first-birth experiences.
  </div>
  <div class="paper-presentations" id="crowded-presentations">
    <div>2025 ASHEcon Annual Conference, 2025 All-California Labor Economics Conference (poster), 2025 SEA Annual Meeting</div>
    <div><em>By coauthor:</em> 2025 WEAI Annual Conference</div>
  </div>
</div>

<div class="paper-block">
  <div class="paper-title">The Financial Impacts of Pregnancy and Childbirth</div>
  <div class="paper-meta">with <a href="https://leima-econ.com/">Lei Ma</a> and <a href="https://www.victoriawang.org/">Victoria Wang</a></div>
  <div class="paper-buttons">
    <button type="button" class="toggle-btn" aria-expanded="false" aria-controls="MWY-abstract" onclick="togglePanel('MWY-abstract', this)">Abstract</button>
    <button type="button" class="toggle-btn" aria-expanded="false" aria-controls="MWY-presentations" onclick="togglePanel('MWY-presentations', this)">Presentations</button>
    <span style="align-self: center;">(draft available upon request)</span>
  </div>
  <div class="paper-abstract" id="MWY-abstract">
    Pregnancy and childbirth mark a major transition for households, but evidence is scarce on their financial costs, families' use of credit markets, and how the burden is split between parents. We build a novel dataset linking parents in California birth records to their quarterly credit reports, and use a staggered difference-in-differences design to trace their financial trajectories around a first birth. We document substantial balance sheet restructuring: mothers see a sharp decline in credit card balances after conception that persists into the postpartum period, and a rise in mortgage holdings during pregnancy that then plateaus. Indicators of financial distress rise after birth, plausibly reflecting new consumption commitments that households cannot easily scale back. Fathers' trajectories track mothers', in contrast to the gendered "child penalty" in earnings. Privately insured mothers drive the deterioration in financial well-being, while Medicaid mothers are less adversely affected, consistent with expanded safety net eligibility buffering the shock.
  </div>
  <div class="paper-presentations" id="MWY-presentations">
    <div>2026 ASHEcon Annual Conference (poster), 2026 WEAI Annual Conference</div>
  </div>
</div>

## Work in Progress

<div class="paper-block">
  <div class="paper-title">Retirement Age Thresholds and the Economic Well-Being of Older Americans</div>
</div>

<div class="paper-block">
  <div class="paper-title">The Intergenerational Effects of Childhood Cash Transfers</div>
  <div class="paper-buttons">
    <button type="button" class="toggle-btn" aria-expanded="false" aria-controls="intergen-presentations" onclick="togglePanel('intergen-presentations', this)">Presentations</button>
  </div>
  <div class="paper-presentations" id="intergen-presentations">
    <div>2025 SEA Annual Meeting</div>
  </div>
</div>
