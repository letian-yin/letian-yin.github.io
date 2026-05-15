---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<style>
/* ── Research page styles ── */
.paper-block {
  margin-bottom: 1.8em;
}
.paper-title {
  font-weight: 700;
  line-height: 1.4;
}
.paper-meta {
  margin-top: 0.2em;
}
.paper-buttons {
  margin-top: 0.55em;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  line-height: 1;
}
.paper-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border: 1px solid var(--global-border-color, #ccc);
  border-radius: 4px;
  color: var(--global-text-color, #222) !important;
  text-decoration: none !important;
  font-size: 0.82em;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
  background: transparent;
  font-family: inherit;
  user-select: none;
}
.paper-btn:hover,
.paper-btn.active {
  border-color: var(--global-link-color);
  color: var(--global-link-color) !important;
}
.paper-btn svg { flex-shrink: 0; }

.paper-abstract {
  display: none;
  margin-top: 0.6em;
  padding: 0.85em 1.1em;
  background: color-mix(in srgb, var(--global-link-color) 14%, var(--global-bg-color));
  border-left: 3px solid color-mix(in srgb, var(--global-link-color) 55%, transparent);
  border-radius: 0 4px 4px 0;
  font-size: 0.95em;
  line-height: 1.6;
  text-align: justify;
}
/* Lighter tint in dark mode so the box doesn't get too saturated */
html[data-theme="dark"] .paper-abstract {
  background: color-mix(in srgb, var(--global-link-color) 6%, var(--global-bg-color));
}
.paper-abstract.show { display: block; }

/* Fallback for browsers without color-mix (very old) */
@supports not (background: color-mix(in srgb, red, blue)) {
  .paper-abstract {
    background: rgba(127,127,127,0.09);
    border-left-color: rgba(127,127,127,0.4);
  }
  html[data-theme="dark"] .paper-abstract {
    background: rgba(127,127,127,0.06);
  }
}

/* Co-author links: blend with body text by default, reveal accent on hover */
.paper-meta a {
  color: inherit !important;
  text-decoration: none !important;
  border-bottom: none !important;
  transition: color 0.2s ease;
}
.paper-meta a:hover {
  color: var(--global-link-color) !important;
}
</style>

<script>
function toggleAbstract(id, btn) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('show');
  if (btn) btn.classList.toggle('active');
}
</script>

## Working Papers

<div class="paper-block">
  <div class="paper-title">Crowded at Birth: Lasting Effects of Maternity Ward Crowding in California</div>
  <div class="paper-meta">with <a href="https://sites.google.com/view/yulixu-econ">Yuli Xu</a></div>
  <div class="paper-buttons">
    <span class="paper-btn" onclick="toggleAbstract('crowded-abstract', this)">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      Abstract
    </span>
    <a class="paper-btn" href="https://dx.doi.org/10.2139/ssrn.5036978" target="_blank" rel="noopener">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Draft
    </a>
  </div>
  <div class="paper-abstract" id="crowded-abstract">
    We study how overcrowding during a woman's first childbirth influences both clinical practices and subsequent healthcare choices, using comprehensive administrative records on all California births between 1989 and 2017. Leveraging quasi-random, within-hospital variation in daily number of patients, we find that overcrowding reduces the intensity of medical interventions—such as C-sections, epidurals, inductions, and augmentations—consistent with efforts to relieve physician workload. Despite these adjustments, we find no detectable adverse effects on immediate maternal or infant health. Looking beyond the initial birth, we show that overcrowding does not alter future fertility but significantly increases the likelihood that mothers switch hospitals for subsequent deliveries. We find no systematic patterns in hospital selection, indicating that switching is driven primarily by negative first-birth experiences.
  </div>
</div>

## Work in Progress

<div class="paper-block">
  <div class="paper-title">The Financial Impacts of Pregnancy and Childbirth</div>
  <div class="paper-meta">with <a href="https://leima-econ.com/">Lei Ma</a> and <a href="https://www.victoriawang.org/">Victoria Wang</a></div>
</div>

<div class="paper-block">
  <div class="paper-title">The Effect of Social Security's Full Retirement Age on the Economic Well-Being of Older Americans</div>
</div>

<div class="paper-block">
  <div class="paper-title">Infant Health and the Inter-generational Effects of Early Cash Transfers</div>
</div>
