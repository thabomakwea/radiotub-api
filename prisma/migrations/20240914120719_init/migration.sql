/*
  Warnings:

  - You are about to drop the `podcasts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "podcasts";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "playlists" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "playlistId" TEXT,
    "channelId" TEXT,
    "title" TEXT,
    "description" TEXT,
    "image" TEXT,
    "channelTitle" TEXT,
    "defaultLanguage" TEXT,
    "itemCount" INTEGER
);
