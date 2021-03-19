-- Deploy API-skis:create_tables to pg

BEGIN;

CREATE TABLE ski (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	label TEXT NOT NULL, 
	description TEXT NOT NULL, 
	color TEXT NOT NULL, 
	level TEXT NOT NULL, 
	height int NOT NULL, 
	condition BOOLEAN NOT NULL
);

COMMIT;
