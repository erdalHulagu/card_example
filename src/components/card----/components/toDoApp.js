import React, { useState } from "react";
import "./toDoApp.scss";
import Notes from "./notes";
import { Col, Container, Row } from "react-bootstrap";
import NotForm from "./note-form";

const ToDoApp = () => {
  //burada guncelleme silme gibi notlarimiz tanimlayacagiz
  const [notes, setNotes] = useState([]);

  const createNote = (message) => {
    // bu createform u NotForm kullanacagi icin direk oraya gonderdik prop olarak orada karsilayacaz
    //mesaji form'dan alacaz ondan arguman olarak verdik burdanda statette
    //burada  kullanacagimiz objemizi olusturuyoruz
    const note = {
      id: Date.now(), // burada uniqe deger olusturduk
      message, //message:message,
      completed: false,
    };
    setNotes([note, ...notes]); // anki notu ve alip useState'imizdeki setNote ile notu'u notes'a atmis olduk
  };

  const deleteNote = (id) => {
    // id alip silecegimiz bir fonunction olusturduk
    const delet = notes.filter((note) => note.id !== id); // brada bir bos array olusturdukve yukardaki notlari fitreleyip silmek istedigimiz disindakileri arr'a almis olduk

    setNotes(delet); // setNote  ilede  filtreledigimiz notlatiri tekrar notes'in icine alarak guncellemis olduk
  };
  const updateNote = (id) => {
    const update = notes.map((note) => {
      if (note.id === id) {
        return { ...note, completed: !note.completed }; // burada notes mapten gecirip buradaki note.id ile parametre olarak vedigimiz id ayni ise
      } else {
        // // ...note ile spared actik yani !note.complated compalted olmayan yani  ile digerini guncelle dedik
        return note; //degilse ayni geri gonder
      }
    });

    setNotes(update);
  };

  return (
    <Container>
      <Row className="g-5">
        <Col md={3}>
          <NotForm createNote={createNote} />
        </Col>
        <Col md={9}>
          <Notes
            notes={notes}
            deleteNote={deleteNote}
            updateNote={updateNote}
          />
          {/* buradan delete notu notes'a gonderdik orada karsilayip oradanda note'a gonderecez*/}
          {/*burada notlari form'dam alacagimiz icin burdan notlari direk prop ile notes'a gonderdik */}
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoApp;
