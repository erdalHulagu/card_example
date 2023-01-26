import React, { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";

const NotForm = ({ createNote }) => {
  const [message, setMessage] = useState("");

  return (
    <Form className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <FormControl
          type="text"
          variant="danger"
          value={message} //buraya mesaji koyduk inputa deger girildigine useState ile value hep girilen deger olacak
          onChange={(e) => setMessage(e.target.value)} // burdanda set message ile message hep guncellenmis olacak
        />
      </Form.Group>
      <Button variant="warning" onClick={() => createNote(message)}>
        {" "}
        {/*buna basilinca createMesaj merkez todo'ya gonderilecek */}
        Create Note{" "}
        {/*on click createNote'u cagiracak ve onunlada mesaji gonderecek */}
      </Button>{" "}
      {/*su sekilde onClick={()=>createNote(message) */}
    </Form>
  );
};

export default NotForm;
