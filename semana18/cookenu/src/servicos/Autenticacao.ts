import dotenv from 'dotenv'
import { JwtPayload, sign, verify } from 'jsonwebtoken'
import { DadosAutenticador } from '../entidade/DadosAutenticador'

dotenv.config()

export class Autenticacao {

  public gerarToken = (payload: DadosAutenticador): string => {

    const token = sign(payload, "7L5JKB5cNhec8ghQ", { expiresIn: "10h" })

    return token
  }

  public retornaDadosToken = (token: string): DadosAutenticador | null => {
    try {
      const tokenData = verify(token, "7L5JKB5cNhec8ghQ") as JwtPayload

      return {
        id: tokenData.id,
        email: tokenData.email
      }

    } catch (error) {
      console.log(error)
      return null
    }
  }

}