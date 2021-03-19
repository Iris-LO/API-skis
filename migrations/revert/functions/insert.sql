-- Revert API-skis:functions/insert from pg

BEGIN;

DROP FUNCTION new_ski(text, text, text, text, int, bool);

COMMIT;
