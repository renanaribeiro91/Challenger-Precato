import { Credor } from '@entity/credor'
import { Devedor } from '@entity/devedor'

export interface IPaymentRequest {
    idRemessa?: string,
    idCredor: Credor,
    idDevedor: Devedor,
    valorInicial: number,
    valorFinal: number,
    data: Date,
    statusRemessa?: string,
    motivo?: string
}
