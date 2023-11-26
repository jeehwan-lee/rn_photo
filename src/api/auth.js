import {
  getAuth,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signOut as signOutFirebase,
} from "firebase/auth";

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
  return user;
};
