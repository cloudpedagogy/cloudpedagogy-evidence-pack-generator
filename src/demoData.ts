import type { AppState } from './types';

export const DEMO_DATA: AppState = {
  "meta": {
    "packTitle": "Public Health Assessment and AI Integrity Evidence Pack",
    "programmeName": "Master of Public Health",
    "moduleName": "Health Policy Analysis",
    "level": "Postgraduate",
    "department": "Public Health",
    "purpose": "Module review and internal quality assurance",
    "reviewDate": "2026-04-18"
  },
  "sourceData": {
    "assessmentDesignData": {
      "meta": {
        "programmeName": "Master of Public Health",
        "moduleName": "Health Policy Analysis",
        "level": "Postgraduate"
      },
      "learningOutcomes": [
        {
          "id": "LO1",
          "code": "LO1",
          "description": "Critically analyse contemporary public health policy issues using appropriate theoretical frameworks"
        },
        {
          "id": "LO2",
          "code": "LO2",
          "description": "Apply evidence from academic and policy sources to support policy arguments"
        },
        {
          "id": "LO3",
          "code": "LO3",
          "description": "Communicate complex policy analysis clearly in written form"
        }
      ],
      "assessments": [
        {
          "id": "A1",
          "title": "Policy Analysis Essay",
          "description": "A 3,000-word essay analysing a current public health policy issue, including evaluation of policy options and recommendations.",
          "type": "Essay",
          "weighting": 70,
          "linkedOutcomeIds": ["LO1", "LO2", "LO3"],
          "aiUsageMode": "conditional",
          "aiUsageDescription": "Limited use of AI tools is permitted for brainstorming, outlining, and improving clarity, but not for generating final arguments or full text.",
          "authenticityNotes": "Students must demonstrate independent critical analysis and clearly show their reasoning process."
        },
        {
          "id": "A2",
          "title": "Policy Brief Presentation",
          "description": "A 10-minute presentation summarising a public health policy issue and proposing evidence-based recommendations.",
          "type": "Presentation",
          "weighting": 30,
          "linkedOutcomeIds": ["LO1", "LO3"],
          "aiUsageMode": "conditional",
          "aiUsageDescription": "AI tools may be used to support preparation, but not to generate the full presentation content without critical engagement.",
          "authenticityNotes": "Students must be able to explain and defend their recommendations during Q&A."
        }
      ],
      "rationale": {
        "designRationale": "The assessment strategy is designed to develop and evaluate students’ ability to analyse public health policy issues, apply evidence, and communicate arguments effectively in both written and oral formats.",
        "authenticityConsiderations": "Authenticity is supported through tasks requiring critical analysis, synthesis of evidence, and real-time explanation of reasoning.",
        "risksOrConcerns": "Potential over-reliance on AI tools for generating arguments or written content without sufficient critical engagement."
      }
    },
    "aiIntegrityData": {
      "meta": {
        "moduleName": "Health Policy Analysis",
        "programmeName": "Master of Public Health",
        "assessmentTitle": "Policy Analysis Essay",
        "assessmentType": "Essay",
        "level": "Postgraduate"
      },
      "integrityProfile": {
        "id": "demo-policy-analysis-essay",
        "title": "Policy Analysis Essay – Public Health",
        "contextDescription": "Students are required to write a policy analysis essay examining a current public health policy issue. The task is intended to assess critical analysis, use of evidence, policy reasoning, and the student’s ability to construct a coherent argument.",
        "aiUsagePosition": "conditional",
        "acceptableUses": [
          "Brainstorming possible policy angles or questions",
          "Creating an initial essay structure or outline",
          "Improving clarity, grammar, or academic tone in student-written text",
          "Summarising policy documents or reports for initial orientation"
        ],
        "unacceptableUses": [
          "Generating the full essay or substantial sections of the final submission",
          "Producing final arguments without the student’s own critical analysis",
          "Fabricating references, data, citations, or policy examples",
          "Submitting AI-generated text as if it were fully the student’s own work"
        ],
        "conditions": [
          "Students must remain responsible for the final argument, structure, and interpretation",
          "Any AI use must comply with module and institutional guidance",
          "Students should critically evaluate any AI-generated suggestions before using them"
        ],
        "studentGuidance": "You may use generative AI tools in a limited and supportive way for this assessment, for example to help brainstorm ideas, improve the clarity of your writing, or summarise documents for initial orientation. However, the final essay must reflect your own critical analysis, argument, and interpretation.",
        "staffRationale": "This assessment is designed to evaluate students’ ability to analyse public health policy critically, use evidence appropriately, and construct an independent argument.",
        "authenticityNotes": "Authenticity is preserved when AI is used only as a support tool and not as a substitute for critical thinking, evidence selection, or policy analysis.",
        "risksOrConcerns": "Key risks include over-reliance on AI-generated arguments, shallow engagement with source material, fabricated references, and reduced visibility of the student’s own analytical thinking."
      },
      "institutionalNotes": {
        "policyReference": "Refer to local institutional guidance on acceptable use of generative AI in assessment.",
        "generalNotes": "This demo should remain editable by users after loading."
      }
    }
  },
  "evidenceSections": [
    {
      "id": "sec1",
      "title": "Module and Programme Context",
      "category": "Context",
      "content": "This evidence pack relates to the Master of Public Health module 'Health Policy Analysis' and has been prepared for internal quality assurance review.",
      "sourceLabel": "Manual / Demo",
      "included": true
    },
    {
      "id": "sec2",
      "title": "Assessment Design Summary",
      "category": "Assessment Design",
      "content": "The module uses a 3,000-word policy analysis essay (70%) and a policy brief presentation (30%) to assess critical analysis, evidence use, and communication.",
      "sourceLabel": "Assessment Design Engine",
      "included": true
    },
    {
      "id": "sec3",
      "title": "AI Integrity Summary",
      "category": "AI Integrity Guidance",
      "content": "AI use is conditional. Students may use AI in limited supportive ways such as brainstorming and editing for clarity, but may not use AI to generate full submissions or final arguments.",
      "sourceLabel": "AI Integrity Design Tool",
      "included": true
    },
    {
      "id": "sec4",
      "title": "Authenticity Considerations",
      "category": "Authenticity Considerations",
      "content": "Authenticity is supported through tasks requiring critical analysis, synthesis of evidence, and demonstration of independent reasoning.",
      "sourceLabel": "Generated from source data",
      "included": true
    },
    {
      "id": "sec5",
      "title": "Risks and Mitigations",
      "category": "Risks and Mitigations",
      "content": "Identified risks include over-reliance on AI-generated content, fabricated references, and shallow engagement with source material. Mitigations include clear student guidance and explicit expectations regarding acceptable use.",
      "sourceLabel": "Generated from source data",
      "included": true
    }
  ],
  "institutionalNotes": {
    "policyReference": "Refer to institutional guidance on generative AI in assessment and quality assurance.",
    "reviewerNotes": "Example evidence pack for demonstration and adaptation.",
    "generalNotes": "Users should be able to edit all imported and generated content."
  },
  "lastUpdated": ""
};
