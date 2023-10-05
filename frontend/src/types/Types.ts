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
    daftarMateri: TDaftarMateri[]
  }
}
export type TDaftarMateri = {
  id: number,
  judul: string,
  materi: string,
}
export type TUser = {
  email: string,
  password: string,
  username: string,
  terimaEmail: boolean,
  img: string
}

