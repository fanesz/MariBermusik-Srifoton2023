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
const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";

const dataMateri = (nama, desc, tingkatan, date) => {
  return {
    "nama": nama,
    "deskripsi": desc,
    "tingkatan": tingkatan,
    "rating": [[UUID3, Math.floor(Math.random() * 5 +1)], [UUID4, Math.floor(Math.random() * 5 +1)], [UUID5, Math.floor(Math.random() * 5 +1)], [UUID6, Math.floor(Math.random() * 5 +1)]],
    "pengunjung": Math.floor(Math.random() * 100),
    "createdAt": date,
    "daftarMateri": [
      {
        "judul": "Sejarah",
        "materi": lorem,

      },
      {
        "judul": "Pencipta",
        "materi": 
        `<img>https://i.imgur.com/TqPdNrR.jpeg</img>
        ${lorem2}
        [wikipedia](https://en.wikipedia.org/wiki/Albert_Einstein)
        <b>This is bold</b>
        <li>This is list</li>
        <li>This is list</li>
        <video>https://www.youtube.com/watch?v=yi2KjoZBYsU</video>`,
      }
    ]
  }
}

const materi = (alatMusik, owner) => {
  return [
    {
      materiID: 0,
      alatMusik: alatMusik,
      owner: owner,
      data: dataMateri(`Dasar Dasar ${alatMusik}`, `Mempelajari Dasar-dasar ${alatMusik}, dimulai dari pengenalan bagian-bagian alat musik, hingga cara bermain`, "pemula", "2023-10-01T11:28:33.724Z")
    },
    {
      materiID: 1,
      alatMusik: alatMusik,
      owner: owner,
      data: dataMateri(`Kunci dasar ${alatMusik}`, `Mempelajari kunci-kunci ${alatMusik}, mengenalkan kunci-kunci dasar yang sering digunakan`, "menengah", "2023-09-28T11:28:33.724Z")
    },
    {
      materiID: 2,
      alatMusik: alatMusik,
      owner: owner,
      data: dataMateri(`Bermain ${alatMusik} seperti pro`, `Mengamati dan meniru bagaimana seorang pro bermain ${alatMusik}`, "sulit", "2022-10-01T11:28:33.724Z")
    }
  ]
}

const post = {
  postID: 0,
  owner: UUID,
  title: "post1",
  description: lorem,
  createdAt: new Date(),
  upvotes: [UUID3, UUID4, UUID5],
  downvotes: [UUID6],
  comments: [
    {
      owner: UUID2,
      content: "halo",
      createdAt: new Date(),
    },
    {
      owner: UUID,
      content: "halo juga",
      createdAt: new Date(),
    }
  ]
}
const post2 = {
  postID: 1,
  owner: UUID2,
  title: "post2",
  description: lorem,
  createdAt: new Date(),
  upvotes: [UUID3],
  downvotes: [UUID4, UUID5, UUID6],
  comments: [
    {
      owner: UUID,
      content: "wow",
      createdAt: new Date(),
    },
    {
      owner: UUID,
      content: "keren",
      createdAt: new Date(),
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
  "img": "",
  "akses": "user",
  "createdAt": "2022-10-01T11:28:33.724Z"
};
const user4 = {
  "email": "user4@gmail.com",
  "password": "user4",
  "username": "user4",
  "terimaEmail": false,
  "img": "",
  "akses": "user",
  "createdAt": "2022-04-15T11:28:33.724Z"
};
const user5 = {
  "email": "user5@gmail.com",
  "password": "user5",
  "username": "user5",
  "terimaEmail": false,
  "img": "",
  "akses": "user",
  "createdAt": "2020-12-21T11:28:33.724Z"
};
const user6 = {
  "email": "user6@gmail.com",
  "password": "user6",
  "username": "user6",
  "terimaEmail": false,
  "img": "",
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
    await db_materi.set("gitar", materi("gitar", UUID));
    await db_materi.set("biola", materi("biola", UUID));
    await db_materi.set("piano", materi("piano", UUID));
    await db_materi.set("gitar", materi("gitar", UUID2));
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