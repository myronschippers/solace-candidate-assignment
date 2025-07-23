import { NextResponse, NextRequest } from 'next/server';
import { ilike, or } from 'drizzle-orm';

import db from '@/db';
import { advocates } from '@/db/schema';

type SearchPayload = {
  searchTerm: string;
};

export async function POST(req: NextRequest) {
  try {
    const { searchTerm }: SearchPayload = await req.json();

    if (!searchTerm || typeof searchTerm !== 'string') {
      return new NextResponse('Invalid search term.', { status: 400 });
    }

    const cleanedSearchTerm = `%${searchTerm.trim().toLowerCase()}%`;

    const data = await db
      .select()
      .from(advocates)
      .where(
        or(
          ilike(advocates.firstName, cleanedSearchTerm),
          ilike(advocates.lastName, cleanedSearchTerm)
        )
      );

    return NextResponse.json({ data });
  } catch (error: any) {
    return new NextResponse(
      `There was an error searching advocates. ${error.message}`,
      { status: 500 }
    );
  }
}
