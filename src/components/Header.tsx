import React, { useRef } from 'react';
import type { AppState } from '../types';

interface HeaderProps {
  appState: AppState;
  onLoadDemo: () => void;
  onReset: () => void;
  onImportState: (state: AppState) => void;
}

export function Header({ appState, onLoadDemo, onReset, onImportState }: HeaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const dataStr = JSON.stringify(appState, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `evidence-pack-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json && json.meta) {
          onImportState(json as AppState);
        } else {
          alert("Invalid Evidence Pack JSON format.");
        }
      } catch (err) {
        alert("Failed to parse JSON.");
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="cp-card cp-hide-print" style={{ marginTop: '24px' }}>
      <div className="flex justify-between items-center">
        <div>
          <h1 style={{ margin: 0 }}>CloudPedagogy Evidence Pack Generator</h1>
          <p className="text-muted" style={{ margin: 0, marginTop: '4px' }}>
            A local-first tool for assembling structured evidence into governance-ready packs.
            <br />
            <a href="https://www.cloudpedagogy.com/" target="_blank" rel="noopener noreferrer">
              www.cloudpedagogy.com
            </a>
          </p>
        </div>
        <div className="flex gap-sm">
          <input 
            type="file" 
            accept=".json" 
            ref={fileInputRef} 
            onChange={handleImport} 
            style={{ display: 'none' }} 
          />
          <button className="cp-button-secondary" onClick={() => fileInputRef.current?.click()}>
            Import Pack JSON
          </button>
          <button className="cp-button-secondary" onClick={handleExport}>
            Export Pack JSON
          </button>
          <button className="cp-button-secondary" onClick={onLoadDemo}>
            Load Demo Example
          </button>
          <button className="cp-button-danger" onClick={onReset}>
            Reset Tool
          </button>
        </div>
      </div>
    </div>
  );
}
