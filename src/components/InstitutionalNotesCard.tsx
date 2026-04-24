import type { InstitutionalNotes } from '../types';

interface InstitutionalNotesCardProps {
  notes: InstitutionalNotes;
  onChange: (notes: InstitutionalNotes) => void;
}

export function InstitutionalNotesCard({ notes, onChange }: InstitutionalNotesCardProps) {
  const updateField = (field: keyof InstitutionalNotes, value: string) => {
    onChange({ ...notes, [field]: value });
  };

  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <h2 className="cp-card-title">D. Institutional Notes</h2>
      </div>
      <div>
        <div className="form-group">
          <label>Policy Reference</label>
          <input 
            type="text" 
            value={notes.policyReference || ''} 
            onChange={e => updateField('policyReference', e.target.value)} 
            placeholder="Links or references to institutional guidelines..."
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Reviewer Notes</label>
            <textarea 
              value={notes.reviewerNotes || ''} 
              onChange={e => updateField('reviewerNotes', e.target.value)} 
              placeholder="Notes for internal QA or approval bodies..."
            />
          </div>
          <div className="form-group">
            <label>General Notes</label>
            <textarea 
              value={notes.generalNotes || ''} 
              onChange={e => updateField('generalNotes', e.target.value)} 
              placeholder="Any other documentation..."
            />
          </div>
        </div>

        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--color-border-subtle)' }}>
          <h4 style={{ fontSize: '0.9rem', marginBottom: '12px', color: 'var(--color-text-secondary)' }}>Governance & Transparency (Optional)</h4>
          <div className="form-row">
            <div className="form-group">
              <label>AI Involvement</label>
              <textarea 
                style={{ height: '60px' }}
                value={notes.aiInvolvement || ''} 
                onChange={e => updateField('aiInvolvement', e.target.value)} 
                placeholder="How AI was used in this pack..."
              />
            </div>
            <div className="form-group">
              <label>Rationale</label>
              <textarea 
                style={{ height: '60px' }}
                value={notes.rationale || ''} 
                onChange={e => updateField('rationale', e.target.value)} 
                placeholder="Reasoning for evidence inclusion..."
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Risks & Concerns</label>
              <textarea 
                style={{ height: '60px' }}
                value={notes.risksConcerns || ''} 
                onChange={e => updateField('risksConcerns', e.target.value)} 
                placeholder="Potential issues or limitations..."
              />
            </div>
            <div className="form-group">
              <label>Assumptions</label>
              <textarea 
                style={{ height: '60px' }}
                value={notes.assumptions || ''} 
                onChange={e => updateField('assumptions', e.target.value)} 
                placeholder="Underlying premises or context..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
