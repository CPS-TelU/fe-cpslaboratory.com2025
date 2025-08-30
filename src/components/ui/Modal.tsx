// ui/Modal.tsx
import React, { ReactNode } from 'react';

interface ModalProps {
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, title, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            &times; {/* Tanda 'x' untuk menutup */}
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;