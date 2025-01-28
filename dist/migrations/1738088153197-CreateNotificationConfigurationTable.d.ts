import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateNotificationConfigurationTable1738088153197 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
