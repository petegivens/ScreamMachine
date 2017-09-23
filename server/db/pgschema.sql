CREATE TABLE users (
  id serial,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE screams (
  id serial,
  user_id int REFERENCES users(id),
  volume numeric (5, 4) NOT NULL,
  frequency numeric (5, 4) NOT NULL,
  duration double precision NOT NULL,
  created_at timestamp with time zone NOT NULL,
  PRIMARY KEY (ID)
);