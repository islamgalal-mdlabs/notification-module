import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateRelNotificationUserTable1738089194509 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
