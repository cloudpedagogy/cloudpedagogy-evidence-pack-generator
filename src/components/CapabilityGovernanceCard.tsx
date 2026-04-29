import { useState } from 'react';
import type { InstitutionalNotes } from '../types';

interface CapabilityGovernanceCardProps {
  notes: InstitutionalNotes;
  onChange: (notes: InstitutionalNotes) => void;
}

export function CapabilityGovernanceCard({ notes, onChange }: CapabilityGovernanceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const updateField = (field: keyof InstitutionalNotes, value: string) => {
    onChange({ ...notes, [field]: value });
  };

  // Helper to get value from either standard or legacy field
  const getVal = (field: keyof InstitutionalNotes, legacyField?: keyof InstitutionalNotes) => {
    return notes[field] || (legacyField ? notes[legacyField] : '') || '';
  };

  return (
    <div className="cp-card" style={{ 
      borderColor: 'var(--color-border-default)', 
      backgroundColor: '#f9f9f9',
      padding: '12px 16px' 
    }}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          cursor: 'pointer' 
        }}
      >
        <h3 style={{ 
          fontSize: '0.85rem', 
          margin: 0, 
          color: 'var(--color-text-secondary)',
          fontWeight: 600
        }}>
          Capability & Governance Notes (Optional)
        </h3>
        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
          {isOpen ? '−' : '+'}
        </span>
      </div>

      {isOpen && (
        <div style={{ marginTop: '16px', borderTop: '1px solid #eee', paddingTop: '16px' }}>
          <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '16px' }}>
            Optional alignment with CloudPedagogy governance standards. These fields provide visibility and rationale for AI involvement.
          </p>
          
          <div className="form-row" style={{ gap: '12px' }}>
            <div className="form-group" style={{ marginBottom: '12px' }}>
              <label style={{ fontSize: '0.7rem', color: '#666' }}>AI Involvement</label>
              <textarea 
                style={{ height: '50px', fontSize: '0.8rem', backgroundColor: '#fff' }}
                value={notes.aiInvolvement || ''} 
                onChange={e => updateField('aiInvolvement', e.target.value)} 
                placeholder="How AI was used..."
              />
            </div>
            <div className="form-group" style={{ marginBottom: '12px' }}>
              <label style={{ fontSize: '0.7rem', color: '#666' }}>Rationale</label>
              <textarea 
                style={{ height: '50px', fontSize: '0.8rem', backgroundColor: '#fff' }}
                value={notes.rationale || ''} 
                onChange={e => updateField('rationale', e.target.value)} 
                placeholder="Why this approach was taken..."
              />
            </div>
          </div>

          <div className="form-row" style={{ gap: '12px' }}>
            <div className="form-group" style={{ marginBottom: '12px' }}>
              <label style={{ fontSize: '0.7rem', color: '#666' }}>Risks</label>
              <textarea 
                style={{ height: '50px', fontSize: '0.8rem', backgroundColor: '#fff' }}
                value={getVal('risks', 'risksConcerns')} 
                onChange={e => updateField('risks', e.target.value)} 
                placeholder="Potential risks or limitations..."
              />
            </div>
            <div className="form-group" style={{ marginBottom: '12px' }}>
              <label style={{ fontSize: '0.7rem', color: '#666' }}>Assumptions</label>
              <textarea 
                style={{ height: '50px', fontSize: '0.8rem', backgroundColor: '#fff' }}
                value={notes.assumptions || ''} 
                onChange={e => updateField('assumptions', e.target.value)} 
                placeholder="Context or premises..."
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '0' }}>
            <label style={{ fontSize: '0.7rem', color: '#666' }}>Review Notes</label>
            <textarea 
              style={{ height: '50px', fontSize: '0.8rem', backgroundColor: '#fff' }}
              value={getVal('reviewNotes', 'reviewerNotes')} 
              onChange={e => updateField('reviewNotes', e.target.value)} 
              placeholder="Notes for human review..."
            />
          </div>
          
          <div style={{ marginTop: '12px', fontSize: '0.65rem', color: '#999', fontStyle: 'italic' }}>
            Lightweight capability and governance layer
          </div>
        </div>
      )}
    </div>
  );
}
