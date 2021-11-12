/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, PrimaryColumn, Timestamp, Double, OneToOne, JoinColumn } from 'typeorm'
import { Credor } from './credor'
import { Devedor } from './devedor'

@Entity('Payment')
export class Payment {
    @PrimaryColumn('uuid')
    id: number;

    @Column('character varying')
    identificadorRemessa: string;

    @OneToOne(type => Credor)
    @JoinColumn()
    Idcredor : Credor

    @OneToOne(type => Devedor)
    @JoinColumn()
    Iddevedor : Devedor

    @Column('decimal', { precision: 10, scale: 2 })
    valorInicial: Double;

    @Column('decimal', { precision: 10, scale: 2 })
    valorFinal: Double;

    @Column()
    data : Timestamp

    @Column('character varying')
    statusRemessa: string

    @Column('character varying')
    motivo : string | null
}
export default { Payment }
