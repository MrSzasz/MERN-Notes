const NoteDetails = ({ modalFn, note }) => {
  return (
    <>
      <div className="relative z-0 pb-4 w-full group">
        <input
          type="text"
          name="noteTitle"
          id="noteTitle"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-white focus:border-purple-800 focus:outline-none focus:ring-0 peer z-10"
          defaultValue={note?.title}
          placeholder=" "
          maxLength={128}
        />
        <label
          htmlFor="noteTitle"
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Title of the note
        </label>
      </div>
      <div className="relative z-0 w-full h-full group">
        <textarea
          name="noteContent"
          id="noteContent"
          cols={30}
          rows={10}
          defaultValue={note?.noteContent}
          className="h-full block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-white focus:border-purple-800 focus:outline-none focus:ring-0 peer z-10"
          placeholder=" "
          maxLength={128}
        />
        <label
          htmlFor="noteTitle"
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Content of the note
        </label>
      </div>
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
    </>
  );
};

export default NoteDetails;
