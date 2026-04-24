# PROJECT_SPEC: cloudpedagogy-evidence-pack-generator

## 1. Repo Name
`cloudpedagogy-evidence-pack-generator`

## 2. One-Sentence Purpose
An aggregator tool that transforms structured design data from across the CloudPedagogy ecosystem into governance-ready evidence packs for quality assurance and accreditation.

## 3. Problem the App Solves
Design activities in education (like assessment planning or AI mapping) often happen in silos and are difficult to present in a format suitable for formal institutional governance. This app solves the "documentation gap" by providing a structured way to compile, refine, and present design evidence for audit and review.

## 4. Primary User / Audience
Educators, Programme/Module Leaders, Quality Assurance Officers, and Institutional Governance Committees.

## 5. Core Role in the CloudPedagogy Ecosystem
The app occupies Phase 6 (Evidence, Quality & Change). It acts as a downstream consumer of data from the *Assessment Design Engine* and *AI Integrity Design Tool*, converting their technical outputs into institutional documentation.

## 6. Main Entities / Data Structures
- **Meta**: Contextual information about the pack (Title, Module, Level, Department).
- **SourceData**: Container for imported JSON data from upstream tools.
- **EvidenceSection**: An individual piece of evidence (e.g., an assessment task or an AI risk assessment) with content and metadata.
- **InstitutionalNotes**: Governance-specific fields (Policy References, AI Involvement, Rationale, Risks/Concerns, Assumptions).
- **AppState**: The root object containing all application state for persistence and export.

## 7. Main User Workflows
1. **Contextualization**: The user defines the administrative metadata for the evidence pack.
2. **Evidence Aggregation**: The user imports external design files, which are parsed into distinct evidence sections.
3. **Section Curation**: The user reviews and selects which evidence sections to include in the final report.
4. **Governance Layering**: The user adds institutional context, AI rationale, and risk notes to finalize the pack.
5. **Reporting**: The user generates a structured output for printing or PDF export.

## 8. Current Features
- Local-first persistence using `localStorage`.
- JSON-based state import/export.
- Modular evidence section management.
- Governance-aligned institutional note fields.
- Print-optimized CSS for report generation.
- Demo data loading for testing and exploration.

## 9. Stubbed / Partial / Incomplete Features
- Not explicitly defined in current repo contents.

## 10. Import / Export and Storage Model
- **Storage**: Browser-based `localStorage` (key: `cloudpedagogy-evidence-pack`).
- **Import/Export**: Full application state can be exported as a JSON file and re-imported to resume work.

## 11. Relationship to Other CloudPedagogy Apps
This tool is the documentation hub for the ecosystem. It relies on the JSON schemas produced by the *Assessment Design Engine* and *AI Integrity Design Tool*. It provides the "final output" that is often the requirement for institutional approval processes.

## 12. Potential Overlap or Duplication Risks
There is a minor risk of overlap with the summary features of upstream tools, but this app distinguishes itself by focusing on aggregation across multiple tools and adding institutional governance context.

## 13. Distinctive Value of This App
Its distinctive value lies in its ability to synthesize technical design decisions into a governance-credible format, ensuring that innovative pedagogical designs are audit-ready and institutionally aligned.

## 14. Recommended Future Enhancements
- Direct API integration with other CloudPedagogy tools to reduce manual file importing.
- Multi-template support for different institutional report formats.
- Version tracking for evidence packs.
- Enhanced governance analytics and "readiness scores".

## 15. Anything Unclear or Inferred from Repo Contents
- **Inferred from repo contents**: The specific structure of `assessmentDesignData` and `aiIntegrityData` is handled generically in `SourceDataImportCard.tsx`, suggesting a flexible schema-agnostic approach to aggregation.
- **Assumed**: The app assumes the user has already completed design work in upstream tools.
