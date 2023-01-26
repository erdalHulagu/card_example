import React from "react";
import { Card } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const Note = ({ id, message, completed, deleteNote, updateNote }) => {
  return (
    <Card
      className="todo-card"
      style={{ backgroundColor: completed ? "#eaffff" : "#fbebe5" }}
    >
      <Card.Body>
        <Card.Title>{message}</Card.Title>
      </Card.Body>
      <Card.Footer className="buttons">
        <span variant="info" onClick={() => updateNote(id)}>
          <FaEdit />{" "}
        </span>
        <span variant="danger" onClick={() => deleteNote(id)}>
          {/* toDoApp'ta olusturdugumuz deleteNotu notes'a ordanda buraya aldik ve burada silmek istedigimiz id'yi silecez*/}
          <FaTrash />
        </span>
      </Card.Footer>
    </Card>
  );
};

export default Note;
