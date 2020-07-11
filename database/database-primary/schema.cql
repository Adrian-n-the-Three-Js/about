CREATE KEYSPACE hotel WITH replication =
  {‘class’: ‘SimpleStrategy’, ‘replication_factor’ : 3};

USE hotel;

CREATE TABLE hotel.info (
  hotel_id int,
  city text,
  name text,
  price smallint,
  reviews int,
  PRIMARY KEY ((hotel_id))
  )


CREATE TABLE hotel.photos_by_hotel (
  photo_id int,
  hotel_id int,
  user text,
  photoUrl text,
  avatar_url text,
  date_posted date,
  caption: text,
  category: text,
  location text,
  contributions smallint,
  helpful_votes smallint,
  PRIMARY KEY (hotel_id, category, photo_id)
);

