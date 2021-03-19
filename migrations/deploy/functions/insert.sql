-- Deploy API-skis:functions/insert to pg

BEGIN;

CREATE FUNCTION 
    new_ski(slbl text, sdsc text, sclr text, slvl text, shgt int, scdt boolean) 
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
