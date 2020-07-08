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

## Server API

### Get hotel
  * GET `/api/photos/:hotelId`
  
**Path Parameters:**
  * `hotelId` hotel id
  
**Success Status Code:** `200`

**Returns:** JSON

```
{
  hotelId: Number,
  hotelName: String,
  hotelCity: String,
  hotelPrice: String,
  numReviews: String,
  roomAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  diningAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  poolAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  gymAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  amenitiesAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  bathroomAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  eventRoomAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  roomViewAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
}
```

### Add hotel
  * POST `/api/photos `
  
**Path Parameters:** 
  * `hotelId` hotel id

**Success Status Code:** `201`

**Request Body:** Expects JSON with the following keys.

```
{
  hotelName: String,
  hotelCity: String,
  hotelPrice: String,
  numReviews: String,
  roomAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  diningAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  poolAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  gymAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  amenitiesAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  bathroomAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  eventRoomAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  roomViewAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
}
```

### Update hotel info
  * PATCH `/api/photos/:hotelId`
  
**Path Parameters:**
  * `hotelId` hotel id
  
**Success Status Code:** `204`

**Request Body:** Expects JSON with any of the following keys (include only keys to be updated)

```
{
  hotelName: String,
  hotelCity: String,
  hotelPrice: String,
  numReviews: String,
  roomAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  diningAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  poolAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  gymAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  amenitiesAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  bathroomAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  eventRoomAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
  roomViewAlbum: [
    {
      user: String,
      userAvatarUrl: String,
      imageUrl: String,
      caption: String,
      category: String,
      datePosted: String,
      helpfulVotes: Number,
      location: String,
      contributions: Number,
    },
  ],
}
```
### Delete hotel
  * DELETE `/api/photos/:hotelId`

**Path Parameters:** 
  * `hotelId` hotel id

**Success Status Code:** `204`

