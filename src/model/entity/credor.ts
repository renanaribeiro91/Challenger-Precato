import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Payment } from './payment'

@Entity('Credor')
export class Credor {
    @PrimaryGeneratedColumn('uuid')
    idCredor: string

    @Column('character varying')
    nomeCredor: string

    @Column('character varying')
    cpfCredor: string

    @Column('character varying')
    statusCadastro: string

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @OneToMany(type => Payment, payment => payment.idRemessa)
    payment: Payment[]
}

export default { Credor }
