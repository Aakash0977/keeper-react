import React from "react";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import notes from "../notes"

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map(newNotes => <Note  title = {newNotes.title} 
        content ={newNotes.content}
      />)};
    </div>
  );
}

export default App;
