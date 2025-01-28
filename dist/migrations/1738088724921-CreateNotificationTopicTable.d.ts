import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateNotificationTopicTable1738088724921 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
