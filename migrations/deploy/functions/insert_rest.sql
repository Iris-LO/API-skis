-- Deploy API-skis:functions/insert_rest to pg

BEGIN;

DROP FUNCTION new_ski (text, text, text, text, int, boolean);

CREATE FUNCTION 
    new_ski(slbl text, sdsc text, sclr text, slvl text, shgt int, scdt boolean) 
    RETURNS ski AS $$
INSERT INTO ski (label, description, color, level, height, condition) 
VALUES (
    slbl,
    sdsc,
    sclr,
    slvl,
    shgt,
    scdt
) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
