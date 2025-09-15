**CLINIC OUTCOMES – PROJECT**

**Overview:**
This project is a clinical outcomes dashboard that visualizes patient blood glucose trends. It helps clinicians quickly understand how patients are managing their glucose levels and provides a summary of overall diabetes control.
The dashboard supports data views over 30, 60, or 90 days, giving healthcare providers flexibility in monitoring outcomes:
•	30 days: Short-term snapshot, useful after therapy changes or medication adjustments.
•	60 days: Mid-term view that balances daily fluctuations while showing emerging trends.
•	90 days: Aligns with the standard A1C test period, enabling direct comparison between dashboard results and lab tests.
Together, these views support immediate follow-up, medium-term monitoring, and long-term treatment planning.

**What the Graphs Explain:**

**1. Time in Range (TIR) Chart - Blood Glucose Control**
What it measures: How much of their time patients spend in each glucose state during the monitoring period.

**X-Axis (Horizontal): Glucose Ranges:**
Represents: Different blood glucose level categories
Four distinct categories:
1.	Very Low - Dangerously low glucose (<54 mg/dL)
2.	Low - Low glucose (54-69 mg/dL)
3.	In Range - Target range (70-180 mg/dL)
4.	High - Elevated glucose (>180 mg/dL)
Clinical significance: Each bar represents a different risk category for diabetes patients.

**Y-Axis (Vertical): Percentage of Time:**
Represents: The percentage of time patients spend in each glucose range
Scale: 0% to 100% (typically 0-100% with markers at 20% intervals)
**Ideal targets:**
•	>70% Time in Range (Green zone) - Well controlled
•	<4% Time Low - Minimal hypoglycemia risk
•	<25% Time High - Reduced complication risk
Our data shows: 82% in range (excellent), but 1% very low (needs attention)
________________________________________

**2. Glucose Management Indicator (GMI) - Estimated A1C**
What it measures: Estimated average glucose over 3 months (similar to A1C blood test)
Clinical significance:
•	<7.0%: Excellent diabetes control (reduced complication risk)
•	7.0-8.0%: Good control (target for many patients)
•	>8.0%: Needs improvement (increased complication risk)
Our data shows: 6.7% average (excellent), with 72% of patients <7%

**Technical Stack:**
•	Angular 16+: Framework proficiency
•	NgRx: State management skills
•	Chart.js: Data visualization capability
•	RxJS: Reactive programming patterns
•	TypeScript: Type safety and interfaces
•	HTML/CSS: UI implementation skills

**Setup project:**
1.	Node.js(v24.6.0) and npm (v11.5.1)
2.	npm install -g @angular/cli@16
3.	npm install
4.	ng serve --open

