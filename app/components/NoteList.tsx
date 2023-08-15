import { type dataType } from "~/routes/notes";

function NoteList({notes} : { notes : dataType[] }) {
  return (
    <ul id="note-list">
      {notes.map((note, index) => (
        <li key={note.created_at} className="note">
          <article>
            <header>
              <ul className="note-meta">
                <li>#{index + 1}</li>
                <li>
                  <time dateTime={note.created_at}>
                    {new Date(note.created_at).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </time>
                </li>
              </ul>
              <h2>{note.title}</h2>
            </header>
            <p>{note.content}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;