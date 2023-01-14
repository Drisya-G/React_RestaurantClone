import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';

function Viewrestaurant() {
    const params = useParams()
    console.log(params.id);


    // to hold value
    const [allRestaurants, setRestaurants] = useState([]) //empty array shows json data in array format

    //function to call API to get all resturant items from restaurant.json
    const getRestaurants = async () => {
        await fetch('/restaurants.json')
            .then((data) => {
                data.json()
                    .then((result) => {
                        setRestaurants(result.restaurants); // to convert array of array
                    })
            })
    }
    useEffect(() => {
        getRestaurants()
    }, [])

    console.log(allRestaurants);
    const viewrest=allRestaurants.find(item=>item.id==params.id);
    console.log(viewrest);


    return (
        <>

            {
                viewrest?
                (
                    <Row>
                        <Col>
                        <Image src={viewrest.photograph} fluid/>
                        </Col>
                        <Col>
                        <h6><u>ID : {viewrest.id}</u></h6>
                        <h3>Name : {viewrest.name}</h3>
                        <h5>Neighborhood : {viewrest.neighborhood}</h5>
                        <h5>Cuisine_type :{viewrest.cuisine_type}</h5>
                        <h5>Address : {viewrest.address}</h5>
                        <Restoperation operate={viewrest.operating_hours}/>
                        <Restreview reviews={viewrest.reviews}/>
                        </Col>
                        
                    </Row>
                ):'null'   //like if ..else
            }

        </>
    )
}

export default Viewrestaurant