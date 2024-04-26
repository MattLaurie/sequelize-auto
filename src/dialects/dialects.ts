import { mssqlOptions } from "./mssql";
import { mysqlOptions } from "./mysql";
import { postgresOptions } from "./postgres";
import { sqliteOptions } from "./sqlite";
import { DialectOptions } from "./dialect-options";
import { Dialect } from "sequelize";

export type SupportedDialect = Extract<Dialect, 'mssql' | 'mysql' | 'mariadb' | 'postgres' | 'sqlite'>;

export const dialects: { [name in SupportedDialect]: DialectOptions } = {
  mssql: mssqlOptions,
  mysql: mysqlOptions,
  mariadb: mysqlOptions,
  postgres: postgresOptions,
  sqlite: sqliteOptions
};

export const isSupportedDialect = (dialect: string | Dialect): dialect is SupportedDialect => {
  switch (dialect) {
    case 'mssql':
    case 'mysql':
    case 'mariadb':
    case 'postgres':
    case 'sqlite':
      return true;
  }
  return false;
}

export const getDialect = (dialect: string | Dialect): DialectOptions => {
  if (!isSupportedDialect(dialect)) {
    throw new Error(`Unsupported dialect ${dialect}`);
  }
  return dialects[dialect];
}


