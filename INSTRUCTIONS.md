# Evidence & QA Pack Generator — User Instructions

---

### 1. Purpose
The Evidence & QA Pack Generator is a tool designed to bridge the gap between educational design activities and formal institutional governance, quality assurance (QA), and accreditation processes.

---

### 2. What This Tool Does
This tool helps users aggregate structured data from various design phases (such as assessment design and AI integrity mapping) into a single, cohesive evidence pack. It transforms technical design outputs into readable, printable, and governance-ready summaries suitable for review and approval.

---

### 3. Role in the Ecosystem
- **Phase:** Phase 6 — Evidence, Quality & Change
- **Role:** Aggregator and report generator for ecosystem-wide design outputs.
- **Reference:** [./PROJECT_SPEC.md](./PROJECT_SPEC.md)

---

### 4. When to Use This Tool
- When preparing a module or programme for formal quality assurance review.
- When compiling evidence for professional accreditation bodies.
- When documenting the rationale for AI involvement in assessments for institutional governance committees.
- When a consolidated view of design decisions and institutional notes is required for auditing.

---

### 5. Inputs
- **Pack Metadata:** High-level context including title, module name, programme, level, and department.
- **Source Data (JSON):** Exported files from the *Assessment Design Engine* and *AI Integrity Design Tool*.
- **Institutional Notes:** Text-based rationale, policy references, and reviewer comments.

---

### 6. How to Use (Step-by-Step)
1. **Initialize Pack:** Enter the title and context (Module, Programme, etc.) in the **Pack Metadata** section.
2. **Import Evidence:** Use the **Source Data Import** section to upload JSON exports from other CloudPedagogy tools. This will automatically populate the evidence sections.
3. **Review Sections:** Navigate to the **Evidence Sections** to toggle the inclusion of specific pieces of data and refine the generated content as needed.
4. **Add Institutional Context:** In the **Institutional Notes** section, provide high-level rationale, specify AI involvement, and list any risks or assumptions.
5. **Review Output:** Scroll down to the **Generated Evidence Pack** to see the consolidated report.
6. **Finalize:** Use the browser's print functionality (Ctrl+P or Cmd+P) to save as PDF or print a hard copy. You can also export the entire state as a JSON file for future editing.

---

### 7. Key Outputs
- **Structured Evidence Pack:** A formatted, readable summary of all imported design data and manual notes.
- **JSON Export:** A portable state file that can be re-imported later.
- **Print-Ready Documents:** Cleanly formatted reports suitable for PDF distribution.

---

### 8. How It Connects to Other Tools
- **Upstream:** Assessment Design Engine, AI Integrity Design Tool, and Curriculum design data.
- **Downstream:** Institutional QA processes, accreditation boards, and governance review committees.

---

### 9. Limitations
- **Does Not Design:** This tool does not create the curriculum or assessment designs themselves.
- **No Automated Analysis:** It does not perform automated pedagogical or governance analysis; it facilitates human review.
- **Static Aggregation:** It aggregates provided data but does not dynamically update if the upstream source data changes after import.

---

### 10. Tips
- **Keep it Updated:** Import the latest versions of your design files to ensure the evidence pack reflects the most recent decisions.
- **Be Explicit in Notes:** Use the Institutional Notes section to explain *why* certain decisions were made, especially regarding AI risks and mitigations.
- **Use the Print Preview:** The output is optimized for printing; use the print preview to ensure all necessary sections are visible.
