"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseColumns = void 0;
exports.baseColumns = [
    {
        name: 'id',
        type: 'int4',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
    },
    {
        name: 'createdDate',
        type: 'timestamptz',
        isNullable: true,
        default: 'now()',
    },
    {
        name: 'createdBy',
        type: 'varchar',
        isNullable: true,
    },
    {
        name: 'lastModifiedDate',
        type: 'timestamptz',
        isNullable: true,
    },
    {
        name: 'lastModifiedBy',
        type: 'varchar',
        isNullable: true,
    },
];
//# sourceMappingURL=get-base-columns.js.map