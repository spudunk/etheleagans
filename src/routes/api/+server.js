import { json } from "@sveltejs/kit";

// import { info as libInfo } from "$lib/info";

/** @type {import('./$types').RequestHandler} */
export async function GET({ platform }) {
  // const k = await platform?.env?.KV.put("info", JSON.stringify(libInfo))
  const info = await platform?.env?.KV.get("info", { type: "json" });
  return json(info);
}