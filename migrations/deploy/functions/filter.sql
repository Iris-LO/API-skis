-- Deploy API-skis:functions/filter to pg

BEGIN;

CREATE FUNCTION ski_by_color(clr text) RETURNS SETOF ski AS $$
SELECT * FROM ski WHERE color = clr;
$$ LANGUAGE sql STABLE STRICT;

COMMIT;
