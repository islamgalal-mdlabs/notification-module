import { MigrationInterface, QueryRunner } from 'typeorm';

export abstract class BaseMigration implements MigrationInterface {
  protected abstract tableName: string;

  public abstract up(queryRunner: QueryRunner): Promise<void>;
  public abstract down(queryRunner: QueryRunner): Promise<void>;

  protected async handleError(error: any, operation: string): Promise<void> {
    console.error(`Failed to ${operation} ${this.tableName}:`, error);
    throw error;
  }
} 