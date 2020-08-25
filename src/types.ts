type LoginFormProps = {
  loginAction: (arg1: string, arg2: string) => void
  logoutAction: () => void
  user: object | null
}
