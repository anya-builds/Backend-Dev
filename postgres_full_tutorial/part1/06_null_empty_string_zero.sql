-- null - unknown/missing val
-- empty string - known string val but it contain no characters
-- zero - actual numeric value of 0

DROP TABLE IF EXISTS basics.value_examples;

CREATE TABLE basics.value_examples(
    id SERIAL PRIMARY KEY,
    nickname TEXT,
    bio TEXT,
    score INTEGER
);

INSERT INTO basics.value_examples (nickname, bio, score)
VALUES
    -- nickname is null
    (null, 'learning postgreSQL',10),
    ('','empty nick name',20),
    ('ankita','',0),
    ('john',null,null);

-- SELECT * FROM basics.value_examples;

SELECT * FROM basics.value_examples WHERE nickname IS NULL;

SELECT * FROM basics.value_examples WHERE score =0;

SELECT * FROM basics.value_examples WHERE nickname IS NOT NULL;