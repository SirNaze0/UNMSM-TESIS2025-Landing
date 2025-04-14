import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  try {
    // Incrementar el contador usando Vercel KV
    const counter = await kv.incr('visitCounter');

    // Devolver el valor actual
    return NextResponse.json({ count: counter });
  } catch (error) {
    console.error('Error al manejar el contador:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
