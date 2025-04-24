import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  return Response.json({
    messsage: "very GET Response",
    query,
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return Response.json({
    message: "very POST Response",
  });
}

export async function PUT() {
  return Response.json({
    message: "very PUT Response",
  });
}
