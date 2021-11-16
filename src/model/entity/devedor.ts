import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Devedor')
export class Devedor {
    @PrimaryGeneratedColumn('uuid')
    idDevedor: string;

    @Column('character varying')
    nomeEnteDevedor: string;

    @Column('character varying')
    cnpjEnteDevedor: string;
}

export default { Devedor }
