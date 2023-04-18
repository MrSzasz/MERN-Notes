import AddNote from "@/components/AddNote/AddNote";
import CustomCard from "@/components/CustomCard/CustomCard";
import Navbar from "@/components/Navbar/Navbar";
import { IoMdAdd } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

export default function Home() {
  // const [notesArray, setNotesArray] = useState([]);
  const [notesArray, setNotesArray] = useState([
    {
      date: "11/22/33",
      noteContent:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, numquam. Quos eaque quas odio pariatur, cumque incidunt ex! Nemo, atque enim?",
      title: "note 1",
    },
    {
      date: "55/35/51",
      noteContent:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, numquam. Quos eaque quas odio pariatur, cumque incidunt ex! Nemo, dolores nulla? Dolore esse atque enim?",
      title: "note 2",
    },
    {
      date: "1/15/15",
      noteContent:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, numquam. Quos eaque quas odio pariatur, cumque incidunt ex! Nemo, dolores nulla dolores nulla dolores nulla dolores nulla dolores nulla? Dolore esse atque enim?",
      title: "note 3",
    },
  ]);
  const [parent] = useAutoAnimate(/* optional config */);

  return (
    <main>
      <Navbar />
      <div
        ref={parent}
        className="min-h-screen min-w-screen flex justify-center items-center flex-wrap gap-4 p-4"
      >
        {notesArray.length === 0 ? (
          <h2 className="text-4xl">Click + to create a note</h2>
        ) : (
          notesArray.map((note, i) => (
            <CustomCard
              title={note.title}
              noteContent={note.noteContent}
              date={note.date}
            />
          ))
        )}
      </div>
      <AddNote />
    </main>
  );
}
