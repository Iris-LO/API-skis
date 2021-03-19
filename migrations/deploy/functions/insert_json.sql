-- Deploy API-skis:functions/insert_json to pg

BEGIN;

CREATE FUNCTION
	new_ski(jski json)
	RETURNS ski AS $$
INSERT INTO ski (label, description, color, level, height, condition)
VALUES (
	jski->>'label', -- équivalent JS jski.label
	jski->>'description',
	jski->>'color',
	jski->>'level',
	(jski->>'height')::int, -- parenthèses pour caster la valeur et non la propriété
	(jski->>'condition')::bool
) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
