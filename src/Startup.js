import React from "react"
import {observer} from 'mobx-react-lite'
import {Modal, Button, Form} from 'react-bootstrap';

const Startup = observer(({checkers}) => {
  const onPlayerEnter = e => {
    e.preventDefault()
    let formData = new FormData(e.target)
    console.log(e.target)
  }
  return (
      <Modal show={true}>
        <Modal.Header>Please enter the player names</Modal.Header>
        <Modal.Body>
          <Form onSubmit={onPlayerEnter} id="lol">
            <Form.Label>Player 1</Form.Label>
            <Form.Control id='lol2' type="input" placeholder="Matt" />
            <Form.Label>Player 2</Form.Label>
            <Form.Control type="input" placeholder="John" />
            <Button type="submit">Enter Game</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
  )
});

export default Startup