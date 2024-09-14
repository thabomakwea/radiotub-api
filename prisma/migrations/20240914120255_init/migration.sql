-- CreateTable
CREATE TABLE "Radios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "address" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "facebook" TEXT NOT NULL DEFAULT '',
    "frequency" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL DEFAULT '',
    "link_deatils" TEXT NOT NULL DEFAULT '',
    "link_player" TEXT NOT NULL DEFAULT '',
    "listens" TEXT NOT NULL DEFAULT '',
    "long_description" TEXT NOT NULL DEFAULT '',
    "no_play" BOOLEAN NOT NULL DEFAULT true,
    "phone" TEXT NOT NULL DEFAULT '',
    "profile_slogan" TEXT NOT NULL DEFAULT '',
    "radio_language" TEXT NOT NULL DEFAULT '',
    "short_description" TEXT NOT NULL DEFAULT '',
    "stars" INTEGER NOT NULL DEFAULT 0,
    "title" TEXT NOT NULL DEFAULT '',
    "twitter" TEXT NOT NULL DEFAULT '',
    "website" TEXT NOT NULL DEFAULT '',
    "source" TEXT NOT NULL DEFAULT '',
    "radio_id" TEXT NOT NULL DEFAULT '',
    "state_id" TEXT NOT NULL DEFAULT '',
    "shows" TEXT NOT NULL DEFAULT '',
    "json" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "States" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL DEFAULT '',
    "country" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Genres" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL DEFAULT '',
    "country" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Countries" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Languages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Regions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RadiosToRegions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_RadiosToRegions_A_fkey" FOREIGN KEY ("A") REFERENCES "Radios" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RadiosToRegions_B_fkey" FOREIGN KEY ("B") REFERENCES "Regions" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_RadiosToStates" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_RadiosToStates_A_fkey" FOREIGN KEY ("A") REFERENCES "Radios" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RadiosToStates_B_fkey" FOREIGN KEY ("B") REFERENCES "States" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_GenresToRadios" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_GenresToRadios_A_fkey" FOREIGN KEY ("A") REFERENCES "Genres" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_GenresToRadios_B_fkey" FOREIGN KEY ("B") REFERENCES "Radios" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CitiesToRadios" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CitiesToRadios_A_fkey" FOREIGN KEY ("A") REFERENCES "Cities" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CitiesToRadios_B_fkey" FOREIGN KEY ("B") REFERENCES "Radios" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CountriesToRadios" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CountriesToRadios_A_fkey" FOREIGN KEY ("A") REFERENCES "Countries" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CountriesToRadios_B_fkey" FOREIGN KEY ("B") REFERENCES "Radios" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LanguagesToRadios" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LanguagesToRadios_A_fkey" FOREIGN KEY ("A") REFERENCES "Languages" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LanguagesToRadios_B_fkey" FOREIGN KEY ("B") REFERENCES "Radios" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "States_name_key" ON "States"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genres_name_key" ON "Genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Cities_name_key" ON "Cities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_name_key" ON "Countries"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Languages_name_key" ON "Languages"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Regions_name_key" ON "Regions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_RadiosToRegions_AB_unique" ON "_RadiosToRegions"("A", "B");

-- CreateIndex
CREATE INDEX "_RadiosToRegions_B_index" ON "_RadiosToRegions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RadiosToStates_AB_unique" ON "_RadiosToStates"("A", "B");

-- CreateIndex
CREATE INDEX "_RadiosToStates_B_index" ON "_RadiosToStates"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenresToRadios_AB_unique" ON "_GenresToRadios"("A", "B");

-- CreateIndex
CREATE INDEX "_GenresToRadios_B_index" ON "_GenresToRadios"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CitiesToRadios_AB_unique" ON "_CitiesToRadios"("A", "B");

-- CreateIndex
CREATE INDEX "_CitiesToRadios_B_index" ON "_CitiesToRadios"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CountriesToRadios_AB_unique" ON "_CountriesToRadios"("A", "B");

-- CreateIndex
CREATE INDEX "_CountriesToRadios_B_index" ON "_CountriesToRadios"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LanguagesToRadios_AB_unique" ON "_LanguagesToRadios"("A", "B");

-- CreateIndex
CREATE INDEX "_LanguagesToRadios_B_index" ON "_LanguagesToRadios"("B");
