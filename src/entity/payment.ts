/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryColumn, Timestamp, Double, OneToOne, JoinColumn } from 'typeorm'
import { Credor } from './credor'
import { Devedor } from './devedor'

@Entity('Payment')
export class Payment {
    @PrimaryColumn('uuid')
    id: number;

    @Column()
    identificadorRemessa: string;

    @OneToOne(type => Credor)
    @JoinColumn()
    credor : Credor

    @OneToOne(type => Devedor)
    @JoinColumn()
    devedor : Devedor

    @Column()
    valorInicial: Double;

    @Column()
    valorFinal: Double;

    @Column()
    data : Timestamp

    @Column()
    statusRemessa: string

    @Column()
    motivo : string | null
}
export default { Payment }
