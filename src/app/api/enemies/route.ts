import { NextResponse } from "next/server";
import { pbkdf2Sync, timingSafeEqual } from "crypto";
import { about } from "@/resources";

export const runtime = "nodejs";

const HASH_ITERATIONS = 310000;
const HASH_LENGTH = 32;
const HASH_DIGEST = "sha256";

function getPasswordConfig() {
  const salt = process.env.ENEMIES_PASSWORD_SALT;
  const hash = process.env.ENEMIES_PASSWORD_HASH;

  if (!salt || !hash) {
    console.error("ENEMIES_PASSWORD_SALT or ENEMIES_PASSWORD_HASH is not set");
    return undefined;
  }

  return { salt, hash };
}

function isValidPassword(password: unknown, config: { salt: string; hash: string }) {
  if (typeof password !== "string") {
    return false;
  }

  const expectedHash = Buffer.from(config.hash, "hex");
  const actualHash = pbkdf2Sync(
    password,
    config.salt,
    HASH_ITERATIONS,
    HASH_LENGTH,
    HASH_DIGEST
  );

  return (
    actualHash.length === expectedHash.length &&
    timingSafeEqual(actualHash, expectedHash)
  );
}

export async function POST(request: Request) {
  const config = getPasswordConfig();

  if (!config) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }

  const { password } = await request.json();

  if (!isValidPassword(password, config)) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  return NextResponse.json({
    people: about.enemies.people.map((person) => ({
      name: person.name,
      avatar: person.avatar,
      description: person.description,
    })),
  });
}
