import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('Credor')
export class Credor {
    @PrimaryColumn('uuid')
    id: number;

    @Column()
    identificadorCredor: string;

    @Column()
    nomeCredor: string;

    @Column()
    cpfCredor: string;

    @Column()
    statusCadastro: string;
}

export default { Credor }
