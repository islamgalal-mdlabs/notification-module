import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateNotificationTable1738087729217 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
