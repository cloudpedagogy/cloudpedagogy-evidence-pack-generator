import { useState, useEffect } from 'react';
import './App.css';
import type { AppState } from './types';
import { DEMO_DATA } from './demoData';
import { Header } from './components/Header';
import { PackMetadataCard } from './components/PackMetadataCard';
import { SourceDataImportCard } from './components/SourceDataImportCard';
import { EvidenceSectionsCard } from './components/EvidenceSectionsCard';
import { InstitutionalNotesCard } from './components/InstitutionalNotesCard';
import { OutputCard } from './components/OutputCard';

const STORAGE_KEY = 'cloudpedagogy-evidence-pack';

const emptyState: AppState = {
  meta: { packTitle: 'Untitled Evidence Pack', purpose: '' },
  sourceData: {},
  evidenceSections: [],
  institutionalNotes: {},
  lastUpdated: new Date().toISOString()
};

function App() {
  const [appState, setAppState] = useState<AppState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return emptyState;
      }
    }
    return emptyState;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  }, [appState]);

  const loadDemo = () => {
    setAppState({
      ...DEMO_DATA,
      lastUpdated: new Date().toISOString()
    });
  };

  const resetState = () => {
    if (window.confirm('Are you sure you want to completely reset the tool? All entered data will be lost.')) {
      setAppState({ ...emptyState, lastUpdated: new Date().toISOString() });
    }
  };

  const setPartialState = (updater: Partial<AppState> | ((prev: AppState) => Partial<AppState>)) => {
    setAppState(prev => {
      const updates = typeof updater === 'function' ? updater(prev) : updater;
      return { ...prev, ...updates, lastUpdated: new Date().toISOString() };
    });
  };

  return (
    <div className="max-width-container">
      <Header 
        appState={appState} 
        onLoadDemo={loadDemo} 
        onReset={resetState} 
        onImportState={(newState) => setAppState(newState)}
      />
      
      <div className="cp-hide-print">
        <PackMetadataCard 
          meta={appState.meta} 
          onChange={(meta) => setPartialState({ meta })} 
        />
        
        <SourceDataImportCard 
          appState={appState}
          onImport={(sourceDataUpdate, newSections) => {
            setPartialState(prev => {
              // merge source data based on existing property
              const updatedSourceData = { ...prev.sourceData, ...sourceDataUpdate };
              
              // Only insert unique new sections
              const existingTitles = new Set(prev.evidenceSections.map(s => s.title));
              const uniqueNewSections = newSections.filter(s => !existingTitles.has(s.title));
              
              return {
                sourceData: updatedSourceData,
                evidenceSections: [...prev.evidenceSections, ...uniqueNewSections]
              }
            });
          }}
        />
        
        <EvidenceSectionsCard 
          sections={appState.evidenceSections}
          onChange={(evidenceSections) => setPartialState({ evidenceSections })}
        />
        
        <InstitutionalNotesCard 
          notes={appState.institutionalNotes}
          onChange={(institutionalNotes) => setPartialState({ institutionalNotes })}
        />
      </div>

      <OutputCard appState={appState} />

    </div>
  );
}

export default App;
