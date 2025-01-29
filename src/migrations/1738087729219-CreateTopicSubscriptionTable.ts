import { MigrationInterface, QueryRunner, Table, TableIndex, TableForeignKey } from "typeorm";
import { baseColumns } from "../utils/migrations/get-base-columns";

export class CreateTopicSubscriptionTable1738087729219 implements MigrationInterface {
  private tableName: string = 'topic_subscriptions';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const [idColumn, ...otherBaseColumns] = baseColumns;
    try {
      await queryRunner.createTable(
        new Table({
          name: this.tableName,
          columns: [
            idColumn,
            {
              name: 'subscriber_id',
              type: 'uuid',
            },
            {
              name: 'topic_id',
              type: 'uuid',
            },
            {
              name: 'is_active',
              type: 'boolean',
              default: true,
            },
            {
              name: 'preferences',
              type: 'jsonb',
              isNullable: true,
            },
            ...otherBaseColumns,
          ],
        }),
        false,
      );

      // Create indexes
      await queryRunner.createIndex(
        this.tableName,
        new TableIndex({
          name: `IDX_${this.tableName}_subscriber_topic`,
          columnNames: ['subscriber_id', 'topic_id'],
          isUnique: true,
        })
      );

      // Create foreign key
      await queryRunner.createForeignKey(
        this.tableName,
        new TableForeignKey({
          name: `FK_${this.tableName}_topic`,
          columnNames: ['topic_id'],
          referencedTableName: 'notification_topics',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
        })
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