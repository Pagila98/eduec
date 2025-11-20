import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount, email, phoneNumber } = await req.json();

    if (!amount) {
      return NextResponse.json(
        { error: "El monto es requerido" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${process.env.PAYPHONE_BASE_URL}/v2/transactions/checkout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.PAYPHONE_SECRET_KEY}`,
          id: process.env.PAYPHONE_CLIENT_ID!,
        },
        body: JSON.stringify({
          amount: amount * 100,
          amountWithoutTax: amount * 100,
          currency: "USD",
          clientTransactionId: Date.now().toString(),
          storeId: process.env.PAYPHONE_APP_ID,
          email,
          phoneNumber,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: 400 });
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error("PayPhone error:", error);
    return NextResponse.json(
      { error: "Error creando la orden de pago" },
      { status: 500 }
    );
  }
}
