import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Note from "./note";

const Notes = ({ notes, deleteNote, updateNote }) => {
  return (
    <Container className="notes">
      <Row>
        {notes.map(
          (
            note /* notesin icinde herbir note icin bir kart olacagi icin burda map yapiyoruz*/
          ) => (
            <Col sm={6} md={4} lg={3} key={note.id}>
              {" "}
              {/*buradan toDoAppten aldigimiz notlari nota gonderecez burada proplara actigimiz icin ... diye oradada id, message, complate diyekarsilayacaz */}
              <Note {...note} deleteNote={deleteNote} updateNote={updateNote} />
              {/* delete ve update notu toDoApp ten aldik buradanda nota gonderdik */}
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};

export default Notes;
