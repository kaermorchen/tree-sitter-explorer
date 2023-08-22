import CloseIcon from 'mdi-react/CloseIcon';
import { useEffect, useRef } from 'react';

interface ModalProps {
  title: string;
  children: string | JSX.Element | JSX.Element[];
  onClose: () => void;
}

function Modal({ title, children, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function clickHandler(event: MouseEvent) {
      if (
        modalRef.current instanceof HTMLDivElement &&
        event.target instanceof Node &&
        !modalRef.current.contains(event.target)
      ) {
        onClose();
      }
    }

    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('click', clickHandler);
    };
  });

  return (
    <div
      ref={modalRef}
      className="relative transform overflow-hidden rounded-md bg-white text-left shadow-md transition-all w-64"
    >
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
