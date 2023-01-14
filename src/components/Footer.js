import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>About</Card.Title>
          <Card.Text>
            With more than 850 restaurants nationwide, we recognize our unique position to help provide
            hunger relief in the local communities we serve. In 2003, we created our Harvest program, where
            all restaurants gather wholesome, surplus food every day and carefully prepare for a weekly
            donation to a local non-profit organization. Olive Garden restaurants have donated over 40
            million pounds of food, and we also partner with Feeding America® to help children and
            families facing hunger in our communities.
          </Card.Text>
          <Button variant="primary" className="ps-2 pe-2 border border-light rounded-pill">Quick Links</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2886+CHF, NH Bypass, near Oberon Mall, Padivattom,
         Edappally, Ernakulam, Kerala 682024</Card.Footer>
      </Card>
    </div>
  )
}

export default Footer