-- Revert API-skis:functions/filter from pg

BEGIN;

DROP FUNCTION ski_by_color(text);

COMMIT;
