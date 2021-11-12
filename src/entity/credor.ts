import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('Credor')
export class Credor {
    @PrimaryColumn('uuid')
    id: number;

    @Column('character varying')
    identificadorCredor: string;

    @Column('character varying')
    nomeCredor: string;

    @Column('character varying')
    cpfCredor: string;

    @Column('character varying')
    statusCadastro: string;
}

export default { Credor }
