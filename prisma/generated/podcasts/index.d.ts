
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
 * Model podcasts
 * 
 */
export type podcasts = $Result.DefaultSelection<Prisma.$podcastsPayload>
/**
 * Model genres
 * 
 */
export type genres = $Result.DefaultSelection<Prisma.$genresPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Podcasts
 * const podcasts = await prisma.podcasts.findMany()
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
   * // Fetch zero or more Podcasts
   * const podcasts = await prisma.podcasts.findMany()
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
   * `prisma.podcasts`: Exposes CRUD operations for the **podcasts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Podcasts
    * const podcasts = await prisma.podcasts.findMany()
    * ```
    */
  get podcasts(): Prisma.podcastsDelegate<ExtArgs>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.genresDelegate<ExtArgs>;
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
    podcasts: 'podcasts',
    genres: 'genres'
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
      modelProps: "podcasts" | "genres"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      podcasts: {
        payload: Prisma.$podcastsPayload<ExtArgs>
        fields: Prisma.podcastsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.podcastsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$podcastsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.podcastsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$podcastsPayload>
          }
          findFirst: {
            args: Prisma.podcastsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$podcastsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.podcastsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$podcastsPayload>
          }
          findMany: {
            args: Prisma.podcastsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$podcastsPayload>[]
          }
          create: {
            args: Prisma.podcastsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$podcastsPayload>
          }
          createMany: {
            args: Prisma.podcastsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.podcastsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$podcastsPayload>[]
          }
          delete: {
            args: Prisma.podcastsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$podcastsPayload>
          }
          update: {
            args: Prisma.podcastsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$podcastsPayload>
          }
          deleteMany: {
            args: Prisma.podcastsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.podcastsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.podcastsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$podcastsPayload>
          }
          aggregate: {
            args: Prisma.PodcastsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePodcasts>
          }
          groupBy: {
            args: Prisma.podcastsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PodcastsGroupByOutputType>[]
          }
          count: {
            args: Prisma.podcastsCountArgs<ExtArgs>
            result: $Utils.Optional<PodcastsCountAggregateOutputType> | number
          }
        }
      }
      genres: {
        payload: Prisma.$genresPayload<ExtArgs>
        fields: Prisma.genresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.genresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.genresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findFirst: {
            args: Prisma.genresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.genresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findMany: {
            args: Prisma.genresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          create: {
            args: Prisma.genresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          createMany: {
            args: Prisma.genresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.genresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          delete: {
            args: Prisma.genresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          update: {
            args: Prisma.genresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          deleteMany: {
            args: Prisma.genresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.genresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.genresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.genresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.genresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
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
   * Model podcasts
   */

  export type AggregatePodcasts = {
    _count: PodcastsCountAggregateOutputType | null
    _avg: PodcastsAvgAggregateOutputType | null
    _sum: PodcastsSumAggregateOutputType | null
    _min: PodcastsMinAggregateOutputType | null
    _max: PodcastsMaxAggregateOutputType | null
  }

  export type PodcastsAvgAggregateOutputType = {
    id: number | null
    lastUpdate: number | null
    lastHttpStatus: number | null
    dead: number | null
    itunesId: number | null
    explicit: number | null
    newestItemPubdate: number | null
    oldestItemPubdate: number | null
    episodeCount: number | null
    popularityScore: number | null
    priority: number | null
    createdOn: number | null
    updateFrequency: number | null
    newestEnclosureDuration: number | null
  }

  export type PodcastsSumAggregateOutputType = {
    id: number | null
    lastUpdate: number | null
    lastHttpStatus: number | null
    dead: number | null
    itunesId: number | null
    explicit: number | null
    newestItemPubdate: number | null
    oldestItemPubdate: number | null
    episodeCount: number | null
    popularityScore: number | null
    priority: number | null
    createdOn: number | null
    updateFrequency: number | null
    newestEnclosureDuration: number | null
  }

  export type PodcastsMinAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    lastUpdate: number | null
    link: string | null
    lastHttpStatus: number | null
    dead: number | null
    contentType: string | null
    itunesId: number | null
    originalUrl: string | null
    itunesAuthor: string | null
    itunesOwnerName: string | null
    explicit: number | null
    imageUrl: string | null
    itunesType: string | null
    generator: string | null
    newestItemPubdate: number | null
    language: string | null
    oldestItemPubdate: number | null
    episodeCount: number | null
    popularityScore: number | null
    priority: number | null
    createdOn: number | null
    updateFrequency: number | null
    chash: string | null
    host: string | null
    newestEnclosureUrl: string | null
    podcastGuid: string | null
    description: string | null
    category1: string | null
    category2: string | null
    category3: string | null
    category4: string | null
    category5: string | null
    category6: string | null
    category7: string | null
    category8: string | null
    category9: string | null
    category10: string | null
    newestEnclosureDuration: number | null
  }

  export type PodcastsMaxAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    lastUpdate: number | null
    link: string | null
    lastHttpStatus: number | null
    dead: number | null
    contentType: string | null
    itunesId: number | null
    originalUrl: string | null
    itunesAuthor: string | null
    itunesOwnerName: string | null
    explicit: number | null
    imageUrl: string | null
    itunesType: string | null
    generator: string | null
    newestItemPubdate: number | null
    language: string | null
    oldestItemPubdate: number | null
    episodeCount: number | null
    popularityScore: number | null
    priority: number | null
    createdOn: number | null
    updateFrequency: number | null
    chash: string | null
    host: string | null
    newestEnclosureUrl: string | null
    podcastGuid: string | null
    description: string | null
    category1: string | null
    category2: string | null
    category3: string | null
    category4: string | null
    category5: string | null
    category6: string | null
    category7: string | null
    category8: string | null
    category9: string | null
    category10: string | null
    newestEnclosureDuration: number | null
  }

  export type PodcastsCountAggregateOutputType = {
    id: number
    url: number
    title: number
    lastUpdate: number
    link: number
    lastHttpStatus: number
    dead: number
    contentType: number
    itunesId: number
    originalUrl: number
    itunesAuthor: number
    itunesOwnerName: number
    explicit: number
    imageUrl: number
    itunesType: number
    generator: number
    newestItemPubdate: number
    language: number
    oldestItemPubdate: number
    episodeCount: number
    popularityScore: number
    priority: number
    createdOn: number
    updateFrequency: number
    chash: number
    host: number
    newestEnclosureUrl: number
    podcastGuid: number
    description: number
    category1: number
    category2: number
    category3: number
    category4: number
    category5: number
    category6: number
    category7: number
    category8: number
    category9: number
    category10: number
    newestEnclosureDuration: number
    _all: number
  }


  export type PodcastsAvgAggregateInputType = {
    id?: true
    lastUpdate?: true
    lastHttpStatus?: true
    dead?: true
    itunesId?: true
    explicit?: true
    newestItemPubdate?: true
    oldestItemPubdate?: true
    episodeCount?: true
    popularityScore?: true
    priority?: true
    createdOn?: true
    updateFrequency?: true
    newestEnclosureDuration?: true
  }

  export type PodcastsSumAggregateInputType = {
    id?: true
    lastUpdate?: true
    lastHttpStatus?: true
    dead?: true
    itunesId?: true
    explicit?: true
    newestItemPubdate?: true
    oldestItemPubdate?: true
    episodeCount?: true
    popularityScore?: true
    priority?: true
    createdOn?: true
    updateFrequency?: true
    newestEnclosureDuration?: true
  }

  export type PodcastsMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    lastUpdate?: true
    link?: true
    lastHttpStatus?: true
    dead?: true
    contentType?: true
    itunesId?: true
    originalUrl?: true
    itunesAuthor?: true
    itunesOwnerName?: true
    explicit?: true
    imageUrl?: true
    itunesType?: true
    generator?: true
    newestItemPubdate?: true
    language?: true
    oldestItemPubdate?: true
    episodeCount?: true
    popularityScore?: true
    priority?: true
    createdOn?: true
    updateFrequency?: true
    chash?: true
    host?: true
    newestEnclosureUrl?: true
    podcastGuid?: true
    description?: true
    category1?: true
    category2?: true
    category3?: true
    category4?: true
    category5?: true
    category6?: true
    category7?: true
    category8?: true
    category9?: true
    category10?: true
    newestEnclosureDuration?: true
  }

  export type PodcastsMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    lastUpdate?: true
    link?: true
    lastHttpStatus?: true
    dead?: true
    contentType?: true
    itunesId?: true
    originalUrl?: true
    itunesAuthor?: true
    itunesOwnerName?: true
    explicit?: true
    imageUrl?: true
    itunesType?: true
    generator?: true
    newestItemPubdate?: true
    language?: true
    oldestItemPubdate?: true
    episodeCount?: true
    popularityScore?: true
    priority?: true
    createdOn?: true
    updateFrequency?: true
    chash?: true
    host?: true
    newestEnclosureUrl?: true
    podcastGuid?: true
    description?: true
    category1?: true
    category2?: true
    category3?: true
    category4?: true
    category5?: true
    category6?: true
    category7?: true
    category8?: true
    category9?: true
    category10?: true
    newestEnclosureDuration?: true
  }

  export type PodcastsCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    lastUpdate?: true
    link?: true
    lastHttpStatus?: true
    dead?: true
    contentType?: true
    itunesId?: true
    originalUrl?: true
    itunesAuthor?: true
    itunesOwnerName?: true
    explicit?: true
    imageUrl?: true
    itunesType?: true
    generator?: true
    newestItemPubdate?: true
    language?: true
    oldestItemPubdate?: true
    episodeCount?: true
    popularityScore?: true
    priority?: true
    createdOn?: true
    updateFrequency?: true
    chash?: true
    host?: true
    newestEnclosureUrl?: true
    podcastGuid?: true
    description?: true
    category1?: true
    category2?: true
    category3?: true
    category4?: true
    category5?: true
    category6?: true
    category7?: true
    category8?: true
    category9?: true
    category10?: true
    newestEnclosureDuration?: true
    _all?: true
  }

  export type PodcastsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which podcasts to aggregate.
     */
    where?: podcastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of podcasts to fetch.
     */
    orderBy?: podcastsOrderByWithRelationInput | podcastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: podcastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned podcasts
    **/
    _count?: true | PodcastsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PodcastsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PodcastsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PodcastsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PodcastsMaxAggregateInputType
  }

  export type GetPodcastsAggregateType<T extends PodcastsAggregateArgs> = {
        [P in keyof T & keyof AggregatePodcasts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePodcasts[P]>
      : GetScalarType<T[P], AggregatePodcasts[P]>
  }




  export type podcastsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: podcastsWhereInput
    orderBy?: podcastsOrderByWithAggregationInput | podcastsOrderByWithAggregationInput[]
    by: PodcastsScalarFieldEnum[] | PodcastsScalarFieldEnum
    having?: podcastsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PodcastsCountAggregateInputType | true
    _avg?: PodcastsAvgAggregateInputType
    _sum?: PodcastsSumAggregateInputType
    _min?: PodcastsMinAggregateInputType
    _max?: PodcastsMaxAggregateInputType
  }

  export type PodcastsGroupByOutputType = {
    id: number
    url: string
    title: string
    lastUpdate: number | null
    link: string
    lastHttpStatus: number | null
    dead: number | null
    contentType: string
    itunesId: number | null
    originalUrl: string
    itunesAuthor: string
    itunesOwnerName: string
    explicit: number | null
    imageUrl: string
    itunesType: string
    generator: string
    newestItemPubdate: number | null
    language: string
    oldestItemPubdate: number | null
    episodeCount: number | null
    popularityScore: number | null
    priority: number | null
    createdOn: number | null
    updateFrequency: number | null
    chash: string
    host: string
    newestEnclosureUrl: string
    podcastGuid: string
    description: string
    category1: string
    category2: string
    category3: string
    category4: string
    category5: string
    category6: string
    category7: string
    category8: string
    category9: string
    category10: string
    newestEnclosureDuration: number | null
    _count: PodcastsCountAggregateOutputType | null
    _avg: PodcastsAvgAggregateOutputType | null
    _sum: PodcastsSumAggregateOutputType | null
    _min: PodcastsMinAggregateOutputType | null
    _max: PodcastsMaxAggregateOutputType | null
  }

  type GetPodcastsGroupByPayload<T extends podcastsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PodcastsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PodcastsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PodcastsGroupByOutputType[P]>
            : GetScalarType<T[P], PodcastsGroupByOutputType[P]>
        }
      >
    >


  export type podcastsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    lastUpdate?: boolean
    link?: boolean
    lastHttpStatus?: boolean
    dead?: boolean
    contentType?: boolean
    itunesId?: boolean
    originalUrl?: boolean
    itunesAuthor?: boolean
    itunesOwnerName?: boolean
    explicit?: boolean
    imageUrl?: boolean
    itunesType?: boolean
    generator?: boolean
    newestItemPubdate?: boolean
    language?: boolean
    oldestItemPubdate?: boolean
    episodeCount?: boolean
    popularityScore?: boolean
    priority?: boolean
    createdOn?: boolean
    updateFrequency?: boolean
    chash?: boolean
    host?: boolean
    newestEnclosureUrl?: boolean
    podcastGuid?: boolean
    description?: boolean
    category1?: boolean
    category2?: boolean
    category3?: boolean
    category4?: boolean
    category5?: boolean
    category6?: boolean
    category7?: boolean
    category8?: boolean
    category9?: boolean
    category10?: boolean
    newestEnclosureDuration?: boolean
  }, ExtArgs["result"]["podcasts"]>

  export type podcastsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    lastUpdate?: boolean
    link?: boolean
    lastHttpStatus?: boolean
    dead?: boolean
    contentType?: boolean
    itunesId?: boolean
    originalUrl?: boolean
    itunesAuthor?: boolean
    itunesOwnerName?: boolean
    explicit?: boolean
    imageUrl?: boolean
    itunesType?: boolean
    generator?: boolean
    newestItemPubdate?: boolean
    language?: boolean
    oldestItemPubdate?: boolean
    episodeCount?: boolean
    popularityScore?: boolean
    priority?: boolean
    createdOn?: boolean
    updateFrequency?: boolean
    chash?: boolean
    host?: boolean
    newestEnclosureUrl?: boolean
    podcastGuid?: boolean
    description?: boolean
    category1?: boolean
    category2?: boolean
    category3?: boolean
    category4?: boolean
    category5?: boolean
    category6?: boolean
    category7?: boolean
    category8?: boolean
    category9?: boolean
    category10?: boolean
    newestEnclosureDuration?: boolean
  }, ExtArgs["result"]["podcasts"]>

  export type podcastsSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    lastUpdate?: boolean
    link?: boolean
    lastHttpStatus?: boolean
    dead?: boolean
    contentType?: boolean
    itunesId?: boolean
    originalUrl?: boolean
    itunesAuthor?: boolean
    itunesOwnerName?: boolean
    explicit?: boolean
    imageUrl?: boolean
    itunesType?: boolean
    generator?: boolean
    newestItemPubdate?: boolean
    language?: boolean
    oldestItemPubdate?: boolean
    episodeCount?: boolean
    popularityScore?: boolean
    priority?: boolean
    createdOn?: boolean
    updateFrequency?: boolean
    chash?: boolean
    host?: boolean
    newestEnclosureUrl?: boolean
    podcastGuid?: boolean
    description?: boolean
    category1?: boolean
    category2?: boolean
    category3?: boolean
    category4?: boolean
    category5?: boolean
    category6?: boolean
    category7?: boolean
    category8?: boolean
    category9?: boolean
    category10?: boolean
    newestEnclosureDuration?: boolean
  }


  export type $podcastsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "podcasts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      title: string
      lastUpdate: number | null
      link: string
      lastHttpStatus: number | null
      dead: number | null
      contentType: string
      itunesId: number | null
      originalUrl: string
      itunesAuthor: string
      itunesOwnerName: string
      explicit: number | null
      imageUrl: string
      itunesType: string
      generator: string
      newestItemPubdate: number | null
      language: string
      oldestItemPubdate: number | null
      episodeCount: number | null
      popularityScore: number | null
      priority: number | null
      createdOn: number | null
      updateFrequency: number | null
      chash: string
      host: string
      newestEnclosureUrl: string
      podcastGuid: string
      description: string
      category1: string
      category2: string
      category3: string
      category4: string
      category5: string
      category6: string
      category7: string
      category8: string
      category9: string
      category10: string
      newestEnclosureDuration: number | null
    }, ExtArgs["result"]["podcasts"]>
    composites: {}
  }

  type podcastsGetPayload<S extends boolean | null | undefined | podcastsDefaultArgs> = $Result.GetResult<Prisma.$podcastsPayload, S>

  type podcastsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<podcastsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PodcastsCountAggregateInputType | true
    }

  export interface podcastsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['podcasts'], meta: { name: 'podcasts' } }
    /**
     * Find zero or one Podcasts that matches the filter.
     * @param {podcastsFindUniqueArgs} args - Arguments to find a Podcasts
     * @example
     * // Get one Podcasts
     * const podcasts = await prisma.podcasts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends podcastsFindUniqueArgs>(args: SelectSubset<T, podcastsFindUniqueArgs<ExtArgs>>): Prisma__podcastsClient<$Result.GetResult<Prisma.$podcastsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Podcasts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {podcastsFindUniqueOrThrowArgs} args - Arguments to find a Podcasts
     * @example
     * // Get one Podcasts
     * const podcasts = await prisma.podcasts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends podcastsFindUniqueOrThrowArgs>(args: SelectSubset<T, podcastsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__podcastsClient<$Result.GetResult<Prisma.$podcastsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Podcasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podcastsFindFirstArgs} args - Arguments to find a Podcasts
     * @example
     * // Get one Podcasts
     * const podcasts = await prisma.podcasts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends podcastsFindFirstArgs>(args?: SelectSubset<T, podcastsFindFirstArgs<ExtArgs>>): Prisma__podcastsClient<$Result.GetResult<Prisma.$podcastsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Podcasts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podcastsFindFirstOrThrowArgs} args - Arguments to find a Podcasts
     * @example
     * // Get one Podcasts
     * const podcasts = await prisma.podcasts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends podcastsFindFirstOrThrowArgs>(args?: SelectSubset<T, podcastsFindFirstOrThrowArgs<ExtArgs>>): Prisma__podcastsClient<$Result.GetResult<Prisma.$podcastsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Podcasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podcastsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Podcasts
     * const podcasts = await prisma.podcasts.findMany()
     * 
     * // Get first 10 Podcasts
     * const podcasts = await prisma.podcasts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const podcastsWithIdOnly = await prisma.podcasts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends podcastsFindManyArgs>(args?: SelectSubset<T, podcastsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$podcastsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Podcasts.
     * @param {podcastsCreateArgs} args - Arguments to create a Podcasts.
     * @example
     * // Create one Podcasts
     * const Podcasts = await prisma.podcasts.create({
     *   data: {
     *     // ... data to create a Podcasts
     *   }
     * })
     * 
     */
    create<T extends podcastsCreateArgs>(args: SelectSubset<T, podcastsCreateArgs<ExtArgs>>): Prisma__podcastsClient<$Result.GetResult<Prisma.$podcastsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Podcasts.
     * @param {podcastsCreateManyArgs} args - Arguments to create many Podcasts.
     * @example
     * // Create many Podcasts
     * const podcasts = await prisma.podcasts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends podcastsCreateManyArgs>(args?: SelectSubset<T, podcastsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Podcasts and returns the data saved in the database.
     * @param {podcastsCreateManyAndReturnArgs} args - Arguments to create many Podcasts.
     * @example
     * // Create many Podcasts
     * const podcasts = await prisma.podcasts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Podcasts and only return the `id`
     * const podcastsWithIdOnly = await prisma.podcasts.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends podcastsCreateManyAndReturnArgs>(args?: SelectSubset<T, podcastsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$podcastsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Podcasts.
     * @param {podcastsDeleteArgs} args - Arguments to delete one Podcasts.
     * @example
     * // Delete one Podcasts
     * const Podcasts = await prisma.podcasts.delete({
     *   where: {
     *     // ... filter to delete one Podcasts
     *   }
     * })
     * 
     */
    delete<T extends podcastsDeleteArgs>(args: SelectSubset<T, podcastsDeleteArgs<ExtArgs>>): Prisma__podcastsClient<$Result.GetResult<Prisma.$podcastsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Podcasts.
     * @param {podcastsUpdateArgs} args - Arguments to update one Podcasts.
     * @example
     * // Update one Podcasts
     * const podcasts = await prisma.podcasts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends podcastsUpdateArgs>(args: SelectSubset<T, podcastsUpdateArgs<ExtArgs>>): Prisma__podcastsClient<$Result.GetResult<Prisma.$podcastsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Podcasts.
     * @param {podcastsDeleteManyArgs} args - Arguments to filter Podcasts to delete.
     * @example
     * // Delete a few Podcasts
     * const { count } = await prisma.podcasts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends podcastsDeleteManyArgs>(args?: SelectSubset<T, podcastsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Podcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podcastsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Podcasts
     * const podcasts = await prisma.podcasts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends podcastsUpdateManyArgs>(args: SelectSubset<T, podcastsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Podcasts.
     * @param {podcastsUpsertArgs} args - Arguments to update or create a Podcasts.
     * @example
     * // Update or create a Podcasts
     * const podcasts = await prisma.podcasts.upsert({
     *   create: {
     *     // ... data to create a Podcasts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Podcasts we want to update
     *   }
     * })
     */
    upsert<T extends podcastsUpsertArgs>(args: SelectSubset<T, podcastsUpsertArgs<ExtArgs>>): Prisma__podcastsClient<$Result.GetResult<Prisma.$podcastsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Podcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podcastsCountArgs} args - Arguments to filter Podcasts to count.
     * @example
     * // Count the number of Podcasts
     * const count = await prisma.podcasts.count({
     *   where: {
     *     // ... the filter for the Podcasts we want to count
     *   }
     * })
    **/
    count<T extends podcastsCountArgs>(
      args?: Subset<T, podcastsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PodcastsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Podcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PodcastsAggregateArgs>(args: Subset<T, PodcastsAggregateArgs>): Prisma.PrismaPromise<GetPodcastsAggregateType<T>>

    /**
     * Group by Podcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {podcastsGroupByArgs} args - Group by arguments.
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
      T extends podcastsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: podcastsGroupByArgs['orderBy'] }
        : { orderBy?: podcastsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, podcastsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPodcastsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the podcasts model
   */
  readonly fields: podcastsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for podcasts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__podcastsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the podcasts model
   */ 
  interface podcastsFieldRefs {
    readonly id: FieldRef<"podcasts", 'Int'>
    readonly url: FieldRef<"podcasts", 'String'>
    readonly title: FieldRef<"podcasts", 'String'>
    readonly lastUpdate: FieldRef<"podcasts", 'Int'>
    readonly link: FieldRef<"podcasts", 'String'>
    readonly lastHttpStatus: FieldRef<"podcasts", 'Int'>
    readonly dead: FieldRef<"podcasts", 'Int'>
    readonly contentType: FieldRef<"podcasts", 'String'>
    readonly itunesId: FieldRef<"podcasts", 'Int'>
    readonly originalUrl: FieldRef<"podcasts", 'String'>
    readonly itunesAuthor: FieldRef<"podcasts", 'String'>
    readonly itunesOwnerName: FieldRef<"podcasts", 'String'>
    readonly explicit: FieldRef<"podcasts", 'Int'>
    readonly imageUrl: FieldRef<"podcasts", 'String'>
    readonly itunesType: FieldRef<"podcasts", 'String'>
    readonly generator: FieldRef<"podcasts", 'String'>
    readonly newestItemPubdate: FieldRef<"podcasts", 'Int'>
    readonly language: FieldRef<"podcasts", 'String'>
    readonly oldestItemPubdate: FieldRef<"podcasts", 'Int'>
    readonly episodeCount: FieldRef<"podcasts", 'Int'>
    readonly popularityScore: FieldRef<"podcasts", 'Int'>
    readonly priority: FieldRef<"podcasts", 'Int'>
    readonly createdOn: FieldRef<"podcasts", 'Int'>
    readonly updateFrequency: FieldRef<"podcasts", 'Int'>
    readonly chash: FieldRef<"podcasts", 'String'>
    readonly host: FieldRef<"podcasts", 'String'>
    readonly newestEnclosureUrl: FieldRef<"podcasts", 'String'>
    readonly podcastGuid: FieldRef<"podcasts", 'String'>
    readonly description: FieldRef<"podcasts", 'String'>
    readonly category1: FieldRef<"podcasts", 'String'>
    readonly category2: FieldRef<"podcasts", 'String'>
    readonly category3: FieldRef<"podcasts", 'String'>
    readonly category4: FieldRef<"podcasts", 'String'>
    readonly category5: FieldRef<"podcasts", 'String'>
    readonly category6: FieldRef<"podcasts", 'String'>
    readonly category7: FieldRef<"podcasts", 'String'>
    readonly category8: FieldRef<"podcasts", 'String'>
    readonly category9: FieldRef<"podcasts", 'String'>
    readonly category10: FieldRef<"podcasts", 'String'>
    readonly newestEnclosureDuration: FieldRef<"podcasts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * podcasts findUnique
   */
  export type podcastsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the podcasts
     */
    select?: podcastsSelect<ExtArgs> | null
    /**
     * Filter, which podcasts to fetch.
     */
    where: podcastsWhereUniqueInput
  }

  /**
   * podcasts findUniqueOrThrow
   */
  export type podcastsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the podcasts
     */
    select?: podcastsSelect<ExtArgs> | null
    /**
     * Filter, which podcasts to fetch.
     */
    where: podcastsWhereUniqueInput
  }

  /**
   * podcasts findFirst
   */
  export type podcastsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the podcasts
     */
    select?: podcastsSelect<ExtArgs> | null
    /**
     * Filter, which podcasts to fetch.
     */
    where?: podcastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of podcasts to fetch.
     */
    orderBy?: podcastsOrderByWithRelationInput | podcastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for podcasts.
     */
    cursor?: podcastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of podcasts.
     */
    distinct?: PodcastsScalarFieldEnum | PodcastsScalarFieldEnum[]
  }

  /**
   * podcasts findFirstOrThrow
   */
  export type podcastsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the podcasts
     */
    select?: podcastsSelect<ExtArgs> | null
    /**
     * Filter, which podcasts to fetch.
     */
    where?: podcastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of podcasts to fetch.
     */
    orderBy?: podcastsOrderByWithRelationInput | podcastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for podcasts.
     */
    cursor?: podcastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of podcasts.
     */
    distinct?: PodcastsScalarFieldEnum | PodcastsScalarFieldEnum[]
  }

  /**
   * podcasts findMany
   */
  export type podcastsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the podcasts
     */
    select?: podcastsSelect<ExtArgs> | null
    /**
     * Filter, which podcasts to fetch.
     */
    where?: podcastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of podcasts to fetch.
     */
    orderBy?: podcastsOrderByWithRelationInput | podcastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing podcasts.
     */
    cursor?: podcastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` podcasts.
     */
    skip?: number
    distinct?: PodcastsScalarFieldEnum | PodcastsScalarFieldEnum[]
  }

  /**
   * podcasts create
   */
  export type podcastsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the podcasts
     */
    select?: podcastsSelect<ExtArgs> | null
    /**
     * The data needed to create a podcasts.
     */
    data: XOR<podcastsCreateInput, podcastsUncheckedCreateInput>
  }

  /**
   * podcasts createMany
   */
  export type podcastsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many podcasts.
     */
    data: podcastsCreateManyInput | podcastsCreateManyInput[]
  }

  /**
   * podcasts createManyAndReturn
   */
  export type podcastsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the podcasts
     */
    select?: podcastsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many podcasts.
     */
    data: podcastsCreateManyInput | podcastsCreateManyInput[]
  }

  /**
   * podcasts update
   */
  export type podcastsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the podcasts
     */
    select?: podcastsSelect<ExtArgs> | null
    /**
     * The data needed to update a podcasts.
     */
    data: XOR<podcastsUpdateInput, podcastsUncheckedUpdateInput>
    /**
     * Choose, which podcasts to update.
     */
    where: podcastsWhereUniqueInput
  }

  /**
   * podcasts updateMany
   */
  export type podcastsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update podcasts.
     */
    data: XOR<podcastsUpdateManyMutationInput, podcastsUncheckedUpdateManyInput>
    /**
     * Filter which podcasts to update
     */
    where?: podcastsWhereInput
  }

  /**
   * podcasts upsert
   */
  export type podcastsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the podcasts
     */
    select?: podcastsSelect<ExtArgs> | null
    /**
     * The filter to search for the podcasts to update in case it exists.
     */
    where: podcastsWhereUniqueInput
    /**
     * In case the podcasts found by the `where` argument doesn't exist, create a new podcasts with this data.
     */
    create: XOR<podcastsCreateInput, podcastsUncheckedCreateInput>
    /**
     * In case the podcasts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<podcastsUpdateInput, podcastsUncheckedUpdateInput>
  }

  /**
   * podcasts delete
   */
  export type podcastsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the podcasts
     */
    select?: podcastsSelect<ExtArgs> | null
    /**
     * Filter which podcasts to delete.
     */
    where: podcastsWhereUniqueInput
  }

  /**
   * podcasts deleteMany
   */
  export type podcastsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which podcasts to delete
     */
    where?: podcastsWhereInput
  }

  /**
   * podcasts without action
   */
  export type podcastsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the podcasts
     */
    select?: podcastsSelect<ExtArgs> | null
  }


  /**
   * Model genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    id: number | null
  }

  export type GenresSumAggregateOutputType = {
    id: number | null
  }

  export type GenresMinAggregateOutputType = {
    id: number | null
    genre: string | null
  }

  export type GenresMaxAggregateOutputType = {
    id: number | null
    genre: string | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    genre: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    id?: true
  }

  export type GenresSumAggregateInputType = {
    id?: true
  }

  export type GenresMinAggregateInputType = {
    id?: true
    genre?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    genre?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    genre?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to aggregate.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type genresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: genresWhereInput
    orderBy?: genresOrderByWithAggregationInput | genresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: genresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    id: number
    genre: string | null
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends genresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type genresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genre?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genre?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectScalar = {
    id?: boolean
    genre?: boolean
  }


  export type $genresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genres"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      genre: string | null
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type genresGetPayload<S extends boolean | null | undefined | genresDefaultArgs> = $Result.GetResult<Prisma.$genresPayload, S>

  type genresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<genresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface genresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genres'], meta: { name: 'genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {genresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends genresFindUniqueArgs>(args: SelectSubset<T, genresFindUniqueArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {genresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends genresFindUniqueOrThrowArgs>(args: SelectSubset<T, genresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends genresFindFirstArgs>(args?: SelectSubset<T, genresFindFirstArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends genresFindFirstOrThrowArgs>(args?: SelectSubset<T, genresFindFirstOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends genresFindManyArgs>(args?: SelectSubset<T, genresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Genres.
     * @param {genresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends genresCreateArgs>(args: SelectSubset<T, genresCreateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Genres.
     * @param {genresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends genresCreateManyArgs>(args?: SelectSubset<T, genresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {genresCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genresWithIdOnly = await prisma.genres.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends genresCreateManyAndReturnArgs>(args?: SelectSubset<T, genresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Genres.
     * @param {genresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends genresDeleteArgs>(args: SelectSubset<T, genresDeleteArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Genres.
     * @param {genresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends genresUpdateArgs>(args: SelectSubset<T, genresUpdateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {genresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends genresDeleteManyArgs>(args?: SelectSubset<T, genresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends genresUpdateManyArgs>(args: SelectSubset<T, genresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genres.
     * @param {genresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     */
    upsert<T extends genresUpsertArgs>(args: SelectSubset<T, genresUpsertArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends genresCountArgs>(
      args?: Subset<T, genresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresGroupByArgs} args - Group by arguments.
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
      T extends genresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: genresGroupByArgs['orderBy'] }
        : { orderBy?: genresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, genresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genres model
   */
  readonly fields: genresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__genresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the genres model
   */ 
  interface genresFieldRefs {
    readonly id: FieldRef<"genres", 'Int'>
    readonly genre: FieldRef<"genres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * genres findUnique
   */
  export type genresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findUniqueOrThrow
   */
  export type genresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findFirst
   */
  export type genresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findFirstOrThrow
   */
  export type genresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findMany
   */
  export type genresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres create
   */
  export type genresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * The data needed to create a genres.
     */
    data?: XOR<genresCreateInput, genresUncheckedCreateInput>
  }

  /**
   * genres createMany
   */
  export type genresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
  }

  /**
   * genres createManyAndReturn
   */
  export type genresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
  }

  /**
   * genres update
   */
  export type genresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * The data needed to update a genres.
     */
    data: XOR<genresUpdateInput, genresUncheckedUpdateInput>
    /**
     * Choose, which genres to update.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres updateMany
   */
  export type genresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
  }

  /**
   * genres upsert
   */
  export type genresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * The filter to search for the genres to update in case it exists.
     */
    where: genresWhereUniqueInput
    /**
     * In case the genres found by the `where` argument doesn't exist, create a new genres with this data.
     */
    create: XOR<genresCreateInput, genresUncheckedCreateInput>
    /**
     * In case the genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<genresUpdateInput, genresUncheckedUpdateInput>
  }

  /**
   * genres delete
   */
  export type genresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Filter which genres to delete.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres deleteMany
   */
  export type genresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to delete
     */
    where?: genresWhereInput
  }

  /**
   * genres without action
   */
  export type genresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PodcastsScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    lastUpdate: 'lastUpdate',
    link: 'link',
    lastHttpStatus: 'lastHttpStatus',
    dead: 'dead',
    contentType: 'contentType',
    itunesId: 'itunesId',
    originalUrl: 'originalUrl',
    itunesAuthor: 'itunesAuthor',
    itunesOwnerName: 'itunesOwnerName',
    explicit: 'explicit',
    imageUrl: 'imageUrl',
    itunesType: 'itunesType',
    generator: 'generator',
    newestItemPubdate: 'newestItemPubdate',
    language: 'language',
    oldestItemPubdate: 'oldestItemPubdate',
    episodeCount: 'episodeCount',
    popularityScore: 'popularityScore',
    priority: 'priority',
    createdOn: 'createdOn',
    updateFrequency: 'updateFrequency',
    chash: 'chash',
    host: 'host',
    newestEnclosureUrl: 'newestEnclosureUrl',
    podcastGuid: 'podcastGuid',
    description: 'description',
    category1: 'category1',
    category2: 'category2',
    category3: 'category3',
    category4: 'category4',
    category5: 'category5',
    category6: 'category6',
    category7: 'category7',
    category8: 'category8',
    category9: 'category9',
    category10: 'category10',
    newestEnclosureDuration: 'newestEnclosureDuration'
  };

  export type PodcastsScalarFieldEnum = (typeof PodcastsScalarFieldEnum)[keyof typeof PodcastsScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    genre: 'genre'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


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


  export type podcastsWhereInput = {
    AND?: podcastsWhereInput | podcastsWhereInput[]
    OR?: podcastsWhereInput[]
    NOT?: podcastsWhereInput | podcastsWhereInput[]
    id?: IntFilter<"podcasts"> | number
    url?: StringFilter<"podcasts"> | string
    title?: StringFilter<"podcasts"> | string
    lastUpdate?: IntNullableFilter<"podcasts"> | number | null
    link?: StringFilter<"podcasts"> | string
    lastHttpStatus?: IntNullableFilter<"podcasts"> | number | null
    dead?: IntNullableFilter<"podcasts"> | number | null
    contentType?: StringFilter<"podcasts"> | string
    itunesId?: IntNullableFilter<"podcasts"> | number | null
    originalUrl?: StringFilter<"podcasts"> | string
    itunesAuthor?: StringFilter<"podcasts"> | string
    itunesOwnerName?: StringFilter<"podcasts"> | string
    explicit?: IntNullableFilter<"podcasts"> | number | null
    imageUrl?: StringFilter<"podcasts"> | string
    itunesType?: StringFilter<"podcasts"> | string
    generator?: StringFilter<"podcasts"> | string
    newestItemPubdate?: IntNullableFilter<"podcasts"> | number | null
    language?: StringFilter<"podcasts"> | string
    oldestItemPubdate?: IntNullableFilter<"podcasts"> | number | null
    episodeCount?: IntNullableFilter<"podcasts"> | number | null
    popularityScore?: IntNullableFilter<"podcasts"> | number | null
    priority?: IntNullableFilter<"podcasts"> | number | null
    createdOn?: IntNullableFilter<"podcasts"> | number | null
    updateFrequency?: IntNullableFilter<"podcasts"> | number | null
    chash?: StringFilter<"podcasts"> | string
    host?: StringFilter<"podcasts"> | string
    newestEnclosureUrl?: StringFilter<"podcasts"> | string
    podcastGuid?: StringFilter<"podcasts"> | string
    description?: StringFilter<"podcasts"> | string
    category1?: StringFilter<"podcasts"> | string
    category2?: StringFilter<"podcasts"> | string
    category3?: StringFilter<"podcasts"> | string
    category4?: StringFilter<"podcasts"> | string
    category5?: StringFilter<"podcasts"> | string
    category6?: StringFilter<"podcasts"> | string
    category7?: StringFilter<"podcasts"> | string
    category8?: StringFilter<"podcasts"> | string
    category9?: StringFilter<"podcasts"> | string
    category10?: StringFilter<"podcasts"> | string
    newestEnclosureDuration?: IntNullableFilter<"podcasts"> | number | null
  }

  export type podcastsOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    lastUpdate?: SortOrderInput | SortOrder
    link?: SortOrder
    lastHttpStatus?: SortOrderInput | SortOrder
    dead?: SortOrderInput | SortOrder
    contentType?: SortOrder
    itunesId?: SortOrderInput | SortOrder
    originalUrl?: SortOrder
    itunesAuthor?: SortOrder
    itunesOwnerName?: SortOrder
    explicit?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    itunesType?: SortOrder
    generator?: SortOrder
    newestItemPubdate?: SortOrderInput | SortOrder
    language?: SortOrder
    oldestItemPubdate?: SortOrderInput | SortOrder
    episodeCount?: SortOrderInput | SortOrder
    popularityScore?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    createdOn?: SortOrderInput | SortOrder
    updateFrequency?: SortOrderInput | SortOrder
    chash?: SortOrder
    host?: SortOrder
    newestEnclosureUrl?: SortOrder
    podcastGuid?: SortOrder
    description?: SortOrder
    category1?: SortOrder
    category2?: SortOrder
    category3?: SortOrder
    category4?: SortOrder
    category5?: SortOrder
    category6?: SortOrder
    category7?: SortOrder
    category8?: SortOrder
    category9?: SortOrder
    category10?: SortOrder
    newestEnclosureDuration?: SortOrderInput | SortOrder
  }

  export type podcastsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: podcastsWhereInput | podcastsWhereInput[]
    OR?: podcastsWhereInput[]
    NOT?: podcastsWhereInput | podcastsWhereInput[]
    title?: StringFilter<"podcasts"> | string
    lastUpdate?: IntNullableFilter<"podcasts"> | number | null
    link?: StringFilter<"podcasts"> | string
    lastHttpStatus?: IntNullableFilter<"podcasts"> | number | null
    dead?: IntNullableFilter<"podcasts"> | number | null
    contentType?: StringFilter<"podcasts"> | string
    itunesId?: IntNullableFilter<"podcasts"> | number | null
    originalUrl?: StringFilter<"podcasts"> | string
    itunesAuthor?: StringFilter<"podcasts"> | string
    itunesOwnerName?: StringFilter<"podcasts"> | string
    explicit?: IntNullableFilter<"podcasts"> | number | null
    imageUrl?: StringFilter<"podcasts"> | string
    itunesType?: StringFilter<"podcasts"> | string
    generator?: StringFilter<"podcasts"> | string
    newestItemPubdate?: IntNullableFilter<"podcasts"> | number | null
    language?: StringFilter<"podcasts"> | string
    oldestItemPubdate?: IntNullableFilter<"podcasts"> | number | null
    episodeCount?: IntNullableFilter<"podcasts"> | number | null
    popularityScore?: IntNullableFilter<"podcasts"> | number | null
    priority?: IntNullableFilter<"podcasts"> | number | null
    createdOn?: IntNullableFilter<"podcasts"> | number | null
    updateFrequency?: IntNullableFilter<"podcasts"> | number | null
    chash?: StringFilter<"podcasts"> | string
    host?: StringFilter<"podcasts"> | string
    newestEnclosureUrl?: StringFilter<"podcasts"> | string
    podcastGuid?: StringFilter<"podcasts"> | string
    description?: StringFilter<"podcasts"> | string
    category1?: StringFilter<"podcasts"> | string
    category2?: StringFilter<"podcasts"> | string
    category3?: StringFilter<"podcasts"> | string
    category4?: StringFilter<"podcasts"> | string
    category5?: StringFilter<"podcasts"> | string
    category6?: StringFilter<"podcasts"> | string
    category7?: StringFilter<"podcasts"> | string
    category8?: StringFilter<"podcasts"> | string
    category9?: StringFilter<"podcasts"> | string
    category10?: StringFilter<"podcasts"> | string
    newestEnclosureDuration?: IntNullableFilter<"podcasts"> | number | null
  }, "id" | "url">

  export type podcastsOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    lastUpdate?: SortOrderInput | SortOrder
    link?: SortOrder
    lastHttpStatus?: SortOrderInput | SortOrder
    dead?: SortOrderInput | SortOrder
    contentType?: SortOrder
    itunesId?: SortOrderInput | SortOrder
    originalUrl?: SortOrder
    itunesAuthor?: SortOrder
    itunesOwnerName?: SortOrder
    explicit?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    itunesType?: SortOrder
    generator?: SortOrder
    newestItemPubdate?: SortOrderInput | SortOrder
    language?: SortOrder
    oldestItemPubdate?: SortOrderInput | SortOrder
    episodeCount?: SortOrderInput | SortOrder
    popularityScore?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    createdOn?: SortOrderInput | SortOrder
    updateFrequency?: SortOrderInput | SortOrder
    chash?: SortOrder
    host?: SortOrder
    newestEnclosureUrl?: SortOrder
    podcastGuid?: SortOrder
    description?: SortOrder
    category1?: SortOrder
    category2?: SortOrder
    category3?: SortOrder
    category4?: SortOrder
    category5?: SortOrder
    category6?: SortOrder
    category7?: SortOrder
    category8?: SortOrder
    category9?: SortOrder
    category10?: SortOrder
    newestEnclosureDuration?: SortOrderInput | SortOrder
    _count?: podcastsCountOrderByAggregateInput
    _avg?: podcastsAvgOrderByAggregateInput
    _max?: podcastsMaxOrderByAggregateInput
    _min?: podcastsMinOrderByAggregateInput
    _sum?: podcastsSumOrderByAggregateInput
  }

  export type podcastsScalarWhereWithAggregatesInput = {
    AND?: podcastsScalarWhereWithAggregatesInput | podcastsScalarWhereWithAggregatesInput[]
    OR?: podcastsScalarWhereWithAggregatesInput[]
    NOT?: podcastsScalarWhereWithAggregatesInput | podcastsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"podcasts"> | number
    url?: StringWithAggregatesFilter<"podcasts"> | string
    title?: StringWithAggregatesFilter<"podcasts"> | string
    lastUpdate?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    link?: StringWithAggregatesFilter<"podcasts"> | string
    lastHttpStatus?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    dead?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    contentType?: StringWithAggregatesFilter<"podcasts"> | string
    itunesId?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    originalUrl?: StringWithAggregatesFilter<"podcasts"> | string
    itunesAuthor?: StringWithAggregatesFilter<"podcasts"> | string
    itunesOwnerName?: StringWithAggregatesFilter<"podcasts"> | string
    explicit?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    imageUrl?: StringWithAggregatesFilter<"podcasts"> | string
    itunesType?: StringWithAggregatesFilter<"podcasts"> | string
    generator?: StringWithAggregatesFilter<"podcasts"> | string
    newestItemPubdate?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    language?: StringWithAggregatesFilter<"podcasts"> | string
    oldestItemPubdate?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    episodeCount?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    popularityScore?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    priority?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    createdOn?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    updateFrequency?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
    chash?: StringWithAggregatesFilter<"podcasts"> | string
    host?: StringWithAggregatesFilter<"podcasts"> | string
    newestEnclosureUrl?: StringWithAggregatesFilter<"podcasts"> | string
    podcastGuid?: StringWithAggregatesFilter<"podcasts"> | string
    description?: StringWithAggregatesFilter<"podcasts"> | string
    category1?: StringWithAggregatesFilter<"podcasts"> | string
    category2?: StringWithAggregatesFilter<"podcasts"> | string
    category3?: StringWithAggregatesFilter<"podcasts"> | string
    category4?: StringWithAggregatesFilter<"podcasts"> | string
    category5?: StringWithAggregatesFilter<"podcasts"> | string
    category6?: StringWithAggregatesFilter<"podcasts"> | string
    category7?: StringWithAggregatesFilter<"podcasts"> | string
    category8?: StringWithAggregatesFilter<"podcasts"> | string
    category9?: StringWithAggregatesFilter<"podcasts"> | string
    category10?: StringWithAggregatesFilter<"podcasts"> | string
    newestEnclosureDuration?: IntNullableWithAggregatesFilter<"podcasts"> | number | null
  }

  export type genresWhereInput = {
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    id?: IntFilter<"genres"> | number
    genre?: StringNullableFilter<"genres"> | string | null
  }

  export type genresOrderByWithRelationInput = {
    id?: SortOrder
    genre?: SortOrderInput | SortOrder
  }

  export type genresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    genre?: string
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
  }, "id" | "genre">

  export type genresOrderByWithAggregationInput = {
    id?: SortOrder
    genre?: SortOrderInput | SortOrder
    _count?: genresCountOrderByAggregateInput
    _avg?: genresAvgOrderByAggregateInput
    _max?: genresMaxOrderByAggregateInput
    _min?: genresMinOrderByAggregateInput
    _sum?: genresSumOrderByAggregateInput
  }

  export type genresScalarWhereWithAggregatesInput = {
    AND?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    OR?: genresScalarWhereWithAggregatesInput[]
    NOT?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"genres"> | number
    genre?: StringNullableWithAggregatesFilter<"genres"> | string | null
  }

  export type podcastsCreateInput = {
    url: string
    title: string
    lastUpdate?: number | null
    link: string
    lastHttpStatus?: number | null
    dead?: number | null
    contentType: string
    itunesId?: number | null
    originalUrl: string
    itunesAuthor: string
    itunesOwnerName: string
    explicit?: number | null
    imageUrl: string
    itunesType: string
    generator: string
    newestItemPubdate?: number | null
    language: string
    oldestItemPubdate?: number | null
    episodeCount?: number | null
    popularityScore?: number | null
    priority?: number | null
    createdOn?: number | null
    updateFrequency?: number | null
    chash: string
    host: string
    newestEnclosureUrl: string
    podcastGuid: string
    description: string
    category1: string
    category2: string
    category3: string
    category4: string
    category5: string
    category6: string
    category7: string
    category8: string
    category9: string
    category10: string
    newestEnclosureDuration?: number | null
  }

  export type podcastsUncheckedCreateInput = {
    id?: number
    url: string
    title: string
    lastUpdate?: number | null
    link: string
    lastHttpStatus?: number | null
    dead?: number | null
    contentType: string
    itunesId?: number | null
    originalUrl: string
    itunesAuthor: string
    itunesOwnerName: string
    explicit?: number | null
    imageUrl: string
    itunesType: string
    generator: string
    newestItemPubdate?: number | null
    language: string
    oldestItemPubdate?: number | null
    episodeCount?: number | null
    popularityScore?: number | null
    priority?: number | null
    createdOn?: number | null
    updateFrequency?: number | null
    chash: string
    host: string
    newestEnclosureUrl: string
    podcastGuid: string
    description: string
    category1: string
    category2: string
    category3: string
    category4: string
    category5: string
    category6: string
    category7: string
    category8: string
    category9: string
    category10: string
    newestEnclosureDuration?: number | null
  }

  export type podcastsUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    link?: StringFieldUpdateOperationsInput | string
    lastHttpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    dead?: NullableIntFieldUpdateOperationsInput | number | null
    contentType?: StringFieldUpdateOperationsInput | string
    itunesId?: NullableIntFieldUpdateOperationsInput | number | null
    originalUrl?: StringFieldUpdateOperationsInput | string
    itunesAuthor?: StringFieldUpdateOperationsInput | string
    itunesOwnerName?: StringFieldUpdateOperationsInput | string
    explicit?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    itunesType?: StringFieldUpdateOperationsInput | string
    generator?: StringFieldUpdateOperationsInput | string
    newestItemPubdate?: NullableIntFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    oldestItemPubdate?: NullableIntFieldUpdateOperationsInput | number | null
    episodeCount?: NullableIntFieldUpdateOperationsInput | number | null
    popularityScore?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdOn?: NullableIntFieldUpdateOperationsInput | number | null
    updateFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    chash?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    newestEnclosureUrl?: StringFieldUpdateOperationsInput | string
    podcastGuid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category1?: StringFieldUpdateOperationsInput | string
    category2?: StringFieldUpdateOperationsInput | string
    category3?: StringFieldUpdateOperationsInput | string
    category4?: StringFieldUpdateOperationsInput | string
    category5?: StringFieldUpdateOperationsInput | string
    category6?: StringFieldUpdateOperationsInput | string
    category7?: StringFieldUpdateOperationsInput | string
    category8?: StringFieldUpdateOperationsInput | string
    category9?: StringFieldUpdateOperationsInput | string
    category10?: StringFieldUpdateOperationsInput | string
    newestEnclosureDuration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type podcastsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    link?: StringFieldUpdateOperationsInput | string
    lastHttpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    dead?: NullableIntFieldUpdateOperationsInput | number | null
    contentType?: StringFieldUpdateOperationsInput | string
    itunesId?: NullableIntFieldUpdateOperationsInput | number | null
    originalUrl?: StringFieldUpdateOperationsInput | string
    itunesAuthor?: StringFieldUpdateOperationsInput | string
    itunesOwnerName?: StringFieldUpdateOperationsInput | string
    explicit?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    itunesType?: StringFieldUpdateOperationsInput | string
    generator?: StringFieldUpdateOperationsInput | string
    newestItemPubdate?: NullableIntFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    oldestItemPubdate?: NullableIntFieldUpdateOperationsInput | number | null
    episodeCount?: NullableIntFieldUpdateOperationsInput | number | null
    popularityScore?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdOn?: NullableIntFieldUpdateOperationsInput | number | null
    updateFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    chash?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    newestEnclosureUrl?: StringFieldUpdateOperationsInput | string
    podcastGuid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category1?: StringFieldUpdateOperationsInput | string
    category2?: StringFieldUpdateOperationsInput | string
    category3?: StringFieldUpdateOperationsInput | string
    category4?: StringFieldUpdateOperationsInput | string
    category5?: StringFieldUpdateOperationsInput | string
    category6?: StringFieldUpdateOperationsInput | string
    category7?: StringFieldUpdateOperationsInput | string
    category8?: StringFieldUpdateOperationsInput | string
    category9?: StringFieldUpdateOperationsInput | string
    category10?: StringFieldUpdateOperationsInput | string
    newestEnclosureDuration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type podcastsCreateManyInput = {
    id?: number
    url: string
    title: string
    lastUpdate?: number | null
    link: string
    lastHttpStatus?: number | null
    dead?: number | null
    contentType: string
    itunesId?: number | null
    originalUrl: string
    itunesAuthor: string
    itunesOwnerName: string
    explicit?: number | null
    imageUrl: string
    itunesType: string
    generator: string
    newestItemPubdate?: number | null
    language: string
    oldestItemPubdate?: number | null
    episodeCount?: number | null
    popularityScore?: number | null
    priority?: number | null
    createdOn?: number | null
    updateFrequency?: number | null
    chash: string
    host: string
    newestEnclosureUrl: string
    podcastGuid: string
    description: string
    category1: string
    category2: string
    category3: string
    category4: string
    category5: string
    category6: string
    category7: string
    category8: string
    category9: string
    category10: string
    newestEnclosureDuration?: number | null
  }

  export type podcastsUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    link?: StringFieldUpdateOperationsInput | string
    lastHttpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    dead?: NullableIntFieldUpdateOperationsInput | number | null
    contentType?: StringFieldUpdateOperationsInput | string
    itunesId?: NullableIntFieldUpdateOperationsInput | number | null
    originalUrl?: StringFieldUpdateOperationsInput | string
    itunesAuthor?: StringFieldUpdateOperationsInput | string
    itunesOwnerName?: StringFieldUpdateOperationsInput | string
    explicit?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    itunesType?: StringFieldUpdateOperationsInput | string
    generator?: StringFieldUpdateOperationsInput | string
    newestItemPubdate?: NullableIntFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    oldestItemPubdate?: NullableIntFieldUpdateOperationsInput | number | null
    episodeCount?: NullableIntFieldUpdateOperationsInput | number | null
    popularityScore?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdOn?: NullableIntFieldUpdateOperationsInput | number | null
    updateFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    chash?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    newestEnclosureUrl?: StringFieldUpdateOperationsInput | string
    podcastGuid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category1?: StringFieldUpdateOperationsInput | string
    category2?: StringFieldUpdateOperationsInput | string
    category3?: StringFieldUpdateOperationsInput | string
    category4?: StringFieldUpdateOperationsInput | string
    category5?: StringFieldUpdateOperationsInput | string
    category6?: StringFieldUpdateOperationsInput | string
    category7?: StringFieldUpdateOperationsInput | string
    category8?: StringFieldUpdateOperationsInput | string
    category9?: StringFieldUpdateOperationsInput | string
    category10?: StringFieldUpdateOperationsInput | string
    newestEnclosureDuration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type podcastsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: NullableIntFieldUpdateOperationsInput | number | null
    link?: StringFieldUpdateOperationsInput | string
    lastHttpStatus?: NullableIntFieldUpdateOperationsInput | number | null
    dead?: NullableIntFieldUpdateOperationsInput | number | null
    contentType?: StringFieldUpdateOperationsInput | string
    itunesId?: NullableIntFieldUpdateOperationsInput | number | null
    originalUrl?: StringFieldUpdateOperationsInput | string
    itunesAuthor?: StringFieldUpdateOperationsInput | string
    itunesOwnerName?: StringFieldUpdateOperationsInput | string
    explicit?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    itunesType?: StringFieldUpdateOperationsInput | string
    generator?: StringFieldUpdateOperationsInput | string
    newestItemPubdate?: NullableIntFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    oldestItemPubdate?: NullableIntFieldUpdateOperationsInput | number | null
    episodeCount?: NullableIntFieldUpdateOperationsInput | number | null
    popularityScore?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    createdOn?: NullableIntFieldUpdateOperationsInput | number | null
    updateFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    chash?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    newestEnclosureUrl?: StringFieldUpdateOperationsInput | string
    podcastGuid?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category1?: StringFieldUpdateOperationsInput | string
    category2?: StringFieldUpdateOperationsInput | string
    category3?: StringFieldUpdateOperationsInput | string
    category4?: StringFieldUpdateOperationsInput | string
    category5?: StringFieldUpdateOperationsInput | string
    category6?: StringFieldUpdateOperationsInput | string
    category7?: StringFieldUpdateOperationsInput | string
    category8?: StringFieldUpdateOperationsInput | string
    category9?: StringFieldUpdateOperationsInput | string
    category10?: StringFieldUpdateOperationsInput | string
    newestEnclosureDuration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type genresCreateInput = {
    genre?: string | null
  }

  export type genresUncheckedCreateInput = {
    id?: number
    genre?: string | null
  }

  export type genresUpdateInput = {
    genre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresCreateManyInput = {
    id?: number
    genre?: string | null
  }

  export type genresUpdateManyMutationInput = {
    genre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type podcastsCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    lastUpdate?: SortOrder
    link?: SortOrder
    lastHttpStatus?: SortOrder
    dead?: SortOrder
    contentType?: SortOrder
    itunesId?: SortOrder
    originalUrl?: SortOrder
    itunesAuthor?: SortOrder
    itunesOwnerName?: SortOrder
    explicit?: SortOrder
    imageUrl?: SortOrder
    itunesType?: SortOrder
    generator?: SortOrder
    newestItemPubdate?: SortOrder
    language?: SortOrder
    oldestItemPubdate?: SortOrder
    episodeCount?: SortOrder
    popularityScore?: SortOrder
    priority?: SortOrder
    createdOn?: SortOrder
    updateFrequency?: SortOrder
    chash?: SortOrder
    host?: SortOrder
    newestEnclosureUrl?: SortOrder
    podcastGuid?: SortOrder
    description?: SortOrder
    category1?: SortOrder
    category2?: SortOrder
    category3?: SortOrder
    category4?: SortOrder
    category5?: SortOrder
    category6?: SortOrder
    category7?: SortOrder
    category8?: SortOrder
    category9?: SortOrder
    category10?: SortOrder
    newestEnclosureDuration?: SortOrder
  }

  export type podcastsAvgOrderByAggregateInput = {
    id?: SortOrder
    lastUpdate?: SortOrder
    lastHttpStatus?: SortOrder
    dead?: SortOrder
    itunesId?: SortOrder
    explicit?: SortOrder
    newestItemPubdate?: SortOrder
    oldestItemPubdate?: SortOrder
    episodeCount?: SortOrder
    popularityScore?: SortOrder
    priority?: SortOrder
    createdOn?: SortOrder
    updateFrequency?: SortOrder
    newestEnclosureDuration?: SortOrder
  }

  export type podcastsMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    lastUpdate?: SortOrder
    link?: SortOrder
    lastHttpStatus?: SortOrder
    dead?: SortOrder
    contentType?: SortOrder
    itunesId?: SortOrder
    originalUrl?: SortOrder
    itunesAuthor?: SortOrder
    itunesOwnerName?: SortOrder
    explicit?: SortOrder
    imageUrl?: SortOrder
    itunesType?: SortOrder
    generator?: SortOrder
    newestItemPubdate?: SortOrder
    language?: SortOrder
    oldestItemPubdate?: SortOrder
    episodeCount?: SortOrder
    popularityScore?: SortOrder
    priority?: SortOrder
    createdOn?: SortOrder
    updateFrequency?: SortOrder
    chash?: SortOrder
    host?: SortOrder
    newestEnclosureUrl?: SortOrder
    podcastGuid?: SortOrder
    description?: SortOrder
    category1?: SortOrder
    category2?: SortOrder
    category3?: SortOrder
    category4?: SortOrder
    category5?: SortOrder
    category6?: SortOrder
    category7?: SortOrder
    category8?: SortOrder
    category9?: SortOrder
    category10?: SortOrder
    newestEnclosureDuration?: SortOrder
  }

  export type podcastsMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    lastUpdate?: SortOrder
    link?: SortOrder
    lastHttpStatus?: SortOrder
    dead?: SortOrder
    contentType?: SortOrder
    itunesId?: SortOrder
    originalUrl?: SortOrder
    itunesAuthor?: SortOrder
    itunesOwnerName?: SortOrder
    explicit?: SortOrder
    imageUrl?: SortOrder
    itunesType?: SortOrder
    generator?: SortOrder
    newestItemPubdate?: SortOrder
    language?: SortOrder
    oldestItemPubdate?: SortOrder
    episodeCount?: SortOrder
    popularityScore?: SortOrder
    priority?: SortOrder
    createdOn?: SortOrder
    updateFrequency?: SortOrder
    chash?: SortOrder
    host?: SortOrder
    newestEnclosureUrl?: SortOrder
    podcastGuid?: SortOrder
    description?: SortOrder
    category1?: SortOrder
    category2?: SortOrder
    category3?: SortOrder
    category4?: SortOrder
    category5?: SortOrder
    category6?: SortOrder
    category7?: SortOrder
    category8?: SortOrder
    category9?: SortOrder
    category10?: SortOrder
    newestEnclosureDuration?: SortOrder
  }

  export type podcastsSumOrderByAggregateInput = {
    id?: SortOrder
    lastUpdate?: SortOrder
    lastHttpStatus?: SortOrder
    dead?: SortOrder
    itunesId?: SortOrder
    explicit?: SortOrder
    newestItemPubdate?: SortOrder
    oldestItemPubdate?: SortOrder
    episodeCount?: SortOrder
    popularityScore?: SortOrder
    priority?: SortOrder
    createdOn?: SortOrder
    updateFrequency?: SortOrder
    newestEnclosureDuration?: SortOrder
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type genresCountOrderByAggregateInput = {
    id?: SortOrder
    genre?: SortOrder
  }

  export type genresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type genresMaxOrderByAggregateInput = {
    id?: SortOrder
    genre?: SortOrder
  }

  export type genresMinOrderByAggregateInput = {
    id?: SortOrder
    genre?: SortOrder
  }

  export type genresSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use podcastsDefaultArgs instead
     */
    export type podcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = podcastsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use genresDefaultArgs instead
     */
    export type genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = genresDefaultArgs<ExtArgs>

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