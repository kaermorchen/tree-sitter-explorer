import CloseIcon from 'mdi-react/CloseIcon';
import { useEffect } from 'react';

interface ModalProps {
  title: string;
  children: string | JSX.Element | JSX.Element[];
  onClose: () => void;
}

function Modal({ title, children, onClose }: ModalProps) {
  useEffect(() => {
    function keyDownHandler(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  });

  return (
    <div className="relative transform overflow-hidden rounded-md bg-white text-left shadow-md transition-all w-64">
      <div className="p-4 border-b flex items-center">
        {title}

        <CloseIcon
          className="cursor-pointer ml-auto"
          onClick={onClose}
          size={20}
        />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default Modal;
