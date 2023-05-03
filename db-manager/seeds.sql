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
    'articles',
    'blog1',
    '私は十一月どうもそんな答弁人というのの中に云いだべから。',
    'もう今で啓発式はいったいある批評ませないでもで立って出したには経験穿いたなて、それほどには並べたででしごとく。',
    'https://placehold.jp/150x150.png',
    '2019-01-01 00:00:00',
    '2019-01-01 00:00:00',
    '2019-01-01 00:00:00',
    null
  ),
  (
    2,
    'articles',
    'blog2',
    '先生を聴くましのはしかるに多数をたといたました。',
    'それで不安をはその人間の自由自在奴婢が朝で忘れまし所がするからよほど活動参りがみよ今にきまっので。',
    'https://placehold.jp/150x150.png',
    '2019-01-02 00:00:00',
    '2019-01-02 00:00:00',
    '2019-01-02 00:00:00',
    null
  ),
  (
    3,
    'articles',
    'blog3',
    '私は十一月どうもそんな答弁人というのの中に云いだべから。',
    'もう今で啓発式はいったいある批評ませないでもで立って出したには経験穿いたなて、それほどには並べたででしごとく。',
    'https://placehold.jp/150x150.png',
    '2019-01-03 00:00:00',
    '2019-01-03 00:00:00',
    '2019-01-03 00:00:00',
    null
  ),
  (
    4,
    'articles',
    'blog4',
    'あいつで状態心にありまし表裏の中にその戦争的のでした。',
    '場合する来お漂を一時間京都日本人より程度にありて、釣主義を人間わありた時、自然釣がそれなが、それほど国民の真似もない、国家ばかり国家が来るば文芸にあっ疳に出はずがなるた、問題面白かろが二人はあなたにかけないない他人学に秋刀魚よ気がついて、そこなど来るばあるとなれましそうませ。',
    'https://placehold.jp/150x150.png',
    '2019-01-04 00:00:00',
    '2019-01-04 00:00:00',
    '2019-01-04 00:00:00',
    null
  ),
  (
    5,
    'articles',
    'blog5',
    'もともと生れがどうもしておいました。',
    'よそ人も好きだ学校がなるば、無事ます逼がそれほど説明になるてい、しかしこのがたの垣覗き的また次的の希望の昨日云いておく。',
    'https://placehold.jp/150x150.png',
    '2019-01-05 00:00:00',
    '2019-01-05 00:00:00',
    '2019-01-05 00:00:00',
    null
  ),
  (
    6,
    'articles',
    'blog6',
    'そんな個人もあなたって血たたか今日はいてならでです。',
    'こう好いは充分なけれうのでたます。みんなまで日本心のごまかしとかかかるているましあり。',
    'https://placehold.jp/150x150.png',
    '2019-01-06 00:00:00',
    '2019-01-06 00:00:00',
    '2019-01-06 00:00:00',
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
  ('tag5'),
  ('tag6'),
  ('tag7'),
  ('tag8'),
  ('tag9'),
  ('tag10'),
  ('tag11'),
  ('tag12'),
  ('tag13'),
  ('tag14'),
  ('tag15'),
  ('tag16'),
  ('tag17'),
  ('tag18'),
  ('tag19'),
  ('tag20');

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
