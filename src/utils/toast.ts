import { toast, cssTransition } from 'react-toastify';
import type { ToastContent, ToastOptions } from 'react-toastify';
// TODO: refactor toast.scss file
// import './toast.scss';

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  duration: 300,
});

/**
 * Toast가 최대 2개까지만 나올 수 있도록 설정
 */
const idStorage = {
  tId: 1,
  calculate() {
    this.tId === 1 ? (this.tId = 2) : (this.tId = 1);
    return this.print();
  },
  print() {
    return `toastId-${this.tId}`;
  },
};

const defaultToastOption: ToastOptions = {
  position: 'top-center',
  hideProgressBar: true,
  closeButton: false,
  transition: Zoom,
};

export const customToast = (content: ToastContent) => {
  toast(content, {
    ...defaultToastOption,
    className: 'DcToast',
    autoClose: 2000,
    toastId: idStorage.calculate(),
  });
};

export const errorToast = (content: ToastContent) => {
  toast.error(content, {
    ...defaultToastOption,
    className: 'DcToastError',
    autoClose: 4000,
    toastId: idStorage.calculate(),
  });
};
