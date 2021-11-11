import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('Devedor')
export class Devedor {
    @PrimaryColumn('uuid')
    id: number;

    @Column()
    identificadorEnteDevedor: string;

    @Column()
    nomeEnteDevedor: string;

    @Column()
    cnpjEnteDevedor: string;
}

export default { Devedor }
