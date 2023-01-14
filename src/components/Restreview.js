import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({ reviews }) {
  console.log(reviews);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="btn rounded-pill mt-2 bg-light text-dark"
      >
        Reviews
      </Button>
      <div style={{ minHeight: '150px' }} className="mt-2">
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '640px' }}>
              {
                reviews.map(item => (
                  <>
                    <h5> Name : {item.name}
                      <span className='ps-3'>Date :{item.date}</span>
                    </h5>
                    <p>Rating : {item.rating}</p>
                    <p>Comments :{item.comments}</p>

                  </>
                ))
              }

            </Card>
          </div>
 
        </Collapse>
      </div>
    </div>
  )
}

export default Restreview