-- Revert API-skis:functions/insert_rest from pg

BEGIN;

DROP FUNCTION new_ski(text, text, text, text, int, bool);

CREATE FUNCTION
	new_ski(slbl text, sdsc text, sclr text, slvl text, shgt int, scdt bool)
	RETURNS void AS $$
INSERT INTO ski (label, description, color, level, height, condition)
VALUES (
	slbl,
	sdsc,
	sclr,
	slvl,
	shgt,
	scdt
);
$$ LANGUAGE sql STRICT;

COMMIT;
