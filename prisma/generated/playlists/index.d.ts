
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model playlists
 * 
 */
export type playlists = $Result.DefaultSelection<Prisma.$playlistsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Playlists
 * const playlists = await prisma.playlists.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Playlists
   * const playlists = await prisma.playlists.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.playlists`: Exposes CRUD operations for the **playlists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlists.findMany()
    * ```
    */
  get playlists(): Prisma.playlistsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    playlists: 'playlists'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "playlists"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      playlists: {
        payload: Prisma.$playlistsPayload<ExtArgs>
        fields: Prisma.playlistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playlistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playlistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          findFirst: {
            args: Prisma.playlistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playlistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          findMany: {
            args: Prisma.playlistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>[]
          }
          create: {
            args: Prisma.playlistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          createMany: {
            args: Prisma.playlistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playlistsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>[]
          }
          delete: {
            args: Prisma.playlistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          update: {
            args: Prisma.playlistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          deleteMany: {
            args: Prisma.playlistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playlistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.playlistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistsPayload>
          }
          aggregate: {
            args: Prisma.PlaylistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylists>
          }
          groupBy: {
            args: Prisma.playlistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.playlistsCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model playlists
   */

  export type AggregatePlaylists = {
    _count: PlaylistsCountAggregateOutputType | null
    _avg: PlaylistsAvgAggregateOutputType | null
    _sum: PlaylistsSumAggregateOutputType | null
    _min: PlaylistsMinAggregateOutputType | null
    _max: PlaylistsMaxAggregateOutputType | null
  }

  export type PlaylistsAvgAggregateOutputType = {
    id: number | null
    itemCount: number | null
  }

  export type PlaylistsSumAggregateOutputType = {
    id: number | null
    itemCount: number | null
  }

  export type PlaylistsMinAggregateOutputType = {
    id: number | null
    playlistId: string | null
    channelId: string | null
    title: string | null
    description: string | null
    image: string | null
    channelTitle: string | null
    defaultLanguage: string | null
    itemCount: number | null
    imageUrl: string | null
    category_1: string | null
    category_2: string | null
    category_3: string | null
    category_4: string | null
    category_5: string | null
    category_6: string | null
    category_7: string | null
    category_8: string | null
    category_9: string | null
    category_10: string | null
  }

  export type PlaylistsMaxAggregateOutputType = {
    id: number | null
    playlistId: string | null
    channelId: string | null
    title: string | null
    description: string | null
    image: string | null
    channelTitle: string | null
    defaultLanguage: string | null
    itemCount: number | null
    imageUrl: string | null
    category_1: string | null
    category_2: string | null
    category_3: string | null
    category_4: string | null
    category_5: string | null
    category_6: string | null
    category_7: string | null
    category_8: string | null
    category_9: string | null
    category_10: string | null
  }

  export type PlaylistsCountAggregateOutputType = {
    id: number
    playlistId: number
    channelId: number
    title: number
    description: number
    image: number
    channelTitle: number
    defaultLanguage: number
    itemCount: number
    imageUrl: number
    category_1: number
    category_2: number
    category_3: number
    category_4: number
    category_5: number
    category_6: number
    category_7: number
    category_8: number
    category_9: number
    category_10: number
    _all: number
  }


  export type PlaylistsAvgAggregateInputType = {
    id?: true
    itemCount?: true
  }

  export type PlaylistsSumAggregateInputType = {
    id?: true
    itemCount?: true
  }

  export type PlaylistsMinAggregateInputType = {
    id?: true
    playlistId?: true
    channelId?: true
    title?: true
    description?: true
    image?: true
    channelTitle?: true
    defaultLanguage?: true
    itemCount?: true
    imageUrl?: true
    category_1?: true
    category_2?: true
    category_3?: true
    category_4?: true
    category_5?: true
    category_6?: true
    category_7?: true
    category_8?: true
    category_9?: true
    category_10?: true
  }

  export type PlaylistsMaxAggregateInputType = {
    id?: true
    playlistId?: true
    channelId?: true
    title?: true
    description?: true
    image?: true
    channelTitle?: true
    defaultLanguage?: true
    itemCount?: true
    imageUrl?: true
    category_1?: true
    category_2?: true
    category_3?: true
    category_4?: true
    category_5?: true
    category_6?: true
    category_7?: true
    category_8?: true
    category_9?: true
    category_10?: true
  }

  export type PlaylistsCountAggregateInputType = {
    id?: true
    playlistId?: true
    channelId?: true
    title?: true
    description?: true
    image?: true
    channelTitle?: true
    defaultLanguage?: true
    itemCount?: true
    imageUrl?: true
    category_1?: true
    category_2?: true
    category_3?: true
    category_4?: true
    category_5?: true
    category_6?: true
    category_7?: true
    category_8?: true
    category_9?: true
    category_10?: true
    _all?: true
  }

  export type PlaylistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlists to aggregate.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playlists
    **/
    _count?: true | PlaylistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistsMaxAggregateInputType
  }

  export type GetPlaylistsAggregateType<T extends PlaylistsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylists[P]>
      : GetScalarType<T[P], AggregatePlaylists[P]>
  }




  export type playlistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlistsWhereInput
    orderBy?: playlistsOrderByWithAggregationInput | playlistsOrderByWithAggregationInput[]
    by: PlaylistsScalarFieldEnum[] | PlaylistsScalarFieldEnum
    having?: playlistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistsCountAggregateInputType | true
    _avg?: PlaylistsAvgAggregateInputType
    _sum?: PlaylistsSumAggregateInputType
    _min?: PlaylistsMinAggregateInputType
    _max?: PlaylistsMaxAggregateInputType
  }

  export type PlaylistsGroupByOutputType = {
    id: number
    playlistId: string | null
    channelId: string | null
    title: string | null
    description: string | null
    image: string | null
    channelTitle: string | null
    defaultLanguage: string | null
    itemCount: number | null
    imageUrl: string | null
    category_1: string | null
    category_2: string | null
    category_3: string | null
    category_4: string | null
    category_5: string | null
    category_6: string | null
    category_7: string | null
    category_8: string | null
    category_9: string | null
    category_10: string | null
    _count: PlaylistsCountAggregateOutputType | null
    _avg: PlaylistsAvgAggregateOutputType | null
    _sum: PlaylistsSumAggregateOutputType | null
    _min: PlaylistsMinAggregateOutputType | null
    _max: PlaylistsMaxAggregateOutputType | null
  }

  type GetPlaylistsGroupByPayload<T extends playlistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistsGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistsGroupByOutputType[P]>
        }
      >
    >


  export type playlistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    channelTitle?: boolean
    defaultLanguage?: boolean
    itemCount?: boolean
    imageUrl?: boolean
    category_1?: boolean
    category_2?: boolean
    category_3?: boolean
    category_4?: boolean
    category_5?: boolean
    category_6?: boolean
    category_7?: boolean
    category_8?: boolean
    category_9?: boolean
    category_10?: boolean
  }, ExtArgs["result"]["playlists"]>

  export type playlistsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    channelTitle?: boolean
    defaultLanguage?: boolean
    itemCount?: boolean
    imageUrl?: boolean
    category_1?: boolean
    category_2?: boolean
    category_3?: boolean
    category_4?: boolean
    category_5?: boolean
    category_6?: boolean
    category_7?: boolean
    category_8?: boolean
    category_9?: boolean
    category_10?: boolean
  }, ExtArgs["result"]["playlists"]>

  export type playlistsSelectScalar = {
    id?: boolean
    playlistId?: boolean
    channelId?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    channelTitle?: boolean
    defaultLanguage?: boolean
    itemCount?: boolean
    imageUrl?: boolean
    category_1?: boolean
    category_2?: boolean
    category_3?: boolean
    category_4?: boolean
    category_5?: boolean
    category_6?: boolean
    category_7?: boolean
    category_8?: boolean
    category_9?: boolean
    category_10?: boolean
  }


  export type $playlistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playlists"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playlistId: string | null
      channelId: string | null
      title: string | null
      description: string | null
      image: string | null
      channelTitle: string | null
      defaultLanguage: string | null
      itemCount: number | null
      imageUrl: string | null
      category_1: string | null
      category_2: string | null
      category_3: string | null
      category_4: string | null
      category_5: string | null
      category_6: string | null
      category_7: string | null
      category_8: string | null
      category_9: string | null
      category_10: string | null
    }, ExtArgs["result"]["playlists"]>
    composites: {}
  }

  type playlistsGetPayload<S extends boolean | null | undefined | playlistsDefaultArgs> = $Result.GetResult<Prisma.$playlistsPayload, S>

  type playlistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<playlistsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaylistsCountAggregateInputType | true
    }

  export interface playlistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playlists'], meta: { name: 'playlists' } }
    /**
     * Find zero or one Playlists that matches the filter.
     * @param {playlistsFindUniqueArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playlistsFindUniqueArgs>(args: SelectSubset<T, playlistsFindUniqueArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Playlists that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {playlistsFindUniqueOrThrowArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playlistsFindUniqueOrThrowArgs>(args: SelectSubset<T, playlistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsFindFirstArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playlistsFindFirstArgs>(args?: SelectSubset<T, playlistsFindFirstArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Playlists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsFindFirstOrThrowArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playlistsFindFirstOrThrowArgs>(args?: SelectSubset<T, playlistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlists.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistsWithIdOnly = await prisma.playlists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playlistsFindManyArgs>(args?: SelectSubset<T, playlistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Playlists.
     * @param {playlistsCreateArgs} args - Arguments to create a Playlists.
     * @example
     * // Create one Playlists
     * const Playlists = await prisma.playlists.create({
     *   data: {
     *     // ... data to create a Playlists
     *   }
     * })
     * 
     */
    create<T extends playlistsCreateArgs>(args: SelectSubset<T, playlistsCreateArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Playlists.
     * @param {playlistsCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlists = await prisma.playlists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playlistsCreateManyArgs>(args?: SelectSubset<T, playlistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {playlistsCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlists = await prisma.playlists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistsWithIdOnly = await prisma.playlists.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playlistsCreateManyAndReturnArgs>(args?: SelectSubset<T, playlistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Playlists.
     * @param {playlistsDeleteArgs} args - Arguments to delete one Playlists.
     * @example
     * // Delete one Playlists
     * const Playlists = await prisma.playlists.delete({
     *   where: {
     *     // ... filter to delete one Playlists
     *   }
     * })
     * 
     */
    delete<T extends playlistsDeleteArgs>(args: SelectSubset<T, playlistsDeleteArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Playlists.
     * @param {playlistsUpdateArgs} args - Arguments to update one Playlists.
     * @example
     * // Update one Playlists
     * const playlists = await prisma.playlists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playlistsUpdateArgs>(args: SelectSubset<T, playlistsUpdateArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Playlists.
     * @param {playlistsDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playlistsDeleteManyArgs>(args?: SelectSubset<T, playlistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlists = await prisma.playlists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playlistsUpdateManyArgs>(args: SelectSubset<T, playlistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlists.
     * @param {playlistsUpsertArgs} args - Arguments to update or create a Playlists.
     * @example
     * // Update or create a Playlists
     * const playlists = await prisma.playlists.upsert({
     *   create: {
     *     // ... data to create a Playlists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlists we want to update
     *   }
     * })
     */
    upsert<T extends playlistsUpsertArgs>(args: SelectSubset<T, playlistsUpsertArgs<ExtArgs>>): Prisma__playlistsClient<$Result.GetResult<Prisma.$playlistsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlists.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends playlistsCountArgs>(
      args?: Subset<T, playlistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistsAggregateArgs>(args: Subset<T, PlaylistsAggregateArgs>): Prisma.PrismaPromise<GetPlaylistsAggregateType<T>>

    /**
     * Group by Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playlistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playlistsGroupByArgs['orderBy'] }
        : { orderBy?: playlistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playlistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playlists model
   */
  readonly fields: playlistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playlists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playlistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the playlists model
   */ 
  interface playlistsFieldRefs {
    readonly id: FieldRef<"playlists", 'Int'>
    readonly playlistId: FieldRef<"playlists", 'String'>
    readonly channelId: FieldRef<"playlists", 'String'>
    readonly title: FieldRef<"playlists", 'String'>
    readonly description: FieldRef<"playlists", 'String'>
    readonly image: FieldRef<"playlists", 'String'>
    readonly channelTitle: FieldRef<"playlists", 'String'>
    readonly defaultLanguage: FieldRef<"playlists", 'String'>
    readonly itemCount: FieldRef<"playlists", 'Int'>
    readonly imageUrl: FieldRef<"playlists", 'String'>
    readonly category_1: FieldRef<"playlists", 'String'>
    readonly category_2: FieldRef<"playlists", 'String'>
    readonly category_3: FieldRef<"playlists", 'String'>
    readonly category_4: FieldRef<"playlists", 'String'>
    readonly category_5: FieldRef<"playlists", 'String'>
    readonly category_6: FieldRef<"playlists", 'String'>
    readonly category_7: FieldRef<"playlists", 'String'>
    readonly category_8: FieldRef<"playlists", 'String'>
    readonly category_9: FieldRef<"playlists", 'String'>
    readonly category_10: FieldRef<"playlists", 'String'>
  }
    

  // Custom InputTypes
  /**
   * playlists findUnique
   */
  export type playlistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists findUniqueOrThrow
   */
  export type playlistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists findFirst
   */
  export type playlistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }

  /**
   * playlists findFirstOrThrow
   */
  export type playlistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }

  /**
   * playlists findMany
   */
  export type playlistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistsOrderByWithRelationInput | playlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playlists.
     */
    cursor?: playlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }

  /**
   * playlists create
   */
  export type playlistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * The data needed to create a playlists.
     */
    data?: XOR<playlistsCreateInput, playlistsUncheckedCreateInput>
  }

  /**
   * playlists createMany
   */
  export type playlistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playlists.
     */
    data: playlistsCreateManyInput | playlistsCreateManyInput[]
  }

  /**
   * playlists createManyAndReturn
   */
  export type playlistsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many playlists.
     */
    data: playlistsCreateManyInput | playlistsCreateManyInput[]
  }

  /**
   * playlists update
   */
  export type playlistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * The data needed to update a playlists.
     */
    data: XOR<playlistsUpdateInput, playlistsUncheckedUpdateInput>
    /**
     * Choose, which playlists to update.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists updateMany
   */
  export type playlistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playlists.
     */
    data: XOR<playlistsUpdateManyMutationInput, playlistsUncheckedUpdateManyInput>
    /**
     * Filter which playlists to update
     */
    where?: playlistsWhereInput
  }

  /**
   * playlists upsert
   */
  export type playlistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * The filter to search for the playlists to update in case it exists.
     */
    where: playlistsWhereUniqueInput
    /**
     * In case the playlists found by the `where` argument doesn't exist, create a new playlists with this data.
     */
    create: XOR<playlistsCreateInput, playlistsUncheckedCreateInput>
    /**
     * In case the playlists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playlistsUpdateInput, playlistsUncheckedUpdateInput>
  }

  /**
   * playlists delete
   */
  export type playlistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
    /**
     * Filter which playlists to delete.
     */
    where: playlistsWhereUniqueInput
  }

  /**
   * playlists deleteMany
   */
  export type playlistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlists to delete
     */
    where?: playlistsWhereInput
  }

  /**
   * playlists without action
   */
  export type playlistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlists
     */
    select?: playlistsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlaylistsScalarFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    channelId: 'channelId',
    title: 'title',
    description: 'description',
    image: 'image',
    channelTitle: 'channelTitle',
    defaultLanguage: 'defaultLanguage',
    itemCount: 'itemCount',
    imageUrl: 'imageUrl',
    category_1: 'category_1',
    category_2: 'category_2',
    category_3: 'category_3',
    category_4: 'category_4',
    category_5: 'category_5',
    category_6: 'category_6',
    category_7: 'category_7',
    category_8: 'category_8',
    category_9: 'category_9',
    category_10: 'category_10'
  };

  export type PlaylistsScalarFieldEnum = (typeof PlaylistsScalarFieldEnum)[keyof typeof PlaylistsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type playlistsWhereInput = {
    AND?: playlistsWhereInput | playlistsWhereInput[]
    OR?: playlistsWhereInput[]
    NOT?: playlistsWhereInput | playlistsWhereInput[]
    id?: IntFilter<"playlists"> | number
    playlistId?: StringNullableFilter<"playlists"> | string | null
    channelId?: StringNullableFilter<"playlists"> | string | null
    title?: StringNullableFilter<"playlists"> | string | null
    description?: StringNullableFilter<"playlists"> | string | null
    image?: StringNullableFilter<"playlists"> | string | null
    channelTitle?: StringNullableFilter<"playlists"> | string | null
    defaultLanguage?: StringNullableFilter<"playlists"> | string | null
    itemCount?: IntNullableFilter<"playlists"> | number | null
    imageUrl?: StringNullableFilter<"playlists"> | string | null
    category_1?: StringNullableFilter<"playlists"> | string | null
    category_2?: StringNullableFilter<"playlists"> | string | null
    category_3?: StringNullableFilter<"playlists"> | string | null
    category_4?: StringNullableFilter<"playlists"> | string | null
    category_5?: StringNullableFilter<"playlists"> | string | null
    category_6?: StringNullableFilter<"playlists"> | string | null
    category_7?: StringNullableFilter<"playlists"> | string | null
    category_8?: StringNullableFilter<"playlists"> | string | null
    category_9?: StringNullableFilter<"playlists"> | string | null
    category_10?: StringNullableFilter<"playlists"> | string | null
  }

  export type playlistsOrderByWithRelationInput = {
    id?: SortOrder
    playlistId?: SortOrderInput | SortOrder
    channelId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    channelTitle?: SortOrderInput | SortOrder
    defaultLanguage?: SortOrderInput | SortOrder
    itemCount?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    category_1?: SortOrderInput | SortOrder
    category_2?: SortOrderInput | SortOrder
    category_3?: SortOrderInput | SortOrder
    category_4?: SortOrderInput | SortOrder
    category_5?: SortOrderInput | SortOrder
    category_6?: SortOrderInput | SortOrder
    category_7?: SortOrderInput | SortOrder
    category_8?: SortOrderInput | SortOrder
    category_9?: SortOrderInput | SortOrder
    category_10?: SortOrderInput | SortOrder
  }

  export type playlistsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: playlistsWhereInput | playlistsWhereInput[]
    OR?: playlistsWhereInput[]
    NOT?: playlistsWhereInput | playlistsWhereInput[]
    playlistId?: StringNullableFilter<"playlists"> | string | null
    channelId?: StringNullableFilter<"playlists"> | string | null
    title?: StringNullableFilter<"playlists"> | string | null
    description?: StringNullableFilter<"playlists"> | string | null
    image?: StringNullableFilter<"playlists"> | string | null
    channelTitle?: StringNullableFilter<"playlists"> | string | null
    defaultLanguage?: StringNullableFilter<"playlists"> | string | null
    itemCount?: IntNullableFilter<"playlists"> | number | null
    imageUrl?: StringNullableFilter<"playlists"> | string | null
    category_1?: StringNullableFilter<"playlists"> | string | null
    category_2?: StringNullableFilter<"playlists"> | string | null
    category_3?: StringNullableFilter<"playlists"> | string | null
    category_4?: StringNullableFilter<"playlists"> | string | null
    category_5?: StringNullableFilter<"playlists"> | string | null
    category_6?: StringNullableFilter<"playlists"> | string | null
    category_7?: StringNullableFilter<"playlists"> | string | null
    category_8?: StringNullableFilter<"playlists"> | string | null
    category_9?: StringNullableFilter<"playlists"> | string | null
    category_10?: StringNullableFilter<"playlists"> | string | null
  }, "id">

  export type playlistsOrderByWithAggregationInput = {
    id?: SortOrder
    playlistId?: SortOrderInput | SortOrder
    channelId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    channelTitle?: SortOrderInput | SortOrder
    defaultLanguage?: SortOrderInput | SortOrder
    itemCount?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    category_1?: SortOrderInput | SortOrder
    category_2?: SortOrderInput | SortOrder
    category_3?: SortOrderInput | SortOrder
    category_4?: SortOrderInput | SortOrder
    category_5?: SortOrderInput | SortOrder
    category_6?: SortOrderInput | SortOrder
    category_7?: SortOrderInput | SortOrder
    category_8?: SortOrderInput | SortOrder
    category_9?: SortOrderInput | SortOrder
    category_10?: SortOrderInput | SortOrder
    _count?: playlistsCountOrderByAggregateInput
    _avg?: playlistsAvgOrderByAggregateInput
    _max?: playlistsMaxOrderByAggregateInput
    _min?: playlistsMinOrderByAggregateInput
    _sum?: playlistsSumOrderByAggregateInput
  }

  export type playlistsScalarWhereWithAggregatesInput = {
    AND?: playlistsScalarWhereWithAggregatesInput | playlistsScalarWhereWithAggregatesInput[]
    OR?: playlistsScalarWhereWithAggregatesInput[]
    NOT?: playlistsScalarWhereWithAggregatesInput | playlistsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"playlists"> | number
    playlistId?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    channelId?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    title?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    description?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    image?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    channelTitle?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    defaultLanguage?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    itemCount?: IntNullableWithAggregatesFilter<"playlists"> | number | null
    imageUrl?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    category_1?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    category_2?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    category_3?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    category_4?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    category_5?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    category_6?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    category_7?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    category_8?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    category_9?: StringNullableWithAggregatesFilter<"playlists"> | string | null
    category_10?: StringNullableWithAggregatesFilter<"playlists"> | string | null
  }

  export type playlistsCreateInput = {
    playlistId?: string | null
    channelId?: string | null
    title?: string | null
    description?: string | null
    image?: string | null
    channelTitle?: string | null
    defaultLanguage?: string | null
    itemCount?: number | null
    imageUrl?: string | null
    category_1?: string | null
    category_2?: string | null
    category_3?: string | null
    category_4?: string | null
    category_5?: string | null
    category_6?: string | null
    category_7?: string | null
    category_8?: string | null
    category_9?: string | null
    category_10?: string | null
  }

  export type playlistsUncheckedCreateInput = {
    id?: number
    playlistId?: string | null
    channelId?: string | null
    title?: string | null
    description?: string | null
    image?: string | null
    channelTitle?: string | null
    defaultLanguage?: string | null
    itemCount?: number | null
    imageUrl?: string | null
    category_1?: string | null
    category_2?: string | null
    category_3?: string | null
    category_4?: string | null
    category_5?: string | null
    category_6?: string | null
    category_7?: string | null
    category_8?: string | null
    category_9?: string | null
    category_10?: string | null
  }

  export type playlistsUpdateInput = {
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    channelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    defaultLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    itemCount?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category_1?: NullableStringFieldUpdateOperationsInput | string | null
    category_2?: NullableStringFieldUpdateOperationsInput | string | null
    category_3?: NullableStringFieldUpdateOperationsInput | string | null
    category_4?: NullableStringFieldUpdateOperationsInput | string | null
    category_5?: NullableStringFieldUpdateOperationsInput | string | null
    category_6?: NullableStringFieldUpdateOperationsInput | string | null
    category_7?: NullableStringFieldUpdateOperationsInput | string | null
    category_8?: NullableStringFieldUpdateOperationsInput | string | null
    category_9?: NullableStringFieldUpdateOperationsInput | string | null
    category_10?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playlistsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    channelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    defaultLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    itemCount?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category_1?: NullableStringFieldUpdateOperationsInput | string | null
    category_2?: NullableStringFieldUpdateOperationsInput | string | null
    category_3?: NullableStringFieldUpdateOperationsInput | string | null
    category_4?: NullableStringFieldUpdateOperationsInput | string | null
    category_5?: NullableStringFieldUpdateOperationsInput | string | null
    category_6?: NullableStringFieldUpdateOperationsInput | string | null
    category_7?: NullableStringFieldUpdateOperationsInput | string | null
    category_8?: NullableStringFieldUpdateOperationsInput | string | null
    category_9?: NullableStringFieldUpdateOperationsInput | string | null
    category_10?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playlistsCreateManyInput = {
    id?: number
    playlistId?: string | null
    channelId?: string | null
    title?: string | null
    description?: string | null
    image?: string | null
    channelTitle?: string | null
    defaultLanguage?: string | null
    itemCount?: number | null
    imageUrl?: string | null
    category_1?: string | null
    category_2?: string | null
    category_3?: string | null
    category_4?: string | null
    category_5?: string | null
    category_6?: string | null
    category_7?: string | null
    category_8?: string | null
    category_9?: string | null
    category_10?: string | null
  }

  export type playlistsUpdateManyMutationInput = {
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    channelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    defaultLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    itemCount?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category_1?: NullableStringFieldUpdateOperationsInput | string | null
    category_2?: NullableStringFieldUpdateOperationsInput | string | null
    category_3?: NullableStringFieldUpdateOperationsInput | string | null
    category_4?: NullableStringFieldUpdateOperationsInput | string | null
    category_5?: NullableStringFieldUpdateOperationsInput | string | null
    category_6?: NullableStringFieldUpdateOperationsInput | string | null
    category_7?: NullableStringFieldUpdateOperationsInput | string | null
    category_8?: NullableStringFieldUpdateOperationsInput | string | null
    category_9?: NullableStringFieldUpdateOperationsInput | string | null
    category_10?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type playlistsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    channelTitle?: NullableStringFieldUpdateOperationsInput | string | null
    defaultLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    itemCount?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category_1?: NullableStringFieldUpdateOperationsInput | string | null
    category_2?: NullableStringFieldUpdateOperationsInput | string | null
    category_3?: NullableStringFieldUpdateOperationsInput | string | null
    category_4?: NullableStringFieldUpdateOperationsInput | string | null
    category_5?: NullableStringFieldUpdateOperationsInput | string | null
    category_6?: NullableStringFieldUpdateOperationsInput | string | null
    category_7?: NullableStringFieldUpdateOperationsInput | string | null
    category_8?: NullableStringFieldUpdateOperationsInput | string | null
    category_9?: NullableStringFieldUpdateOperationsInput | string | null
    category_10?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type playlistsCountOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    channelTitle?: SortOrder
    defaultLanguage?: SortOrder
    itemCount?: SortOrder
    imageUrl?: SortOrder
    category_1?: SortOrder
    category_2?: SortOrder
    category_3?: SortOrder
    category_4?: SortOrder
    category_5?: SortOrder
    category_6?: SortOrder
    category_7?: SortOrder
    category_8?: SortOrder
    category_9?: SortOrder
    category_10?: SortOrder
  }

  export type playlistsAvgOrderByAggregateInput = {
    id?: SortOrder
    itemCount?: SortOrder
  }

  export type playlistsMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    channelTitle?: SortOrder
    defaultLanguage?: SortOrder
    itemCount?: SortOrder
    imageUrl?: SortOrder
    category_1?: SortOrder
    category_2?: SortOrder
    category_3?: SortOrder
    category_4?: SortOrder
    category_5?: SortOrder
    category_6?: SortOrder
    category_7?: SortOrder
    category_8?: SortOrder
    category_9?: SortOrder
    category_10?: SortOrder
  }

  export type playlistsMinOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    channelId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    channelTitle?: SortOrder
    defaultLanguage?: SortOrder
    itemCount?: SortOrder
    imageUrl?: SortOrder
    category_1?: SortOrder
    category_2?: SortOrder
    category_3?: SortOrder
    category_4?: SortOrder
    category_5?: SortOrder
    category_6?: SortOrder
    category_7?: SortOrder
    category_8?: SortOrder
    category_9?: SortOrder
    category_10?: SortOrder
  }

  export type playlistsSumOrderByAggregateInput = {
    id?: SortOrder
    itemCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use playlistsDefaultArgs instead
     */
    export type playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = playlistsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}