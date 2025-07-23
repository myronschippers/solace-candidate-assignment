import { NextResponse } from 'next/server';

import db from '../../../db';
import { advocates } from '../../../db/schema';

// import { advocateData } from '../../../db/seed/advocates';

export async function GET() {
  try {
    // Uncomment this line to use a database
    const data = await db.select().from(advocates);

    // const data = advocateData;

    return NextResponse.json({ data });
  } catch (error: any) {
    return new NextResponse(
      `There was an error fetching advocates. ${error.message}`,
      { status: 500 }
    );
  }
}
