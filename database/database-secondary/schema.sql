DROP DATABASE IF EXISTS hotels;

CREATE DATABASE hotels;

\connect hotels

CREATE TABLE hotel (
  hotel_id SERIAL,
  name varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  price varchar(255) NOT NULL,
  reviews integer,
  PRIMARY KEY (hotel_id)
);

CREATE TABLE users (
  user_id SERIAL,
  name varchar(255),
  avatar_url varchar(255),
  location varchar(255),
  contributions integer,
  PRIMARY KEY (user_id)
);

CREATE TABLE photos (
  photo_id SERIAL,
  hotel_id integer NOT NULL,
  category text NOT NULL,
  caption text,
  date_posted text NOT NULL,
  helpful_votes integer,
  image_url varchar(255),
  user_id integer NOT NULL,
  PRIMARY KEY (photo_id)
);
  -- FOREIGN KEY (hotel_id) references hotel(hotel_id),
  -- FOREIGN KEY (user_id) references users(user_id)





