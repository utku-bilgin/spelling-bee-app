import { NextResponse } from "next/server";
import en from './constant/en.json'
import tr from './constant/tr.json'

export async function GET(){
    const data = {
        tr:"Hoşgeldin"
    };

    return NextResponse.json(data)
}


export async function POST(req,res){
    try{
        const data  = await req.json()

    if(data === "en"){
        return NextResponse.json(en)
    }
    else {
    return NextResponse.json(tr)
    }
    } catch (error) {
        return NextResponse.status(500).json({ error: "An error occurred while trying to find the language." });
    }

}
