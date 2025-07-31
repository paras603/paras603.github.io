import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button'; // import the reusable Button here

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-8 text-gray-900 select-none relative">
      <Button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 text-sm px-3 py-1"
      >
        ← Back
      </Button>

      <h1 className="text-3xl font-semibold mb-6">{title}</h1>

      <div className="w-full max-w-md">{children}</div>
    </div>
  );
};

export default PageLayout;
