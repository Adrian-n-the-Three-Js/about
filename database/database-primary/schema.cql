DROP KEYSPACE IF EXISTS hotel;

CREATE KEYSPACE hotel
  WITH REPLICATION = { 'class':'SimpleStrategy', 'replication_factor' : 3 };

USE hotel;

CREATE TABLE hotel.info (
  hotel_id int,
  name text,
  city text,
  price text,
  reviews int,
  PRIMARY KEY (hotel_id)
);

CREATE TABLE hotel.photos_by_hotel (
  hotel_id int,
  category text,
  photo_id int,
  avatar_url text,
  caption text,
  contributions smallint,
  date_posted text,
  helpful_votes smallint,
  location text,
  photo_url text,
  user text,
  PRIMARY KEY ((hotel_id), category, photo_id)
);

