import NoteDetails from "../NoteDetails/NoteDetails";

const PopUp = ({ modalFn, children }) => {
  return (
    <div
      className="backdrop-blur-sm fixed inset-0 z-10 flex justify-center items-center"
      onClick={modalFn}
    >
      <div
        className="relative w-[80%] h-[90%] bg-gray-800 border-gray-700 rounded-lg border flex flex-col justify-center items-center gap-4 p-8 pt-12"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="absolute top-3 right-4" onClick={modalFn}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
