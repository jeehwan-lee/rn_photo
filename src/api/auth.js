import {
  getAuth,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signOut as signOutFirebase,
  updateProfile,
} from "firebase/auth";

const PHOTO_URL =
  "https://firebasestorage.googleapis.com/v0/b/rn-photo-8aa8c.appspot.com/o/profile.png?alt=media";

export const signIn = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);

  return user;
};

export const signOut = async () => {
  await signOutFirebase(getAuth());
};

export const getAuthErrorMessages = (errorCode) => {
  console.log(errorCode);
  switch (errorCode) {
    case AuthErrorCodes.INVALID_EMAIL:
      return "이메일 형식에 맞지 않는 아이디입니다.";
    case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
      return "아이디와 비밀번호를 확인해주세요.";
    case AuthErrorCodes.EMAIL_EXISTS:
      return "이미 가입된 아이디입니다.";
    case AuthErrorCodes.WEAK_PASSWORD:
      return "비밀번호는 최소 6자리입니다.";
    default:
      return "로그인에 실패했습니다.";
  }
  return "아이디와 비밀번호를 확인해주세요.";
};

export const signUp = async ({ email, password }) => {
  const { user } = await createUserWithEmailAndPassword(
    getAuth(),
    email,
    password
  );

  await updateUserInfo({
    displayName: email.split("@")[0].slice(0, 10),
    photoURL: PHOTO_URL,
  });
  return user;
};

export const updateUserInfo = async (userInfo) => {
  try {
    await updateProfile(getAuth().currentUser, userInfo);
  } catch (e) {
    throw new Error("사용자 정보 수정에 실패했습니다.");
  }
};
