# EventTrackerProject

## **🌿 Plant Sale 🌴** API Documentation

Welcome to the sale tracker. User may perform full list and CRUD functions on plant 
entity table in database. DB stores information on the plant's name, description, and other key qualities that plant buyers need for purchasing decisions. 

This API server is a Spring Boot application that serves
RESTful routes. The backend logic is fulfilled by JPA repositories. 
All Endpoints have been tested using Postman.
The collection is uploaded [here](./postman_collection.json).

This project was helpful for learning how developers can build a REST API using 
an ORM-style framework to serve web clients. 




## Endpoints:
* [**GET** `/api/ping`](#get-apiping)
    - [Ping](#ping)
* [**PUT** `/api/plants`](#put-apiplants)
    - [Good Data](#good-data)
    - [Bad Price](#bad-price)
* [**GET** `/api/plants`](#get-apiplants)
    - [List Plants](#list-plants)
* [**GET** `/api/plants/{id}`](#get-apiplantsid)
    - [Good Id](#good-id)
    - [Bad Id](#bad-id)
    - [Not Found](#not-found)
* [**PATCH** `/api/plants/{id}`](#patch-apiplantsid)
    - [Good Id](#good-id-1)
    - [Good Id Partial](#good-id-partial)
    - [Bad Price](#bad-price-1)
    - [Bad Id](#bad-id-1)
    - [Not Found](#not-found-1)
* [**DELETE** `/api/plants/{id}`](#delete-apiplantsid)
    - [Good Id](#good-id-2)
    - [Bad Id](#bad-id-2)
    - [Not Found](#not-found-2)

____

## **GET** `/api/ping`  

#### Ping
**GET** `/api/ping`  
200 OK  
text/plain  
```
pong!
```
____

## **PUT** `/api/plants`  

#### Good Data
**PUT** `/api/plants`  
```json
{
    "name": "Alocasia",
    "description": "TEST",
    "variegation": true,
    "price": 450.0,
    "rare": true,
    "image": null
}
```
201 Created  
header:  
`Location: http://localhost:8085/api/plants/13`  
response body:
```json
{
    "id": 13,
    "name": "Alocasia",
    "description": "TEST",
    "variegation": true,
    "price": 450.0,
    "rare": true,
    "image": null
}
```

#### Bad Price
**PUT** `/api/plants`  
```json
{
    "name": "Alocasia",
    "description": "TEST",
    "variegation": true,
    "price": -100,
    "rare": true,
    "image": null
}
```
400 Bad Request  
____

## **GET** `/api/plants`  

#### List Plants
**GET** `/api/plants`  
200 OK  
```json
[
    {
        "id": 1,
        "name": "Monstera",
        "description": "Large, fenestrated leaves",
        "variegation": true,
        "price": 450.0,
        "rare": true,
        "image": null
    },
    {
        "id": 2,
        "name": "P. White Wizard",
        "description": "White and green leaves",
        "variegation": true,
        "price": 250.0,
        "rare": true,
        "image": null
    },
    {
        "id": 3,
        "name": "P. Pink Princess",
        "description": "Pink and black leaves",
        "variegation": true,
        "price": 280.0,
        "rare": true,
        "image": null
    },
    {
        "id": 4,
        "name": "P. Splendid",
        "description": "red-backed leaves",
        "variegation": false,
        "price": 150.0,
        "rare": true,
        "image": null
    },
    {
        "id": 5,
        "name": "ZZ Raven",
        "description": "Black, palm-like leaves",
        "variegation": false,
        "price": 35.0,
        "rare": false,
        "image": null
    }
]
```
____

## **GET** `/api/plants/{id}`  

#### Good Id
**GET** `/api/plants/1`  
200 OK  
```json
{
    "id": 1,
    "name": "Monstera",
    "description": "Large, fenestrated leaves",
    "variegation": true,
    "price": 450.0,
    "rare": true,
    "image": null
}
```

#### Bad Id
**GET** `/api/plants/0`  
400 Bad Request  

#### Not Found
**GET** `/api/plants/1000000`  
404 Not Found  
____

## **PATCH** `/api/plants/{id}`  

#### Good Id
**PATCH** `/api/plants/8`  
```json
{
    "name": "Monstera",
    "description": "Update Test",
    "variegation": true,
    "price": 450.0,
    "rare": true,
    "image": null
}
```
200 OK  
```json
{
    "id": 8,
    "name": "Monstera",
    "description": "Update Test Partial",
    "variegation": true,
    "price": 450.0,
    "rare": true,
    "image": null
}
```

#### Good Id Partial
**PATCH** `/api/plants/8`  
```json
{
    "name": "Monstera",
    "description": "Update Test Partial"
}
```
200 OK  
```json
{
    "id": 8,
    "name": "Monstera",
    "description": "Update Test Partial",
    "variegation": true,
    "price": 450.0,
    "rare": true,
    "image": null
}
```

#### Bad Price
**PATCH** `/api/plants/1`  
400 Bad Request  

#### Bad Id
**PATCH** `/api/plants/0`  
404 Not Found  

#### Not Found
**PATCH** `/api/plants/1000000`  
404 Not Found  
____

## **DELETE** `/api/plants/{id}`  

#### Good Id
**DELETE** `/api/plants/13`  
204 No Content  

#### Bad Id
**DELETE** `/api/plants/0`  
400 Bad Request  

#### Not Found
**DELETE** `/api/plants/1000000`  
404 Not Found  
