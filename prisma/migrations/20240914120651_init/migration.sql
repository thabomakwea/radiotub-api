/*
  Warnings:

  - You are about to drop the `Cities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Countries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Genres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Languages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Radios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Regions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `States` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CitiesToRadios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CountriesToRadios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GenresToRadios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LanguagesToRadios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RadiosToRegions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RadiosToStates` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cities";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Countries";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Genres";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Languages";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Radios";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Regions";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "States";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CitiesToRadios";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CountriesToRadios";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_GenresToRadios";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_LanguagesToRadios";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_RadiosToRegions";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_RadiosToStates";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "podcasts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "lastUpdate" INTEGER,
    "link" TEXT NOT NULL,
    "lastHttpStatus" INTEGER,
    "dead" INTEGER,
    "contentType" TEXT NOT NULL,
    "itunesId" INTEGER,
    "originalUrl" TEXT NOT NULL,
    "itunesAuthor" TEXT NOT NULL,
    "itunesOwnerName" TEXT NOT NULL,
    "explicit" INTEGER,
    "imageUrl" TEXT NOT NULL,
    "itunesType" TEXT NOT NULL,
    "generator" TEXT NOT NULL,
    "newestItemPubdate" INTEGER,
    "language" TEXT NOT NULL,
    "oldestItemPubdate" INTEGER,
    "episodeCount" INTEGER,
    "popularityScore" INTEGER,
    "priority" INTEGER,
    "createdOn" INTEGER,
    "updateFrequency" INTEGER,
    "chash" TEXT,
    "host" TEXT,
    "newestEnclosureUrl" TEXT,
    "podcastGuid" TEXT,
    "description" TEXT,
    "category1" TEXT,
    "category2" TEXT,
    "category3" TEXT,
    "category4" TEXT,
    "category5" TEXT,
    "category6" TEXT,
    "category7" TEXT,
    "category8" TEXT,
    "category9" TEXT,
    "category10" TEXT,
    "newestEnclosureDuration" INTEGER
);

-- CreateIndex
Pragma writable_schema=1;
CREATE UNIQUE INDEX "sqlite_autoindex_podcasts_1" ON "podcasts"("url");
Pragma writable_schema=0;
