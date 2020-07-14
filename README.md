# Hoteloooo

> Project description

## Related Projects

  - https://github.com/Adrian-n-the-Three-Js/reviews
  - https://github.com/Adrian-n-the-Three-Js/about
  - https://github.com/Adrian-n-the-Three-Js/photo-carousel
  - https://github.com/Adrian-n-the-Three-Js/calendar

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

<<<<<<< HEAD
## REST API

### GET /api/photos/:hotelId
app.get('/api/photos/:hotelId', (req, res) => {
  const _id = req.params.hotelId || '1';
  const getPhotos = (id, callback) => {
    db.Photo.find({ hotelId: id }, callback);
  };
  getPhotos(_id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

### POST /api/photos
app.post('/api/photos', (req, res) => {
  const addPhotos = (body, callback) => {
    let photos = new db.Photo(body)
    photos.save(callback);
    }
    })
    
=======

## Server API

### Get hotel
  * GET `/api/hotel/:hotelId`
  
**Path Parameters:**
  * `hotelId` hotel id
  
**Success Status Code:** `200`

**Returns:** JSON

```json
{
  "hotelId": "Number",
  "hotelName": "String",
  "hotelCity": "String",
  "hotelPrice": "Number",
  "numReviews": "Number",
  "roomAlbum": [
    {
      "user": "String",
      "userAvatarUrl": "String",
      "imageUrl": "String",
      "caption": "String",
      "category": "String",
      "datePosted": "String",
      "helpfulVotes": "Number",
      "location": "String",
      "contributions": "Number",
    },
  ],
  "diningAlbum": [
     {
      "user": "String",
      "userAvatarUrl": "String",
      "imageUrl": "String",
      "caption": "String",
      "category": "String",
      "datePosted": "String",
      "helpfulVotes": "Number",
      "location": "String",
      "contributions": "Number",
    },
  ],
  "poolAlbum": [
     {
      "user": "String",
      "userAvatarUrl": "String",
      "imageUrl": "String",
      "caption": "String",
      "category": "String",
      "datePosted": "String",
      "helpfulVotes": "Number",
      "location": "String",
      "contributions": "Number",
    },
  ],
  "gymAlbum": [
     {
      "user": "String",
      "userAvatarUrl": "String",
      "imageUrl": "String",
      "caption": "String",
      "category": "String",
      "datePosted": "String",
      "helpfulVotes": "Number",
      "location": "String",
      "contributions": "Number",
    },
  ],
  "amenitiesAlbum": [
     {
      "user": "String",
      "userAvatarUrl": "String",
      "imageUrl": "String",
      "caption": "String",
      "category": "String",
      "datePosted": "String",
      "helpfulVotes": "Number",
      "location": "String",
      "contributions": "Number",
    },
  ],
  "bathroomAlbum": [
     {
      "user": "String",
      "userAvatarUrl": "String",
      "imageUrl": "String",
      "caption": "String",
      "category": "String",
      "datePosted": "String",
      "helpfulVotes": "Number",
      "location": "String",
      "contributions": "Number",
    },
  ],
  "eventRoomAlbum": [
     {
      "user": "String",
      "userAvatarUrl": "String",
      "imageUrl": "String",
      "caption": "String",
      "category": "String",
      "datePosted": "String",
      "helpfulVotes": "Number",
      "location": "String",
      "contributions": "Number",
    },
  ],
  "roomViewAlbum": [
     {
      "user": "String",
      "userAvatarUrl": "String",
      "imageUrl": "String",
      "caption": "String",
      "category": "String",
      "datePosted": "String",
      "helpfulVotes": "Number",
      "location": "String",
      "contributions": "Number",
    },
  ],
}
```

### Add hotel
  * POST `/api/hotel`
  
**Path Parameters:** 
  * `hotelId` hotel id

**Success Status Code:** `201`

**Request Body:** Expects JSON with the following keys.

```json
  {
  "hotelId": "Number",
  "hotelName": "String",
  "hotelCity": "String",
  "hotelPrice": "Number",
  "numReviews": "Number"
  }
```

### Update hotel info
  * PATCH `/api/hotel/:hotelId`
  
**Path Parameters:**
  * `hotelId` hotel id
  
**Success Status Code:** `204`

**Request Body:** Expects JSON with any of the following keys (include only keys to be updated)

<<<<<<< HEAD
### PATCH /api/photos/:hotelId
app.put('/api/photos/:hotelId', (req, res) => {
  let id = req.params.hotelId
  const updatePhotos = (id, body, callback) => {
    db.Photo.update({ hotelId : id}, body, callback)
    }
    })
    
=======
```json
  {
  "numReviews": "Number"
  }
```

### Delete hotel
  * DELETE `/api/hotel/:hotelId`

**Path Parameters:** 
  * `hotelId` hotel id

**Success Status Code:** `204`

### Get photo
  * GET `/api/hotel/:hotelId/photo/:photoId`
  
**Path Parameters:**
  * `hotelId` hotel id
  * `photoId` photo id
  * `photo` photo
  
**Success Status Code:** `200`

**Returns:** JSON

```json
  {
      "photo_id": "Number",
      "hotel_id": "Number",
      "user": "String",
      "userAvatarUrl": "String",
      "imageUrl": "String",
      "caption": "String",
      "category": "String",
      "datePosted": "String",
      "helpfulVotes": "Number",
      "location": "String",
      "contributions": "Number",
    },
```

### Add photo
  * POST `/api/hotel/:hotelId/photo
  
**Path Parameters:**
  * `hotelId` hotel id
  * `photo` photo name
  
**Success Status Code:** `201`

**Request Body:** Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "user": "String",
      "userAvatarUrl": "String",
      "imageUrl": "String",
      "caption": "String",
      "category": "String",
      "datePosted": "String",
      "helpfulVotes": "Number",
      "location": "String",
      "contributions": "Number",
    }
<<<<<<< HEAD
  })
});

### DELETE /api/photos/:hotelId
app.delete('/api/photos/:hotelId', (req, res) => {
  let _id = req.params.hotelId
  const deletePhotos = (id, callback) => {
    db.Photo.deleteOne({ hotelId : id }, callback)
=======
```

### Update photo
  * PATCH `/api/hotel/:hotelId/photo/:photoId`
  
**Path Parameters:**
  * `hotelId` hotel id
  * `photoId` photo id
  * `photo` photo name
  
**Success Status Code:** `204`

**Request Body:** Expects JSON with any of the following keys (include only keys to be updated)

```json
  {
  "helpfulVotes": "Number
  }
```

### Delete photos
  * DELETE `/api/hotel/:hotelId/photos/:photoId`

**Path Parameters:** 
  * `hotelId` hotel id
  * `photoId` photo id
  * `photo` photo name

**Success Status Code:** `204`
