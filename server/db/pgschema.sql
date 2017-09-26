CREATE TABLE users (
  id serial,
  username varchar(255) NOT NULL,
  password varchar(255),
  first_name varchar(255),
  last_name varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE screams (
  id serial,
  user_id int REFERENCES users(id),
  volume double precision,
  lowFreq double precision,
  midFreq double precision,
  highFreq double precision,
  timestamp timestamp default current_timestamp,
  PRIMARY KEY (ID)
);

INSERT INTO users (id, username, password, first_name, last_name)
  VALUES (1, 'jhcao', 'password', 'Johnathan', 'Cao');

INSERT INTO users (id, username, password, first_name, last_name)
  VALUES (2, 'robhunt', 'rhpw', 'Robert', 'Hunter');

INSERT INTO users (id, username, password, first_name, last_name)
  VALUES (3, 'jjgator', 'jjpw', 'Julie', 'Johnson');

INSERT INTO users (id, username, password, first_name, last_name)
  VALUES (4, 'reversmann', 'repass', 'Rachel', 'Eversmann');