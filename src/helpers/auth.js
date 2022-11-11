import { TOKEN_NAME } from "../constants/env"

export const Token = () => localStorage.getItem(TOKEN_NAME)

export const SetToken = (token) => localStorage.setItem(TOKEN_NAME, Token)

export const DeleteToken = () => localStorage.removeItem(TOKEN_NAME)

export const ClearLocal = () => localStorage.clear()