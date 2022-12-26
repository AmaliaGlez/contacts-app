import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import { useClickOutside } from '../../hooks/useClickOutside';
import { modalStyles } from './modal.styles';

interface PortalProps {
  children: ReactNode;
  selector: string;
}

interface ModalProps {
  children: ReactNode;
  title: string;
  handleClose: () => void;
}

const ClientOnlyPortal = ({ children, selector }: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export const Modal = ({ children, title, handleClose }: ModalProps) => {
  const ref = useClickOutside(handleClose);
  const handleHeaderClick = (event: any) => event.stopPropagation();

  return (
    <>
      <ClientOnlyPortal selector={'#modal'}>
        <div ref={ref} className='backdrop'>
          <div className='modal' onClick={handleHeaderClick}>
            <div>
              <h3>{title}</h3>
              <button onClick={handleClose}>
                <MdClose fontSize={'1.2rem'} />
              </button>
            </div>
            <div className='modal-content'>{children}</div>
          </div>
        </div>
      </ClientOnlyPortal>
      <style jsx>{modalStyles}</style>
    </>
  );
};
