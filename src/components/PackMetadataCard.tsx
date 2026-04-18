import type { Meta } from '../types';

interface PackMetadataCardProps {
  meta: Meta;
  onChange: (meta: Meta) => void;
}

export function PackMetadataCard({ meta, onChange }: PackMetadataCardProps) {
  const updateField = (field: keyof Meta, value: string) => {
    onChange({ ...meta, [field]: value });
  };

  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <h2 className="cp-card-title">A. Pack Metadata</h2>
      </div>
      <div>
        <div className="form-group">
          <label>Pack Title</label>
          <input 
            type="text" 
            value={meta.packTitle || ''} 
            onChange={e => updateField('packTitle', e.target.value)} 
            placeholder="e.g. Module Review Evidence Pack"
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Programme Name</label>
            <input 
              type="text" 
              value={meta.programmeName || ''} 
              onChange={e => updateField('programmeName', e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Module Name</label>
            <input 
              type="text" 
              value={meta.moduleName || ''} 
              onChange={e => updateField('moduleName', e.target.value)} 
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Level</label>
            <input 
              type="text" 
              value={meta.level || ''} 
              onChange={e => updateField('level', e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input 
              type="text" 
              value={meta.department || ''} 
              onChange={e => updateField('department', e.target.value)} 
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Purpose of Pack</label>
            <input 
              type="text" 
              value={meta.purpose || ''} 
              onChange={e => updateField('purpose', e.target.value)} 
              placeholder="e.g. Internal quality assurance"
            />
          </div>
          <div className="form-group">
            <label>Review Date</label>
            <input 
              type="date" 
              className="cp-input"
              style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-sm)', fontFamily: 'inherit' }}
              value={meta.reviewDate || ''} 
              onChange={e => updateField('reviewDate', e.target.value)} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
