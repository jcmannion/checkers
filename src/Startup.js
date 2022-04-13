import React, { useState } from 'react'
import {observer} from 'mobx-react-lite'
import {Modal, Button, Form} from 'react-bootstrap'
import {Player} from './Checkers'

const Startup = observer(({checkers}) => {
  console.log(`In Startup.js: ${JSON.stringify(checkers)}`)
  const [modalOpen, setModalOpen] = useState(true)

  const onPlayerEnter = e => {
    e.preventDefault()
    let formData = new FormData(e.target)
    console.log(checkers)
    setModalOpen(false)
    checkers.playerOne = new Player('joebob', 0)
    checkers.playerTwo = new Player('bobjoe', 0)
  }

  return (
    <Modal show={modalOpen}>
      <Modal.Header>Please enter the player names</Modal.Header>
      <Modal.Body>
        <p>{modalOpen}</p>
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