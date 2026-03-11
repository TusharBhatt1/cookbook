import { NextResponse } from "next/server";
import { Cobalt } from "@cobaltio/cobalt-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const baseUrl = process.env.COBALT_BASE_URL ?? "https://dev.gocobalt.io";
    const token =
      process.env.COBALT_TOKEN ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdfaWQiOiI2OGQxMmIwMzdhYzRkNzAxOGNhODNlNDAiLCJsaW5rZWRfYWNjb3VudF9pZCI6IjEyMyIsImVudmlyb25tZW50IjoicHJvZHVjdGlvbiIsInJvbGUiOlsibGlua2VkX2FjY291bnQiXSwiaWF0IjoxNzczMjIzNzkzLCJleHAiOjE3NzMyMjk3OTN9.lUaT4XGoDzFs8_7gKkI48A0fNxzg0Yt96tjyfkJiljY";
    if (!token) {
      return NextResponse.json(
        { error: "Missing COBALT_TOKEN" },
        { status: 500, headers: { "Cache-Control": "no-store" } },
      );
    }

    const cobalt = new Cobalt({ baseUrl });
    cobalt.token = token;

    const apps = await cobalt.getApp();
    const workflows = await cobalt.getWorkflows();
    // await cobalt.createWorkflow({
    //   name: "Testingggg Workflow",
    // })
    console.log("WORKFLOWS....");
    console.log(workflows);
    // console.log(apps);
    return NextResponse.json(apps, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Error fetching Cobalt apps", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }
}
