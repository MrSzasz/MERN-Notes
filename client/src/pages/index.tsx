import AddNote from "@/components/AddNote/AddNote";
import CustomCard from "@/components/CustomCard/CustomCard";
import Navbar from "@/components/Navbar/Navbar";
import { IoMdAdd } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import PopUp from "@/components/PopUp/PopUp";
import UserTab from "@/components/UserTab/UserTab";
import toast, { Toaster } from "react-hot-toast";
import NoteDetails from "@/components/NoteDetails/NoteDetails";

export default function Home() {
  // const [notesArray, setNotesArray] = useState([]);
  const [notesArray, setNotesArray] = useState([
    {
      date: "11/22/33",
      noteContent:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, numquam. Quos eaque quas odio pariatur, cumque incidunt ex! Nemo, atque enim?",
      title: "note 1",
      id: "71d7dd22-e9f8-4c7d-b428-14067232df46",
    },
    {
      date: "55/35/51",
      noteContent:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, numquam. Quos eaque quas odio pariatur, cumque incidunt ex! Nemo, dolores nulla? Dolore esse atque enim?",
      title: "note 2",
      id: "71d7dd22-e9f8-4c7d-b428-14067232df512516",
    },
    {
      date: "1/15/15",
      noteContent:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, numquam. Quos eaque quas odio pariatur, cumque incidunt ex! Nemo, dolores nulla dolores nulla dolores nulla dolores nulla dolores nulla? Dolore esse atque enim?",
      title: "note 3",
      id: "71d7dd22-e9f8-4c7d-b428-14067151512df46",
    },
    {
      date: "22/22/22",
      noteContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum officia recusandae. Tenetur itaque sequi voluptatum molestiae. Excepturi, officia quos nostrum hic, repellendus nemo, aperiam inventore dolore maxime obcaecati consequuntur exercitationem est sed unde voluptatum neque numquam reiciendis corrupti accusantium minima ratione impedit earum cumque eos? Harum dolorum numquam repellendus!",
      title: "note 4",
      id: "71d7dd22-e9f8-4c7d-b428-12636322df46",
    },
  ]);
  const [noteForDetails, setNoteForDetails] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openUserTab, setOpenUserTab] = useState(false);
  const [parent] = useAutoAnimate();

  const handleModal = () => {
    setOpenModal((current) => !current);
  };

  const handleUserTab = () => {
    setOpenUserTab((current) => !current);
  };

  const handleDelete = () => {
    toast("Here is your toast.");
    
  };

  const handleNoteForDetails = (note) => {
    setNoteForDetails(note);
  };

  return (
    <main className="min-h-screen relative">
      <Navbar userTabFn={handleUserTab} />
      <div
        ref={parent}
        className="min-h-full max-w-screen h-fit flex justify-center items-center flex-wrap gap-4 p-4"
      >
        {notesArray.length === 0 ? (
          <h2 className="text-4xl">Click + to create a note</h2>
        ) : (
          notesArray.map((note, i) => (
            <CustomCard
              note={note}
              modalFn={handleModal}
              deleteFn={handleDelete}
              setNote={handleNoteForDetails}
            />
          ))
        )}
      </div>
      <AddNote modalFn={handleModal} setNewNote={setNoteForDetails} />
      {openUserTab && <UserTab userTabFn={handleUserTab} />}
      {openModal && (
        <PopUp modalFn={handleModal}>
          <NoteDetails note={noteForDetails} modalFn={handleModal} />
        </PopUp>
      )}
      <Toaster />
    </main>
  );
}
