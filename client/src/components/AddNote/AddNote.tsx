import { IoMdAdd } from "react-icons/io";

const AddNote = ({ modalFn, setNewNote }) => {
  return (
    <button
      onClick={() => {
        modalFn();
        setNewNote();
      }}
      className="fixed bottom-3 right-3 w-12 h-12 text-4xl rounded-full border-2 border-white p-2 flex justify-center items-center "
    >
      <IoMdAdd />
    </button>
  );
};

export default AddNote;
