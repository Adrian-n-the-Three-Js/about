\connect hotels

create index concurrently "index_hotel_id_on_hotel" on photos using btree (hotel_id);

-- create index concurrently "index_user_id_on_users" on users using hash (user_id);