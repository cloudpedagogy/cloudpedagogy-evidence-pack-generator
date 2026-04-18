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

        {(institutionalNotes.policyReference || institutionalNotes.reviewerNotes || institutionalNotes.generalNotes) && (
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
              <div>
                <div className="semibold">General Notes</div>
                <div style={{ whiteSpace: 'pre-wrap' }}>{institutionalNotes.generalNotes}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
