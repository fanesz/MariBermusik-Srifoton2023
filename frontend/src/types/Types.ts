export type TListMateri = {
  materiID: number,
  alatMusik: string,
  owner: string,
  data: {
    nama: string,
    deskripsi: string,
    tingkatan: string,
    rating: [string, number][],
    pengunjung: number,
    createdAt: Date,
    daftarMateri: {
      id: number,
      judul: string,
      materi: string,
      link: string[]
    }[]
  }
}
export type TUser = {
  email: string,
  password: string,
  username: string,
  terimaEmail: boolean,
  img: string
}

