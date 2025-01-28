import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateRelUserNotificationTopicTable1738088968754 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
