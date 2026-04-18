import React, { useRef } from 'react';
import type { AppState, EvidenceSection, SourceData } from '../types';

interface SourceDataImportCardProps {
  appState: AppState;
  onImport: (sourceData: Partial<SourceData>, newSections: EvidenceSection[]) => void;
}

export function SourceDataImportCard({ appState, onImport }: SourceDataImportCardProps) {
  const assessmentInputRef = useRef<HTMLInputElement>(null);
  const aiIntegrityInputRef = useRef<HTMLInputElement>(null);

  const generateId = () => Math.random().toString(36).substring(2, 9);

  const handleAssessmentImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        
        const newSections: EvidenceSection[] = [];
        
        // Generate Context Section if available
        if (json.meta && json.meta.moduleName) {
           newSections.push({
             id: generateId(),
             title: 'Module and Programme Context',
             category: 'Context',
             content: `This evidence pack relates to the ${json.meta.level || ''} module '${json.meta.moduleName}'.`,
             sourceLabel: 'Assessment Design Engine',
             included: true
           });
        }

        // Generate Assessment Design summary
        if (json.assessments && Array.isArray(json.assessments)) {
          const summaries = json.assessments.map((a: any) => `${a.title} (${a.weighting}%) - ${a.type}`).join(', ');
           newSections.push({
             id: generateId(),
             title: 'Assessment Design Summary',
             category: 'Assessment Design',
             content: `The module uses the following assessments: ${summaries}.`,
             sourceLabel: 'Assessment Design Engine',
             included: true
           });
        }

        onImport({ assessmentDesignData: json }, newSections);
      } catch (err) {
        alert("Failed to parse Assessment Design JSON.");
      }
      if (assessmentInputRef.current) assessmentInputRef.current.value = '';
    };
    reader.readAsText(file);
  };

  const handleAIIntegrityImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        
        const newSections: EvidenceSection[] = [];
        const profile = json.integrityProfile;
        
        if (profile) {
          newSections.push({
            id: generateId(),
            title: 'AI Integrity Summary',
            category: 'AI Integrity Guidance',
            content: `AI use is ${profile.aiUsagePosition || 'undefined'}. ${profile.studentGuidance || ''}`,
            sourceLabel: 'AI Integrity Design Tool',
            included: true
           });

          if (profile.authenticityNotes) {
            newSections.push({
              id: generateId(),
              title: 'Authenticity Considerations',
              category: 'Authenticity Considerations',
              content: profile.authenticityNotes,
              sourceLabel: 'AI Integrity Design Tool',
              included: true
            });
          }

          if (profile.risksOrConcerns) {
            newSections.push({
              id: generateId(),
              title: 'Risks and Mitigations',
              category: 'Risks and Mitigations',
              content: profile.risksOrConcerns,
              sourceLabel: 'AI Integrity Design Tool',
              included: true
            });
          }
        }

        onImport({ aiIntegrityData: json }, newSections);
      } catch (err) {
        alert("Failed to parse AI Integrity JSON.");
      }
      if (aiIntegrityInputRef.current) aiIntegrityInputRef.current.value = '';
    };
    reader.readAsText(file);
  };

  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <h2 className="cp-card-title">B. Source Data Import</h2>
      </div>
      <div>
        <p className="text-muted">Import structured JSON outputs from other CloudPedagogy tools to automatically populate your evidence pack sections. Source data is safely preserved.</p>
        
        <div className="list-item-box flex justify-between items-center">
          <div>
            <div className="semibold">Assessment Design Engine Data</div>
            <div className="text-small text-muted">
              {appState.sourceData.assessmentDesignData ? 'Loaded ✓' : 'Not Loaded'}
            </div>
          </div>
          <div>
            <input 
              type="file" 
              accept=".json" 
              ref={assessmentInputRef} 
              onChange={handleAssessmentImport} 
              style={{ display: 'none' }} 
            />
            <button className="cp-button-secondary" onClick={() => assessmentInputRef.current?.click()}>
              Import Assessment JSON
            </button>
          </div>
        </div>

        <div className="list-item-box flex justify-between items-center">
          <div>
            <div className="semibold">AI Integrity Design Tool Data</div>
            <div className="text-small text-muted">
              {appState.sourceData.aiIntegrityData ? 'Loaded ✓' : 'Not Loaded'}
            </div>
          </div>
          <div>
            <input 
              type="file" 
              accept=".json" 
              ref={aiIntegrityInputRef} 
              onChange={handleAIIntegrityImport} 
              style={{ display: 'none' }} 
            />
            <button className="cp-button-secondary" onClick={() => aiIntegrityInputRef.current?.click()}>
              Import AI Integrity JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
