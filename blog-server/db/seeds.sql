insert into
  works (
    id,
    category,
    slug,
    title,
    description,
    thumbnail_url,
    created_at,
    revised_at,
    published_at,
    unpublished_at
  )
values
  (
    1,
    'article',
    'hello-world',
    'Hello World',
    'This is the first article.',
    'https://example.com/hello-world.png',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    null
  ),
  (
    2,
    'article',
    'hello-world-2',
    'Hello World 2',
    'This is the second article.',
    'https://example.com/hello-world-2.png',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    null
  ),
  (
    3,
    'article',
    'hello-world-3',
    'Hello World 3',
    'This is the third article.',
    'https://example.com/hello-world-3.png',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    null
  ),
  (
    4,
    'article',
    'hello-world-4',
    'Hello World 4',
    'This is the fourth article.',
    'https://example.com/hello-world-4.png',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    null
  ),
  (
    5,
    'article',
    'hello-world-5',
    'Hello World 5',
    'This is the fifth article.',
    'https://example.com/hello-world-5.png',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    null
  ),
  (
    6,
    'article',
    'hello-world-6',
    'Hello World 6',
    'This is the sixth article.',
    'https://example.com/hello-world-6.png',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    '2021-01-01 00:00:00',
    null
  );

insert into
  articles (work_id, body)
values
  (1, 'This is the body of the first article.'),
  (2, 'This is the body of the second article.'),
  (3, 'This is the body of the third article.'),
  (4, 'This is the body of the fourth article.'),
  (5, 'This is the body of the fifth article.'),
  (6, 'This is the body of the sixth article.');

insert into
  tags (name)
values
  ('tag1'),
  ('tag2'),
  ('tag3'),
  ('tag4'),
  ('tag5');

insert into
  taggings (tag_id, work_id)
values
  (1, 1),
  (2, 1),
  (3, 1),
  (1, 2),
  (5, 2),
  (1, 3),
  (2, 3),
  (3, 3),
  (4, 3),
  (1, 4),
  (2, 4),
  (3, 4),
  (4, 4),
  (5, 4),
  (2, 5),
  (3, 5),
  (4, 5),
  (5, 5),
  (3, 6),
  (4, 6),
  (5, 6);
