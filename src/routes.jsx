import { createBrowserRouter } from 'react-router';
import RootLayout from './components/layout/RootLayout';
import Dashboard from './pages/Dashboard';
import AiChat from './pages/AiChat';
import ChatArena from './pages/ChatArena';
import ImageGeneration from './pages/ImageGeneration';
import VideoGeneration from './pages/VideoGeneration';
import AnalyzeDocuments from './pages/AnalyzeDocuments';
import GenerateDocuments from './pages/GenerateDocuments';
import CareerDevelopment from './pages/CareerDevelopment';
import PsychologicalCounseling from './pages/PsychologicalCounseling';
import CustomAgents from './pages/CustomAgents';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "chat", element: <AiChat /> },
      { path: "chat-arena", element: <ChatArena /> },
      { path: "image-generation", element: <ImageGeneration /> },
      { path: "video-generation", element: <VideoGeneration /> },
      { path: "analyze-documents", element: <AnalyzeDocuments /> },
      { path: "generate-documents", element: <GenerateDocuments /> },
      { path: "career-development", element: <CareerDevelopment /> },
      { path: "psychological-counseling", element: <PsychologicalCounseling /> },
      { path: "custom-agents", element: <CustomAgents /> },
      { path: "library", element: <Dashboard /> }
    ]
  }
]);
