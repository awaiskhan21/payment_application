import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();
export default function Home() {
  return <div className="bg-red-400 text-2xl font-semibold">user-app</div>;
}
