
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
 * Model Radios
 * 
 */
export type Radios = $Result.DefaultSelection<Prisma.$RadiosPayload>
/**
 * Model States
 * 
 */
export type States = $Result.DefaultSelection<Prisma.$StatesPayload>
/**
 * Model Genres
 * 
 */
export type Genres = $Result.DefaultSelection<Prisma.$GenresPayload>
/**
 * Model Cities
 * 
 */
export type Cities = $Result.DefaultSelection<Prisma.$CitiesPayload>
/**
 * Model Countries
 * 
 */
export type Countries = $Result.DefaultSelection<Prisma.$CountriesPayload>
/**
 * Model Languages
 * 
 */
export type Languages = $Result.DefaultSelection<Prisma.$LanguagesPayload>
/**
 * Model Regions
 * 
 */
export type Regions = $Result.DefaultSelection<Prisma.$RegionsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Radios
 * const radios = await prisma.radios.findMany()
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
   * // Fetch zero or more Radios
   * const radios = await prisma.radios.findMany()
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
   * `prisma.radios`: Exposes CRUD operations for the **Radios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Radios
    * const radios = await prisma.radios.findMany()
    * ```
    */
  get radios(): Prisma.RadiosDelegate<ExtArgs>;

  /**
   * `prisma.states`: Exposes CRUD operations for the **States** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.states.findMany()
    * ```
    */
  get states(): Prisma.StatesDelegate<ExtArgs>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **Genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.GenresDelegate<ExtArgs>;

  /**
   * `prisma.cities`: Exposes CRUD operations for the **Cities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.cities.findMany()
    * ```
    */
  get cities(): Prisma.CitiesDelegate<ExtArgs>;

  /**
   * `prisma.countries`: Exposes CRUD operations for the **Countries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.countries.findMany()
    * ```
    */
  get countries(): Prisma.CountriesDelegate<ExtArgs>;

  /**
   * `prisma.languages`: Exposes CRUD operations for the **Languages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.languages.findMany()
    * ```
    */
  get languages(): Prisma.LanguagesDelegate<ExtArgs>;

  /**
   * `prisma.regions`: Exposes CRUD operations for the **Regions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.regions.findMany()
    * ```
    */
  get regions(): Prisma.RegionsDelegate<ExtArgs>;
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
    Radios: 'Radios',
    States: 'States',
    Genres: 'Genres',
    Cities: 'Cities',
    Countries: 'Countries',
    Languages: 'Languages',
    Regions: 'Regions'
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
      modelProps: "radios" | "states" | "genres" | "cities" | "countries" | "languages" | "regions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Radios: {
        payload: Prisma.$RadiosPayload<ExtArgs>
        fields: Prisma.RadiosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RadiosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadiosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RadiosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadiosPayload>
          }
          findFirst: {
            args: Prisma.RadiosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadiosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RadiosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadiosPayload>
          }
          findMany: {
            args: Prisma.RadiosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadiosPayload>[]
          }
          create: {
            args: Prisma.RadiosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadiosPayload>
          }
          createMany: {
            args: Prisma.RadiosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RadiosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadiosPayload>[]
          }
          delete: {
            args: Prisma.RadiosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadiosPayload>
          }
          update: {
            args: Prisma.RadiosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadiosPayload>
          }
          deleteMany: {
            args: Prisma.RadiosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RadiosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RadiosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadiosPayload>
          }
          aggregate: {
            args: Prisma.RadiosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRadios>
          }
          groupBy: {
            args: Prisma.RadiosGroupByArgs<ExtArgs>
            result: $Utils.Optional<RadiosGroupByOutputType>[]
          }
          count: {
            args: Prisma.RadiosCountArgs<ExtArgs>
            result: $Utils.Optional<RadiosCountAggregateOutputType> | number
          }
        }
      }
      States: {
        payload: Prisma.$StatesPayload<ExtArgs>
        fields: Prisma.StatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatesPayload>
          }
          findFirst: {
            args: Prisma.StatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatesPayload>
          }
          findMany: {
            args: Prisma.StatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatesPayload>[]
          }
          create: {
            args: Prisma.StatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatesPayload>
          }
          createMany: {
            args: Prisma.StatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatesPayload>[]
          }
          delete: {
            args: Prisma.StatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatesPayload>
          }
          update: {
            args: Prisma.StatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatesPayload>
          }
          deleteMany: {
            args: Prisma.StatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatesPayload>
          }
          aggregate: {
            args: Prisma.StatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStates>
          }
          groupBy: {
            args: Prisma.StatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatesCountArgs<ExtArgs>
            result: $Utils.Optional<StatesCountAggregateOutputType> | number
          }
        }
      }
      Genres: {
        payload: Prisma.$GenresPayload<ExtArgs>
        fields: Prisma.GenresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findFirst: {
            args: Prisma.GenresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findMany: {
            args: Prisma.GenresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          create: {
            args: Prisma.GenresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          createMany: {
            args: Prisma.GenresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          delete: {
            args: Prisma.GenresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          update: {
            args: Prisma.GenresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          deleteMany: {
            args: Prisma.GenresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.GenresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      Cities: {
        payload: Prisma.$CitiesPayload<ExtArgs>
        fields: Prisma.CitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitiesPayload>
          }
          findFirst: {
            args: Prisma.CitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitiesPayload>
          }
          findMany: {
            args: Prisma.CitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitiesPayload>[]
          }
          create: {
            args: Prisma.CitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitiesPayload>
          }
          createMany: {
            args: Prisma.CitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitiesPayload>[]
          }
          delete: {
            args: Prisma.CitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitiesPayload>
          }
          update: {
            args: Prisma.CitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitiesPayload>
          }
          deleteMany: {
            args: Prisma.CitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitiesPayload>
          }
          aggregate: {
            args: Prisma.CitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCities>
          }
          groupBy: {
            args: Prisma.CitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitiesCountArgs<ExtArgs>
            result: $Utils.Optional<CitiesCountAggregateOutputType> | number
          }
        }
      }
      Countries: {
        payload: Prisma.$CountriesPayload<ExtArgs>
        fields: Prisma.CountriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          findFirst: {
            args: Prisma.CountriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          findMany: {
            args: Prisma.CountriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>[]
          }
          create: {
            args: Prisma.CountriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          createMany: {
            args: Prisma.CountriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>[]
          }
          delete: {
            args: Prisma.CountriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          update: {
            args: Prisma.CountriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          deleteMany: {
            args: Prisma.CountriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          aggregate: {
            args: Prisma.CountriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountries>
          }
          groupBy: {
            args: Prisma.CountriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountriesCountArgs<ExtArgs>
            result: $Utils.Optional<CountriesCountAggregateOutputType> | number
          }
        }
      }
      Languages: {
        payload: Prisma.$LanguagesPayload<ExtArgs>
        fields: Prisma.LanguagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          findFirst: {
            args: Prisma.LanguagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          findMany: {
            args: Prisma.LanguagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>[]
          }
          create: {
            args: Prisma.LanguagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          createMany: {
            args: Prisma.LanguagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>[]
          }
          delete: {
            args: Prisma.LanguagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          update: {
            args: Prisma.LanguagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          deleteMany: {
            args: Prisma.LanguagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LanguagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          aggregate: {
            args: Prisma.LanguagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguages>
          }
          groupBy: {
            args: Prisma.LanguagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguagesCountArgs<ExtArgs>
            result: $Utils.Optional<LanguagesCountAggregateOutputType> | number
          }
        }
      }
      Regions: {
        payload: Prisma.$RegionsPayload<ExtArgs>
        fields: Prisma.RegionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          findFirst: {
            args: Prisma.RegionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          findMany: {
            args: Prisma.RegionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>[]
          }
          create: {
            args: Prisma.RegionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          createMany: {
            args: Prisma.RegionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>[]
          }
          delete: {
            args: Prisma.RegionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          update: {
            args: Prisma.RegionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          deleteMany: {
            args: Prisma.RegionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionsPayload>
          }
          aggregate: {
            args: Prisma.RegionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegions>
          }
          groupBy: {
            args: Prisma.RegionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionsCountArgs<ExtArgs>
            result: $Utils.Optional<RegionsCountAggregateOutputType> | number
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
   * Count Type RadiosCountOutputType
   */

  export type RadiosCountOutputType = {
    city: number
    country: number
    genres: number
    language: number
    region: number
    state: number
  }

  export type RadiosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | RadiosCountOutputTypeCountCityArgs
    country?: boolean | RadiosCountOutputTypeCountCountryArgs
    genres?: boolean | RadiosCountOutputTypeCountGenresArgs
    language?: boolean | RadiosCountOutputTypeCountLanguageArgs
    region?: boolean | RadiosCountOutputTypeCountRegionArgs
    state?: boolean | RadiosCountOutputTypeCountStateArgs
  }

  // Custom InputTypes
  /**
   * RadiosCountOutputType without action
   */
  export type RadiosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadiosCountOutputType
     */
    select?: RadiosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RadiosCountOutputType without action
   */
  export type RadiosCountOutputTypeCountCityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitiesWhereInput
  }

  /**
   * RadiosCountOutputType without action
   */
  export type RadiosCountOutputTypeCountCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountriesWhereInput
  }

  /**
   * RadiosCountOutputType without action
   */
  export type RadiosCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
  }

  /**
   * RadiosCountOutputType without action
   */
  export type RadiosCountOutputTypeCountLanguageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguagesWhereInput
  }

  /**
   * RadiosCountOutputType without action
   */
  export type RadiosCountOutputTypeCountRegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionsWhereInput
  }

  /**
   * RadiosCountOutputType without action
   */
  export type RadiosCountOutputTypeCountStateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatesWhereInput
  }


  /**
   * Count Type StatesCountOutputType
   */

  export type StatesCountOutputType = {
    radios: number
  }

  export type StatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | StatesCountOutputTypeCountRadiosArgs
  }

  // Custom InputTypes
  /**
   * StatesCountOutputType without action
   */
  export type StatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatesCountOutputType
     */
    select?: StatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatesCountOutputType without action
   */
  export type StatesCountOutputTypeCountRadiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadiosWhereInput
  }


  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    radios: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | GenresCountOutputTypeCountRadiosArgs
  }

  // Custom InputTypes
  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountRadiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadiosWhereInput
  }


  /**
   * Count Type CitiesCountOutputType
   */

  export type CitiesCountOutputType = {
    radios: number
  }

  export type CitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | CitiesCountOutputTypeCountRadiosArgs
  }

  // Custom InputTypes
  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitiesCountOutputType
     */
    select?: CitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeCountRadiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadiosWhereInput
  }


  /**
   * Count Type CountriesCountOutputType
   */

  export type CountriesCountOutputType = {
    radios: number
  }

  export type CountriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | CountriesCountOutputTypeCountRadiosArgs
  }

  // Custom InputTypes
  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesCountOutputType
     */
    select?: CountriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountRadiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadiosWhereInput
  }


  /**
   * Count Type LanguagesCountOutputType
   */

  export type LanguagesCountOutputType = {
    radios: number
  }

  export type LanguagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | LanguagesCountOutputTypeCountRadiosArgs
  }

  // Custom InputTypes
  /**
   * LanguagesCountOutputType without action
   */
  export type LanguagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagesCountOutputType
     */
    select?: LanguagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguagesCountOutputType without action
   */
  export type LanguagesCountOutputTypeCountRadiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadiosWhereInput
  }


  /**
   * Count Type RegionsCountOutputType
   */

  export type RegionsCountOutputType = {
    radios: number
  }

  export type RegionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | RegionsCountOutputTypeCountRadiosArgs
  }

  // Custom InputTypes
  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionsCountOutputType
     */
    select?: RegionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeCountRadiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadiosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Radios
   */

  export type AggregateRadios = {
    _count: RadiosCountAggregateOutputType | null
    _avg: RadiosAvgAggregateOutputType | null
    _sum: RadiosSumAggregateOutputType | null
    _min: RadiosMinAggregateOutputType | null
    _max: RadiosMaxAggregateOutputType | null
  }

  export type RadiosAvgAggregateOutputType = {
    id: number | null
    stars: number | null
  }

  export type RadiosSumAggregateOutputType = {
    id: number | null
    stars: number | null
  }

  export type RadiosMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    address: string | null
    email: string | null
    facebook: string | null
    frequency: string | null
    image: string | null
    link_deatils: string | null
    link_player: string | null
    listens: string | null
    long_description: string | null
    no_play: boolean | null
    phone: string | null
    profile_slogan: string | null
    radio_language: string | null
    short_description: string | null
    stars: number | null
    title: string | null
    twitter: string | null
    website: string | null
    source: string | null
    radio_id: string | null
    state_id: string | null
    shows: string | null
    json: string | null
  }

  export type RadiosMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    address: string | null
    email: string | null
    facebook: string | null
    frequency: string | null
    image: string | null
    link_deatils: string | null
    link_player: string | null
    listens: string | null
    long_description: string | null
    no_play: boolean | null
    phone: string | null
    profile_slogan: string | null
    radio_language: string | null
    short_description: string | null
    stars: number | null
    title: string | null
    twitter: string | null
    website: string | null
    source: string | null
    radio_id: string | null
    state_id: string | null
    shows: string | null
    json: string | null
  }

  export type RadiosCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    address: number
    email: number
    facebook: number
    frequency: number
    image: number
    link_deatils: number
    link_player: number
    listens: number
    long_description: number
    no_play: number
    phone: number
    profile_slogan: number
    radio_language: number
    short_description: number
    stars: number
    title: number
    twitter: number
    website: number
    source: number
    radio_id: number
    state_id: number
    shows: number
    json: number
    _all: number
  }


  export type RadiosAvgAggregateInputType = {
    id?: true
    stars?: true
  }

  export type RadiosSumAggregateInputType = {
    id?: true
    stars?: true
  }

  export type RadiosMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    email?: true
    facebook?: true
    frequency?: true
    image?: true
    link_deatils?: true
    link_player?: true
    listens?: true
    long_description?: true
    no_play?: true
    phone?: true
    profile_slogan?: true
    radio_language?: true
    short_description?: true
    stars?: true
    title?: true
    twitter?: true
    website?: true
    source?: true
    radio_id?: true
    state_id?: true
    shows?: true
    json?: true
  }

  export type RadiosMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    email?: true
    facebook?: true
    frequency?: true
    image?: true
    link_deatils?: true
    link_player?: true
    listens?: true
    long_description?: true
    no_play?: true
    phone?: true
    profile_slogan?: true
    radio_language?: true
    short_description?: true
    stars?: true
    title?: true
    twitter?: true
    website?: true
    source?: true
    radio_id?: true
    state_id?: true
    shows?: true
    json?: true
  }

  export type RadiosCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    email?: true
    facebook?: true
    frequency?: true
    image?: true
    link_deatils?: true
    link_player?: true
    listens?: true
    long_description?: true
    no_play?: true
    phone?: true
    profile_slogan?: true
    radio_language?: true
    short_description?: true
    stars?: true
    title?: true
    twitter?: true
    website?: true
    source?: true
    radio_id?: true
    state_id?: true
    shows?: true
    json?: true
    _all?: true
  }

  export type RadiosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Radios to aggregate.
     */
    where?: RadiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadiosOrderByWithRelationInput | RadiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RadiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Radios
    **/
    _count?: true | RadiosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RadiosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RadiosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RadiosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RadiosMaxAggregateInputType
  }

  export type GetRadiosAggregateType<T extends RadiosAggregateArgs> = {
        [P in keyof T & keyof AggregateRadios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRadios[P]>
      : GetScalarType<T[P], AggregateRadios[P]>
  }




  export type RadiosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadiosWhereInput
    orderBy?: RadiosOrderByWithAggregationInput | RadiosOrderByWithAggregationInput[]
    by: RadiosScalarFieldEnum[] | RadiosScalarFieldEnum
    having?: RadiosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RadiosCountAggregateInputType | true
    _avg?: RadiosAvgAggregateInputType
    _sum?: RadiosSumAggregateInputType
    _min?: RadiosMinAggregateInputType
    _max?: RadiosMaxAggregateInputType
  }

  export type RadiosGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    address: string
    email: string
    facebook: string
    frequency: string
    image: string
    link_deatils: string
    link_player: string
    listens: string
    long_description: string
    no_play: boolean
    phone: string
    profile_slogan: string
    radio_language: string
    short_description: string
    stars: number
    title: string
    twitter: string
    website: string
    source: string
    radio_id: string
    state_id: string
    shows: string
    json: string
    _count: RadiosCountAggregateOutputType | null
    _avg: RadiosAvgAggregateOutputType | null
    _sum: RadiosSumAggregateOutputType | null
    _min: RadiosMinAggregateOutputType | null
    _max: RadiosMaxAggregateOutputType | null
  }

  type GetRadiosGroupByPayload<T extends RadiosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RadiosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RadiosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RadiosGroupByOutputType[P]>
            : GetScalarType<T[P], RadiosGroupByOutputType[P]>
        }
      >
    >


  export type RadiosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean
    email?: boolean
    facebook?: boolean
    frequency?: boolean
    image?: boolean
    link_deatils?: boolean
    link_player?: boolean
    listens?: boolean
    long_description?: boolean
    no_play?: boolean
    phone?: boolean
    profile_slogan?: boolean
    radio_language?: boolean
    short_description?: boolean
    stars?: boolean
    title?: boolean
    twitter?: boolean
    website?: boolean
    source?: boolean
    radio_id?: boolean
    state_id?: boolean
    shows?: boolean
    json?: boolean
    city?: boolean | Radios$cityArgs<ExtArgs>
    country?: boolean | Radios$countryArgs<ExtArgs>
    genres?: boolean | Radios$genresArgs<ExtArgs>
    language?: boolean | Radios$languageArgs<ExtArgs>
    region?: boolean | Radios$regionArgs<ExtArgs>
    state?: boolean | Radios$stateArgs<ExtArgs>
    _count?: boolean | RadiosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["radios"]>

  export type RadiosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean
    email?: boolean
    facebook?: boolean
    frequency?: boolean
    image?: boolean
    link_deatils?: boolean
    link_player?: boolean
    listens?: boolean
    long_description?: boolean
    no_play?: boolean
    phone?: boolean
    profile_slogan?: boolean
    radio_language?: boolean
    short_description?: boolean
    stars?: boolean
    title?: boolean
    twitter?: boolean
    website?: boolean
    source?: boolean
    radio_id?: boolean
    state_id?: boolean
    shows?: boolean
    json?: boolean
  }, ExtArgs["result"]["radios"]>

  export type RadiosSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean
    email?: boolean
    facebook?: boolean
    frequency?: boolean
    image?: boolean
    link_deatils?: boolean
    link_player?: boolean
    listens?: boolean
    long_description?: boolean
    no_play?: boolean
    phone?: boolean
    profile_slogan?: boolean
    radio_language?: boolean
    short_description?: boolean
    stars?: boolean
    title?: boolean
    twitter?: boolean
    website?: boolean
    source?: boolean
    radio_id?: boolean
    state_id?: boolean
    shows?: boolean
    json?: boolean
  }

  export type RadiosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | Radios$cityArgs<ExtArgs>
    country?: boolean | Radios$countryArgs<ExtArgs>
    genres?: boolean | Radios$genresArgs<ExtArgs>
    language?: boolean | Radios$languageArgs<ExtArgs>
    region?: boolean | Radios$regionArgs<ExtArgs>
    state?: boolean | Radios$stateArgs<ExtArgs>
    _count?: boolean | RadiosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RadiosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RadiosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Radios"
    objects: {
      city: Prisma.$CitiesPayload<ExtArgs>[]
      country: Prisma.$CountriesPayload<ExtArgs>[]
      genres: Prisma.$GenresPayload<ExtArgs>[]
      language: Prisma.$LanguagesPayload<ExtArgs>[]
      region: Prisma.$RegionsPayload<ExtArgs>[]
      state: Prisma.$StatesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      address: string
      email: string
      facebook: string
      frequency: string
      image: string
      link_deatils: string
      link_player: string
      listens: string
      long_description: string
      no_play: boolean
      phone: string
      profile_slogan: string
      radio_language: string
      short_description: string
      stars: number
      title: string
      twitter: string
      website: string
      source: string
      radio_id: string
      state_id: string
      shows: string
      json: string
    }, ExtArgs["result"]["radios"]>
    composites: {}
  }

  type RadiosGetPayload<S extends boolean | null | undefined | RadiosDefaultArgs> = $Result.GetResult<Prisma.$RadiosPayload, S>

  type RadiosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RadiosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RadiosCountAggregateInputType | true
    }

  export interface RadiosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Radios'], meta: { name: 'Radios' } }
    /**
     * Find zero or one Radios that matches the filter.
     * @param {RadiosFindUniqueArgs} args - Arguments to find a Radios
     * @example
     * // Get one Radios
     * const radios = await prisma.radios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RadiosFindUniqueArgs>(args: SelectSubset<T, RadiosFindUniqueArgs<ExtArgs>>): Prisma__RadiosClient<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Radios that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RadiosFindUniqueOrThrowArgs} args - Arguments to find a Radios
     * @example
     * // Get one Radios
     * const radios = await prisma.radios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RadiosFindUniqueOrThrowArgs>(args: SelectSubset<T, RadiosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RadiosClient<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Radios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiosFindFirstArgs} args - Arguments to find a Radios
     * @example
     * // Get one Radios
     * const radios = await prisma.radios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RadiosFindFirstArgs>(args?: SelectSubset<T, RadiosFindFirstArgs<ExtArgs>>): Prisma__RadiosClient<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Radios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiosFindFirstOrThrowArgs} args - Arguments to find a Radios
     * @example
     * // Get one Radios
     * const radios = await prisma.radios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RadiosFindFirstOrThrowArgs>(args?: SelectSubset<T, RadiosFindFirstOrThrowArgs<ExtArgs>>): Prisma__RadiosClient<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Radios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Radios
     * const radios = await prisma.radios.findMany()
     * 
     * // Get first 10 Radios
     * const radios = await prisma.radios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const radiosWithIdOnly = await prisma.radios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RadiosFindManyArgs>(args?: SelectSubset<T, RadiosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Radios.
     * @param {RadiosCreateArgs} args - Arguments to create a Radios.
     * @example
     * // Create one Radios
     * const Radios = await prisma.radios.create({
     *   data: {
     *     // ... data to create a Radios
     *   }
     * })
     * 
     */
    create<T extends RadiosCreateArgs>(args: SelectSubset<T, RadiosCreateArgs<ExtArgs>>): Prisma__RadiosClient<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Radios.
     * @param {RadiosCreateManyArgs} args - Arguments to create many Radios.
     * @example
     * // Create many Radios
     * const radios = await prisma.radios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RadiosCreateManyArgs>(args?: SelectSubset<T, RadiosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Radios and returns the data saved in the database.
     * @param {RadiosCreateManyAndReturnArgs} args - Arguments to create many Radios.
     * @example
     * // Create many Radios
     * const radios = await prisma.radios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Radios and only return the `id`
     * const radiosWithIdOnly = await prisma.radios.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RadiosCreateManyAndReturnArgs>(args?: SelectSubset<T, RadiosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Radios.
     * @param {RadiosDeleteArgs} args - Arguments to delete one Radios.
     * @example
     * // Delete one Radios
     * const Radios = await prisma.radios.delete({
     *   where: {
     *     // ... filter to delete one Radios
     *   }
     * })
     * 
     */
    delete<T extends RadiosDeleteArgs>(args: SelectSubset<T, RadiosDeleteArgs<ExtArgs>>): Prisma__RadiosClient<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Radios.
     * @param {RadiosUpdateArgs} args - Arguments to update one Radios.
     * @example
     * // Update one Radios
     * const radios = await prisma.radios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RadiosUpdateArgs>(args: SelectSubset<T, RadiosUpdateArgs<ExtArgs>>): Prisma__RadiosClient<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Radios.
     * @param {RadiosDeleteManyArgs} args - Arguments to filter Radios to delete.
     * @example
     * // Delete a few Radios
     * const { count } = await prisma.radios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RadiosDeleteManyArgs>(args?: SelectSubset<T, RadiosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Radios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Radios
     * const radios = await prisma.radios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RadiosUpdateManyArgs>(args: SelectSubset<T, RadiosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Radios.
     * @param {RadiosUpsertArgs} args - Arguments to update or create a Radios.
     * @example
     * // Update or create a Radios
     * const radios = await prisma.radios.upsert({
     *   create: {
     *     // ... data to create a Radios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Radios we want to update
     *   }
     * })
     */
    upsert<T extends RadiosUpsertArgs>(args: SelectSubset<T, RadiosUpsertArgs<ExtArgs>>): Prisma__RadiosClient<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Radios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiosCountArgs} args - Arguments to filter Radios to count.
     * @example
     * // Count the number of Radios
     * const count = await prisma.radios.count({
     *   where: {
     *     // ... the filter for the Radios we want to count
     *   }
     * })
    **/
    count<T extends RadiosCountArgs>(
      args?: Subset<T, RadiosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RadiosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Radios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RadiosAggregateArgs>(args: Subset<T, RadiosAggregateArgs>): Prisma.PrismaPromise<GetRadiosAggregateType<T>>

    /**
     * Group by Radios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiosGroupByArgs} args - Group by arguments.
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
      T extends RadiosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RadiosGroupByArgs['orderBy'] }
        : { orderBy?: RadiosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RadiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRadiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Radios model
   */
  readonly fields: RadiosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Radios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RadiosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends Radios$cityArgs<ExtArgs> = {}>(args?: Subset<T, Radios$cityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitiesPayload<ExtArgs>, T, "findMany"> | Null>
    country<T extends Radios$countryArgs<ExtArgs> = {}>(args?: Subset<T, Radios$countryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findMany"> | Null>
    genres<T extends Radios$genresArgs<ExtArgs> = {}>(args?: Subset<T, Radios$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findMany"> | Null>
    language<T extends Radios$languageArgs<ExtArgs> = {}>(args?: Subset<T, Radios$languageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findMany"> | Null>
    region<T extends Radios$regionArgs<ExtArgs> = {}>(args?: Subset<T, Radios$regionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findMany"> | Null>
    state<T extends Radios$stateArgs<ExtArgs> = {}>(args?: Subset<T, Radios$stateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatesPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Radios model
   */ 
  interface RadiosFieldRefs {
    readonly id: FieldRef<"Radios", 'Int'>
    readonly createdAt: FieldRef<"Radios", 'DateTime'>
    readonly updatedAt: FieldRef<"Radios", 'DateTime'>
    readonly address: FieldRef<"Radios", 'String'>
    readonly email: FieldRef<"Radios", 'String'>
    readonly facebook: FieldRef<"Radios", 'String'>
    readonly frequency: FieldRef<"Radios", 'String'>
    readonly image: FieldRef<"Radios", 'String'>
    readonly link_deatils: FieldRef<"Radios", 'String'>
    readonly link_player: FieldRef<"Radios", 'String'>
    readonly listens: FieldRef<"Radios", 'String'>
    readonly long_description: FieldRef<"Radios", 'String'>
    readonly no_play: FieldRef<"Radios", 'Boolean'>
    readonly phone: FieldRef<"Radios", 'String'>
    readonly profile_slogan: FieldRef<"Radios", 'String'>
    readonly radio_language: FieldRef<"Radios", 'String'>
    readonly short_description: FieldRef<"Radios", 'String'>
    readonly stars: FieldRef<"Radios", 'Int'>
    readonly title: FieldRef<"Radios", 'String'>
    readonly twitter: FieldRef<"Radios", 'String'>
    readonly website: FieldRef<"Radios", 'String'>
    readonly source: FieldRef<"Radios", 'String'>
    readonly radio_id: FieldRef<"Radios", 'String'>
    readonly state_id: FieldRef<"Radios", 'String'>
    readonly shows: FieldRef<"Radios", 'String'>
    readonly json: FieldRef<"Radios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Radios findUnique
   */
  export type RadiosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    /**
     * Filter, which Radios to fetch.
     */
    where: RadiosWhereUniqueInput
  }

  /**
   * Radios findUniqueOrThrow
   */
  export type RadiosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    /**
     * Filter, which Radios to fetch.
     */
    where: RadiosWhereUniqueInput
  }

  /**
   * Radios findFirst
   */
  export type RadiosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    /**
     * Filter, which Radios to fetch.
     */
    where?: RadiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadiosOrderByWithRelationInput | RadiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Radios.
     */
    cursor?: RadiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Radios.
     */
    distinct?: RadiosScalarFieldEnum | RadiosScalarFieldEnum[]
  }

  /**
   * Radios findFirstOrThrow
   */
  export type RadiosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    /**
     * Filter, which Radios to fetch.
     */
    where?: RadiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadiosOrderByWithRelationInput | RadiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Radios.
     */
    cursor?: RadiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Radios.
     */
    distinct?: RadiosScalarFieldEnum | RadiosScalarFieldEnum[]
  }

  /**
   * Radios findMany
   */
  export type RadiosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    /**
     * Filter, which Radios to fetch.
     */
    where?: RadiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadiosOrderByWithRelationInput | RadiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Radios.
     */
    cursor?: RadiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    distinct?: RadiosScalarFieldEnum | RadiosScalarFieldEnum[]
  }

  /**
   * Radios create
   */
  export type RadiosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    /**
     * The data needed to create a Radios.
     */
    data: XOR<RadiosCreateInput, RadiosUncheckedCreateInput>
  }

  /**
   * Radios createMany
   */
  export type RadiosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Radios.
     */
    data: RadiosCreateManyInput | RadiosCreateManyInput[]
  }

  /**
   * Radios createManyAndReturn
   */
  export type RadiosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Radios.
     */
    data: RadiosCreateManyInput | RadiosCreateManyInput[]
  }

  /**
   * Radios update
   */
  export type RadiosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    /**
     * The data needed to update a Radios.
     */
    data: XOR<RadiosUpdateInput, RadiosUncheckedUpdateInput>
    /**
     * Choose, which Radios to update.
     */
    where: RadiosWhereUniqueInput
  }

  /**
   * Radios updateMany
   */
  export type RadiosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Radios.
     */
    data: XOR<RadiosUpdateManyMutationInput, RadiosUncheckedUpdateManyInput>
    /**
     * Filter which Radios to update
     */
    where?: RadiosWhereInput
  }

  /**
   * Radios upsert
   */
  export type RadiosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    /**
     * The filter to search for the Radios to update in case it exists.
     */
    where: RadiosWhereUniqueInput
    /**
     * In case the Radios found by the `where` argument doesn't exist, create a new Radios with this data.
     */
    create: XOR<RadiosCreateInput, RadiosUncheckedCreateInput>
    /**
     * In case the Radios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RadiosUpdateInput, RadiosUncheckedUpdateInput>
  }

  /**
   * Radios delete
   */
  export type RadiosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    /**
     * Filter which Radios to delete.
     */
    where: RadiosWhereUniqueInput
  }

  /**
   * Radios deleteMany
   */
  export type RadiosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Radios to delete
     */
    where?: RadiosWhereInput
  }

  /**
   * Radios.city
   */
  export type Radios$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitiesInclude<ExtArgs> | null
    where?: CitiesWhereInput
    orderBy?: CitiesOrderByWithRelationInput | CitiesOrderByWithRelationInput[]
    cursor?: CitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * Radios.country
   */
  export type Radios$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    where?: CountriesWhereInput
    orderBy?: CountriesOrderByWithRelationInput | CountriesOrderByWithRelationInput[]
    cursor?: CountriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * Radios.genres
   */
  export type Radios$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    cursor?: GenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Radios.language
   */
  export type Radios$languageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    where?: LanguagesWhereInput
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    cursor?: LanguagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Radios.region
   */
  export type Radios$regionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    where?: RegionsWhereInput
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    cursor?: RegionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * Radios.state
   */
  export type Radios$stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatesInclude<ExtArgs> | null
    where?: StatesWhereInput
    orderBy?: StatesOrderByWithRelationInput | StatesOrderByWithRelationInput[]
    cursor?: StatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatesScalarFieldEnum | StatesScalarFieldEnum[]
  }

  /**
   * Radios without action
   */
  export type RadiosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
  }


  /**
   * Model States
   */

  export type AggregateStates = {
    _count: StatesCountAggregateOutputType | null
    _avg: StatesAvgAggregateOutputType | null
    _sum: StatesSumAggregateOutputType | null
    _min: StatesMinAggregateOutputType | null
    _max: StatesMaxAggregateOutputType | null
  }

  export type StatesAvgAggregateOutputType = {
    id: number | null
  }

  export type StatesSumAggregateOutputType = {
    id: number | null
  }

  export type StatesMinAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
    country: string | null
  }

  export type StatesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
    country: string | null
  }

  export type StatesCountAggregateOutputType = {
    id: number
    name: number
    region: number
    country: number
    _all: number
  }


  export type StatesAvgAggregateInputType = {
    id?: true
  }

  export type StatesSumAggregateInputType = {
    id?: true
  }

  export type StatesMinAggregateInputType = {
    id?: true
    name?: true
    region?: true
    country?: true
  }

  export type StatesMaxAggregateInputType = {
    id?: true
    name?: true
    region?: true
    country?: true
  }

  export type StatesCountAggregateInputType = {
    id?: true
    name?: true
    region?: true
    country?: true
    _all?: true
  }

  export type StatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to aggregate.
     */
    where?: StatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StatesOrderByWithRelationInput | StatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatesMaxAggregateInputType
  }

  export type GetStatesAggregateType<T extends StatesAggregateArgs> = {
        [P in keyof T & keyof AggregateStates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStates[P]>
      : GetScalarType<T[P], AggregateStates[P]>
  }




  export type StatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatesWhereInput
    orderBy?: StatesOrderByWithAggregationInput | StatesOrderByWithAggregationInput[]
    by: StatesScalarFieldEnum[] | StatesScalarFieldEnum
    having?: StatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatesCountAggregateInputType | true
    _avg?: StatesAvgAggregateInputType
    _sum?: StatesSumAggregateInputType
    _min?: StatesMinAggregateInputType
    _max?: StatesMaxAggregateInputType
  }

  export type StatesGroupByOutputType = {
    id: number
    name: string
    region: string
    country: string
    _count: StatesCountAggregateOutputType | null
    _avg: StatesAvgAggregateOutputType | null
    _sum: StatesSumAggregateOutputType | null
    _min: StatesMinAggregateOutputType | null
    _max: StatesMaxAggregateOutputType | null
  }

  type GetStatesGroupByPayload<T extends StatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatesGroupByOutputType[P]>
            : GetScalarType<T[P], StatesGroupByOutputType[P]>
        }
      >
    >


  export type StatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    country?: boolean
    radios?: boolean | States$radiosArgs<ExtArgs>
    _count?: boolean | StatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["states"]>

  export type StatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    country?: boolean
  }, ExtArgs["result"]["states"]>

  export type StatesSelectScalar = {
    id?: boolean
    name?: boolean
    region?: boolean
    country?: boolean
  }

  export type StatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | States$radiosArgs<ExtArgs>
    _count?: boolean | StatesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "States"
    objects: {
      radios: Prisma.$RadiosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      region: string
      country: string
    }, ExtArgs["result"]["states"]>
    composites: {}
  }

  type StatesGetPayload<S extends boolean | null | undefined | StatesDefaultArgs> = $Result.GetResult<Prisma.$StatesPayload, S>

  type StatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StatesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatesCountAggregateInputType | true
    }

  export interface StatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['States'], meta: { name: 'States' } }
    /**
     * Find zero or one States that matches the filter.
     * @param {StatesFindUniqueArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatesFindUniqueArgs>(args: SelectSubset<T, StatesFindUniqueArgs<ExtArgs>>): Prisma__StatesClient<$Result.GetResult<Prisma.$StatesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one States that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StatesFindUniqueOrThrowArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatesFindUniqueOrThrowArgs>(args: SelectSubset<T, StatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatesClient<$Result.GetResult<Prisma.$StatesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatesFindFirstArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatesFindFirstArgs>(args?: SelectSubset<T, StatesFindFirstArgs<ExtArgs>>): Prisma__StatesClient<$Result.GetResult<Prisma.$StatesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first States that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatesFindFirstOrThrowArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatesFindFirstOrThrowArgs>(args?: SelectSubset<T, StatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatesClient<$Result.GetResult<Prisma.$StatesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.states.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.states.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statesWithIdOnly = await prisma.states.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatesFindManyArgs>(args?: SelectSubset<T, StatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a States.
     * @param {StatesCreateArgs} args - Arguments to create a States.
     * @example
     * // Create one States
     * const States = await prisma.states.create({
     *   data: {
     *     // ... data to create a States
     *   }
     * })
     * 
     */
    create<T extends StatesCreateArgs>(args: SelectSubset<T, StatesCreateArgs<ExtArgs>>): Prisma__StatesClient<$Result.GetResult<Prisma.$StatesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many States.
     * @param {StatesCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const states = await prisma.states.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatesCreateManyArgs>(args?: SelectSubset<T, StatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many States and returns the data saved in the database.
     * @param {StatesCreateManyAndReturnArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const states = await prisma.states.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many States and only return the `id`
     * const statesWithIdOnly = await prisma.states.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatesCreateManyAndReturnArgs>(args?: SelectSubset<T, StatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a States.
     * @param {StatesDeleteArgs} args - Arguments to delete one States.
     * @example
     * // Delete one States
     * const States = await prisma.states.delete({
     *   where: {
     *     // ... filter to delete one States
     *   }
     * })
     * 
     */
    delete<T extends StatesDeleteArgs>(args: SelectSubset<T, StatesDeleteArgs<ExtArgs>>): Prisma__StatesClient<$Result.GetResult<Prisma.$StatesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one States.
     * @param {StatesUpdateArgs} args - Arguments to update one States.
     * @example
     * // Update one States
     * const states = await prisma.states.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatesUpdateArgs>(args: SelectSubset<T, StatesUpdateArgs<ExtArgs>>): Prisma__StatesClient<$Result.GetResult<Prisma.$StatesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more States.
     * @param {StatesDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.states.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatesDeleteManyArgs>(args?: SelectSubset<T, StatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const states = await prisma.states.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatesUpdateManyArgs>(args: SelectSubset<T, StatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one States.
     * @param {StatesUpsertArgs} args - Arguments to update or create a States.
     * @example
     * // Update or create a States
     * const states = await prisma.states.upsert({
     *   create: {
     *     // ... data to create a States
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the States we want to update
     *   }
     * })
     */
    upsert<T extends StatesUpsertArgs>(args: SelectSubset<T, StatesUpsertArgs<ExtArgs>>): Prisma__StatesClient<$Result.GetResult<Prisma.$StatesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatesCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.states.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StatesCountArgs>(
      args?: Subset<T, StatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatesAggregateArgs>(args: Subset<T, StatesAggregateArgs>): Prisma.PrismaPromise<GetStatesAggregateType<T>>

    /**
     * Group by States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatesGroupByArgs} args - Group by arguments.
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
      T extends StatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatesGroupByArgs['orderBy'] }
        : { orderBy?: StatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the States model
   */
  readonly fields: StatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for States.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    radios<T extends States$radiosArgs<ExtArgs> = {}>(args?: Subset<T, States$radiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the States model
   */ 
  interface StatesFieldRefs {
    readonly id: FieldRef<"States", 'Int'>
    readonly name: FieldRef<"States", 'String'>
    readonly region: FieldRef<"States", 'String'>
    readonly country: FieldRef<"States", 'String'>
  }
    

  // Custom InputTypes
  /**
   * States findUnique
   */
  export type StatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatesInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where: StatesWhereUniqueInput
  }

  /**
   * States findUniqueOrThrow
   */
  export type StatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatesInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where: StatesWhereUniqueInput
  }

  /**
   * States findFirst
   */
  export type StatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatesInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StatesOrderByWithRelationInput | StatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StatesScalarFieldEnum | StatesScalarFieldEnum[]
  }

  /**
   * States findFirstOrThrow
   */
  export type StatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatesInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StatesOrderByWithRelationInput | StatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StatesScalarFieldEnum | StatesScalarFieldEnum[]
  }

  /**
   * States findMany
   */
  export type StatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatesInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StatesOrderByWithRelationInput | StatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StatesScalarFieldEnum | StatesScalarFieldEnum[]
  }

  /**
   * States create
   */
  export type StatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatesInclude<ExtArgs> | null
    /**
     * The data needed to create a States.
     */
    data: XOR<StatesCreateInput, StatesUncheckedCreateInput>
  }

  /**
   * States createMany
   */
  export type StatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StatesCreateManyInput | StatesCreateManyInput[]
  }

  /**
   * States createManyAndReturn
   */
  export type StatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many States.
     */
    data: StatesCreateManyInput | StatesCreateManyInput[]
  }

  /**
   * States update
   */
  export type StatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatesInclude<ExtArgs> | null
    /**
     * The data needed to update a States.
     */
    data: XOR<StatesUpdateInput, StatesUncheckedUpdateInput>
    /**
     * Choose, which States to update.
     */
    where: StatesWhereUniqueInput
  }

  /**
   * States updateMany
   */
  export type StatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StatesUpdateManyMutationInput, StatesUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StatesWhereInput
  }

  /**
   * States upsert
   */
  export type StatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatesInclude<ExtArgs> | null
    /**
     * The filter to search for the States to update in case it exists.
     */
    where: StatesWhereUniqueInput
    /**
     * In case the States found by the `where` argument doesn't exist, create a new States with this data.
     */
    create: XOR<StatesCreateInput, StatesUncheckedCreateInput>
    /**
     * In case the States was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatesUpdateInput, StatesUncheckedUpdateInput>
  }

  /**
   * States delete
   */
  export type StatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatesInclude<ExtArgs> | null
    /**
     * Filter which States to delete.
     */
    where: StatesWhereUniqueInput
  }

  /**
   * States deleteMany
   */
  export type StatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StatesWhereInput
  }

  /**
   * States.radios
   */
  export type States$radiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    where?: RadiosWhereInput
    orderBy?: RadiosOrderByWithRelationInput | RadiosOrderByWithRelationInput[]
    cursor?: RadiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RadiosScalarFieldEnum | RadiosScalarFieldEnum[]
  }

  /**
   * States without action
   */
  export type StatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the States
     */
    select?: StatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatesInclude<ExtArgs> | null
  }


  /**
   * Model Genres
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
    name: string | null
  }

  export type GenresMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
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
    name?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to aggregate.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
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




  export type GenresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithAggregationInput | GenresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: GenresScalarWhereWithAggregatesInput
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
    name: string
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends GenresGroupByArgs> = Prisma.PrismaPromise<
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


  export type GenresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    radios?: boolean | Genres$radiosArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type GenresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genres"]>

  export type GenresSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | Genres$radiosArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genres"
    objects: {
      radios: Prisma.$RadiosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type GenresGetPayload<S extends boolean | null | undefined | GenresDefaultArgs> = $Result.GetResult<Prisma.$GenresPayload, S>

  type GenresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GenresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface GenresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genres'], meta: { name: 'Genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {GenresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenresFindUniqueArgs>(args: SelectSubset<T, GenresFindUniqueArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GenresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenresFindUniqueOrThrowArgs>(args: SelectSubset<T, GenresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenresFindFirstArgs>(args?: SelectSubset<T, GenresFindFirstArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenresFindFirstOrThrowArgs>(args?: SelectSubset<T, GenresFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends GenresFindManyArgs>(args?: SelectSubset<T, GenresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Genres.
     * @param {GenresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends GenresCreateArgs>(args: SelectSubset<T, GenresCreateArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Genres.
     * @param {GenresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenresCreateManyArgs>(args?: SelectSubset<T, GenresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenresCreateManyAndReturnArgs} args - Arguments to create many Genres.
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
    createManyAndReturn<T extends GenresCreateManyAndReturnArgs>(args?: SelectSubset<T, GenresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Genres.
     * @param {GenresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends GenresDeleteArgs>(args: SelectSubset<T, GenresDeleteArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Genres.
     * @param {GenresUpdateArgs} args - Arguments to update one Genres.
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
    update<T extends GenresUpdateArgs>(args: SelectSubset<T, GenresUpdateArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenresDeleteManyArgs>(args?: SelectSubset<T, GenresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends GenresUpdateManyArgs>(args: SelectSubset<T, GenresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genres.
     * @param {GenresUpsertArgs} args - Arguments to update or create a Genres.
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
    upsert<T extends GenresUpsertArgs>(args: SelectSubset<T, GenresUpsertArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenresCountArgs>(
      args?: Subset<T, GenresCountArgs>,
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
     * @param {GenresGroupByArgs} args - Group by arguments.
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
      T extends GenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenresGroupByArgs['orderBy'] }
        : { orderBy?: GenresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genres model
   */
  readonly fields: GenresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    radios<T extends Genres$radiosArgs<ExtArgs> = {}>(args?: Subset<T, Genres$radiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Genres model
   */ 
  interface GenresFieldRefs {
    readonly id: FieldRef<"Genres", 'Int'>
    readonly name: FieldRef<"Genres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genres findUnique
   */
  export type GenresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres findUniqueOrThrow
   */
  export type GenresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres findFirst
   */
  export type GenresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres findFirstOrThrow
   */
  export type GenresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres findMany
   */
  export type GenresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres create
   */
  export type GenresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to create a Genres.
     */
    data: XOR<GenresCreateInput, GenresUncheckedCreateInput>
  }

  /**
   * Genres createMany
   */
  export type GenresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenresCreateManyInput | GenresCreateManyInput[]
  }

  /**
   * Genres createManyAndReturn
   */
  export type GenresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenresCreateManyInput | GenresCreateManyInput[]
  }

  /**
   * Genres update
   */
  export type GenresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to update a Genres.
     */
    data: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
    /**
     * Choose, which Genres to update.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres updateMany
   */
  export type GenresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenresWhereInput
  }

  /**
   * Genres upsert
   */
  export type GenresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The filter to search for the Genres to update in case it exists.
     */
    where: GenresWhereUniqueInput
    /**
     * In case the Genres found by the `where` argument doesn't exist, create a new Genres with this data.
     */
    create: XOR<GenresCreateInput, GenresUncheckedCreateInput>
    /**
     * In case the Genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
  }

  /**
   * Genres delete
   */
  export type GenresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter which Genres to delete.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres deleteMany
   */
  export type GenresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenresWhereInput
  }

  /**
   * Genres.radios
   */
  export type Genres$radiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    where?: RadiosWhereInput
    orderBy?: RadiosOrderByWithRelationInput | RadiosOrderByWithRelationInput[]
    cursor?: RadiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RadiosScalarFieldEnum | RadiosScalarFieldEnum[]
  }

  /**
   * Genres without action
   */
  export type GenresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
  }


  /**
   * Model Cities
   */

  export type AggregateCities = {
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  export type CitiesAvgAggregateOutputType = {
    id: number | null
  }

  export type CitiesSumAggregateOutputType = {
    id: number | null
  }

  export type CitiesMinAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
    country: string | null
  }

  export type CitiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
    country: string | null
  }

  export type CitiesCountAggregateOutputType = {
    id: number
    name: number
    region: number
    country: number
    _all: number
  }


  export type CitiesAvgAggregateInputType = {
    id?: true
  }

  export type CitiesSumAggregateInputType = {
    id?: true
  }

  export type CitiesMinAggregateInputType = {
    id?: true
    name?: true
    region?: true
    country?: true
  }

  export type CitiesMaxAggregateInputType = {
    id?: true
    name?: true
    region?: true
    country?: true
  }

  export type CitiesCountAggregateInputType = {
    id?: true
    name?: true
    region?: true
    country?: true
    _all?: true
  }

  export type CitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to aggregate.
     */
    where?: CitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CitiesOrderByWithRelationInput | CitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitiesMaxAggregateInputType
  }

  export type GetCitiesAggregateType<T extends CitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCities[P]>
      : GetScalarType<T[P], AggregateCities[P]>
  }




  export type CitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitiesWhereInput
    orderBy?: CitiesOrderByWithAggregationInput | CitiesOrderByWithAggregationInput[]
    by: CitiesScalarFieldEnum[] | CitiesScalarFieldEnum
    having?: CitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitiesCountAggregateInputType | true
    _avg?: CitiesAvgAggregateInputType
    _sum?: CitiesSumAggregateInputType
    _min?: CitiesMinAggregateInputType
    _max?: CitiesMaxAggregateInputType
  }

  export type CitiesGroupByOutputType = {
    id: number
    name: string
    region: string
    country: string
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  type GetCitiesGroupByPayload<T extends CitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitiesGroupByOutputType[P]>
            : GetScalarType<T[P], CitiesGroupByOutputType[P]>
        }
      >
    >


  export type CitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    country?: boolean
    radios?: boolean | Cities$radiosArgs<ExtArgs>
    _count?: boolean | CitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cities"]>

  export type CitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    country?: boolean
  }, ExtArgs["result"]["cities"]>

  export type CitiesSelectScalar = {
    id?: boolean
    name?: boolean
    region?: boolean
    country?: boolean
  }

  export type CitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | Cities$radiosArgs<ExtArgs>
    _count?: boolean | CitiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cities"
    objects: {
      radios: Prisma.$RadiosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      region: string
      country: string
    }, ExtArgs["result"]["cities"]>
    composites: {}
  }

  type CitiesGetPayload<S extends boolean | null | undefined | CitiesDefaultArgs> = $Result.GetResult<Prisma.$CitiesPayload, S>

  type CitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CitiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CitiesCountAggregateInputType | true
    }

  export interface CitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cities'], meta: { name: 'Cities' } }
    /**
     * Find zero or one Cities that matches the filter.
     * @param {CitiesFindUniqueArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitiesFindUniqueArgs>(args: SelectSubset<T, CitiesFindUniqueArgs<ExtArgs>>): Prisma__CitiesClient<$Result.GetResult<Prisma.$CitiesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cities that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CitiesFindUniqueOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, CitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitiesClient<$Result.GetResult<Prisma.$CitiesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesFindFirstArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitiesFindFirstArgs>(args?: SelectSubset<T, CitiesFindFirstArgs<ExtArgs>>): Prisma__CitiesClient<$Result.GetResult<Prisma.$CitiesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesFindFirstOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, CitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitiesClient<$Result.GetResult<Prisma.$CitiesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.cities.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.cities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citiesWithIdOnly = await prisma.cities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CitiesFindManyArgs>(args?: SelectSubset<T, CitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitiesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cities.
     * @param {CitiesCreateArgs} args - Arguments to create a Cities.
     * @example
     * // Create one Cities
     * const Cities = await prisma.cities.create({
     *   data: {
     *     // ... data to create a Cities
     *   }
     * })
     * 
     */
    create<T extends CitiesCreateArgs>(args: SelectSubset<T, CitiesCreateArgs<ExtArgs>>): Prisma__CitiesClient<$Result.GetResult<Prisma.$CitiesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cities.
     * @param {CitiesCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitiesCreateManyArgs>(args?: SelectSubset<T, CitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CitiesCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const citiesWithIdOnly = await prisma.cities.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, CitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitiesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cities.
     * @param {CitiesDeleteArgs} args - Arguments to delete one Cities.
     * @example
     * // Delete one Cities
     * const Cities = await prisma.cities.delete({
     *   where: {
     *     // ... filter to delete one Cities
     *   }
     * })
     * 
     */
    delete<T extends CitiesDeleteArgs>(args: SelectSubset<T, CitiesDeleteArgs<ExtArgs>>): Prisma__CitiesClient<$Result.GetResult<Prisma.$CitiesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cities.
     * @param {CitiesUpdateArgs} args - Arguments to update one Cities.
     * @example
     * // Update one Cities
     * const cities = await prisma.cities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitiesUpdateArgs>(args: SelectSubset<T, CitiesUpdateArgs<ExtArgs>>): Prisma__CitiesClient<$Result.GetResult<Prisma.$CitiesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cities.
     * @param {CitiesDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.cities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitiesDeleteManyArgs>(args?: SelectSubset<T, CitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitiesUpdateManyArgs>(args: SelectSubset<T, CitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cities.
     * @param {CitiesUpsertArgs} args - Arguments to update or create a Cities.
     * @example
     * // Update or create a Cities
     * const cities = await prisma.cities.upsert({
     *   create: {
     *     // ... data to create a Cities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cities we want to update
     *   }
     * })
     */
    upsert<T extends CitiesUpsertArgs>(args: SelectSubset<T, CitiesUpsertArgs<ExtArgs>>): Prisma__CitiesClient<$Result.GetResult<Prisma.$CitiesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.cities.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CitiesCountArgs>(
      args?: Subset<T, CitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitiesAggregateArgs>(args: Subset<T, CitiesAggregateArgs>): Prisma.PrismaPromise<GetCitiesAggregateType<T>>

    /**
     * Group by Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesGroupByArgs} args - Group by arguments.
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
      T extends CitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitiesGroupByArgs['orderBy'] }
        : { orderBy?: CitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cities model
   */
  readonly fields: CitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    radios<T extends Cities$radiosArgs<ExtArgs> = {}>(args?: Subset<T, Cities$radiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Cities model
   */ 
  interface CitiesFieldRefs {
    readonly id: FieldRef<"Cities", 'Int'>
    readonly name: FieldRef<"Cities", 'String'>
    readonly region: FieldRef<"Cities", 'String'>
    readonly country: FieldRef<"Cities", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cities findUnique
   */
  export type CitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitiesInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where: CitiesWhereUniqueInput
  }

  /**
   * Cities findUniqueOrThrow
   */
  export type CitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitiesInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where: CitiesWhereUniqueInput
  }

  /**
   * Cities findFirst
   */
  export type CitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitiesInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CitiesOrderByWithRelationInput | CitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * Cities findFirstOrThrow
   */
  export type CitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitiesInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CitiesOrderByWithRelationInput | CitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * Cities findMany
   */
  export type CitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitiesInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CitiesOrderByWithRelationInput | CitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * Cities create
   */
  export type CitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Cities.
     */
    data: XOR<CitiesCreateInput, CitiesUncheckedCreateInput>
  }

  /**
   * Cities createMany
   */
  export type CitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CitiesCreateManyInput | CitiesCreateManyInput[]
  }

  /**
   * Cities createManyAndReturn
   */
  export type CitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CitiesCreateManyInput | CitiesCreateManyInput[]
  }

  /**
   * Cities update
   */
  export type CitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Cities.
     */
    data: XOR<CitiesUpdateInput, CitiesUncheckedUpdateInput>
    /**
     * Choose, which Cities to update.
     */
    where: CitiesWhereUniqueInput
  }

  /**
   * Cities updateMany
   */
  export type CitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CitiesUpdateManyMutationInput, CitiesUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CitiesWhereInput
  }

  /**
   * Cities upsert
   */
  export type CitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Cities to update in case it exists.
     */
    where: CitiesWhereUniqueInput
    /**
     * In case the Cities found by the `where` argument doesn't exist, create a new Cities with this data.
     */
    create: XOR<CitiesCreateInput, CitiesUncheckedCreateInput>
    /**
     * In case the Cities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitiesUpdateInput, CitiesUncheckedUpdateInput>
  }

  /**
   * Cities delete
   */
  export type CitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitiesInclude<ExtArgs> | null
    /**
     * Filter which Cities to delete.
     */
    where: CitiesWhereUniqueInput
  }

  /**
   * Cities deleteMany
   */
  export type CitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CitiesWhereInput
  }

  /**
   * Cities.radios
   */
  export type Cities$radiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    where?: RadiosWhereInput
    orderBy?: RadiosOrderByWithRelationInput | RadiosOrderByWithRelationInput[]
    cursor?: RadiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RadiosScalarFieldEnum | RadiosScalarFieldEnum[]
  }

  /**
   * Cities without action
   */
  export type CitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cities
     */
    select?: CitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitiesInclude<ExtArgs> | null
  }


  /**
   * Model Countries
   */

  export type AggregateCountries = {
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  export type CountriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CountriesSumAggregateOutputType = {
    id: number | null
  }

  export type CountriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
  }

  export type CountriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    region: string | null
  }

  export type CountriesCountAggregateOutputType = {
    id: number
    name: number
    region: number
    _all: number
  }


  export type CountriesAvgAggregateInputType = {
    id?: true
  }

  export type CountriesSumAggregateInputType = {
    id?: true
  }

  export type CountriesMinAggregateInputType = {
    id?: true
    name?: true
    region?: true
  }

  export type CountriesMaxAggregateInputType = {
    id?: true
    name?: true
    region?: true
  }

  export type CountriesCountAggregateInputType = {
    id?: true
    name?: true
    region?: true
    _all?: true
  }

  export type CountriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to aggregate.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationInput | CountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountriesMaxAggregateInputType
  }

  export type GetCountriesAggregateType<T extends CountriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCountries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountries[P]>
      : GetScalarType<T[P], AggregateCountries[P]>
  }




  export type CountriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountriesWhereInput
    orderBy?: CountriesOrderByWithAggregationInput | CountriesOrderByWithAggregationInput[]
    by: CountriesScalarFieldEnum[] | CountriesScalarFieldEnum
    having?: CountriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountriesCountAggregateInputType | true
    _avg?: CountriesAvgAggregateInputType
    _sum?: CountriesSumAggregateInputType
    _min?: CountriesMinAggregateInputType
    _max?: CountriesMaxAggregateInputType
  }

  export type CountriesGroupByOutputType = {
    id: number
    name: string
    region: string
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  type GetCountriesGroupByPayload<T extends CountriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountriesGroupByOutputType[P]>
            : GetScalarType<T[P], CountriesGroupByOutputType[P]>
        }
      >
    >


  export type CountriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    radios?: boolean | Countries$radiosArgs<ExtArgs>
    _count?: boolean | CountriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countries"]>

  export type CountriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
  }, ExtArgs["result"]["countries"]>

  export type CountriesSelectScalar = {
    id?: boolean
    name?: boolean
    region?: boolean
  }

  export type CountriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | Countries$radiosArgs<ExtArgs>
    _count?: boolean | CountriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Countries"
    objects: {
      radios: Prisma.$RadiosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      region: string
    }, ExtArgs["result"]["countries"]>
    composites: {}
  }

  type CountriesGetPayload<S extends boolean | null | undefined | CountriesDefaultArgs> = $Result.GetResult<Prisma.$CountriesPayload, S>

  type CountriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CountriesCountAggregateInputType | true
    }

  export interface CountriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Countries'], meta: { name: 'Countries' } }
    /**
     * Find zero or one Countries that matches the filter.
     * @param {CountriesFindUniqueArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountriesFindUniqueArgs>(args: SelectSubset<T, CountriesFindUniqueArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Countries that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CountriesFindUniqueOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CountriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindFirstArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountriesFindFirstArgs>(args?: SelectSubset<T, CountriesFindFirstArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Countries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindFirstOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CountriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.countries.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.countries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countriesWithIdOnly = await prisma.countries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountriesFindManyArgs>(args?: SelectSubset<T, CountriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Countries.
     * @param {CountriesCreateArgs} args - Arguments to create a Countries.
     * @example
     * // Create one Countries
     * const Countries = await prisma.countries.create({
     *   data: {
     *     // ... data to create a Countries
     *   }
     * })
     * 
     */
    create<T extends CountriesCreateArgs>(args: SelectSubset<T, CountriesCreateArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Countries.
     * @param {CountriesCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const countries = await prisma.countries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountriesCreateManyArgs>(args?: SelectSubset<T, CountriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountriesCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const countries = await prisma.countries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countriesWithIdOnly = await prisma.countries.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CountriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Countries.
     * @param {CountriesDeleteArgs} args - Arguments to delete one Countries.
     * @example
     * // Delete one Countries
     * const Countries = await prisma.countries.delete({
     *   where: {
     *     // ... filter to delete one Countries
     *   }
     * })
     * 
     */
    delete<T extends CountriesDeleteArgs>(args: SelectSubset<T, CountriesDeleteArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Countries.
     * @param {CountriesUpdateArgs} args - Arguments to update one Countries.
     * @example
     * // Update one Countries
     * const countries = await prisma.countries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountriesUpdateArgs>(args: SelectSubset<T, CountriesUpdateArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {CountriesDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.countries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountriesDeleteManyArgs>(args?: SelectSubset<T, CountriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountriesUpdateManyArgs>(args: SelectSubset<T, CountriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Countries.
     * @param {CountriesUpsertArgs} args - Arguments to update or create a Countries.
     * @example
     * // Update or create a Countries
     * const countries = await prisma.countries.upsert({
     *   create: {
     *     // ... data to create a Countries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Countries we want to update
     *   }
     * })
     */
    upsert<T extends CountriesUpsertArgs>(args: SelectSubset<T, CountriesUpsertArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.countries.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountriesCountArgs>(
      args?: Subset<T, CountriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountriesAggregateArgs>(args: Subset<T, CountriesAggregateArgs>): Prisma.PrismaPromise<GetCountriesAggregateType<T>>

    /**
     * Group by Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesGroupByArgs} args - Group by arguments.
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
      T extends CountriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountriesGroupByArgs['orderBy'] }
        : { orderBy?: CountriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Countries model
   */
  readonly fields: CountriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Countries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    radios<T extends Countries$radiosArgs<ExtArgs> = {}>(args?: Subset<T, Countries$radiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Countries model
   */ 
  interface CountriesFieldRefs {
    readonly id: FieldRef<"Countries", 'Int'>
    readonly name: FieldRef<"Countries", 'String'>
    readonly region: FieldRef<"Countries", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Countries findUnique
   */
  export type CountriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where: CountriesWhereUniqueInput
  }

  /**
   * Countries findUniqueOrThrow
   */
  export type CountriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where: CountriesWhereUniqueInput
  }

  /**
   * Countries findFirst
   */
  export type CountriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationInput | CountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * Countries findFirstOrThrow
   */
  export type CountriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationInput | CountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * Countries findMany
   */
  export type CountriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationInput | CountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * Countries create
   */
  export type CountriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Countries.
     */
    data: XOR<CountriesCreateInput, CountriesUncheckedCreateInput>
  }

  /**
   * Countries createMany
   */
  export type CountriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountriesCreateManyInput | CountriesCreateManyInput[]
  }

  /**
   * Countries createManyAndReturn
   */
  export type CountriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountriesCreateManyInput | CountriesCreateManyInput[]
  }

  /**
   * Countries update
   */
  export type CountriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Countries.
     */
    data: XOR<CountriesUpdateInput, CountriesUncheckedUpdateInput>
    /**
     * Choose, which Countries to update.
     */
    where: CountriesWhereUniqueInput
  }

  /**
   * Countries updateMany
   */
  export type CountriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountriesUpdateManyMutationInput, CountriesUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountriesWhereInput
  }

  /**
   * Countries upsert
   */
  export type CountriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Countries to update in case it exists.
     */
    where: CountriesWhereUniqueInput
    /**
     * In case the Countries found by the `where` argument doesn't exist, create a new Countries with this data.
     */
    create: XOR<CountriesCreateInput, CountriesUncheckedCreateInput>
    /**
     * In case the Countries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountriesUpdateInput, CountriesUncheckedUpdateInput>
  }

  /**
   * Countries delete
   */
  export type CountriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter which Countries to delete.
     */
    where: CountriesWhereUniqueInput
  }

  /**
   * Countries deleteMany
   */
  export type CountriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountriesWhereInput
  }

  /**
   * Countries.radios
   */
  export type Countries$radiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    where?: RadiosWhereInput
    orderBy?: RadiosOrderByWithRelationInput | RadiosOrderByWithRelationInput[]
    cursor?: RadiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RadiosScalarFieldEnum | RadiosScalarFieldEnum[]
  }

  /**
   * Countries without action
   */
  export type CountriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountriesInclude<ExtArgs> | null
  }


  /**
   * Model Languages
   */

  export type AggregateLanguages = {
    _count: LanguagesCountAggregateOutputType | null
    _avg: LanguagesAvgAggregateOutputType | null
    _sum: LanguagesSumAggregateOutputType | null
    _min: LanguagesMinAggregateOutputType | null
    _max: LanguagesMaxAggregateOutputType | null
  }

  export type LanguagesAvgAggregateOutputType = {
    id: number | null
  }

  export type LanguagesSumAggregateOutputType = {
    id: number | null
  }

  export type LanguagesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LanguagesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LanguagesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LanguagesAvgAggregateInputType = {
    id?: true
  }

  export type LanguagesSumAggregateInputType = {
    id?: true
  }

  export type LanguagesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LanguagesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LanguagesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LanguagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to aggregate.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguagesMaxAggregateInputType
  }

  export type GetLanguagesAggregateType<T extends LanguagesAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguages[P]>
      : GetScalarType<T[P], AggregateLanguages[P]>
  }




  export type LanguagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguagesWhereInput
    orderBy?: LanguagesOrderByWithAggregationInput | LanguagesOrderByWithAggregationInput[]
    by: LanguagesScalarFieldEnum[] | LanguagesScalarFieldEnum
    having?: LanguagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguagesCountAggregateInputType | true
    _avg?: LanguagesAvgAggregateInputType
    _sum?: LanguagesSumAggregateInputType
    _min?: LanguagesMinAggregateInputType
    _max?: LanguagesMaxAggregateInputType
  }

  export type LanguagesGroupByOutputType = {
    id: number
    name: string
    _count: LanguagesCountAggregateOutputType | null
    _avg: LanguagesAvgAggregateOutputType | null
    _sum: LanguagesSumAggregateOutputType | null
    _min: LanguagesMinAggregateOutputType | null
    _max: LanguagesMaxAggregateOutputType | null
  }

  type GetLanguagesGroupByPayload<T extends LanguagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguagesGroupByOutputType[P]>
            : GetScalarType<T[P], LanguagesGroupByOutputType[P]>
        }
      >
    >


  export type LanguagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    radios?: boolean | Languages$radiosArgs<ExtArgs>
    _count?: boolean | LanguagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languages"]>

  export type LanguagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["languages"]>

  export type LanguagesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type LanguagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | Languages$radiosArgs<ExtArgs>
    _count?: boolean | LanguagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Languages"
    objects: {
      radios: Prisma.$RadiosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["languages"]>
    composites: {}
  }

  type LanguagesGetPayload<S extends boolean | null | undefined | LanguagesDefaultArgs> = $Result.GetResult<Prisma.$LanguagesPayload, S>

  type LanguagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LanguagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LanguagesCountAggregateInputType | true
    }

  export interface LanguagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Languages'], meta: { name: 'Languages' } }
    /**
     * Find zero or one Languages that matches the filter.
     * @param {LanguagesFindUniqueArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguagesFindUniqueArgs>(args: SelectSubset<T, LanguagesFindUniqueArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Languages that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LanguagesFindUniqueOrThrowArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguagesFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindFirstArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguagesFindFirstArgs>(args?: SelectSubset<T, LanguagesFindFirstArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Languages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindFirstOrThrowArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguagesFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.languages.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.languages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languagesWithIdOnly = await prisma.languages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguagesFindManyArgs>(args?: SelectSubset<T, LanguagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Languages.
     * @param {LanguagesCreateArgs} args - Arguments to create a Languages.
     * @example
     * // Create one Languages
     * const Languages = await prisma.languages.create({
     *   data: {
     *     // ... data to create a Languages
     *   }
     * })
     * 
     */
    create<T extends LanguagesCreateArgs>(args: SelectSubset<T, LanguagesCreateArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Languages.
     * @param {LanguagesCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const languages = await prisma.languages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguagesCreateManyArgs>(args?: SelectSubset<T, LanguagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguagesCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const languages = await prisma.languages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languagesWithIdOnly = await prisma.languages.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguagesCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Languages.
     * @param {LanguagesDeleteArgs} args - Arguments to delete one Languages.
     * @example
     * // Delete one Languages
     * const Languages = await prisma.languages.delete({
     *   where: {
     *     // ... filter to delete one Languages
     *   }
     * })
     * 
     */
    delete<T extends LanguagesDeleteArgs>(args: SelectSubset<T, LanguagesDeleteArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Languages.
     * @param {LanguagesUpdateArgs} args - Arguments to update one Languages.
     * @example
     * // Update one Languages
     * const languages = await prisma.languages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguagesUpdateArgs>(args: SelectSubset<T, LanguagesUpdateArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Languages.
     * @param {LanguagesDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.languages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguagesDeleteManyArgs>(args?: SelectSubset<T, LanguagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const languages = await prisma.languages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguagesUpdateManyArgs>(args: SelectSubset<T, LanguagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Languages.
     * @param {LanguagesUpsertArgs} args - Arguments to update or create a Languages.
     * @example
     * // Update or create a Languages
     * const languages = await prisma.languages.upsert({
     *   create: {
     *     // ... data to create a Languages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Languages we want to update
     *   }
     * })
     */
    upsert<T extends LanguagesUpsertArgs>(args: SelectSubset<T, LanguagesUpsertArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.languages.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguagesCountArgs>(
      args?: Subset<T, LanguagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguagesAggregateArgs>(args: Subset<T, LanguagesAggregateArgs>): Prisma.PrismaPromise<GetLanguagesAggregateType<T>>

    /**
     * Group by Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesGroupByArgs} args - Group by arguments.
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
      T extends LanguagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguagesGroupByArgs['orderBy'] }
        : { orderBy?: LanguagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Languages model
   */
  readonly fields: LanguagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Languages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    radios<T extends Languages$radiosArgs<ExtArgs> = {}>(args?: Subset<T, Languages$radiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Languages model
   */ 
  interface LanguagesFieldRefs {
    readonly id: FieldRef<"Languages", 'Int'>
    readonly name: FieldRef<"Languages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Languages findUnique
   */
  export type LanguagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages findUniqueOrThrow
   */
  export type LanguagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages findFirst
   */
  export type LanguagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages findFirstOrThrow
   */
  export type LanguagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages findMany
   */
  export type LanguagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages create
   */
  export type LanguagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Languages.
     */
    data: XOR<LanguagesCreateInput, LanguagesUncheckedCreateInput>
  }

  /**
   * Languages createMany
   */
  export type LanguagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguagesCreateManyInput | LanguagesCreateManyInput[]
  }

  /**
   * Languages createManyAndReturn
   */
  export type LanguagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguagesCreateManyInput | LanguagesCreateManyInput[]
  }

  /**
   * Languages update
   */
  export type LanguagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Languages.
     */
    data: XOR<LanguagesUpdateInput, LanguagesUncheckedUpdateInput>
    /**
     * Choose, which Languages to update.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages updateMany
   */
  export type LanguagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguagesUpdateManyMutationInput, LanguagesUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguagesWhereInput
  }

  /**
   * Languages upsert
   */
  export type LanguagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Languages to update in case it exists.
     */
    where: LanguagesWhereUniqueInput
    /**
     * In case the Languages found by the `where` argument doesn't exist, create a new Languages with this data.
     */
    create: XOR<LanguagesCreateInput, LanguagesUncheckedCreateInput>
    /**
     * In case the Languages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguagesUpdateInput, LanguagesUncheckedUpdateInput>
  }

  /**
   * Languages delete
   */
  export type LanguagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter which Languages to delete.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages deleteMany
   */
  export type LanguagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguagesWhereInput
  }

  /**
   * Languages.radios
   */
  export type Languages$radiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    where?: RadiosWhereInput
    orderBy?: RadiosOrderByWithRelationInput | RadiosOrderByWithRelationInput[]
    cursor?: RadiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RadiosScalarFieldEnum | RadiosScalarFieldEnum[]
  }

  /**
   * Languages without action
   */
  export type LanguagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
  }


  /**
   * Model Regions
   */

  export type AggregateRegions = {
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  export type RegionsAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionsSumAggregateOutputType = {
    id: number | null
  }

  export type RegionsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RegionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RegionsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RegionsAvgAggregateInputType = {
    id?: true
  }

  export type RegionsSumAggregateInputType = {
    id?: true
  }

  export type RegionsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RegionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to aggregate.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionsMaxAggregateInputType
  }

  export type GetRegionsAggregateType<T extends RegionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRegions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegions[P]>
      : GetScalarType<T[P], AggregateRegions[P]>
  }




  export type RegionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionsWhereInput
    orderBy?: RegionsOrderByWithAggregationInput | RegionsOrderByWithAggregationInput[]
    by: RegionsScalarFieldEnum[] | RegionsScalarFieldEnum
    having?: RegionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionsCountAggregateInputType | true
    _avg?: RegionsAvgAggregateInputType
    _sum?: RegionsSumAggregateInputType
    _min?: RegionsMinAggregateInputType
    _max?: RegionsMaxAggregateInputType
  }

  export type RegionsGroupByOutputType = {
    id: number
    name: string
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  type GetRegionsGroupByPayload<T extends RegionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionsGroupByOutputType[P]>
            : GetScalarType<T[P], RegionsGroupByOutputType[P]>
        }
      >
    >


  export type RegionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    radios?: boolean | Regions$radiosArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regions"]>

  export type RegionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["regions"]>

  export type RegionsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RegionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    radios?: boolean | Regions$radiosArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regions"
    objects: {
      radios: Prisma.$RadiosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["regions"]>
    composites: {}
  }

  type RegionsGetPayload<S extends boolean | null | undefined | RegionsDefaultArgs> = $Result.GetResult<Prisma.$RegionsPayload, S>

  type RegionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegionsCountAggregateInputType | true
    }

  export interface RegionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regions'], meta: { name: 'Regions' } }
    /**
     * Find zero or one Regions that matches the filter.
     * @param {RegionsFindUniqueArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionsFindUniqueArgs>(args: SelectSubset<T, RegionsFindUniqueArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Regions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegionsFindUniqueOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionsFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindFirstArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionsFindFirstArgs>(args?: SelectSubset<T, RegionsFindFirstArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Regions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindFirstOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionsFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.regions.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.regions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionsWithIdOnly = await prisma.regions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionsFindManyArgs>(args?: SelectSubset<T, RegionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Regions.
     * @param {RegionsCreateArgs} args - Arguments to create a Regions.
     * @example
     * // Create one Regions
     * const Regions = await prisma.regions.create({
     *   data: {
     *     // ... data to create a Regions
     *   }
     * })
     * 
     */
    create<T extends RegionsCreateArgs>(args: SelectSubset<T, RegionsCreateArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Regions.
     * @param {RegionsCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionsCreateManyArgs>(args?: SelectSubset<T, RegionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionsCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionsWithIdOnly = await prisma.regions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionsCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Regions.
     * @param {RegionsDeleteArgs} args - Arguments to delete one Regions.
     * @example
     * // Delete one Regions
     * const Regions = await prisma.regions.delete({
     *   where: {
     *     // ... filter to delete one Regions
     *   }
     * })
     * 
     */
    delete<T extends RegionsDeleteArgs>(args: SelectSubset<T, RegionsDeleteArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Regions.
     * @param {RegionsUpdateArgs} args - Arguments to update one Regions.
     * @example
     * // Update one Regions
     * const regions = await prisma.regions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionsUpdateArgs>(args: SelectSubset<T, RegionsUpdateArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Regions.
     * @param {RegionsDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.regions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionsDeleteManyArgs>(args?: SelectSubset<T, RegionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionsUpdateManyArgs>(args: SelectSubset<T, RegionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Regions.
     * @param {RegionsUpsertArgs} args - Arguments to update or create a Regions.
     * @example
     * // Update or create a Regions
     * const regions = await prisma.regions.upsert({
     *   create: {
     *     // ... data to create a Regions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regions we want to update
     *   }
     * })
     */
    upsert<T extends RegionsUpsertArgs>(args: SelectSubset<T, RegionsUpsertArgs<ExtArgs>>): Prisma__RegionsClient<$Result.GetResult<Prisma.$RegionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.regions.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionsCountArgs>(
      args?: Subset<T, RegionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionsAggregateArgs>(args: Subset<T, RegionsAggregateArgs>): Prisma.PrismaPromise<GetRegionsAggregateType<T>>

    /**
     * Group by Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsGroupByArgs} args - Group by arguments.
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
      T extends RegionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionsGroupByArgs['orderBy'] }
        : { orderBy?: RegionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regions model
   */
  readonly fields: RegionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    radios<T extends Regions$radiosArgs<ExtArgs> = {}>(args?: Subset<T, Regions$radiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadiosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Regions model
   */ 
  interface RegionsFieldRefs {
    readonly id: FieldRef<"Regions", 'Int'>
    readonly name: FieldRef<"Regions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Regions findUnique
   */
  export type RegionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions findUniqueOrThrow
   */
  export type RegionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions findFirst
   */
  export type RegionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * Regions findFirstOrThrow
   */
  export type RegionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * Regions findMany
   */
  export type RegionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionsOrderByWithRelationInput | RegionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * Regions create
   */
  export type RegionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Regions.
     */
    data: XOR<RegionsCreateInput, RegionsUncheckedCreateInput>
  }

  /**
   * Regions createMany
   */
  export type RegionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionsCreateManyInput | RegionsCreateManyInput[]
  }

  /**
   * Regions createManyAndReturn
   */
  export type RegionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionsCreateManyInput | RegionsCreateManyInput[]
  }

  /**
   * Regions update
   */
  export type RegionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Regions.
     */
    data: XOR<RegionsUpdateInput, RegionsUncheckedUpdateInput>
    /**
     * Choose, which Regions to update.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions updateMany
   */
  export type RegionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionsUpdateManyMutationInput, RegionsUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionsWhereInput
  }

  /**
   * Regions upsert
   */
  export type RegionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Regions to update in case it exists.
     */
    where: RegionsWhereUniqueInput
    /**
     * In case the Regions found by the `where` argument doesn't exist, create a new Regions with this data.
     */
    create: XOR<RegionsCreateInput, RegionsUncheckedCreateInput>
    /**
     * In case the Regions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionsUpdateInput, RegionsUncheckedUpdateInput>
  }

  /**
   * Regions delete
   */
  export type RegionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
    /**
     * Filter which Regions to delete.
     */
    where: RegionsWhereUniqueInput
  }

  /**
   * Regions deleteMany
   */
  export type RegionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionsWhereInput
  }

  /**
   * Regions.radios
   */
  export type Regions$radiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radios
     */
    select?: RadiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadiosInclude<ExtArgs> | null
    where?: RadiosWhereInput
    orderBy?: RadiosOrderByWithRelationInput | RadiosOrderByWithRelationInput[]
    cursor?: RadiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RadiosScalarFieldEnum | RadiosScalarFieldEnum[]
  }

  /**
   * Regions without action
   */
  export type RegionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regions
     */
    select?: RegionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RadiosScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    address: 'address',
    email: 'email',
    facebook: 'facebook',
    frequency: 'frequency',
    image: 'image',
    link_deatils: 'link_deatils',
    link_player: 'link_player',
    listens: 'listens',
    long_description: 'long_description',
    no_play: 'no_play',
    phone: 'phone',
    profile_slogan: 'profile_slogan',
    radio_language: 'radio_language',
    short_description: 'short_description',
    stars: 'stars',
    title: 'title',
    twitter: 'twitter',
    website: 'website',
    source: 'source',
    radio_id: 'radio_id',
    state_id: 'state_id',
    shows: 'shows',
    json: 'json'
  };

  export type RadiosScalarFieldEnum = (typeof RadiosScalarFieldEnum)[keyof typeof RadiosScalarFieldEnum]


  export const StatesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    region: 'region',
    country: 'country'
  };

  export type StatesScalarFieldEnum = (typeof StatesScalarFieldEnum)[keyof typeof StatesScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const CitiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    region: 'region',
    country: 'country'
  };

  export type CitiesScalarFieldEnum = (typeof CitiesScalarFieldEnum)[keyof typeof CitiesScalarFieldEnum]


  export const CountriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    region: 'region'
  };

  export type CountriesScalarFieldEnum = (typeof CountriesScalarFieldEnum)[keyof typeof CountriesScalarFieldEnum]


  export const LanguagesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LanguagesScalarFieldEnum = (typeof LanguagesScalarFieldEnum)[keyof typeof LanguagesScalarFieldEnum]


  export const RegionsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RegionsScalarFieldEnum = (typeof RegionsScalarFieldEnum)[keyof typeof RegionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RadiosWhereInput = {
    AND?: RadiosWhereInput | RadiosWhereInput[]
    OR?: RadiosWhereInput[]
    NOT?: RadiosWhereInput | RadiosWhereInput[]
    id?: IntFilter<"Radios"> | number
    createdAt?: DateTimeFilter<"Radios"> | Date | string
    updatedAt?: DateTimeFilter<"Radios"> | Date | string
    address?: StringFilter<"Radios"> | string
    email?: StringFilter<"Radios"> | string
    facebook?: StringFilter<"Radios"> | string
    frequency?: StringFilter<"Radios"> | string
    image?: StringFilter<"Radios"> | string
    link_deatils?: StringFilter<"Radios"> | string
    link_player?: StringFilter<"Radios"> | string
    listens?: StringFilter<"Radios"> | string
    long_description?: StringFilter<"Radios"> | string
    no_play?: BoolFilter<"Radios"> | boolean
    phone?: StringFilter<"Radios"> | string
    profile_slogan?: StringFilter<"Radios"> | string
    radio_language?: StringFilter<"Radios"> | string
    short_description?: StringFilter<"Radios"> | string
    stars?: IntFilter<"Radios"> | number
    title?: StringFilter<"Radios"> | string
    twitter?: StringFilter<"Radios"> | string
    website?: StringFilter<"Radios"> | string
    source?: StringFilter<"Radios"> | string
    radio_id?: StringFilter<"Radios"> | string
    state_id?: StringFilter<"Radios"> | string
    shows?: StringFilter<"Radios"> | string
    json?: StringFilter<"Radios"> | string
    city?: CitiesListRelationFilter
    country?: CountriesListRelationFilter
    genres?: GenresListRelationFilter
    language?: LanguagesListRelationFilter
    region?: RegionsListRelationFilter
    state?: StatesListRelationFilter
  }

  export type RadiosOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    email?: SortOrder
    facebook?: SortOrder
    frequency?: SortOrder
    image?: SortOrder
    link_deatils?: SortOrder
    link_player?: SortOrder
    listens?: SortOrder
    long_description?: SortOrder
    no_play?: SortOrder
    phone?: SortOrder
    profile_slogan?: SortOrder
    radio_language?: SortOrder
    short_description?: SortOrder
    stars?: SortOrder
    title?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    source?: SortOrder
    radio_id?: SortOrder
    state_id?: SortOrder
    shows?: SortOrder
    json?: SortOrder
    city?: CitiesOrderByRelationAggregateInput
    country?: CountriesOrderByRelationAggregateInput
    genres?: GenresOrderByRelationAggregateInput
    language?: LanguagesOrderByRelationAggregateInput
    region?: RegionsOrderByRelationAggregateInput
    state?: StatesOrderByRelationAggregateInput
  }

  export type RadiosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RadiosWhereInput | RadiosWhereInput[]
    OR?: RadiosWhereInput[]
    NOT?: RadiosWhereInput | RadiosWhereInput[]
    createdAt?: DateTimeFilter<"Radios"> | Date | string
    updatedAt?: DateTimeFilter<"Radios"> | Date | string
    address?: StringFilter<"Radios"> | string
    email?: StringFilter<"Radios"> | string
    facebook?: StringFilter<"Radios"> | string
    frequency?: StringFilter<"Radios"> | string
    image?: StringFilter<"Radios"> | string
    link_deatils?: StringFilter<"Radios"> | string
    link_player?: StringFilter<"Radios"> | string
    listens?: StringFilter<"Radios"> | string
    long_description?: StringFilter<"Radios"> | string
    no_play?: BoolFilter<"Radios"> | boolean
    phone?: StringFilter<"Radios"> | string
    profile_slogan?: StringFilter<"Radios"> | string
    radio_language?: StringFilter<"Radios"> | string
    short_description?: StringFilter<"Radios"> | string
    stars?: IntFilter<"Radios"> | number
    title?: StringFilter<"Radios"> | string
    twitter?: StringFilter<"Radios"> | string
    website?: StringFilter<"Radios"> | string
    source?: StringFilter<"Radios"> | string
    radio_id?: StringFilter<"Radios"> | string
    state_id?: StringFilter<"Radios"> | string
    shows?: StringFilter<"Radios"> | string
    json?: StringFilter<"Radios"> | string
    city?: CitiesListRelationFilter
    country?: CountriesListRelationFilter
    genres?: GenresListRelationFilter
    language?: LanguagesListRelationFilter
    region?: RegionsListRelationFilter
    state?: StatesListRelationFilter
  }, "id">

  export type RadiosOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    email?: SortOrder
    facebook?: SortOrder
    frequency?: SortOrder
    image?: SortOrder
    link_deatils?: SortOrder
    link_player?: SortOrder
    listens?: SortOrder
    long_description?: SortOrder
    no_play?: SortOrder
    phone?: SortOrder
    profile_slogan?: SortOrder
    radio_language?: SortOrder
    short_description?: SortOrder
    stars?: SortOrder
    title?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    source?: SortOrder
    radio_id?: SortOrder
    state_id?: SortOrder
    shows?: SortOrder
    json?: SortOrder
    _count?: RadiosCountOrderByAggregateInput
    _avg?: RadiosAvgOrderByAggregateInput
    _max?: RadiosMaxOrderByAggregateInput
    _min?: RadiosMinOrderByAggregateInput
    _sum?: RadiosSumOrderByAggregateInput
  }

  export type RadiosScalarWhereWithAggregatesInput = {
    AND?: RadiosScalarWhereWithAggregatesInput | RadiosScalarWhereWithAggregatesInput[]
    OR?: RadiosScalarWhereWithAggregatesInput[]
    NOT?: RadiosScalarWhereWithAggregatesInput | RadiosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Radios"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Radios"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Radios"> | Date | string
    address?: StringWithAggregatesFilter<"Radios"> | string
    email?: StringWithAggregatesFilter<"Radios"> | string
    facebook?: StringWithAggregatesFilter<"Radios"> | string
    frequency?: StringWithAggregatesFilter<"Radios"> | string
    image?: StringWithAggregatesFilter<"Radios"> | string
    link_deatils?: StringWithAggregatesFilter<"Radios"> | string
    link_player?: StringWithAggregatesFilter<"Radios"> | string
    listens?: StringWithAggregatesFilter<"Radios"> | string
    long_description?: StringWithAggregatesFilter<"Radios"> | string
    no_play?: BoolWithAggregatesFilter<"Radios"> | boolean
    phone?: StringWithAggregatesFilter<"Radios"> | string
    profile_slogan?: StringWithAggregatesFilter<"Radios"> | string
    radio_language?: StringWithAggregatesFilter<"Radios"> | string
    short_description?: StringWithAggregatesFilter<"Radios"> | string
    stars?: IntWithAggregatesFilter<"Radios"> | number
    title?: StringWithAggregatesFilter<"Radios"> | string
    twitter?: StringWithAggregatesFilter<"Radios"> | string
    website?: StringWithAggregatesFilter<"Radios"> | string
    source?: StringWithAggregatesFilter<"Radios"> | string
    radio_id?: StringWithAggregatesFilter<"Radios"> | string
    state_id?: StringWithAggregatesFilter<"Radios"> | string
    shows?: StringWithAggregatesFilter<"Radios"> | string
    json?: StringWithAggregatesFilter<"Radios"> | string
  }

  export type StatesWhereInput = {
    AND?: StatesWhereInput | StatesWhereInput[]
    OR?: StatesWhereInput[]
    NOT?: StatesWhereInput | StatesWhereInput[]
    id?: IntFilter<"States"> | number
    name?: StringFilter<"States"> | string
    region?: StringFilter<"States"> | string
    country?: StringFilter<"States"> | string
    radios?: RadiosListRelationFilter
  }

  export type StatesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    country?: SortOrder
    radios?: RadiosOrderByRelationAggregateInput
  }

  export type StatesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: StatesWhereInput | StatesWhereInput[]
    OR?: StatesWhereInput[]
    NOT?: StatesWhereInput | StatesWhereInput[]
    region?: StringFilter<"States"> | string
    country?: StringFilter<"States"> | string
    radios?: RadiosListRelationFilter
  }, "id" | "name">

  export type StatesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    country?: SortOrder
    _count?: StatesCountOrderByAggregateInput
    _avg?: StatesAvgOrderByAggregateInput
    _max?: StatesMaxOrderByAggregateInput
    _min?: StatesMinOrderByAggregateInput
    _sum?: StatesSumOrderByAggregateInput
  }

  export type StatesScalarWhereWithAggregatesInput = {
    AND?: StatesScalarWhereWithAggregatesInput | StatesScalarWhereWithAggregatesInput[]
    OR?: StatesScalarWhereWithAggregatesInput[]
    NOT?: StatesScalarWhereWithAggregatesInput | StatesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"States"> | number
    name?: StringWithAggregatesFilter<"States"> | string
    region?: StringWithAggregatesFilter<"States"> | string
    country?: StringWithAggregatesFilter<"States"> | string
  }

  export type GenresWhereInput = {
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    id?: IntFilter<"Genres"> | number
    name?: StringFilter<"Genres"> | string
    radios?: RadiosListRelationFilter
  }

  export type GenresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    radios?: RadiosOrderByRelationAggregateInput
  }

  export type GenresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    radios?: RadiosListRelationFilter
  }, "id" | "name">

  export type GenresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenresCountOrderByAggregateInput
    _avg?: GenresAvgOrderByAggregateInput
    _max?: GenresMaxOrderByAggregateInput
    _min?: GenresMinOrderByAggregateInput
    _sum?: GenresSumOrderByAggregateInput
  }

  export type GenresScalarWhereWithAggregatesInput = {
    AND?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    OR?: GenresScalarWhereWithAggregatesInput[]
    NOT?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genres"> | number
    name?: StringWithAggregatesFilter<"Genres"> | string
  }

  export type CitiesWhereInput = {
    AND?: CitiesWhereInput | CitiesWhereInput[]
    OR?: CitiesWhereInput[]
    NOT?: CitiesWhereInput | CitiesWhereInput[]
    id?: IntFilter<"Cities"> | number
    name?: StringFilter<"Cities"> | string
    region?: StringFilter<"Cities"> | string
    country?: StringFilter<"Cities"> | string
    radios?: RadiosListRelationFilter
  }

  export type CitiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    country?: SortOrder
    radios?: RadiosOrderByRelationAggregateInput
  }

  export type CitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CitiesWhereInput | CitiesWhereInput[]
    OR?: CitiesWhereInput[]
    NOT?: CitiesWhereInput | CitiesWhereInput[]
    region?: StringFilter<"Cities"> | string
    country?: StringFilter<"Cities"> | string
    radios?: RadiosListRelationFilter
  }, "id" | "name">

  export type CitiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    country?: SortOrder
    _count?: CitiesCountOrderByAggregateInput
    _avg?: CitiesAvgOrderByAggregateInput
    _max?: CitiesMaxOrderByAggregateInput
    _min?: CitiesMinOrderByAggregateInput
    _sum?: CitiesSumOrderByAggregateInput
  }

  export type CitiesScalarWhereWithAggregatesInput = {
    AND?: CitiesScalarWhereWithAggregatesInput | CitiesScalarWhereWithAggregatesInput[]
    OR?: CitiesScalarWhereWithAggregatesInput[]
    NOT?: CitiesScalarWhereWithAggregatesInput | CitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cities"> | number
    name?: StringWithAggregatesFilter<"Cities"> | string
    region?: StringWithAggregatesFilter<"Cities"> | string
    country?: StringWithAggregatesFilter<"Cities"> | string
  }

  export type CountriesWhereInput = {
    AND?: CountriesWhereInput | CountriesWhereInput[]
    OR?: CountriesWhereInput[]
    NOT?: CountriesWhereInput | CountriesWhereInput[]
    id?: IntFilter<"Countries"> | number
    name?: StringFilter<"Countries"> | string
    region?: StringFilter<"Countries"> | string
    radios?: RadiosListRelationFilter
  }

  export type CountriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    radios?: RadiosOrderByRelationAggregateInput
  }

  export type CountriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CountriesWhereInput | CountriesWhereInput[]
    OR?: CountriesWhereInput[]
    NOT?: CountriesWhereInput | CountriesWhereInput[]
    region?: StringFilter<"Countries"> | string
    radios?: RadiosListRelationFilter
  }, "id" | "name">

  export type CountriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    _count?: CountriesCountOrderByAggregateInput
    _avg?: CountriesAvgOrderByAggregateInput
    _max?: CountriesMaxOrderByAggregateInput
    _min?: CountriesMinOrderByAggregateInput
    _sum?: CountriesSumOrderByAggregateInput
  }

  export type CountriesScalarWhereWithAggregatesInput = {
    AND?: CountriesScalarWhereWithAggregatesInput | CountriesScalarWhereWithAggregatesInput[]
    OR?: CountriesScalarWhereWithAggregatesInput[]
    NOT?: CountriesScalarWhereWithAggregatesInput | CountriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Countries"> | number
    name?: StringWithAggregatesFilter<"Countries"> | string
    region?: StringWithAggregatesFilter<"Countries"> | string
  }

  export type LanguagesWhereInput = {
    AND?: LanguagesWhereInput | LanguagesWhereInput[]
    OR?: LanguagesWhereInput[]
    NOT?: LanguagesWhereInput | LanguagesWhereInput[]
    id?: IntFilter<"Languages"> | number
    name?: StringFilter<"Languages"> | string
    radios?: RadiosListRelationFilter
  }

  export type LanguagesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    radios?: RadiosOrderByRelationAggregateInput
  }

  export type LanguagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LanguagesWhereInput | LanguagesWhereInput[]
    OR?: LanguagesWhereInput[]
    NOT?: LanguagesWhereInput | LanguagesWhereInput[]
    radios?: RadiosListRelationFilter
  }, "id" | "name">

  export type LanguagesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: LanguagesCountOrderByAggregateInput
    _avg?: LanguagesAvgOrderByAggregateInput
    _max?: LanguagesMaxOrderByAggregateInput
    _min?: LanguagesMinOrderByAggregateInput
    _sum?: LanguagesSumOrderByAggregateInput
  }

  export type LanguagesScalarWhereWithAggregatesInput = {
    AND?: LanguagesScalarWhereWithAggregatesInput | LanguagesScalarWhereWithAggregatesInput[]
    OR?: LanguagesScalarWhereWithAggregatesInput[]
    NOT?: LanguagesScalarWhereWithAggregatesInput | LanguagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Languages"> | number
    name?: StringWithAggregatesFilter<"Languages"> | string
  }

  export type RegionsWhereInput = {
    AND?: RegionsWhereInput | RegionsWhereInput[]
    OR?: RegionsWhereInput[]
    NOT?: RegionsWhereInput | RegionsWhereInput[]
    id?: IntFilter<"Regions"> | number
    name?: StringFilter<"Regions"> | string
    radios?: RadiosListRelationFilter
  }

  export type RegionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    radios?: RadiosOrderByRelationAggregateInput
  }

  export type RegionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RegionsWhereInput | RegionsWhereInput[]
    OR?: RegionsWhereInput[]
    NOT?: RegionsWhereInput | RegionsWhereInput[]
    radios?: RadiosListRelationFilter
  }, "id" | "name">

  export type RegionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RegionsCountOrderByAggregateInput
    _avg?: RegionsAvgOrderByAggregateInput
    _max?: RegionsMaxOrderByAggregateInput
    _min?: RegionsMinOrderByAggregateInput
    _sum?: RegionsSumOrderByAggregateInput
  }

  export type RegionsScalarWhereWithAggregatesInput = {
    AND?: RegionsScalarWhereWithAggregatesInput | RegionsScalarWhereWithAggregatesInput[]
    OR?: RegionsScalarWhereWithAggregatesInput[]
    NOT?: RegionsScalarWhereWithAggregatesInput | RegionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Regions"> | number
    name?: StringWithAggregatesFilter<"Regions"> | string
  }

  export type RadiosCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesCreateNestedManyWithoutRadiosInput
    country?: CountriesCreateNestedManyWithoutRadiosInput
    genres?: GenresCreateNestedManyWithoutRadiosInput
    language?: LanguagesCreateNestedManyWithoutRadiosInput
    region?: RegionsCreateNestedManyWithoutRadiosInput
    state?: StatesCreateNestedManyWithoutRadiosInput
  }

  export type RadiosUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesUncheckedCreateNestedManyWithoutRadiosInput
    country?: CountriesUncheckedCreateNestedManyWithoutRadiosInput
    genres?: GenresUncheckedCreateNestedManyWithoutRadiosInput
    language?: LanguagesUncheckedCreateNestedManyWithoutRadiosInput
    region?: RegionsUncheckedCreateNestedManyWithoutRadiosInput
    state?: StatesUncheckedCreateNestedManyWithoutRadiosInput
  }

  export type RadiosUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUpdateManyWithoutRadiosNestedInput
    country?: CountriesUpdateManyWithoutRadiosNestedInput
    genres?: GenresUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUpdateManyWithoutRadiosNestedInput
    region?: RegionsUpdateManyWithoutRadiosNestedInput
    state?: StatesUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUncheckedUpdateManyWithoutRadiosNestedInput
    country?: CountriesUncheckedUpdateManyWithoutRadiosNestedInput
    genres?: GenresUncheckedUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUncheckedUpdateManyWithoutRadiosNestedInput
    region?: RegionsUncheckedUpdateManyWithoutRadiosNestedInput
    state?: StatesUncheckedUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
  }

  export type RadiosUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
  }

  export type RadiosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
  }

  export type StatesCreateInput = {
    name: string
    region?: string
    country?: string
    radios?: RadiosCreateNestedManyWithoutStateInput
  }

  export type StatesUncheckedCreateInput = {
    id?: number
    name: string
    region?: string
    country?: string
    radios?: RadiosUncheckedCreateNestedManyWithoutStateInput
  }

  export type StatesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUpdateManyWithoutStateNestedInput
  }

  export type StatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StatesCreateManyInput = {
    id?: number
    name: string
    region?: string
    country?: string
  }

  export type StatesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type StatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type GenresCreateInput = {
    name: string
    radios?: RadiosCreateNestedManyWithoutGenresInput
  }

  export type GenresUncheckedCreateInput = {
    id?: number
    name: string
    radios?: RadiosUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenresUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenresCreateManyInput = {
    id?: number
    name: string
  }

  export type GenresUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CitiesCreateInput = {
    name: string
    region?: string
    country?: string
    radios?: RadiosCreateNestedManyWithoutCityInput
  }

  export type CitiesUncheckedCreateInput = {
    id?: number
    name: string
    region?: string
    country?: string
    radios?: RadiosUncheckedCreateNestedManyWithoutCityInput
  }

  export type CitiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUpdateManyWithoutCityNestedInput
  }

  export type CitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CitiesCreateManyInput = {
    id?: number
    name: string
    region?: string
    country?: string
  }

  export type CitiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type CitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type CountriesCreateInput = {
    name: string
    region?: string
    radios?: RadiosCreateNestedManyWithoutCountryInput
  }

  export type CountriesUncheckedCreateInput = {
    id?: number
    name: string
    region?: string
    radios?: RadiosUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUpdateManyWithoutCountryNestedInput
  }

  export type CountriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountriesCreateManyInput = {
    id?: number
    name: string
    region?: string
  }

  export type CountriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type CountriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type LanguagesCreateInput = {
    name: string
    radios?: RadiosCreateNestedManyWithoutLanguageInput
  }

  export type LanguagesUncheckedCreateInput = {
    id?: number
    name: string
    radios?: RadiosUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguagesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUpdateManyWithoutLanguageNestedInput
  }

  export type LanguagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguagesCreateManyInput = {
    id?: number
    name: string
  }

  export type LanguagesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionsCreateInput = {
    name: string
    radios?: RadiosCreateNestedManyWithoutRegionInput
  }

  export type RegionsUncheckedCreateInput = {
    id?: number
    name: string
    radios?: RadiosUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUpdateManyWithoutRegionNestedInput
  }

  export type RegionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    radios?: RadiosUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionsCreateManyInput = {
    id?: number
    name: string
  }

  export type RegionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CitiesListRelationFilter = {
    every?: CitiesWhereInput
    some?: CitiesWhereInput
    none?: CitiesWhereInput
  }

  export type CountriesListRelationFilter = {
    every?: CountriesWhereInput
    some?: CountriesWhereInput
    none?: CountriesWhereInput
  }

  export type GenresListRelationFilter = {
    every?: GenresWhereInput
    some?: GenresWhereInput
    none?: GenresWhereInput
  }

  export type LanguagesListRelationFilter = {
    every?: LanguagesWhereInput
    some?: LanguagesWhereInput
    none?: LanguagesWhereInput
  }

  export type RegionsListRelationFilter = {
    every?: RegionsWhereInput
    some?: RegionsWhereInput
    none?: RegionsWhereInput
  }

  export type StatesListRelationFilter = {
    every?: StatesWhereInput
    some?: StatesWhereInput
    none?: StatesWhereInput
  }

  export type CitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RadiosCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    email?: SortOrder
    facebook?: SortOrder
    frequency?: SortOrder
    image?: SortOrder
    link_deatils?: SortOrder
    link_player?: SortOrder
    listens?: SortOrder
    long_description?: SortOrder
    no_play?: SortOrder
    phone?: SortOrder
    profile_slogan?: SortOrder
    radio_language?: SortOrder
    short_description?: SortOrder
    stars?: SortOrder
    title?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    source?: SortOrder
    radio_id?: SortOrder
    state_id?: SortOrder
    shows?: SortOrder
    json?: SortOrder
  }

  export type RadiosAvgOrderByAggregateInput = {
    id?: SortOrder
    stars?: SortOrder
  }

  export type RadiosMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    email?: SortOrder
    facebook?: SortOrder
    frequency?: SortOrder
    image?: SortOrder
    link_deatils?: SortOrder
    link_player?: SortOrder
    listens?: SortOrder
    long_description?: SortOrder
    no_play?: SortOrder
    phone?: SortOrder
    profile_slogan?: SortOrder
    radio_language?: SortOrder
    short_description?: SortOrder
    stars?: SortOrder
    title?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    source?: SortOrder
    radio_id?: SortOrder
    state_id?: SortOrder
    shows?: SortOrder
    json?: SortOrder
  }

  export type RadiosMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    email?: SortOrder
    facebook?: SortOrder
    frequency?: SortOrder
    image?: SortOrder
    link_deatils?: SortOrder
    link_player?: SortOrder
    listens?: SortOrder
    long_description?: SortOrder
    no_play?: SortOrder
    phone?: SortOrder
    profile_slogan?: SortOrder
    radio_language?: SortOrder
    short_description?: SortOrder
    stars?: SortOrder
    title?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    source?: SortOrder
    radio_id?: SortOrder
    state_id?: SortOrder
    shows?: SortOrder
    json?: SortOrder
  }

  export type RadiosSumOrderByAggregateInput = {
    id?: SortOrder
    stars?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RadiosListRelationFilter = {
    every?: RadiosWhereInput
    some?: RadiosWhereInput
    none?: RadiosWhereInput
  }

  export type RadiosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    country?: SortOrder
  }

  export type StatesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    country?: SortOrder
  }

  export type StatesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    country?: SortOrder
  }

  export type StatesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CitiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    country?: SortOrder
  }

  export type CitiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    country?: SortOrder
  }

  export type CitiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    country?: SortOrder
  }

  export type CitiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
  }

  export type CountriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
  }

  export type CountriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
  }

  export type CountriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LanguagesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LanguagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LanguagesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LanguagesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LanguagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CitiesCreateNestedManyWithoutRadiosInput = {
    create?: XOR<CitiesCreateWithoutRadiosInput, CitiesUncheckedCreateWithoutRadiosInput> | CitiesCreateWithoutRadiosInput[] | CitiesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: CitiesCreateOrConnectWithoutRadiosInput | CitiesCreateOrConnectWithoutRadiosInput[]
    connect?: CitiesWhereUniqueInput | CitiesWhereUniqueInput[]
  }

  export type CountriesCreateNestedManyWithoutRadiosInput = {
    create?: XOR<CountriesCreateWithoutRadiosInput, CountriesUncheckedCreateWithoutRadiosInput> | CountriesCreateWithoutRadiosInput[] | CountriesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: CountriesCreateOrConnectWithoutRadiosInput | CountriesCreateOrConnectWithoutRadiosInput[]
    connect?: CountriesWhereUniqueInput | CountriesWhereUniqueInput[]
  }

  export type GenresCreateNestedManyWithoutRadiosInput = {
    create?: XOR<GenresCreateWithoutRadiosInput, GenresUncheckedCreateWithoutRadiosInput> | GenresCreateWithoutRadiosInput[] | GenresUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutRadiosInput | GenresCreateOrConnectWithoutRadiosInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type LanguagesCreateNestedManyWithoutRadiosInput = {
    create?: XOR<LanguagesCreateWithoutRadiosInput, LanguagesUncheckedCreateWithoutRadiosInput> | LanguagesCreateWithoutRadiosInput[] | LanguagesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: LanguagesCreateOrConnectWithoutRadiosInput | LanguagesCreateOrConnectWithoutRadiosInput[]
    connect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
  }

  export type RegionsCreateNestedManyWithoutRadiosInput = {
    create?: XOR<RegionsCreateWithoutRadiosInput, RegionsUncheckedCreateWithoutRadiosInput> | RegionsCreateWithoutRadiosInput[] | RegionsUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: RegionsCreateOrConnectWithoutRadiosInput | RegionsCreateOrConnectWithoutRadiosInput[]
    connect?: RegionsWhereUniqueInput | RegionsWhereUniqueInput[]
  }

  export type StatesCreateNestedManyWithoutRadiosInput = {
    create?: XOR<StatesCreateWithoutRadiosInput, StatesUncheckedCreateWithoutRadiosInput> | StatesCreateWithoutRadiosInput[] | StatesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: StatesCreateOrConnectWithoutRadiosInput | StatesCreateOrConnectWithoutRadiosInput[]
    connect?: StatesWhereUniqueInput | StatesWhereUniqueInput[]
  }

  export type CitiesUncheckedCreateNestedManyWithoutRadiosInput = {
    create?: XOR<CitiesCreateWithoutRadiosInput, CitiesUncheckedCreateWithoutRadiosInput> | CitiesCreateWithoutRadiosInput[] | CitiesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: CitiesCreateOrConnectWithoutRadiosInput | CitiesCreateOrConnectWithoutRadiosInput[]
    connect?: CitiesWhereUniqueInput | CitiesWhereUniqueInput[]
  }

  export type CountriesUncheckedCreateNestedManyWithoutRadiosInput = {
    create?: XOR<CountriesCreateWithoutRadiosInput, CountriesUncheckedCreateWithoutRadiosInput> | CountriesCreateWithoutRadiosInput[] | CountriesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: CountriesCreateOrConnectWithoutRadiosInput | CountriesCreateOrConnectWithoutRadiosInput[]
    connect?: CountriesWhereUniqueInput | CountriesWhereUniqueInput[]
  }

  export type GenresUncheckedCreateNestedManyWithoutRadiosInput = {
    create?: XOR<GenresCreateWithoutRadiosInput, GenresUncheckedCreateWithoutRadiosInput> | GenresCreateWithoutRadiosInput[] | GenresUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutRadiosInput | GenresCreateOrConnectWithoutRadiosInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type LanguagesUncheckedCreateNestedManyWithoutRadiosInput = {
    create?: XOR<LanguagesCreateWithoutRadiosInput, LanguagesUncheckedCreateWithoutRadiosInput> | LanguagesCreateWithoutRadiosInput[] | LanguagesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: LanguagesCreateOrConnectWithoutRadiosInput | LanguagesCreateOrConnectWithoutRadiosInput[]
    connect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
  }

  export type RegionsUncheckedCreateNestedManyWithoutRadiosInput = {
    create?: XOR<RegionsCreateWithoutRadiosInput, RegionsUncheckedCreateWithoutRadiosInput> | RegionsCreateWithoutRadiosInput[] | RegionsUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: RegionsCreateOrConnectWithoutRadiosInput | RegionsCreateOrConnectWithoutRadiosInput[]
    connect?: RegionsWhereUniqueInput | RegionsWhereUniqueInput[]
  }

  export type StatesUncheckedCreateNestedManyWithoutRadiosInput = {
    create?: XOR<StatesCreateWithoutRadiosInput, StatesUncheckedCreateWithoutRadiosInput> | StatesCreateWithoutRadiosInput[] | StatesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: StatesCreateOrConnectWithoutRadiosInput | StatesCreateOrConnectWithoutRadiosInput[]
    connect?: StatesWhereUniqueInput | StatesWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CitiesUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<CitiesCreateWithoutRadiosInput, CitiesUncheckedCreateWithoutRadiosInput> | CitiesCreateWithoutRadiosInput[] | CitiesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: CitiesCreateOrConnectWithoutRadiosInput | CitiesCreateOrConnectWithoutRadiosInput[]
    upsert?: CitiesUpsertWithWhereUniqueWithoutRadiosInput | CitiesUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: CitiesWhereUniqueInput | CitiesWhereUniqueInput[]
    disconnect?: CitiesWhereUniqueInput | CitiesWhereUniqueInput[]
    delete?: CitiesWhereUniqueInput | CitiesWhereUniqueInput[]
    connect?: CitiesWhereUniqueInput | CitiesWhereUniqueInput[]
    update?: CitiesUpdateWithWhereUniqueWithoutRadiosInput | CitiesUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: CitiesUpdateManyWithWhereWithoutRadiosInput | CitiesUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: CitiesScalarWhereInput | CitiesScalarWhereInput[]
  }

  export type CountriesUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<CountriesCreateWithoutRadiosInput, CountriesUncheckedCreateWithoutRadiosInput> | CountriesCreateWithoutRadiosInput[] | CountriesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: CountriesCreateOrConnectWithoutRadiosInput | CountriesCreateOrConnectWithoutRadiosInput[]
    upsert?: CountriesUpsertWithWhereUniqueWithoutRadiosInput | CountriesUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: CountriesWhereUniqueInput | CountriesWhereUniqueInput[]
    disconnect?: CountriesWhereUniqueInput | CountriesWhereUniqueInput[]
    delete?: CountriesWhereUniqueInput | CountriesWhereUniqueInput[]
    connect?: CountriesWhereUniqueInput | CountriesWhereUniqueInput[]
    update?: CountriesUpdateWithWhereUniqueWithoutRadiosInput | CountriesUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: CountriesUpdateManyWithWhereWithoutRadiosInput | CountriesUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: CountriesScalarWhereInput | CountriesScalarWhereInput[]
  }

  export type GenresUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<GenresCreateWithoutRadiosInput, GenresUncheckedCreateWithoutRadiosInput> | GenresCreateWithoutRadiosInput[] | GenresUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutRadiosInput | GenresCreateOrConnectWithoutRadiosInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutRadiosInput | GenresUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutRadiosInput | GenresUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutRadiosInput | GenresUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type LanguagesUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<LanguagesCreateWithoutRadiosInput, LanguagesUncheckedCreateWithoutRadiosInput> | LanguagesCreateWithoutRadiosInput[] | LanguagesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: LanguagesCreateOrConnectWithoutRadiosInput | LanguagesCreateOrConnectWithoutRadiosInput[]
    upsert?: LanguagesUpsertWithWhereUniqueWithoutRadiosInput | LanguagesUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    disconnect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    delete?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    connect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    update?: LanguagesUpdateWithWhereUniqueWithoutRadiosInput | LanguagesUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: LanguagesUpdateManyWithWhereWithoutRadiosInput | LanguagesUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: LanguagesScalarWhereInput | LanguagesScalarWhereInput[]
  }

  export type RegionsUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<RegionsCreateWithoutRadiosInput, RegionsUncheckedCreateWithoutRadiosInput> | RegionsCreateWithoutRadiosInput[] | RegionsUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: RegionsCreateOrConnectWithoutRadiosInput | RegionsCreateOrConnectWithoutRadiosInput[]
    upsert?: RegionsUpsertWithWhereUniqueWithoutRadiosInput | RegionsUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: RegionsWhereUniqueInput | RegionsWhereUniqueInput[]
    disconnect?: RegionsWhereUniqueInput | RegionsWhereUniqueInput[]
    delete?: RegionsWhereUniqueInput | RegionsWhereUniqueInput[]
    connect?: RegionsWhereUniqueInput | RegionsWhereUniqueInput[]
    update?: RegionsUpdateWithWhereUniqueWithoutRadiosInput | RegionsUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: RegionsUpdateManyWithWhereWithoutRadiosInput | RegionsUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: RegionsScalarWhereInput | RegionsScalarWhereInput[]
  }

  export type StatesUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<StatesCreateWithoutRadiosInput, StatesUncheckedCreateWithoutRadiosInput> | StatesCreateWithoutRadiosInput[] | StatesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: StatesCreateOrConnectWithoutRadiosInput | StatesCreateOrConnectWithoutRadiosInput[]
    upsert?: StatesUpsertWithWhereUniqueWithoutRadiosInput | StatesUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: StatesWhereUniqueInput | StatesWhereUniqueInput[]
    disconnect?: StatesWhereUniqueInput | StatesWhereUniqueInput[]
    delete?: StatesWhereUniqueInput | StatesWhereUniqueInput[]
    connect?: StatesWhereUniqueInput | StatesWhereUniqueInput[]
    update?: StatesUpdateWithWhereUniqueWithoutRadiosInput | StatesUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: StatesUpdateManyWithWhereWithoutRadiosInput | StatesUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: StatesScalarWhereInput | StatesScalarWhereInput[]
  }

  export type CitiesUncheckedUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<CitiesCreateWithoutRadiosInput, CitiesUncheckedCreateWithoutRadiosInput> | CitiesCreateWithoutRadiosInput[] | CitiesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: CitiesCreateOrConnectWithoutRadiosInput | CitiesCreateOrConnectWithoutRadiosInput[]
    upsert?: CitiesUpsertWithWhereUniqueWithoutRadiosInput | CitiesUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: CitiesWhereUniqueInput | CitiesWhereUniqueInput[]
    disconnect?: CitiesWhereUniqueInput | CitiesWhereUniqueInput[]
    delete?: CitiesWhereUniqueInput | CitiesWhereUniqueInput[]
    connect?: CitiesWhereUniqueInput | CitiesWhereUniqueInput[]
    update?: CitiesUpdateWithWhereUniqueWithoutRadiosInput | CitiesUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: CitiesUpdateManyWithWhereWithoutRadiosInput | CitiesUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: CitiesScalarWhereInput | CitiesScalarWhereInput[]
  }

  export type CountriesUncheckedUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<CountriesCreateWithoutRadiosInput, CountriesUncheckedCreateWithoutRadiosInput> | CountriesCreateWithoutRadiosInput[] | CountriesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: CountriesCreateOrConnectWithoutRadiosInput | CountriesCreateOrConnectWithoutRadiosInput[]
    upsert?: CountriesUpsertWithWhereUniqueWithoutRadiosInput | CountriesUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: CountriesWhereUniqueInput | CountriesWhereUniqueInput[]
    disconnect?: CountriesWhereUniqueInput | CountriesWhereUniqueInput[]
    delete?: CountriesWhereUniqueInput | CountriesWhereUniqueInput[]
    connect?: CountriesWhereUniqueInput | CountriesWhereUniqueInput[]
    update?: CountriesUpdateWithWhereUniqueWithoutRadiosInput | CountriesUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: CountriesUpdateManyWithWhereWithoutRadiosInput | CountriesUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: CountriesScalarWhereInput | CountriesScalarWhereInput[]
  }

  export type GenresUncheckedUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<GenresCreateWithoutRadiosInput, GenresUncheckedCreateWithoutRadiosInput> | GenresCreateWithoutRadiosInput[] | GenresUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutRadiosInput | GenresCreateOrConnectWithoutRadiosInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutRadiosInput | GenresUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutRadiosInput | GenresUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutRadiosInput | GenresUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type LanguagesUncheckedUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<LanguagesCreateWithoutRadiosInput, LanguagesUncheckedCreateWithoutRadiosInput> | LanguagesCreateWithoutRadiosInput[] | LanguagesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: LanguagesCreateOrConnectWithoutRadiosInput | LanguagesCreateOrConnectWithoutRadiosInput[]
    upsert?: LanguagesUpsertWithWhereUniqueWithoutRadiosInput | LanguagesUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    disconnect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    delete?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    connect?: LanguagesWhereUniqueInput | LanguagesWhereUniqueInput[]
    update?: LanguagesUpdateWithWhereUniqueWithoutRadiosInput | LanguagesUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: LanguagesUpdateManyWithWhereWithoutRadiosInput | LanguagesUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: LanguagesScalarWhereInput | LanguagesScalarWhereInput[]
  }

  export type RegionsUncheckedUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<RegionsCreateWithoutRadiosInput, RegionsUncheckedCreateWithoutRadiosInput> | RegionsCreateWithoutRadiosInput[] | RegionsUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: RegionsCreateOrConnectWithoutRadiosInput | RegionsCreateOrConnectWithoutRadiosInput[]
    upsert?: RegionsUpsertWithWhereUniqueWithoutRadiosInput | RegionsUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: RegionsWhereUniqueInput | RegionsWhereUniqueInput[]
    disconnect?: RegionsWhereUniqueInput | RegionsWhereUniqueInput[]
    delete?: RegionsWhereUniqueInput | RegionsWhereUniqueInput[]
    connect?: RegionsWhereUniqueInput | RegionsWhereUniqueInput[]
    update?: RegionsUpdateWithWhereUniqueWithoutRadiosInput | RegionsUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: RegionsUpdateManyWithWhereWithoutRadiosInput | RegionsUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: RegionsScalarWhereInput | RegionsScalarWhereInput[]
  }

  export type StatesUncheckedUpdateManyWithoutRadiosNestedInput = {
    create?: XOR<StatesCreateWithoutRadiosInput, StatesUncheckedCreateWithoutRadiosInput> | StatesCreateWithoutRadiosInput[] | StatesUncheckedCreateWithoutRadiosInput[]
    connectOrCreate?: StatesCreateOrConnectWithoutRadiosInput | StatesCreateOrConnectWithoutRadiosInput[]
    upsert?: StatesUpsertWithWhereUniqueWithoutRadiosInput | StatesUpsertWithWhereUniqueWithoutRadiosInput[]
    set?: StatesWhereUniqueInput | StatesWhereUniqueInput[]
    disconnect?: StatesWhereUniqueInput | StatesWhereUniqueInput[]
    delete?: StatesWhereUniqueInput | StatesWhereUniqueInput[]
    connect?: StatesWhereUniqueInput | StatesWhereUniqueInput[]
    update?: StatesUpdateWithWhereUniqueWithoutRadiosInput | StatesUpdateWithWhereUniqueWithoutRadiosInput[]
    updateMany?: StatesUpdateManyWithWhereWithoutRadiosInput | StatesUpdateManyWithWhereWithoutRadiosInput[]
    deleteMany?: StatesScalarWhereInput | StatesScalarWhereInput[]
  }

  export type RadiosCreateNestedManyWithoutStateInput = {
    create?: XOR<RadiosCreateWithoutStateInput, RadiosUncheckedCreateWithoutStateInput> | RadiosCreateWithoutStateInput[] | RadiosUncheckedCreateWithoutStateInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutStateInput | RadiosCreateOrConnectWithoutStateInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<RadiosCreateWithoutStateInput, RadiosUncheckedCreateWithoutStateInput> | RadiosCreateWithoutStateInput[] | RadiosUncheckedCreateWithoutStateInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutStateInput | RadiosCreateOrConnectWithoutStateInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUpdateManyWithoutStateNestedInput = {
    create?: XOR<RadiosCreateWithoutStateInput, RadiosUncheckedCreateWithoutStateInput> | RadiosCreateWithoutStateInput[] | RadiosUncheckedCreateWithoutStateInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutStateInput | RadiosCreateOrConnectWithoutStateInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutStateInput | RadiosUpsertWithWhereUniqueWithoutStateInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutStateInput | RadiosUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutStateInput | RadiosUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
  }

  export type RadiosUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<RadiosCreateWithoutStateInput, RadiosUncheckedCreateWithoutStateInput> | RadiosCreateWithoutStateInput[] | RadiosUncheckedCreateWithoutStateInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutStateInput | RadiosCreateOrConnectWithoutStateInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutStateInput | RadiosUpsertWithWhereUniqueWithoutStateInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutStateInput | RadiosUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutStateInput | RadiosUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
  }

  export type RadiosCreateNestedManyWithoutGenresInput = {
    create?: XOR<RadiosCreateWithoutGenresInput, RadiosUncheckedCreateWithoutGenresInput> | RadiosCreateWithoutGenresInput[] | RadiosUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutGenresInput | RadiosCreateOrConnectWithoutGenresInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<RadiosCreateWithoutGenresInput, RadiosUncheckedCreateWithoutGenresInput> | RadiosCreateWithoutGenresInput[] | RadiosUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutGenresInput | RadiosCreateOrConnectWithoutGenresInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUpdateManyWithoutGenresNestedInput = {
    create?: XOR<RadiosCreateWithoutGenresInput, RadiosUncheckedCreateWithoutGenresInput> | RadiosCreateWithoutGenresInput[] | RadiosUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutGenresInput | RadiosCreateOrConnectWithoutGenresInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutGenresInput | RadiosUpsertWithWhereUniqueWithoutGenresInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutGenresInput | RadiosUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutGenresInput | RadiosUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
  }

  export type RadiosUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<RadiosCreateWithoutGenresInput, RadiosUncheckedCreateWithoutGenresInput> | RadiosCreateWithoutGenresInput[] | RadiosUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutGenresInput | RadiosCreateOrConnectWithoutGenresInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutGenresInput | RadiosUpsertWithWhereUniqueWithoutGenresInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutGenresInput | RadiosUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutGenresInput | RadiosUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
  }

  export type RadiosCreateNestedManyWithoutCityInput = {
    create?: XOR<RadiosCreateWithoutCityInput, RadiosUncheckedCreateWithoutCityInput> | RadiosCreateWithoutCityInput[] | RadiosUncheckedCreateWithoutCityInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutCityInput | RadiosCreateOrConnectWithoutCityInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<RadiosCreateWithoutCityInput, RadiosUncheckedCreateWithoutCityInput> | RadiosCreateWithoutCityInput[] | RadiosUncheckedCreateWithoutCityInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutCityInput | RadiosCreateOrConnectWithoutCityInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUpdateManyWithoutCityNestedInput = {
    create?: XOR<RadiosCreateWithoutCityInput, RadiosUncheckedCreateWithoutCityInput> | RadiosCreateWithoutCityInput[] | RadiosUncheckedCreateWithoutCityInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutCityInput | RadiosCreateOrConnectWithoutCityInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutCityInput | RadiosUpsertWithWhereUniqueWithoutCityInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutCityInput | RadiosUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutCityInput | RadiosUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
  }

  export type RadiosUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<RadiosCreateWithoutCityInput, RadiosUncheckedCreateWithoutCityInput> | RadiosCreateWithoutCityInput[] | RadiosUncheckedCreateWithoutCityInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutCityInput | RadiosCreateOrConnectWithoutCityInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutCityInput | RadiosUpsertWithWhereUniqueWithoutCityInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutCityInput | RadiosUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutCityInput | RadiosUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
  }

  export type RadiosCreateNestedManyWithoutCountryInput = {
    create?: XOR<RadiosCreateWithoutCountryInput, RadiosUncheckedCreateWithoutCountryInput> | RadiosCreateWithoutCountryInput[] | RadiosUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutCountryInput | RadiosCreateOrConnectWithoutCountryInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<RadiosCreateWithoutCountryInput, RadiosUncheckedCreateWithoutCountryInput> | RadiosCreateWithoutCountryInput[] | RadiosUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutCountryInput | RadiosCreateOrConnectWithoutCountryInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUpdateManyWithoutCountryNestedInput = {
    create?: XOR<RadiosCreateWithoutCountryInput, RadiosUncheckedCreateWithoutCountryInput> | RadiosCreateWithoutCountryInput[] | RadiosUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutCountryInput | RadiosCreateOrConnectWithoutCountryInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutCountryInput | RadiosUpsertWithWhereUniqueWithoutCountryInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutCountryInput | RadiosUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutCountryInput | RadiosUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
  }

  export type RadiosUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<RadiosCreateWithoutCountryInput, RadiosUncheckedCreateWithoutCountryInput> | RadiosCreateWithoutCountryInput[] | RadiosUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutCountryInput | RadiosCreateOrConnectWithoutCountryInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutCountryInput | RadiosUpsertWithWhereUniqueWithoutCountryInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutCountryInput | RadiosUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutCountryInput | RadiosUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
  }

  export type RadiosCreateNestedManyWithoutLanguageInput = {
    create?: XOR<RadiosCreateWithoutLanguageInput, RadiosUncheckedCreateWithoutLanguageInput> | RadiosCreateWithoutLanguageInput[] | RadiosUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutLanguageInput | RadiosCreateOrConnectWithoutLanguageInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<RadiosCreateWithoutLanguageInput, RadiosUncheckedCreateWithoutLanguageInput> | RadiosCreateWithoutLanguageInput[] | RadiosUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutLanguageInput | RadiosCreateOrConnectWithoutLanguageInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<RadiosCreateWithoutLanguageInput, RadiosUncheckedCreateWithoutLanguageInput> | RadiosCreateWithoutLanguageInput[] | RadiosUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutLanguageInput | RadiosCreateOrConnectWithoutLanguageInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutLanguageInput | RadiosUpsertWithWhereUniqueWithoutLanguageInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutLanguageInput | RadiosUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutLanguageInput | RadiosUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
  }

  export type RadiosUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<RadiosCreateWithoutLanguageInput, RadiosUncheckedCreateWithoutLanguageInput> | RadiosCreateWithoutLanguageInput[] | RadiosUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutLanguageInput | RadiosCreateOrConnectWithoutLanguageInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutLanguageInput | RadiosUpsertWithWhereUniqueWithoutLanguageInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutLanguageInput | RadiosUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutLanguageInput | RadiosUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
  }

  export type RadiosCreateNestedManyWithoutRegionInput = {
    create?: XOR<RadiosCreateWithoutRegionInput, RadiosUncheckedCreateWithoutRegionInput> | RadiosCreateWithoutRegionInput[] | RadiosUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutRegionInput | RadiosCreateOrConnectWithoutRegionInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<RadiosCreateWithoutRegionInput, RadiosUncheckedCreateWithoutRegionInput> | RadiosCreateWithoutRegionInput[] | RadiosUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutRegionInput | RadiosCreateOrConnectWithoutRegionInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
  }

  export type RadiosUpdateManyWithoutRegionNestedInput = {
    create?: XOR<RadiosCreateWithoutRegionInput, RadiosUncheckedCreateWithoutRegionInput> | RadiosCreateWithoutRegionInput[] | RadiosUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutRegionInput | RadiosCreateOrConnectWithoutRegionInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutRegionInput | RadiosUpsertWithWhereUniqueWithoutRegionInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutRegionInput | RadiosUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutRegionInput | RadiosUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
  }

  export type RadiosUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<RadiosCreateWithoutRegionInput, RadiosUncheckedCreateWithoutRegionInput> | RadiosCreateWithoutRegionInput[] | RadiosUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: RadiosCreateOrConnectWithoutRegionInput | RadiosCreateOrConnectWithoutRegionInput[]
    upsert?: RadiosUpsertWithWhereUniqueWithoutRegionInput | RadiosUpsertWithWhereUniqueWithoutRegionInput[]
    set?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    disconnect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    delete?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    connect?: RadiosWhereUniqueInput | RadiosWhereUniqueInput[]
    update?: RadiosUpdateWithWhereUniqueWithoutRegionInput | RadiosUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: RadiosUpdateManyWithWhereWithoutRegionInput | RadiosUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CitiesCreateWithoutRadiosInput = {
    name: string
    region?: string
    country?: string
  }

  export type CitiesUncheckedCreateWithoutRadiosInput = {
    id?: number
    name: string
    region?: string
    country?: string
  }

  export type CitiesCreateOrConnectWithoutRadiosInput = {
    where: CitiesWhereUniqueInput
    create: XOR<CitiesCreateWithoutRadiosInput, CitiesUncheckedCreateWithoutRadiosInput>
  }

  export type CountriesCreateWithoutRadiosInput = {
    name: string
    region?: string
  }

  export type CountriesUncheckedCreateWithoutRadiosInput = {
    id?: number
    name: string
    region?: string
  }

  export type CountriesCreateOrConnectWithoutRadiosInput = {
    where: CountriesWhereUniqueInput
    create: XOR<CountriesCreateWithoutRadiosInput, CountriesUncheckedCreateWithoutRadiosInput>
  }

  export type GenresCreateWithoutRadiosInput = {
    name: string
  }

  export type GenresUncheckedCreateWithoutRadiosInput = {
    id?: number
    name: string
  }

  export type GenresCreateOrConnectWithoutRadiosInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutRadiosInput, GenresUncheckedCreateWithoutRadiosInput>
  }

  export type LanguagesCreateWithoutRadiosInput = {
    name: string
  }

  export type LanguagesUncheckedCreateWithoutRadiosInput = {
    id?: number
    name: string
  }

  export type LanguagesCreateOrConnectWithoutRadiosInput = {
    where: LanguagesWhereUniqueInput
    create: XOR<LanguagesCreateWithoutRadiosInput, LanguagesUncheckedCreateWithoutRadiosInput>
  }

  export type RegionsCreateWithoutRadiosInput = {
    name: string
  }

  export type RegionsUncheckedCreateWithoutRadiosInput = {
    id?: number
    name: string
  }

  export type RegionsCreateOrConnectWithoutRadiosInput = {
    where: RegionsWhereUniqueInput
    create: XOR<RegionsCreateWithoutRadiosInput, RegionsUncheckedCreateWithoutRadiosInput>
  }

  export type StatesCreateWithoutRadiosInput = {
    name: string
    region?: string
    country?: string
  }

  export type StatesUncheckedCreateWithoutRadiosInput = {
    id?: number
    name: string
    region?: string
    country?: string
  }

  export type StatesCreateOrConnectWithoutRadiosInput = {
    where: StatesWhereUniqueInput
    create: XOR<StatesCreateWithoutRadiosInput, StatesUncheckedCreateWithoutRadiosInput>
  }

  export type CitiesUpsertWithWhereUniqueWithoutRadiosInput = {
    where: CitiesWhereUniqueInput
    update: XOR<CitiesUpdateWithoutRadiosInput, CitiesUncheckedUpdateWithoutRadiosInput>
    create: XOR<CitiesCreateWithoutRadiosInput, CitiesUncheckedCreateWithoutRadiosInput>
  }

  export type CitiesUpdateWithWhereUniqueWithoutRadiosInput = {
    where: CitiesWhereUniqueInput
    data: XOR<CitiesUpdateWithoutRadiosInput, CitiesUncheckedUpdateWithoutRadiosInput>
  }

  export type CitiesUpdateManyWithWhereWithoutRadiosInput = {
    where: CitiesScalarWhereInput
    data: XOR<CitiesUpdateManyMutationInput, CitiesUncheckedUpdateManyWithoutRadiosInput>
  }

  export type CitiesScalarWhereInput = {
    AND?: CitiesScalarWhereInput | CitiesScalarWhereInput[]
    OR?: CitiesScalarWhereInput[]
    NOT?: CitiesScalarWhereInput | CitiesScalarWhereInput[]
    id?: IntFilter<"Cities"> | number
    name?: StringFilter<"Cities"> | string
    region?: StringFilter<"Cities"> | string
    country?: StringFilter<"Cities"> | string
  }

  export type CountriesUpsertWithWhereUniqueWithoutRadiosInput = {
    where: CountriesWhereUniqueInput
    update: XOR<CountriesUpdateWithoutRadiosInput, CountriesUncheckedUpdateWithoutRadiosInput>
    create: XOR<CountriesCreateWithoutRadiosInput, CountriesUncheckedCreateWithoutRadiosInput>
  }

  export type CountriesUpdateWithWhereUniqueWithoutRadiosInput = {
    where: CountriesWhereUniqueInput
    data: XOR<CountriesUpdateWithoutRadiosInput, CountriesUncheckedUpdateWithoutRadiosInput>
  }

  export type CountriesUpdateManyWithWhereWithoutRadiosInput = {
    where: CountriesScalarWhereInput
    data: XOR<CountriesUpdateManyMutationInput, CountriesUncheckedUpdateManyWithoutRadiosInput>
  }

  export type CountriesScalarWhereInput = {
    AND?: CountriesScalarWhereInput | CountriesScalarWhereInput[]
    OR?: CountriesScalarWhereInput[]
    NOT?: CountriesScalarWhereInput | CountriesScalarWhereInput[]
    id?: IntFilter<"Countries"> | number
    name?: StringFilter<"Countries"> | string
    region?: StringFilter<"Countries"> | string
  }

  export type GenresUpsertWithWhereUniqueWithoutRadiosInput = {
    where: GenresWhereUniqueInput
    update: XOR<GenresUpdateWithoutRadiosInput, GenresUncheckedUpdateWithoutRadiosInput>
    create: XOR<GenresCreateWithoutRadiosInput, GenresUncheckedCreateWithoutRadiosInput>
  }

  export type GenresUpdateWithWhereUniqueWithoutRadiosInput = {
    where: GenresWhereUniqueInput
    data: XOR<GenresUpdateWithoutRadiosInput, GenresUncheckedUpdateWithoutRadiosInput>
  }

  export type GenresUpdateManyWithWhereWithoutRadiosInput = {
    where: GenresScalarWhereInput
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyWithoutRadiosInput>
  }

  export type GenresScalarWhereInput = {
    AND?: GenresScalarWhereInput | GenresScalarWhereInput[]
    OR?: GenresScalarWhereInput[]
    NOT?: GenresScalarWhereInput | GenresScalarWhereInput[]
    id?: IntFilter<"Genres"> | number
    name?: StringFilter<"Genres"> | string
  }

  export type LanguagesUpsertWithWhereUniqueWithoutRadiosInput = {
    where: LanguagesWhereUniqueInput
    update: XOR<LanguagesUpdateWithoutRadiosInput, LanguagesUncheckedUpdateWithoutRadiosInput>
    create: XOR<LanguagesCreateWithoutRadiosInput, LanguagesUncheckedCreateWithoutRadiosInput>
  }

  export type LanguagesUpdateWithWhereUniqueWithoutRadiosInput = {
    where: LanguagesWhereUniqueInput
    data: XOR<LanguagesUpdateWithoutRadiosInput, LanguagesUncheckedUpdateWithoutRadiosInput>
  }

  export type LanguagesUpdateManyWithWhereWithoutRadiosInput = {
    where: LanguagesScalarWhereInput
    data: XOR<LanguagesUpdateManyMutationInput, LanguagesUncheckedUpdateManyWithoutRadiosInput>
  }

  export type LanguagesScalarWhereInput = {
    AND?: LanguagesScalarWhereInput | LanguagesScalarWhereInput[]
    OR?: LanguagesScalarWhereInput[]
    NOT?: LanguagesScalarWhereInput | LanguagesScalarWhereInput[]
    id?: IntFilter<"Languages"> | number
    name?: StringFilter<"Languages"> | string
  }

  export type RegionsUpsertWithWhereUniqueWithoutRadiosInput = {
    where: RegionsWhereUniqueInput
    update: XOR<RegionsUpdateWithoutRadiosInput, RegionsUncheckedUpdateWithoutRadiosInput>
    create: XOR<RegionsCreateWithoutRadiosInput, RegionsUncheckedCreateWithoutRadiosInput>
  }

  export type RegionsUpdateWithWhereUniqueWithoutRadiosInput = {
    where: RegionsWhereUniqueInput
    data: XOR<RegionsUpdateWithoutRadiosInput, RegionsUncheckedUpdateWithoutRadiosInput>
  }

  export type RegionsUpdateManyWithWhereWithoutRadiosInput = {
    where: RegionsScalarWhereInput
    data: XOR<RegionsUpdateManyMutationInput, RegionsUncheckedUpdateManyWithoutRadiosInput>
  }

  export type RegionsScalarWhereInput = {
    AND?: RegionsScalarWhereInput | RegionsScalarWhereInput[]
    OR?: RegionsScalarWhereInput[]
    NOT?: RegionsScalarWhereInput | RegionsScalarWhereInput[]
    id?: IntFilter<"Regions"> | number
    name?: StringFilter<"Regions"> | string
  }

  export type StatesUpsertWithWhereUniqueWithoutRadiosInput = {
    where: StatesWhereUniqueInput
    update: XOR<StatesUpdateWithoutRadiosInput, StatesUncheckedUpdateWithoutRadiosInput>
    create: XOR<StatesCreateWithoutRadiosInput, StatesUncheckedCreateWithoutRadiosInput>
  }

  export type StatesUpdateWithWhereUniqueWithoutRadiosInput = {
    where: StatesWhereUniqueInput
    data: XOR<StatesUpdateWithoutRadiosInput, StatesUncheckedUpdateWithoutRadiosInput>
  }

  export type StatesUpdateManyWithWhereWithoutRadiosInput = {
    where: StatesScalarWhereInput
    data: XOR<StatesUpdateManyMutationInput, StatesUncheckedUpdateManyWithoutRadiosInput>
  }

  export type StatesScalarWhereInput = {
    AND?: StatesScalarWhereInput | StatesScalarWhereInput[]
    OR?: StatesScalarWhereInput[]
    NOT?: StatesScalarWhereInput | StatesScalarWhereInput[]
    id?: IntFilter<"States"> | number
    name?: StringFilter<"States"> | string
    region?: StringFilter<"States"> | string
    country?: StringFilter<"States"> | string
  }

  export type RadiosCreateWithoutStateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesCreateNestedManyWithoutRadiosInput
    country?: CountriesCreateNestedManyWithoutRadiosInput
    genres?: GenresCreateNestedManyWithoutRadiosInput
    language?: LanguagesCreateNestedManyWithoutRadiosInput
    region?: RegionsCreateNestedManyWithoutRadiosInput
  }

  export type RadiosUncheckedCreateWithoutStateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesUncheckedCreateNestedManyWithoutRadiosInput
    country?: CountriesUncheckedCreateNestedManyWithoutRadiosInput
    genres?: GenresUncheckedCreateNestedManyWithoutRadiosInput
    language?: LanguagesUncheckedCreateNestedManyWithoutRadiosInput
    region?: RegionsUncheckedCreateNestedManyWithoutRadiosInput
  }

  export type RadiosCreateOrConnectWithoutStateInput = {
    where: RadiosWhereUniqueInput
    create: XOR<RadiosCreateWithoutStateInput, RadiosUncheckedCreateWithoutStateInput>
  }

  export type RadiosUpsertWithWhereUniqueWithoutStateInput = {
    where: RadiosWhereUniqueInput
    update: XOR<RadiosUpdateWithoutStateInput, RadiosUncheckedUpdateWithoutStateInput>
    create: XOR<RadiosCreateWithoutStateInput, RadiosUncheckedCreateWithoutStateInput>
  }

  export type RadiosUpdateWithWhereUniqueWithoutStateInput = {
    where: RadiosWhereUniqueInput
    data: XOR<RadiosUpdateWithoutStateInput, RadiosUncheckedUpdateWithoutStateInput>
  }

  export type RadiosUpdateManyWithWhereWithoutStateInput = {
    where: RadiosScalarWhereInput
    data: XOR<RadiosUpdateManyMutationInput, RadiosUncheckedUpdateManyWithoutStateInput>
  }

  export type RadiosScalarWhereInput = {
    AND?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
    OR?: RadiosScalarWhereInput[]
    NOT?: RadiosScalarWhereInput | RadiosScalarWhereInput[]
    id?: IntFilter<"Radios"> | number
    createdAt?: DateTimeFilter<"Radios"> | Date | string
    updatedAt?: DateTimeFilter<"Radios"> | Date | string
    address?: StringFilter<"Radios"> | string
    email?: StringFilter<"Radios"> | string
    facebook?: StringFilter<"Radios"> | string
    frequency?: StringFilter<"Radios"> | string
    image?: StringFilter<"Radios"> | string
    link_deatils?: StringFilter<"Radios"> | string
    link_player?: StringFilter<"Radios"> | string
    listens?: StringFilter<"Radios"> | string
    long_description?: StringFilter<"Radios"> | string
    no_play?: BoolFilter<"Radios"> | boolean
    phone?: StringFilter<"Radios"> | string
    profile_slogan?: StringFilter<"Radios"> | string
    radio_language?: StringFilter<"Radios"> | string
    short_description?: StringFilter<"Radios"> | string
    stars?: IntFilter<"Radios"> | number
    title?: StringFilter<"Radios"> | string
    twitter?: StringFilter<"Radios"> | string
    website?: StringFilter<"Radios"> | string
    source?: StringFilter<"Radios"> | string
    radio_id?: StringFilter<"Radios"> | string
    state_id?: StringFilter<"Radios"> | string
    shows?: StringFilter<"Radios"> | string
    json?: StringFilter<"Radios"> | string
  }

  export type RadiosCreateWithoutGenresInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesCreateNestedManyWithoutRadiosInput
    country?: CountriesCreateNestedManyWithoutRadiosInput
    language?: LanguagesCreateNestedManyWithoutRadiosInput
    region?: RegionsCreateNestedManyWithoutRadiosInput
    state?: StatesCreateNestedManyWithoutRadiosInput
  }

  export type RadiosUncheckedCreateWithoutGenresInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesUncheckedCreateNestedManyWithoutRadiosInput
    country?: CountriesUncheckedCreateNestedManyWithoutRadiosInput
    language?: LanguagesUncheckedCreateNestedManyWithoutRadiosInput
    region?: RegionsUncheckedCreateNestedManyWithoutRadiosInput
    state?: StatesUncheckedCreateNestedManyWithoutRadiosInput
  }

  export type RadiosCreateOrConnectWithoutGenresInput = {
    where: RadiosWhereUniqueInput
    create: XOR<RadiosCreateWithoutGenresInput, RadiosUncheckedCreateWithoutGenresInput>
  }

  export type RadiosUpsertWithWhereUniqueWithoutGenresInput = {
    where: RadiosWhereUniqueInput
    update: XOR<RadiosUpdateWithoutGenresInput, RadiosUncheckedUpdateWithoutGenresInput>
    create: XOR<RadiosCreateWithoutGenresInput, RadiosUncheckedCreateWithoutGenresInput>
  }

  export type RadiosUpdateWithWhereUniqueWithoutGenresInput = {
    where: RadiosWhereUniqueInput
    data: XOR<RadiosUpdateWithoutGenresInput, RadiosUncheckedUpdateWithoutGenresInput>
  }

  export type RadiosUpdateManyWithWhereWithoutGenresInput = {
    where: RadiosScalarWhereInput
    data: XOR<RadiosUpdateManyMutationInput, RadiosUncheckedUpdateManyWithoutGenresInput>
  }

  export type RadiosCreateWithoutCityInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    country?: CountriesCreateNestedManyWithoutRadiosInput
    genres?: GenresCreateNestedManyWithoutRadiosInput
    language?: LanguagesCreateNestedManyWithoutRadiosInput
    region?: RegionsCreateNestedManyWithoutRadiosInput
    state?: StatesCreateNestedManyWithoutRadiosInput
  }

  export type RadiosUncheckedCreateWithoutCityInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    country?: CountriesUncheckedCreateNestedManyWithoutRadiosInput
    genres?: GenresUncheckedCreateNestedManyWithoutRadiosInput
    language?: LanguagesUncheckedCreateNestedManyWithoutRadiosInput
    region?: RegionsUncheckedCreateNestedManyWithoutRadiosInput
    state?: StatesUncheckedCreateNestedManyWithoutRadiosInput
  }

  export type RadiosCreateOrConnectWithoutCityInput = {
    where: RadiosWhereUniqueInput
    create: XOR<RadiosCreateWithoutCityInput, RadiosUncheckedCreateWithoutCityInput>
  }

  export type RadiosUpsertWithWhereUniqueWithoutCityInput = {
    where: RadiosWhereUniqueInput
    update: XOR<RadiosUpdateWithoutCityInput, RadiosUncheckedUpdateWithoutCityInput>
    create: XOR<RadiosCreateWithoutCityInput, RadiosUncheckedCreateWithoutCityInput>
  }

  export type RadiosUpdateWithWhereUniqueWithoutCityInput = {
    where: RadiosWhereUniqueInput
    data: XOR<RadiosUpdateWithoutCityInput, RadiosUncheckedUpdateWithoutCityInput>
  }

  export type RadiosUpdateManyWithWhereWithoutCityInput = {
    where: RadiosScalarWhereInput
    data: XOR<RadiosUpdateManyMutationInput, RadiosUncheckedUpdateManyWithoutCityInput>
  }

  export type RadiosCreateWithoutCountryInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesCreateNestedManyWithoutRadiosInput
    genres?: GenresCreateNestedManyWithoutRadiosInput
    language?: LanguagesCreateNestedManyWithoutRadiosInput
    region?: RegionsCreateNestedManyWithoutRadiosInput
    state?: StatesCreateNestedManyWithoutRadiosInput
  }

  export type RadiosUncheckedCreateWithoutCountryInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesUncheckedCreateNestedManyWithoutRadiosInput
    genres?: GenresUncheckedCreateNestedManyWithoutRadiosInput
    language?: LanguagesUncheckedCreateNestedManyWithoutRadiosInput
    region?: RegionsUncheckedCreateNestedManyWithoutRadiosInput
    state?: StatesUncheckedCreateNestedManyWithoutRadiosInput
  }

  export type RadiosCreateOrConnectWithoutCountryInput = {
    where: RadiosWhereUniqueInput
    create: XOR<RadiosCreateWithoutCountryInput, RadiosUncheckedCreateWithoutCountryInput>
  }

  export type RadiosUpsertWithWhereUniqueWithoutCountryInput = {
    where: RadiosWhereUniqueInput
    update: XOR<RadiosUpdateWithoutCountryInput, RadiosUncheckedUpdateWithoutCountryInput>
    create: XOR<RadiosCreateWithoutCountryInput, RadiosUncheckedCreateWithoutCountryInput>
  }

  export type RadiosUpdateWithWhereUniqueWithoutCountryInput = {
    where: RadiosWhereUniqueInput
    data: XOR<RadiosUpdateWithoutCountryInput, RadiosUncheckedUpdateWithoutCountryInput>
  }

  export type RadiosUpdateManyWithWhereWithoutCountryInput = {
    where: RadiosScalarWhereInput
    data: XOR<RadiosUpdateManyMutationInput, RadiosUncheckedUpdateManyWithoutCountryInput>
  }

  export type RadiosCreateWithoutLanguageInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesCreateNestedManyWithoutRadiosInput
    country?: CountriesCreateNestedManyWithoutRadiosInput
    genres?: GenresCreateNestedManyWithoutRadiosInput
    region?: RegionsCreateNestedManyWithoutRadiosInput
    state?: StatesCreateNestedManyWithoutRadiosInput
  }

  export type RadiosUncheckedCreateWithoutLanguageInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesUncheckedCreateNestedManyWithoutRadiosInput
    country?: CountriesUncheckedCreateNestedManyWithoutRadiosInput
    genres?: GenresUncheckedCreateNestedManyWithoutRadiosInput
    region?: RegionsUncheckedCreateNestedManyWithoutRadiosInput
    state?: StatesUncheckedCreateNestedManyWithoutRadiosInput
  }

  export type RadiosCreateOrConnectWithoutLanguageInput = {
    where: RadiosWhereUniqueInput
    create: XOR<RadiosCreateWithoutLanguageInput, RadiosUncheckedCreateWithoutLanguageInput>
  }

  export type RadiosUpsertWithWhereUniqueWithoutLanguageInput = {
    where: RadiosWhereUniqueInput
    update: XOR<RadiosUpdateWithoutLanguageInput, RadiosUncheckedUpdateWithoutLanguageInput>
    create: XOR<RadiosCreateWithoutLanguageInput, RadiosUncheckedCreateWithoutLanguageInput>
  }

  export type RadiosUpdateWithWhereUniqueWithoutLanguageInput = {
    where: RadiosWhereUniqueInput
    data: XOR<RadiosUpdateWithoutLanguageInput, RadiosUncheckedUpdateWithoutLanguageInput>
  }

  export type RadiosUpdateManyWithWhereWithoutLanguageInput = {
    where: RadiosScalarWhereInput
    data: XOR<RadiosUpdateManyMutationInput, RadiosUncheckedUpdateManyWithoutLanguageInput>
  }

  export type RadiosCreateWithoutRegionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesCreateNestedManyWithoutRadiosInput
    country?: CountriesCreateNestedManyWithoutRadiosInput
    genres?: GenresCreateNestedManyWithoutRadiosInput
    language?: LanguagesCreateNestedManyWithoutRadiosInput
    state?: StatesCreateNestedManyWithoutRadiosInput
  }

  export type RadiosUncheckedCreateWithoutRegionInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string
    email?: string
    facebook?: string
    frequency?: string
    image?: string
    link_deatils?: string
    link_player?: string
    listens?: string
    long_description?: string
    no_play?: boolean
    phone?: string
    profile_slogan?: string
    radio_language?: string
    short_description?: string
    stars?: number
    title?: string
    twitter?: string
    website?: string
    source?: string
    radio_id?: string
    state_id?: string
    shows?: string
    json?: string
    city?: CitiesUncheckedCreateNestedManyWithoutRadiosInput
    country?: CountriesUncheckedCreateNestedManyWithoutRadiosInput
    genres?: GenresUncheckedCreateNestedManyWithoutRadiosInput
    language?: LanguagesUncheckedCreateNestedManyWithoutRadiosInput
    state?: StatesUncheckedCreateNestedManyWithoutRadiosInput
  }

  export type RadiosCreateOrConnectWithoutRegionInput = {
    where: RadiosWhereUniqueInput
    create: XOR<RadiosCreateWithoutRegionInput, RadiosUncheckedCreateWithoutRegionInput>
  }

  export type RadiosUpsertWithWhereUniqueWithoutRegionInput = {
    where: RadiosWhereUniqueInput
    update: XOR<RadiosUpdateWithoutRegionInput, RadiosUncheckedUpdateWithoutRegionInput>
    create: XOR<RadiosCreateWithoutRegionInput, RadiosUncheckedCreateWithoutRegionInput>
  }

  export type RadiosUpdateWithWhereUniqueWithoutRegionInput = {
    where: RadiosWhereUniqueInput
    data: XOR<RadiosUpdateWithoutRegionInput, RadiosUncheckedUpdateWithoutRegionInput>
  }

  export type RadiosUpdateManyWithWhereWithoutRegionInput = {
    where: RadiosScalarWhereInput
    data: XOR<RadiosUpdateManyMutationInput, RadiosUncheckedUpdateManyWithoutRegionInput>
  }

  export type CitiesUpdateWithoutRadiosInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type CitiesUncheckedUpdateWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type CitiesUncheckedUpdateManyWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type CountriesUpdateWithoutRadiosInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type CountriesUncheckedUpdateWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type CountriesUncheckedUpdateManyWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUpdateWithoutRadiosInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateManyWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguagesUpdateWithoutRadiosInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguagesUncheckedUpdateWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguagesUncheckedUpdateManyWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionsUpdateWithoutRadiosInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionsUncheckedUpdateWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionsUncheckedUpdateManyWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StatesUpdateWithoutRadiosInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type StatesUncheckedUpdateWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type StatesUncheckedUpdateManyWithoutRadiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type RadiosUpdateWithoutStateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUpdateManyWithoutRadiosNestedInput
    country?: CountriesUpdateManyWithoutRadiosNestedInput
    genres?: GenresUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUpdateManyWithoutRadiosNestedInput
    region?: RegionsUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUncheckedUpdateManyWithoutRadiosNestedInput
    country?: CountriesUncheckedUpdateManyWithoutRadiosNestedInput
    genres?: GenresUncheckedUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUncheckedUpdateManyWithoutRadiosNestedInput
    region?: RegionsUncheckedUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
  }

  export type RadiosUpdateWithoutGenresInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUpdateManyWithoutRadiosNestedInput
    country?: CountriesUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUpdateManyWithoutRadiosNestedInput
    region?: RegionsUpdateManyWithoutRadiosNestedInput
    state?: StatesUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUncheckedUpdateManyWithoutRadiosNestedInput
    country?: CountriesUncheckedUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUncheckedUpdateManyWithoutRadiosNestedInput
    region?: RegionsUncheckedUpdateManyWithoutRadiosNestedInput
    state?: StatesUncheckedUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
  }

  export type RadiosUpdateWithoutCityInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    country?: CountriesUpdateManyWithoutRadiosNestedInput
    genres?: GenresUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUpdateManyWithoutRadiosNestedInput
    region?: RegionsUpdateManyWithoutRadiosNestedInput
    state?: StatesUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    country?: CountriesUncheckedUpdateManyWithoutRadiosNestedInput
    genres?: GenresUncheckedUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUncheckedUpdateManyWithoutRadiosNestedInput
    region?: RegionsUncheckedUpdateManyWithoutRadiosNestedInput
    state?: StatesUncheckedUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
  }

  export type RadiosUpdateWithoutCountryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUpdateManyWithoutRadiosNestedInput
    genres?: GenresUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUpdateManyWithoutRadiosNestedInput
    region?: RegionsUpdateManyWithoutRadiosNestedInput
    state?: StatesUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUncheckedUpdateManyWithoutRadiosNestedInput
    genres?: GenresUncheckedUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUncheckedUpdateManyWithoutRadiosNestedInput
    region?: RegionsUncheckedUpdateManyWithoutRadiosNestedInput
    state?: StatesUncheckedUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
  }

  export type RadiosUpdateWithoutLanguageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUpdateManyWithoutRadiosNestedInput
    country?: CountriesUpdateManyWithoutRadiosNestedInput
    genres?: GenresUpdateManyWithoutRadiosNestedInput
    region?: RegionsUpdateManyWithoutRadiosNestedInput
    state?: StatesUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateWithoutLanguageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUncheckedUpdateManyWithoutRadiosNestedInput
    country?: CountriesUncheckedUpdateManyWithoutRadiosNestedInput
    genres?: GenresUncheckedUpdateManyWithoutRadiosNestedInput
    region?: RegionsUncheckedUpdateManyWithoutRadiosNestedInput
    state?: StatesUncheckedUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateManyWithoutLanguageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
  }

  export type RadiosUpdateWithoutRegionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUpdateManyWithoutRadiosNestedInput
    country?: CountriesUpdateManyWithoutRadiosNestedInput
    genres?: GenresUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUpdateManyWithoutRadiosNestedInput
    state?: StatesUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    city?: CitiesUncheckedUpdateManyWithoutRadiosNestedInput
    country?: CountriesUncheckedUpdateManyWithoutRadiosNestedInput
    genres?: GenresUncheckedUpdateManyWithoutRadiosNestedInput
    language?: LanguagesUncheckedUpdateManyWithoutRadiosNestedInput
    state?: StatesUncheckedUpdateManyWithoutRadiosNestedInput
  }

  export type RadiosUncheckedUpdateManyWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link_deatils?: StringFieldUpdateOperationsInput | string
    link_player?: StringFieldUpdateOperationsInput | string
    listens?: StringFieldUpdateOperationsInput | string
    long_description?: StringFieldUpdateOperationsInput | string
    no_play?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    profile_slogan?: StringFieldUpdateOperationsInput | string
    radio_language?: StringFieldUpdateOperationsInput | string
    short_description?: StringFieldUpdateOperationsInput | string
    stars?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    radio_id?: StringFieldUpdateOperationsInput | string
    state_id?: StringFieldUpdateOperationsInput | string
    shows?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RadiosCountOutputTypeDefaultArgs instead
     */
    export type RadiosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RadiosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatesCountOutputTypeDefaultArgs instead
     */
    export type StatesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenresCountOutputTypeDefaultArgs instead
     */
    export type GenresCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenresCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CitiesCountOutputTypeDefaultArgs instead
     */
    export type CitiesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CitiesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountriesCountOutputTypeDefaultArgs instead
     */
    export type CountriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LanguagesCountOutputTypeDefaultArgs instead
     */
    export type LanguagesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LanguagesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegionsCountOutputTypeDefaultArgs instead
     */
    export type RegionsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegionsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RadiosDefaultArgs instead
     */
    export type RadiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RadiosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatesDefaultArgs instead
     */
    export type StatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenresDefaultArgs instead
     */
    export type GenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CitiesDefaultArgs instead
     */
    export type CitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CitiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountriesDefaultArgs instead
     */
    export type CountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LanguagesDefaultArgs instead
     */
    export type LanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LanguagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegionsDefaultArgs instead
     */
    export type RegionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegionsDefaultArgs<ExtArgs>

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