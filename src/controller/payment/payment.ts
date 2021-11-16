import { Request, Response } from 'express'
import { create, findAll, findOne } from '@repository/payment/payment'
import { findOneCredor } from '@repository/credor/credor'
import { findOneDevedor } from '@repository/devedor/devedor'
import { IPaymentRequest } from '../../model/interfaces/PaymentRequest'

const findAllPaymentsController = async (req:Request, res:Response):Promise<Response> => {
  try {
    const payment = await findAll()
    return res.status(200).send(payment)
  } catch (err) {
    return err
  }
}

const findOnePaymentsController = async (req:Request, res:Response):Promise<Response> => {
  const { _id } = req.params
  try {
    const payment = await findOne(_id)
    return res.status(200).send(payment)
  } catch (err) {
    return err
  }
}

const createPaymentsController = async (req:Request, res:Response): Promise<Response> => {
  try {
    const {
      idRemessa,
      idCredor,
      idDevedor,
      valorInicial,
      valorFinal
    } = req.body

    const data = new Date().getTime().toString()

    const paymentRequest: IPaymentRequest = {
      idCredor,
      idDevedor,
      valorInicial,
      valorFinal,
      data
    }

    const credor = await findOneCredor(idCredor)

    if (credor.statusCadastro !== 'APROVADO') {
      paymentRequest.statusRemessa = 'INVALIDO'
      paymentRequest.motivo = 'Não existe ente devedor'
      const payment = await create(req.body)
      return res.status(200).send(payment)
    }

    const devedor = await findOneDevedor(idDevedor)

    if (!devedor) {
      paymentRequest.statusRemessa = 'INVALIDO'
      paymentRequest.motivo = 'Não existe ente devedor'
      const payment = await create(req.body)
      return res.status(200).send(payment)
    }

    if (valorInicial < 0 || valorFinal < 0) {
      paymentRequest.statusRemessa = 'INVALIDO'
      paymentRequest.motivo = 'Valores inicais e finais tem que ser maiores que 0'
      const payment = await create(req.body)
      return res.status(200).send(payment)
    }

    if (valorFinal > valorInicial) {
      paymentRequest.statusRemessa = 'INVALIDO'
      paymentRequest.motivo = 'Valor final não pode ser maior que o valor inicial'
      const payment = await create(req.body)
      return res.status(200).send(payment)
    }

    if (idRemessa && credor.payment) {
      const payment = credor.payment.find(e => e.identificadorRemessa === idRemessa)

      if (payment) {
        paymentRequest.statusRemessa = 'INVALIDO'
        paymentRequest.motivo = 'Não podem existir duas remessas para o mesmo credor'
        const payment = await create(req.body)
        return res.status(200).send(payment)
      }
    }

    paymentRequest.statusRemessa = 'VALIDO'
    paymentRequest.motivo = null
    const payment = await create(req.body)
    return res.status(200).send(payment)
  } catch (err) {
    throw new Error(err)
  }
}

export {
  findAllPaymentsController,
  findOnePaymentsController,
  createPaymentsController
}
