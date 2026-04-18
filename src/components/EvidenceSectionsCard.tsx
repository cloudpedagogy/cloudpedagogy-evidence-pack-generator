import type { EvidenceSection } from '../types';

interface EvidenceSectionsCardProps {
  sections: EvidenceSection[];
  onChange: (sections: EvidenceSection[]) => void;
}

export function EvidenceSectionsCard({ sections, onChange }: EvidenceSectionsCardProps) {
  const updateSection = (id: string, updates: Partial<EvidenceSection>) => {
    onChange(sections.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const addManualSection = () => {
    const newSection: EvidenceSection = {
      id: Math.random().toString(36).substring(2, 9),
      title: 'New Section',
      category: 'General',
      content: '',
      sourceLabel: 'Manual',
      included: true
    };
    onChange([...sections, newSection]);
  };

  const removeSection = (id: string) => {
    onChange(sections.filter(s => s.id !== id));
  };

  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <h2 className="cp-card-title">C. Evidence Sections</h2>
        <button className="cp-button-secondary" onClick={addManualSection}>+ Add Manual Section</button>
      </div>
      <div>
        <p className="text-muted">Review, edit, and toggle generated and manual evidence sections before generating the final pack.</p>
        
        {sections.length === 0 && (
          <div className="text-muted text-center" style={{ padding: '24px 0' }}>
            No evidence sections generated yet. Import source data or add a manual section.
          </div>
        )}

        {sections.map((section) => (
          <div key={section.id} className="list-item-box" style={{ 
            opacity: section.included ? 1 : 0.6,
            borderLeft: section.included ? '4px solid var(--color-success)' : '4px solid var(--color-border-default)' 
          }}>
            <div className="flex justify-between items-center mb-sm">
              <div className="flex items-center gap-sm">
                <input 
                  type="checkbox" 
                  checked={section.included} 
                  onChange={(e) => updateSection(section.id, { included: e.target.checked })} 
                />
                <input 
                  type="text" 
                  value={section.title} 
                  onChange={(e) => updateSection(section.id, { title: e.target.value })} 
                  style={{ fontWeight: 600, border: 'none', borderBottom: '1px dashed #ccc', padding: '2px 4px', background: 'transparent' }}
                />
                {section.sourceLabel && <span className="badge">{section.sourceLabel}</span>}
              </div>
              <button className="cp-button-danger" style={{ padding: '4px 8px', fontSize: '11px' }} onClick={() => removeSection(section.id)}>Remove</button>
            </div>
            <textarea 
              value={section.content} 
              onChange={(e) => updateSection(section.id, { content: e.target.value })} 
              disabled={!section.included}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
