export type TTingkatan = 'Pemula' | 'Menengah' | 'Sulit';
export type TListMateri = {
  materiID: number,
  alatMusik: string,
  owner: string,
  data: {
    nama: string,
    deskripsi: string,
    tingkatan: TTingkatan,
    rating: [string, number][],
    pengunjung: number,
    createdAt: Date,
    daftarMateri: TDaftarMateri[]
  }
}
export type TMateriToPost = {
  nama: string,
  deskripsi: string,
  tingkatan: string,
  daftarMateri: TDaftarMateri[]
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
export type IErrSuccessMsg = {
  type: 'error' | 'success' | '',
  message: string
}
