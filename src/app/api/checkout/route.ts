import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const dirPath = path.join(process.cwd(), "src", "db");
    const filePath = path.join(dirPath, "orders.json");

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    let existingData: any[] = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      existingData = JSON.parse(fileContent || "[]");
    }

    existingData.push({
      id: Date.now(),
      products: body.products,
      totalAmount: body.totalAmount,
      orderDate: body.orderDate,
      createdAt: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf-8");

    return NextResponse.json({ message: "Order saved successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error saving order" }, { status: 500 });
  }
}
