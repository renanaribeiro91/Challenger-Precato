import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('Devedor')
export class Devedor {
    @PrimaryColumn('uuid')
    id: number;

    @Column('character varying')
    identificadorEnteDevedor: string;

    @Column('character varying')
    nomeEnteDevedor: string;

    @Column('character varying')
    cnpjEnteDevedor: string;
}

export default { Devedor }
