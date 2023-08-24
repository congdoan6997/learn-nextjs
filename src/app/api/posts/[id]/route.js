import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {
    const {id} = params;
    console.log(id);
    try {
        await connect();
        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), {status: 200});
        
    } catch (error) {
        return new NextResponse("Database error", {status: 500});
    }
    // return new NextResponse("hello", {status:200});
    
}