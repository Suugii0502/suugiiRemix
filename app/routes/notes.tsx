// import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PrismaClient } from '@prisma/client'
import { redirect } from '@remix-run/node';

import NewNote from '~/components/NewNote';
import NoteList from '~/components/NoteList';
// import { getStoredNotes, storeNotes } from '~/data/notes';


const prisma = new PrismaClient()



export default function NotesPage() {

  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  const notes = await prisma.notes.findMany();
  return notes;
}

export async function action({ request } : { request : requestType }) {
  const formData = await request.formData();
  console.log(formData)
  const noteData = Object.fromEntries(formData);
  const title = noteData.title
  const content = noteData.content
  const newNote = await prisma.notes.create({
    data: { title, content },
  });
  console.log(newNote)
  // 
  // await storeNotes(updatedNotes);
  return redirect('/notes');
}


// function storeNotes({ updatedNotes } : { updatedNotes : dataType } ) {
//   prisma.notes.create(updatedNotes)
// }


type requestType = {
    formData : MyFunctionType
}

type MyFunctionType = () => dataType[];

export type dataType = {
    created_at: string,
    title: string,
    content: string,
}