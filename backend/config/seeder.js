import { QuickDB } from "quick.db";
const db = new QuickDB();

const db_user = db.table("user");
const db_materi = db.table("materi");
const db_loggedUser = db.table("loggedUser");
const db_forum = db.table("forum");
const db_forgetPass = db.table("forgetPass");

const UUID = "88ba3d39-2af4-4526-8ab2-97d8b470d061";
const UUID2 = "59d1756f-5259-4527-bc72-640db97372b5";
const UUID3 = "e6adfbb7-36ac-4418-90f5-f022a5d436c5";
const UUID4 = "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821";
const UUID5 = "aa1a2295-fdcf-47d3-acd9-fd187288ebd7";
const UUID6 = "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const materi_gitar = [
  {
    "materiID": 0,
    "alatMusik": "gitar",
    "owner": "59d1756f-5259-4527-bc72-640db97372b5",
    "data": {
      "nama": "Dasar Dasar gitar",
      "deskripsi": "Mempelajari Dasar-dasar gitar, dimulai dari pengenalan bagian-bagian alat musik, hingga cara bermain",
      "tingkatan": "pemula",
      "rating": [
        [
          "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
          4
        ],
        [
          "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
          4
        ],
        [
          "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
          3
        ],
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          1
        ]
      ],
      "pengunjung": 94,
      "createdAt": "2023-10-01T11:28:33.724Z",
      "daftarMateri": [
        {
          "judul": "Sejarah",
          "materi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "judul": "Pencipta",
          "materi": "<img>https://i.imgur.com/TqPdNrR.jpeg</img>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n        [wikipedia](https://en.wikipedia.org/wiki/Albert_Einstein)\n        <b>This is bold</b>\n        <li>This is list</li>\n        <li>This is list</li>\n        <video>https://www.youtube.com/watch?v=yi2KjoZBYsU</video>"
        }
      ]
    }
  },
  {
    "materiID": 1,
    "alatMusik": "gitar",
    "owner": "59d1756f-5259-4527-bc72-640db97372b5",
    "data": {
      "nama": "Kunci dasar gitar",
      "deskripsi": "Mempelajari kunci-kunci gitar, mengenalkan kunci-kunci dasar yang sering digunakan",
      "tingkatan": "menengah",
      "rating": [
        [
          "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
          3
        ],
        [
          "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
          5
        ],
        [
          "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
          4
        ],
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          3
        ]
      ],
      "pengunjung": 63,
      "createdAt": "2023-09-28T11:28:33.724Z",
      "daftarMateri": [
        {
          "judul": "Sejarah",
          "materi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "judul": "Pencipta",
          "materi": "<img>https://i.imgur.com/TqPdNrR.jpeg</img>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n        [wikipedia](https://en.wikipedia.org/wiki/Albert_Einstein)\n        <b>This is bold</b>\n        <li>This is list</li>\n        <li>This is list</li>\n        <video>https://www.youtube.com/watch?v=yi2KjoZBYsU</video>"
        }
      ]
    }
  },
  {
    "materiID": 2,
    "alatMusik": "gitar",
    "owner": "59d1756f-5259-4527-bc72-640db97372b5",
    "data": {
      "nama": "Bermain gitar seperti pro",
      "deskripsi": "Mengamati dan meniru bagaimana seorang pro bermain gitar",
      "tingkatan": "sulit",
      "rating": [
        [
          "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
          5
        ],
        [
          "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
          1
        ],
        [
          "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
          2
        ],
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          5
        ]
      ],
      "pengunjung": 67,
      "createdAt": "2022-10-01T11:28:33.724Z",
      "daftarMateri": [
        {
          "judul": "Sejarah",
          "materi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "judul": "Pencipta",
          "materi": "<img>https://i.imgur.com/TqPdNrR.jpeg</img>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n        [wikipedia](https://en.wikipedia.org/wiki/Albert_Einstein)\n        <b>This is bold</b>\n        <li>This is list</li>\n        <li>This is list</li>\n        <video>https://www.youtube.com/watch?v=yi2KjoZBYsU</video>"
        }
      ]
    }
  }
]
const materi_biola = [
  {
    "materiID": 0,
    "alatMusik": "biola",
    "owner": "88ba3d39-2af4-4526-8ab2-97d8b470d061",
    "data": {
      "nama": "Dasar Dasar biola",
      "deskripsi": "Mempelajari Dasar-dasar biola, dimulai dari pengenalan bagian-bagian alat musik, hingga cara bermain",
      "tingkatan": "pemula",
      "rating": [
        [
          "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
          4
        ],
        [
          "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
          1
        ],
        [
          "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
          1
        ],
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          5
        ]
      ],
      "pengunjung": 85,
      "createdAt": "2023-10-01T11:28:33.724Z",
      "daftarMateri": [
        {
          "judul": "Sejarah",
          "materi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "judul": "Pencipta",
          "materi": "<img>https://i.imgur.com/TqPdNrR.jpeg</img>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n        [wikipedia](https://en.wikipedia.org/wiki/Albert_Einstein)\n        <b>This is bold</b>\n        <li>This is list</li>\n        <li>This is list</li>\n        <video>https://www.youtube.com/watch?v=yi2KjoZBYsU</video>"
        }
      ]
    }
  },
  {
    "materiID": 1,
    "alatMusik": "biola",
    "owner": "88ba3d39-2af4-4526-8ab2-97d8b470d061",
    "data": {
      "nama": "Kunci dasar biola",
      "deskripsi": "Mempelajari kunci-kunci biola, mengenalkan kunci-kunci dasar yang sering digunakan",
      "tingkatan": "menengah",
      "rating": [
        [
          "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
          5
        ],
        [
          "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
          5
        ],
        [
          "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
          3
        ],
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          1
        ]
      ],
      "pengunjung": 4,
      "createdAt": "2023-09-28T11:28:33.724Z",
      "daftarMateri": [
        {
          "judul": "Sejarah",
          "materi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "judul": "Pencipta",
          "materi": "<img>https://i.imgur.com/TqPdNrR.jpeg</img>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n        [wikipedia](https://en.wikipedia.org/wiki/Albert_Einstein)\n        <b>This is bold</b>\n        <li>This is list</li>\n        <li>This is list</li>\n        <video>https://www.youtube.com/watch?v=yi2KjoZBYsU</video>"
        }
      ]
    }
  },
  {
    "materiID": 2,
    "alatMusik": "biola",
    "owner": "88ba3d39-2af4-4526-8ab2-97d8b470d061",
    "data": {
      "nama": "Bermain biola seperti pro",
      "deskripsi": "Mengamati dan meniru bagaimana seorang pro bermain biola",
      "tingkatan": "sulit",
      "rating": [
        [
          "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
          1
        ],
        [
          "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
          2
        ],
        [
          "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
          2
        ],
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          3
        ]
      ],
      "pengunjung": 59,
      "createdAt": "2022-10-01T11:28:33.724Z",
      "daftarMateri": [
        {
          "judul": "Sejarah",
          "materi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "judul": "Pencipta",
          "materi": "<img>https://i.imgur.com/TqPdNrR.jpeg</img>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n        [wikipedia](https://en.wikipedia.org/wiki/Albert_Einstein)\n        <b>This is bold</b>\n        <li>This is list</li>\n        <li>This is list</li>\n        <video>https://www.youtube.com/watch?v=yi2KjoZBYsU</video>"
        }
      ]
    }
  }
]
const materi_piano = [
  {
    "materiID": 0,
    "alatMusik": "piano",
    "owner": "88ba3d39-2af4-4526-8ab2-97d8b470d061",
    "data": {
      "nama": "Dasar Dasar piano",
      "deskripsi": "Mempelajari Dasar-dasar piano, dimulai dari pengenalan bagian-bagian alat musik, hingga cara bermain",
      "tingkatan": "pemula",
      "rating": [
        [
          "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
          3
        ],
        [
          "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
          2
        ],
        [
          "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
          1
        ],
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          4
        ]
      ],
      "pengunjung": 32,
      "createdAt": "2023-10-01T11:28:33.724Z",
      "daftarMateri": [
        {
          "judul": "Sejarah",
          "materi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "judul": "Pencipta",
          "materi": "<img>https://i.imgur.com/TqPdNrR.jpeg</img>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n        [wikipedia](https://en.wikipedia.org/wiki/Albert_Einstein)\n        <b>This is bold</b>\n        <li>This is list</li>\n        <li>This is list</li>\n        <video>https://www.youtube.com/watch?v=yi2KjoZBYsU</video>"
        }
      ]
    }
  },
  {
    "materiID": 1,
    "alatMusik": "piano",
    "owner": "88ba3d39-2af4-4526-8ab2-97d8b470d061",
    "data": {
      "nama": "Kunci dasar piano",
      "deskripsi": "Mempelajari kunci-kunci piano, mengenalkan kunci-kunci dasar yang sering digunakan",
      "tingkatan": "menengah",
      "rating": [
        [
          "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
          4
        ],
        [
          "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
          2
        ],
        [
          "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
          3
        ],
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          2
        ]
      ],
      "pengunjung": 58,
      "createdAt": "2023-09-28T11:28:33.724Z",
      "daftarMateri": [
        {
          "judul": "Sejarah",
          "materi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "judul": "Pencipta",
          "materi": "<img>https://i.imgur.com/TqPdNrR.jpeg</img>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n        [wikipedia](https://en.wikipedia.org/wiki/Albert_Einstein)\n        <b>This is bold</b>\n        <li>This is list</li>\n        <li>This is list</li>\n        <video>https://www.youtube.com/watch?v=yi2KjoZBYsU</video>"
        }
      ]
    }
  },
  {
    "materiID": 2,
    "alatMusik": "piano",
    "owner": "88ba3d39-2af4-4526-8ab2-97d8b470d061",
    "data": {
      "nama": "Bermain piano seperti pro",
      "deskripsi": "Mengamati dan meniru bagaimana seorang pro bermain piano",
      "tingkatan": "sulit",
      "rating": [
        [
          "e6adfbb7-36ac-4418-90f5-f022a5d436c5",
          2
        ],
        [
          "3a17b9b5-e6f1-4e58-8464-ce80b2b0d821",
          1
        ],
        [
          "aa1a2295-fdcf-47d3-acd9-fd187288ebd7",
          1
        ],
        [
          "862b6cb7-7579-493d-a9b6-dd92ed4ee0cc",
          3
        ]
      ],
      "pengunjung": 49,
      "createdAt": "2022-10-01T11:28:33.724Z",
      "daftarMateri": [
        {
          "judul": "Sejarah",
          "materi": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "judul": "Pencipta",
          "materi": "<img>https://i.imgur.com/TqPdNrR.jpeg</img>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n        [wikipedia](https://en.wikipedia.org/wiki/Albert_Einstein)\n        <b>This is bold</b>\n        <li>This is list</li>\n        <li>This is list</li>\n        <video>https://www.youtube.com/watch?v=yi2KjoZBYsU</video>"
        }
      ]
    }
  }
]

const post = {
  postID: 0,
  owner: UUID,
  title: "post1",
  description: lorem,
  createdAt: "2023-10-01T11:28:33.724Z",
  upvotes: [UUID3, UUID4, UUID5],
  downvotes: [UUID6],
  comments: [
    {
      owner: UUID2,
      content: "halo",
      createdAt: "2023-10-02T11:28:33.724Z",
    },
    {
      owner: UUID,
      content: "halo juga",
      createdAt: "2023-10-02T11:28:35.724Z",
    }
  ]
}
const post2 = {
  postID: 1,
  owner: UUID2,
  title: "post2",
  description: lorem,
  createdAt: "2023-09-01T11:28:33.724Z",
  upvotes: [UUID3],
  downvotes: [UUID4, UUID5, UUID6],
  comments: [
    {
      owner: UUID,
      content: "wow",
      createdAt: "2023-09-01T11:40:33.724Z",
    },
    {
      owner: UUID,
      content: "keren",
      createdAt: "2023-10-10T11:22:33.724Z",
    }
  ]
}

const user1 = {
  "email": "fanes23.pratama@gmail.com",
  "password": "admin123",
  "username": "Admin1",
  "terimaEmail": true,
  "akses": "admin",
  "createdAt": "2023-10-01T11:28:33.724Z"
};
const user2 = {
  "email": "pratama14.f@gmail.com",
  "password": "admins123",
  "username": "Admin2",
  "terimaEmail": false,
  "akses": "admin",
  "createdAt": "2021-10-01T11:28:33.724Z"
};
const user3 = {
  "email": "user3@gmail.com",
  "password": "user3",
  "username": "user3",
  "terimaEmail": false,
  "akses": "user",
  "createdAt": "2022-10-01T11:28:33.724Z"
};
const user4 = {
  "email": "user4@gmail.com",
  "password": "user4",
  "username": "user4",
  "terimaEmail": false,
  "akses": "user",
  "createdAt": "2022-04-15T11:28:33.724Z"
};
const user5 = {
  "email": "user5@gmail.com",
  "password": "user5",
  "username": "user5",
  "terimaEmail": false,
  "akses": "user",
  "createdAt": "2020-12-21T11:28:33.724Z"
};
const user6 = {
  "email": "user6@gmail.com",
  "password": "user6",
  "username": "user6",
  "terimaEmail": false,
  "akses": "user",
  "createdAt": "2023-01-02T11:28:33.724Z"
};

const loginID = "u2PXk66tiR6Uq4nxmyZe8cbQEyxiFusQFr8iSTjVVbqFeDpdjgZCkCPM4eK1HVR4v283DULSxacBUouv";
const loggedUser = { "id": UUID, "email": "fanes23.pratama@gmail.com" };

const clearDatabase = async () => {
  try {
    console.log("[SEEDER] Clearing database...");
    await db_user.deleteAll();
    await db_materi.deleteAll();
    await db_loggedUser.deleteAll();
    await db_forum.deleteAll();
    await db_forgetPass.deleteAll();
  } catch (err) {
    console.log("[SEEDER] Error while clearing database");
    console.log(err);
  } finally {
    console.log("[SEEDER] Database cleared");
  }
}

const seedDatabase = async () => {
  try {
    console.log("[SEEDER] Seeding database...");
    await db_user.set(UUID, user1);
    await db_user.set(UUID2, user2);
    await db_user.set(UUID3, user3);
    await db_user.set(UUID4, user4);
    await db_user.set(UUID5, user5);
    await db_user.set(UUID6, user6);
    await db_materi.set("gitar", materi_gitar);
    await db_materi.set("biola", materi_biola);
    await db_materi.set("piano", materi_piano);
    await db_forum.set(UUID, [post]);
    await db_forum.set(UUID2, [post2]);
  } catch (err) {
    console.log("[SEEDER] Error while seeding database");
    console.log(err);
  } finally {
    console.log("[SEEDER] Database seeded");
  }
}

(async () => {
  await clearDatabase();
  await seedDatabase();
  console.log("[SEEDER] Seeder finished!");
})();