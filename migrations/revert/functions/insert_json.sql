-- Revert API-skis:functions/insert_json from pg

BEGIN;

DROP FUNCTION new_ski(json);

COMMIT;
