# Api_Banner

# API Documentation - API_Banner

## Contents

- [Api_Banner](#api_banner)
- [API Documentation - API_Banner](#api-documentation---api_banner)
  - [Contents](#contents)
  - [1. Overview](#1-overview)
  - [2. Quick Start](#2-quick-start)
    - [2.1. Installing Dependencies](#21-installing-dependencies)
    - [2.2. Environment variables](#22-environment-variables)
  - [3. Endpoints](#3-endpoints)
    - [Índice](#índice)
  - [3.1. **Customer**](#31-customer)
  - [Endpoints](#endpoints)
    - [3.1.1. **Create Customer**](#311-create-customer)
    - [`/customer`](#customer)
    - [3.1.2. **List all Customers**](#312-list-all-customers)
    - [`/customer`](#customer-1)
    - [3.1.3. **List customer by id**](#313-list-customer-by-id)
    - [`/customer/<customerId>`](#customercustomerid)
    - [3.1.4. **Update customer data**](#314-update-customer-data)
    - [`/customer/<customerId>`](#customercustomerid-1)
    - [3.1.5. **Delete customer**](#315-delete-customer)
    - [`/customer/<customerId>`](#customercustomerid-2)
  - [3.2. **Banner**](#32-banner)
  - [Endpoints](#endpoints-1)
    - [3.2.1. **Create Banner**](#321-create-banner)
    - [`/banner`](#banner)
    - [3.2.2. **List all banners**](#322-list-all-banners)
    - [`/banner`](#banner-1)
    - [3.2.3. **List specific banner**](#323-list-specific-banner)
    - [`/banner/<banner_id>`](#bannerbanner_id)
    - [3.2.4. **Update banner**](#324-update-banner)
    - [`/banner/<banner_id>`](#bannerbanner_id-1)
    - [3.2.5. **Delete banner**](#425-delete-banner)
    - [`/banner/<banner_id>`](#bannerbanner_id-2)


## 1. Overview

Project overview, some of the technologies used.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.postgresql.org/)
- [Mongoose](https://typeorm.io/)
- [Yup](https://yarnpkg.com/package/yup)
- [Docker](https://www.docker.com/)

## 2. Quick Start

[ Back ](#contents)

### 2.1. Installing Dependencies

Clone the project on your machine and install the dependencies with the command:

```shell
yarn
```

### 2.2. Environment variables

Then, create a file **.env**, copying file format **.env.example**.
Configure your environment variables with your Postgres credentials.

Create database as data entered in **.env**.

Run:

```
yarn dev
```

## 3. Endpoints

[ Back ](#contents)

### Índice

- [Customer](#41-customer)
  - [POST - /customer](#411-create-customer)
  - [GET - /customer](#412-list-all-customers)
  - [GET - /customer/<customerId>](#413-list-customer-by-id)
  - [PATCH - /customer/<customerId>](#414-update-customer-data)
  - [DELETE - /customer/<customerId>](#415-delete-customer)
- [Banner](#42-banner)
  - [POST - /banner](#421-create-banner)
  - [GET - /banner](#422-list-all-banners)
  - [GET - /banner/<banner_id>](#423-list-one-banner)
  - [PATCH - /banner/<banner_id>](#424-update-banner)
  - [DELETE - /banner/<banner_id>](#425-delete-banner)

---

## 3.1. **Customer**

[ Back to endpoints ](#3-endpoints)

The Customer object is defined as:

| Field    | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| id       | string | Customer's unique identifier |
| name     | string | Username                     |
| email    | string | Customer's email             |
| password | string | Customer access password     |
| phone    | string | Customer contact             |

## Endpoints

| Method | Endpoint               | Responsability                              |
| ------ | ---------------------- | ------------------------------------------- |
| POST   | /Customer              | Create Customer                             |
| GET    | /Customer              | List all Customers                          |
| GET    | /Customer/<customerId> | List the Customer with the corresponding id |
| PATCH  | /Customer/<customerId> | Update Customer data                        |
| DELETE | /Customer/<customerId> | Delete Customer from database               |

---

### 3.1.1. **Create Customer**

[ Back to endpoints ](#3-endpoints)

### `/customer`

### Example of request:

```
POST /customer
Host: http://localhost:3000
Content-type: application/json
```

### Request body:

```json
{
  "name": "Ana",
  "email": "ana@mail.com",
  "password": "1234",
  "phone": "4112344548"
}
```

### Validation Schema with Yup

```
{
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  phone: yup.string().required()
}
```

### Example of response:

```
201 Created
```

```json
{
  "name": "Ana",
  "email": "ana@mail.com",
  "phone": "4112344548",
  "password": "$2a$10$JvgmJb0k.eNygKKuF1M.t.ugzgDTMMjL8UhdE3E.AVojT1JQisG3e",
  "banners": [],
  "_id": "630124aeced32d99eaf41103",
  "__v": 0
}
```

### Possible errors:

| Error code      | Description              |
| --------------- | ------------------------ |
| 400 bad request | Email already registered |

---

### 3.1.2. **List all Customers**

[ Back to endpoints ](#3-endpoints)

### `/customer`

### Example of request:

```
GET /customer
Host: http://localhost:3000
Authorization
Content-type: application/json
```

### Request body:

```json
Empty
```

### Example of response:

```
200 OK
```

```json
[
  {
    "_id": "630124aeced32d99eaf41103",
    "name": "Ana",
    "email": "ana@mail.com",
    "phone": "4112344548",
    "password": "$2a$10$JvgmJb0k.eNygKKuF1M.t.ugzgDTMMjL8UhdE3E.AVojT1JQisG3e",
    "banners": [],
    "__v": 0
  },
  {
    "_id": "63012563ced32d99eaf41107",
    "name": "Maria",
    "email": "Maria@mail.com",
    "phone": "213423451",
    "password": "$2a$10$ugwuPskW9RBLwCRJYbmKd.G2iI1s8cpGRVNwSzxPLMgN4EyLxy8he",
    "banners": [],
    "__v": 0
  }
]
```

---

### 3.1.3. **List customer by id**

[ Back to endpoints ](#3-endpoints)

### `/customer/<customerId>`

### Example of request:

```
GET /customer/<customerId>
Host: http://localhost:3000
Content-type: application/json
```

### Request parameters:

| Parameter  | Type   | Description                  |
| ---------- | ------ | ---------------------------- |
| customerId | string | customerId unique identifier |

### Request body:

```json
Empty
```

### Example of response:

```
200 OK
```

```json
{
  "_id": "630124aeced32d99eaf41103",
  "name": "Ana",
  "email": "ana@mail.com",
  "phone": "4112344548",
  "password": "$2a$10$JvgmJb0k.eNygKKuF1M.t.ugzgDTMMjL8UhdE3E.AVojT1JQisG3e",
  "banners": [],
  "__v": 0
}
```

### Possible errors:

| Error code    | Description        |
| ------------- | ------------------ |
| 404 Not found | Customer not found |

---

### 3.1.4. **Update customer data**

[ Back to endpoints ](#3-endpoints)

### `/customer/<customerId>`

### Example of request:

```
PATCH /customer<customerId>
Host: http://localhost:3000
Authorization
Content-type: application/json+
```

### Request parameters:

| Parameter  | Type   | Description                  |
| ---------- | ------ | ---------------------------- |
| CustomerId | string | Customer's unique identifier |

### Request body:

```json
{
  "name": "Ana Paula"
}
```

### Example of response:

```
200 OK
```

```json
{
  {
	"_id": "630124aeced32d99eaf41103",
	"name": "Ana Paula",
	"email": "ana@mail.com",
	"phone": "4112344548",
	"password": "$2a$10$JvgmJb0k.eNygKKuF1M.t.ugzgDTMMjL8UhdE3E.AVojT1JQisG3e",
	"banners": [],
	"__v": 0
  }
}
```

### Possible errors:

| Error code | Description        |
| ---------- | ------------------ |
| 404        | Customer not found |

---

### 4.1.5. **Delete customer**

[ Back to endpoints ](#3-endpoints)

### `/customer/<customerId>`

### Example of request:

```
DELETE /customer/<customerId>
Host: http://localhost:3000
Authorization
Content-type: application/json
```

### Request parameters:

| Parameter  | Type   | Description                  |
| ---------- | ------ | ---------------------------- |
| customerId | string | Customer's unique identifier |

### Request body:

```json
Empty
```

### Example of response:

```
200 OK
```

```json
Empty
```

### Possible errors:

| Error code | Description        |
| ---------- | ------------------ |
| 404        | Customer not found |

---

## 3.2. **Banner**

[ Back to endpoints ](#3-endpoints)

The Banners object is defined as:

| Field   | Type    | Description                        |
| ------- | ------- | ---------------------------------- |
| id      | string  | Banner's unique identifier         |
| name    | string  | Name banner                        |
| endAt   | string  | Banner the banner ends             |
| startAt | string  | Banner creation date               |
| status  | boolean | whether the banner finished or not |

## Endpoints

| Method | Endpoint            | Responsability       |
| ------ | ------------------- | -------------------- |
| POST   | /banner             | Create banner        |
| GET    | /banner             | List all banner      |
| GET    | /banner/<banner_id> | List specific banner |
| PATCH  | /banner/<banner_id> | Update banner        |
| DELETE | /banner/<banner_id> | Delete banner        |

---

### 3.2.1. **Create Banner**

[ Back to endpoints ](#3-endpoints)

### `/banner`

### Example of request:

```
POST /banner
Host: http://localhost:3000
Authorization
Content-type: application/json
```

### Request body:

```json
{
  {
		"name": "Dogs",
		"image": "Dogs.png",
	  "customerId": "630124aeced32d99eaf41103",
	  "endAt": "2022/11/30"
  }
}
```

### Validation Schema with Yup

```
{
  name: yup.string().required(),
  image: yup.string().required(),
  customerId: yup.date().required(),
  endAt: yup.string().required()
}
```

### Example of response:

```
201 Created
```

```json
{
  "name": "Dogs",
  "image": "Dogs.png",
  "endAt": "1669777200000",
  "startAt": "22/08/2022 11:54:25",
  "status": false,
  "customerId": "630124aeced32d99eaf41103",
  "_id": "630398cc4597e9f739fc4de8",
  "__v": 0
}
```

### Possible errors:

| Error code      | Description         |
| --------------- | ------------------- |
| 404 bad request | Customer not found! |

---

### 3.2.2. **List all banners**

[ Back to endpoints ](#3-endpoints)

### `/banner`

### Example of request:

```
GET /banner
Host: http://localhost:3000
Content-type: application/json
```

### Request body:

```json
Empty
```

### Example of response:

```
200 OK
```

```json
[
  {
    "_id": "6303996b4597e9f739fc4def",
    "name": "Dogs",
    "image": "Dogs.png",
    "endAt": "1669777200000",
    "startAt": "22/08/2022 11:54:25",
    "status": false,
    "customerId": "630124aeaed32d99eaf41103",
    "__v": 0
  },
  {
    "_id": "63039c9244480270bbe3b055",
    "name": "Cat",
    "image": "Cat.png",
    "endAt": "1672455600000",
    "startAt": "22/08/2022 12:05:38",
    "status": false,
    "customerId": "630124aeced32d99eaf41103",
    "__v": 0
  }
]
```

### Possible errors:

None, the maximum that can return an empty list.

---

### 3.2.3. **List specific banner**

[ Back to endpoints ](#3-endpoints)

### `/banner/<banner_id>`

### Example of request:

```
GET /banner/<banner_id>
Host: http://localhost:3000
Authorization
Content-type: application/json
```

### Request parameters:

| Parameter | Type   | Description                |
| --------- | ------ | -------------------------- |
| bannerId  | string | banner's unique identifier |

### Request body:

```json
Empty
```

### Example of response:

```
200 OK
```

```json
{
  "_id": "63039c9244480270bbe3b055",
  "name": "Cat",
  "image": "Cat.png",
  "endAt": "1672455600000",
  "startAt": "22/08/2022 12:05:38",
  "status": false,
  "customerId": "630124aeced32d99eaf41103",
  "__v": 0
}
```

### Possible errors:

| Error code      | Description       |
| --------------- | ----------------- |
| 404 bad request | Banner not found! |

---

### 3.2.4. **Update banner**

[ Back to endpoints ](#3-endpoints)

### `/banner/<banner_id>`

### Example of request:

```
PATCH /banner/<banner_id>
Host: http://localhost:3000
Authorization
Content-type: application/json
```

### Request parameters:

| Parameter | Type   | Description                |
| --------- | ------ | -------------------------- |
| bannerId  | string | banner's unique identifier |

### Request body:

```json
{
  "name": "Rabbit"
}
```

### Example of response:

```
200 OK
```

```json
{
  "_id": "63039c9244480270bbe3b055",
  "name": "Rabbit",
  "image": "Cat.png",
  "endAt": "1672455600000",
  "startAt": "22/08/2022 12:05:38",
  "status": false,
  "customerId": "630124aeced32d99eaf41103",
  "__v": 0
}
```

### Possible errors:

| Error code | Description       |
| ---------- | ----------------- |
| 404        | Banner not found! |

---

### 3.2.5. **Delete banner**

[ Back to endpoints ](#3-endpoints)

### `/banner/<banner_id>`

### Example of request:

```
DELETE /banner/<banner_id>
Host: https://hosteando.herokuapp.com
Authorization
Content-type: application/json
```

### Request parameters:

| Parameter | Type   | Description                |
| --------- | ------ | -------------------------- |
| bannerId  | string | Banner's unique identifier |

### Request body:

```json
  Empty
```

### Example of response:

```
200 OK
```

```json
  Empty
```
