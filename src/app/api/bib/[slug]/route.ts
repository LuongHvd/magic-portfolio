import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "public", "bib", `${slug}.bib`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const bibtex = fs.readFileSync(filePath, "utf-8");

  return new Response(bibtex, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `inline; filename="${slug}.bib"`,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
