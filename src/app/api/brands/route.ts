import {NextResponse } from "next/server";

  const brands = [
    {id:1,name:"Xiaomi"},
     {id:2,name:"Adidas"},
      {id:3,name:"Impex"},
       {id:4,name:"Leecoper"},
          {id:5,name:"Levi’s"},
       {id:6,name:"Samsung"}]

       export async function GET() {
        return NextResponse.json(brands)
        
       }