import React from 'react';
import { useAppStore } from './services/store';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './features/dashboard/Dashboard';
import Roadmap from './features/roadmap/Roadmap';
import QuestionTypeDetail from './features/question-type/QuestionTypeDetail';
import PracticeEngine from './features/practice-engine/PracticeEngine';
import MistakeNotebook from './components/mistakes/MistakeNotebook';
import ExamEngine from './features/exam-engine/ExamEngine';

export const App: React.FC = () => {
  const { activeView } = useAppStore();

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'roadmap':
        return <Roadmap />;
      case 'question-type':
        return <QuestionTypeDetail />;
      case 'practice':
        return <PracticeEngine />;
      case 'mistakes':
        return <MistakeNotebook />;
      case 'exam':
        return <ExamEngine />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppLayout>
      {renderView()}
    </AppLayout>
  );
};

export default App;
