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
    const data  = await req.json()


    if(data === "en"){
        return NextResponse.json(en)
    }
    else {
    return NextResponse.json(tr)
    }

}
