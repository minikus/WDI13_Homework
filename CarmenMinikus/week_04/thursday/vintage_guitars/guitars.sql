CREATE TABLE guitars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  make TEXT,
  year TEXT,
  image TEXT,
  played_by TEXT
);


INSERT INTO guitars (name, make, year) VALUES ('Jazzmaster', 'American', '1965');
