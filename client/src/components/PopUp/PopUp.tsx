const PopUp = ({ modalFn }) => {
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
        <input
          type="text"
          name="noteTitle"
          id="noteTitle"
          maxLength={128}
          className="w-full pt-4 font-bold text-2xl text-white bg-transparent border-0 border-b border-b-white"
        />
        <textarea
          name="noteContent"
          id="noteContent"
          cols={30}
          rows={10}
          className="w-full mt-4 h-full text-white bg-transparent border-0 border-b border-b-white"
        ></textarea>
        <div className="flex gap-4 justify-center items-center pt-4">
          <button className="py-4 px-8 uppercase font-bold rounded-lg bg-red-600">
            Delete
          </button>
          <button
            className="py-4 px-8 uppercase font-bold rounded-lg bg-green-600"
            onClick={modalFn}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
