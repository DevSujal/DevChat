import { auth, app } from "./firebase";
class Auth {
  constructor() {
    this.auth = auth;
    this.app = app;
  }
  async signUp({ email, password }) {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!userCredential) {
        throw new Error("something went wrong while creating user");
      }

      return userCredential;
    } catch (error) {
      throw new Error(error?.message || "something went wrong on sign up");
    }
  }

  // Sign In
  signIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Sign out
  signOut() {
    return this.auth.signOut();
  }

  // Password Reset
  passwordReset(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  // Password Change
  passwordUpdate(password) {
    return this.auth.currentUser.updatePassword(password);
  }
}

const authSrvice = new Auth();

export default authSrvice
