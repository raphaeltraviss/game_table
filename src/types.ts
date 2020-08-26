type LoginFormProps = {
  loginAction: (arg1: string, arg2: string) => void
  logoutAction: () => void
  user: object | null
}


type FirebaseErrorCode = 'auth/email-already-in-use' |
        'auth/invalid-email' |
        'auth/operation-not-allowed';

type FirebaseErrorMessageProps = {
  error?: {
    code: FirebaseErrorCode
  }
}

