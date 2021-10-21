import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class Criptografia {

  public geraHash = (plainText: string): string => {
    const cost = 12
    const salt = genSaltSync(cost)
    const cipherText = hashSync(plainText, salt)

    return cipherText
  }

  public comparaHash = (
    plainText: string,
    cipherText: string
  ) => {
    const result = compareSync(plainText, cipherText)

    return result
  }
}

