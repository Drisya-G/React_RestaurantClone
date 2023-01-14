import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>

<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Rq8zSqC1XhG45L45stWJojJAu6obRH2Iqg&usqp=CAU"
              // src="data:image/png;base64,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"
              width="70"
              height="70"
              className="d-inline-block align-center me-3"
            />{' '}
            OLIVE GARDEN
            
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header