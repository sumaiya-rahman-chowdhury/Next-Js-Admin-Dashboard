
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
// import { NextRequest, NextResponse } from "next/server";

export default NextAuth(authConfig).auth;
// export function middleware(request: NextRequest) {
//   const isLoggedIn = request.cookies.get("your-auth-cookie-name"); // Or use token/session check logic

//   // Redirect unauthenticated users from /dashboard to /login
//   if (request.nextUrl.pathname.startsWith("/dashboard") && !isLoggedIn) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next(); // Allow all other requests
// }

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
