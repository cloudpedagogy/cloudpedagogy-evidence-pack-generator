export interface Meta {
  packTitle: string;
  moduleName?: string;
  programmeName?: string;
  level?: string;
  department?: string;
  purpose: string;
  reviewDate?: string;
}

export interface SourceData {
  assessmentDesignData?: any;
  aiIntegrityData?: any;
  additionalSources?: any[];
}

export interface EvidenceSection {
  id: string;
  title: string;
  category: string;
  content: string;
  sourceLabel?: string;
  included: boolean;
}

export interface InstitutionalNotes {
  policyReference?: string;
  reviewerNotes?: string;
  generalNotes?: string;
}

export interface AppState {
  meta: Meta;
  sourceData: SourceData;
  evidenceSections: EvidenceSection[];
  institutionalNotes: InstitutionalNotes;
  lastUpdated: string;
}
