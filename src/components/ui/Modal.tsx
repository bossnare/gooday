type ModalProps = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalConfirm = ({ isModal, setIsModal }: ModalProps) => {
  function confirm() {
    localStorage.removeItem('history');
    setIsModal(false);
  }

  return (
    <div
      className={`${
        isModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-transform duration-50 ease-in-out fixed w-5/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-2/3 
    z-20 prose bg-white rounded-md p-4`}
    >
      <h4>Message</h4>
      <p>
        Are you sure you want to clear your search history without a trace ?
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => setIsModal(false)}
          className="px-3.5 py-2 gradient-bg active:bg-[#00D4FF]/80 text-white rounded-full"
        >
          Annuler
        </button>
        <button
          onClick={() => confirm()}
          className="px-6 py-2 border-2 border-gray-200 active:bg-gray-100 rounded-full"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export { ModalConfirm };
