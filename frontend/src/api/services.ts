import api from ".";

const ENDPOINT = {
  user: '/user',
  materi: '/materi',
  login: '/login',
  forgetPass: '/forgetPass',
  forum: '/forum',
}

const param = (paramArr: string[]) => {
  let params = "";
  for (let i = 0; i < paramArr.length; i++) {
    params += `?${paramArr[i]}=${paramArr[i]}`
  }
  return params;
}

// === USER ===

export const getUser = async () => {
  try {
    const res = await api.get(ENDPOINT.user);
    return res;
  } catch (err) {
    return false;
  }
}

export const getUserByLoginID = async (loginID: string) => {
  try {
    const res = await api.get(ENDPOINT.user + param([loginID]));
    return res;
  } catch (err) {
    return false;
  }
}

export const createUser = async (email: string, password: string, username: string) => {
  try {
    const res = await api.post(ENDPOINT.user, {
      email: email,
      password: password,
      username: username
    });
    return res;
  } catch (err) {
    return false;
  }
}

export const updateUsername = async (email: string, username: string) => {
  try {
    const res = await api.patch(ENDPOINT.user, {
      email: email,
      username: username
    });
    return res;
  } catch (err) {
    return false;
  }
}

// === MATERI ===

export const getMateriByAlatMusik = async (alatMusik: string, materiID: string) => {
  try {
    const res = await api.get(ENDPOINT.materi + param([alatMusik, materiID]));
    return res;
  } catch (err) {
    return false;
  }
}

export const getAlatMusikList = async () => {
  try {
    const res = await api.get(ENDPOINT.materi);
    return res;
  } catch (err) {
    return false;
  }
}

export const createMateri = async (loginID: string, alatMusik: string, materi: any) => {
  try {
    const res = await api.post(ENDPOINT.materi, {
      loginID: loginID,
      alatMusik: alatMusik,
      materi: materi
    });
    return res;
  } catch (err) {
    return false;
  }
}

export const editMateriByID = async (loginID: string, alatMusik: string, materiID: string, materi: any) => {
  try {
    const res = await api.patch(ENDPOINT.materi, {
      loginID: loginID,
      alatMusik: alatMusik,
      materiID: materiID,
      materi: materi
    });
    return res;
  } catch (err) {
    return false;
  }
}

export const deleteMateriByID = async (alatMusik: string, materiID: string) => {
  try {
    const res = await api.delete(ENDPOINT.materi + param([alatMusik, materiID]));
    return res;
  } catch (err) {
    return false;
  }
}

// === LOGIN ===

export const getLoginUser = async () => {
  try {
    const res = await api.get(ENDPOINT.login);
    return res;
  } catch (err) {
    return false;
  }
}

export const setLogin = async (email: string, password: string) => {
  try {
    const res = await api.post(ENDPOINT.login, {
      email: email,
      password: password
    });
    return res;
  } catch (err) {
    return false;
  }
}

export const setLogout = async (loginID: string) => {
  try {
    const res = await api.delete(ENDPOINT.login + param([loginID]));
    return res;
  } catch (err) {
    return false;
  }
}

export const isLogin = async (loginID: string) => {
  try {
    const res = await api.get(ENDPOINT.login + "/islogin" + param([loginID]));
    return res;
  } catch (err) {
    return false;
  }
}

// === FORGETPASS ===
export const setSendVerificationCode = async (email: string) => {
  try {
    const res = await api.post(ENDPOINT.forgetPass, {
      email: email
    });
    return res;
  } catch (err) {
    return false;
  }
}

export const validatorVerificationCode = async (id: string) => {
  try {
    const res = await api.get(ENDPOINT.forgetPass + param([id]));
    return res;
  } catch (err) {
    return false;
  }
}

export const resetPassword = async (email: string, newPassword: string) => {
  try {
    const res = await api.post(ENDPOINT.forgetPass + "/newPassword", {
      email: email,
      newPassword: newPassword
    });
    return res;
  } catch (err) {
    return false;
  }
}

// === FORUM ===

export const getPost = async () => {
  try {
    const res = await api.get(ENDPOINT.forum);
    return res;
  } catch (err) {
    return false;
  }
}

export const getPostByOwner = async (loginID: string) => {
  try {
    const res = await api.get(ENDPOINT.forum + param([loginID]));
    return res;
  } catch (err) {
    return false;
  }
}

export const createPost = async (loginID: string, title: string, description: string) => {
  try {
    const res = await api.post(ENDPOINT.forum, {
      loginID: loginID,
      title: title,
      description: description
    });
    return res;
  } catch (err) {
    return false;
  }
}

export const editPost = async (loginID: string, postID: string, title: string, description: string) => {
  try {
    const res = await api.patch(ENDPOINT.forum, {
      loginID: loginID,
      postID: postID,
      title: title,
      description: description
    });
    return res;
  } catch (err) {
    return false;
  }
}


export const deletePost = async (loginID: string, postID: string) => {
  try {
    const res = await api.delete(ENDPOINT.forum + param([loginID, postID]));
    return res;
  } catch (err) {
    return false;
  }
}
