import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { baseColumns } from "../utils/migrations/get-base-columns";

export class CreateRelNotificationUserTable1738089194509 implements MigrationInterface {

  private tableName: string = 'rel_notification_user';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const [idColumn, ...otherBaseColumns] = baseColumns;
    try {
      await queryRunner.createTable(
        new Table({
          name: this.tableName,
          columns: [
            idColumn,
            {
              name: 'userId',
              type: 'int4',
            },
            ...otherBaseColumns,
          ],
          foreignKeys: [
            {
              columnNames: ['notificationId'],
              referencedColumnNames: ['id'],
              referencedTableName: 'notification',
              onDelete: 'CASCADE',
              name: `${this.tableName}_notificationId_fk`,
            },
          ],
          uniques: [
            {
              name: `UQ_${this.tableName}_userId_notificationId`,
              columnNames: ['userId', 'notificationId'],
            },
          ],
        }),
        false,
      );
    } catch (error) {
      console.error(`Failed to create ${this.tableName} table:`, error);
      throw error;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.dropTable(this.tableName, true);
    } catch (error) {
      console.error(`Failed to drop ${this.tableName} table:`, error);
      throw error;
    }
  }
}
