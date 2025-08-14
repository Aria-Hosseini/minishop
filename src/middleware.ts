import { NextRequest, NextResponse } from "next/server";

export default function Middleware (request : NextRequest){
    const token = request.cookies.get("token")?.value;

    if(token){
        return NextResponse.next();
    }
    const url = new URL(request.url)
    url.pathname = "/admin/alogin"

    return NextResponse.redirect(url.toString());
}

export const config = {
    matcher : ["/admin/dashboard/:path*"]
}