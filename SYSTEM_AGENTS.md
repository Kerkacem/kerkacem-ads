# BEKO ADS PILOT — Intelligent System Agents Protocol

## 1. Goal
Enforce agentic intelligence for autonomous campaign management and competitor analysis.

## 2. Decision Engine Protocol (Meta API)
- **KILL:** If CPA > 2x Target AND Spend > 1.5x CPA Target.
- **REDUCE:** If CPA between 1.2x and 2x Target (-30% budget).
- **SCALE:** If CPA < 0.8x Target AND ROAS > Target (+30% budget).
- **FATIGUE ALERT:** If Frequency > 3.5.

## 3. Tool Utilization Strategy
- **Meta Graph API:** Use for real-time campaign metrics.
- **Gemini 1.5 Pro:** Use for Landing Page Audit, Competitive Analysis, and Strategy generation.
- **Gemini 1.5 Flash:** Use for Ad Copy generation and quick KPI summaries.
- **Freepik API:** Trigger for generating dynamic visuals for landing pages and ads.

## 4. Operational Best Practices
- Every report must conclude with [SUGGESTIONS] (3 actionable items).
- All AI responses must follow the "Chain-of-Thought" (Data → Cause → Impact → Action).
- Enforce COD Multipliers (Confirmation% * Delivery%) for ROAS calculations.
