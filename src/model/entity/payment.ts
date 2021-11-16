/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, Double, OneToOne, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Credor } from './credor'
import { Devedor } from './devedor'

@Entity('Payment')
export class Payment {
    @PrimaryGeneratedColumn('uuid')
    idRemessa: string;

    @ManyToOne(type => Credor, credor => credor.idCredor)
    @JoinColumn()
    idCredor : Credor

    @OneToOne(type => Devedor)
    @JoinColumn()
    idDevedor : Devedor

    @Column('decimal', { precision: 10, scale: 2 })
    valorInicial: Double;

    @Column('decimal', { precision: 10, scale: 2 })
    valorFinal: Double;

    @Column({ type: 'timestamp', nullable: true })
    data: Date;

    @Column('character varying')
    statusRemessa: string

    @Column('character varying')
    motivo : string | null
}
export default { Payment }
