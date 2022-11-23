import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req: {
  nextUrl: {
    clone(): unknown;
    pathname: string;
  };
  cookies: { TRAX_ACCESS_TOKEN: any };
  NextRequest: any;
}) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    if (!token) {
      return NextResponse.redirect(url);
    }
  }
}
