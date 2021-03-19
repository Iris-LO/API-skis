-- Revert API-skis:create_tables from pg

BEGIN;

DROP TABLE ski;

COMMIT;
