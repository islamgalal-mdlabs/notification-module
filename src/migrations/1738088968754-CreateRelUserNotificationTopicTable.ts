import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { baseColumns } from "../utils/migrations/get-base-columns";

export class CreateRelUserNotificationTopicTable1738088968754 implements MigrationInterface {
  private tableName: string = 'rel_user_notification_topic';

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
          indices: [
            {
              name: `IDX_${this.tableName}_notificationId`,
              columnNames: ['notificationId'],
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
