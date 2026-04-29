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
      </div>
    </div>
  );
}
