import CloseIcon from 'mdi-react/CloseIcon';

interface ModalProps {
  title: string;
  children: string | JSX.Element | JSX.Element[];
  onClose: () => void;
}

function Modal({ title, children, onClose }: ModalProps) {
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
