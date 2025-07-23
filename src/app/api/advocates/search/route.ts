import { NextResponse, NextRequest } from 'next/server';
import { ilike, or, eq, sql } from 'drizzle-orm';

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
    const searchAsNumber = Number(searchTerm);
    const isSearchNumber = !isNaN(searchAsNumber);

    const data = await db
      .select()
      .from(advocates)
      .where(
        or(
          ilike(advocates.firstName, cleanedSearchTerm),
          ilike(advocates.lastName, cleanedSearchTerm),
          ilike(advocates.city, cleanedSearchTerm),
          ilike(advocates.degree, cleanedSearchTerm),
          isSearchNumber
            ? eq(advocates.yearsOfExperience, searchAsNumber)
            : undefined,
          // Having problems with the search of the jsonb array of strings for payload/specialties
          sql`EXISTS (
            SELECT 1
            FROM jsonb_array_elements_text(
              CASE
                WHEN jsonb_typeof(${advocates.specialties}) = 'array' THEN ${advocates.specialties}
                ELSE '[]'::jsonb
              END
            ) AS elem
            WHERE elem ILIKE ${cleanedSearchTerm}::text
          )`
        )
      );

    return NextResponse.json({ data });
  } catch (error: any) {
    console.error('Error searching advocates:', error);
    return new NextResponse(
      `There was an error searching advocates. ${error.message}`,
      { status: 500 }
    );
  }
}
