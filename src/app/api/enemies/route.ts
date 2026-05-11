import { NextResponse } from "next/server";
import { about } from "@/resources";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password !== about.enemies.password) {
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
