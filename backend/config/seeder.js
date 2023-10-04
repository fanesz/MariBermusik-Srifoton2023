import { QuickDB } from "quick.db";
const db = new QuickDB();

const db_user = db.table("user");
const db_materi = db.table("materi");
const db_loggedUser = db.table("loggedUser");
const db_forum = db.table("forum");
const db_forgetPass = db.table("forgetPass");

const UUID = "88ba3d39-2af4-4526-8ab2-97d8b470d061";
const UUID2 = "59d1756f-5259-4527-bc72-640db97372b5";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const dataMateri = (nama, desc, tingkatan, date) => {
  return {
    "nama": nama,
    "deskripsi": desc,
    "tingkatan": tingkatan,
    "rating": [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5), Math.floor(Math.random() * 5), Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)],
    "pengunjung": Math.floor(Math.random() * 100),
    "createdAt": date,
    "daftarMateri": [
      {
        "id": 0,
        "judul": "Sejarah",
        "materi": lorem,
        "link": [
          "https://youtube.com/",
          "https://youtube.com/"
        ]
      },
      {
        "id": 1,
        "judul": "Pencipta",
        "materi": lorem,
        "link": [
          "https://youtube.com/",
          "https://youtube.com/"
        ]
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
  "img": "https://i.imgur.com/OXMLZLo.png",
  "akses": "admin",
  "createdAt": "2023-10-01T11:28:33.724Z"
};
const user2 = {
  "email": "pratama14.f@gmail.com",
  "password": "admins123",
  "username": "Admin2",
  "terimaEmail": false,
  "img": "https://i.imgur.com/5XlFTpa.png",
  "akses": "admin",
  "createdAt": "2021-10-01T11:28:33.724Z"
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
    await db_materi.set("gitar", materi("gitar", UUID));
    await db_materi.set("biola", materi("biola", UUID));
    await db_materi.set("piano", materi("piano", UUID));
    await db_materi.set("gitar", materi("gitar", UUID2));
    await db_forum.set(UUID, post);
    await db_forum.set(UUID2, post2);
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