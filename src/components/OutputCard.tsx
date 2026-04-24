import type { AppState } from '../types';

interface OutputCardProps {
  appState: AppState;
}

export function OutputCard({ appState }: OutputCardProps) {
  const { meta, evidenceSections, institutionalNotes } = appState;
  
  const includedSections = evidenceSections.filter(s => s.included);

  const handleCopy = () => {
    const textSections = [
      `Evidence Pack: ${meta.packTitle || 'Untitled'}`,
      `Purpose: ${meta.purpose || 'N/A'}`,
      `Programme: ${meta.programmeName || 'N/A'}`,
      `Module: ${meta.moduleName || 'N/A'}`,
      `Level: ${meta.level || 'N/A'}`,
      `Department: ${meta.department || 'N/A'}`,
      `Review Date: ${meta.reviewDate || 'N/A'}`,
      `\n--- Evidence Sections ---`
    ];

    includedSections.forEach(s => {
      textSections.push(`\n[${s.title}]`);
      textSections.push(s.content);
    });

    textSections.push(`\n--- Institutional Notes ---`);
    if (institutionalNotes.policyReference) textSections.push(`Policy Reference: ${institutionalNotes.policyReference}`);
    if (institutionalNotes.reviewerNotes) textSections.push(`Reviewer Notes:\n${institutionalNotes.reviewerNotes}`);
    if (institutionalNotes.generalNotes) textSections.push(`General Notes:\n${institutionalNotes.generalNotes}`);
    if (institutionalNotes.aiInvolvement) textSections.push(`AI Involvement:\n${institutionalNotes.aiInvolvement}`);
    if (institutionalNotes.rationale) textSections.push(`Rationale:\n${institutionalNotes.rationale}`);
    if (institutionalNotes.risksConcerns) textSections.push(`Risks & Concerns:\n${institutionalNotes.risksConcerns}`);
    if (institutionalNotes.assumptions) textSections.push(`Assumptions:\n${institutionalNotes.assumptions}`);

    navigator.clipboard.writeText(textSections.join('\n'));
    alert('Evidence Pack copied to clipboard.');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cp-card">
      <div className="cp-card-header cp-hide-print">
        <h2 className="cp-card-title">E. Evidence Pack Output</h2>
        <div className="flex gap-sm">
          <button className="cp-button-secondary" onClick={handleCopy}>Copy Summary</button>
          <button className="cp-button-primary" onClick={handlePrint}>Print Pack</button>
        </div>
      </div>
      
      {/* Structural output rendering */}
      <div className="output-content">
        <div style={{ borderBottom: '2px solid #000', paddingBottom: '16px', marginBottom: '24px' }}>
          <h1 style={{ marginBottom: '8px' }}>{meta.packTitle || 'Untitled Evidence Pack'}</h1>
          <div className="flex" style={{ flexWrap: 'wrap', gap: '24px', opacity: 0.8 }}>
            {meta.programmeName && <div><strong>Programme:</strong> {meta.programmeName}</div>}
            {meta.moduleName && <div><strong>Module:</strong> {meta.moduleName}</div>}
            {meta.level && <div><strong>Level:</strong> {meta.level}</div>}
            {meta.department && <div><strong>Department:</strong> {meta.department}</div>}
            {meta.purpose && <div><strong>Purpose:</strong> {meta.purpose}</div>}
            {meta.reviewDate && <div><strong>Review Date:</strong> {meta.reviewDate}</div>}
          </div>
        </div>

        {includedSections.length > 0 ? (
          includedSections.map(section => (
            <div key={section.id} style={{ marginBottom: '24px' }}>
              <h3 style={{ borderBottom: '1px solid var(--color-border-default)', paddingBottom: '4px', marginBottom: '8px' }}>
                {section.title}
              </h3>
              <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
                {section.content}
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted italic">No evidence sections included.</p>
        )}

        {(institutionalNotes.policyReference || institutionalNotes.reviewerNotes || institutionalNotes.generalNotes || 
          institutionalNotes.aiInvolvement || institutionalNotes.rationale || institutionalNotes.risksConcerns || institutionalNotes.assumptions) && (
          <div style={{ marginTop: '32px', padding: '16px', backgroundColor: '#F9FAFB', border: '1px solid var(--color-border-default)' }}>
            <h3 style={{ marginTop: 0 }}>Institutional & Reviewer Notes</h3>
            {institutionalNotes.policyReference && (
              <div style={{ marginBottom: '12px' }}>
                <div className="semibold">Policy Reference</div>
                <div>{institutionalNotes.policyReference}</div>
              </div>
            )}
            {institutionalNotes.reviewerNotes && (
              <div style={{ marginBottom: '12px' }}>
                <div className="semibold">Reviewer Notes</div>
                <div style={{ whiteSpace: 'pre-wrap' }}>{institutionalNotes.reviewerNotes}</div>
              </div>
            )}
            {institutionalNotes.generalNotes && (
              <div style={{ marginBottom: '12px' }}>
                <div className="semibold">General Notes</div>
                <div style={{ whiteSpace: 'pre-wrap' }}>{institutionalNotes.generalNotes}</div>
              </div>
            )}
            
            {/* Governance Fields */}
            {institutionalNotes.aiInvolvement && (
              <div style={{ marginBottom: '12px', padding: '12px', backgroundColor: '#fff', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div className="semibold" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>AI Involvement</div>
                <div style={{ whiteSpace: 'pre-wrap' }}>{institutionalNotes.aiInvolvement}</div>
              </div>
            )}
            {institutionalNotes.rationale && (
              <div style={{ marginBottom: '12px', padding: '12px', backgroundColor: '#fff', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div className="semibold" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>Rationale</div>
                <div style={{ whiteSpace: 'pre-wrap' }}>{institutionalNotes.rationale}</div>
              </div>
            )}
            {institutionalNotes.risksConcerns && (
              <div style={{ marginBottom: '12px', padding: '12px', backgroundColor: '#fff', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div className="semibold" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>Risks & Concerns</div>
                <div style={{ whiteSpace: 'pre-wrap' }}>{institutionalNotes.risksConcerns}</div>
              </div>
            )}
            {institutionalNotes.assumptions && (
              <div style={{ padding: '12px', backgroundColor: '#fff', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div className="semibold" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>Assumptions</div>
                <div style={{ whiteSpace: 'pre-wrap' }}>{institutionalNotes.assumptions}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
