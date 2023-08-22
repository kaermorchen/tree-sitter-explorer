import CloseIcon from 'mdi-react/CloseIcon';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  title: string;
  children: string | JSX.Element | JSX.Element[];
  onClose: () => void;
}

const placeModalClasses = [
  'absolute',
  'h-screen',
  'w-screen',
  'z-10',
  'bg-gray-500',
  'bg-opacity-75',
  'transition-opacity',
  'flex',
  'items-center',
  'justify-center',
];

function Modal({ title, children, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalPlaceEl = document.getElementById('modal-place');

  useEffect(() => {
    if (modalPlaceEl) {
      modalPlaceEl.classList.add(...placeModalClasses);
    }

    return () => {
      if (modalPlaceEl) {
        modalPlaceEl.classList.remove(...placeModalClasses);
      }
    };
  }, [modalPlaceEl]);

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
    modalPlaceEl &&
    createPortal(
      <div
        ref={modalRef}
        className="margin-auto relative transform overflow-hidden rounded-md bg-white text-left shadow-md transition-all w-64"
        role="dialog"
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
      </div>,
      modalPlaceEl
    )
  );
}

export default Modal;
