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
          // TOPIC: keeping in mind that the database and search capabilities may expand
          // -- it would be a good idea to make this less manual and a little more dynamic
          ilike(advocates.firstName, cleanedSearchTerm),
          ilike(advocates.lastName, cleanedSearchTerm),
          ilike(advocates.city, cleanedSearchTerm),
          ilike(advocates.degree, cleanedSearchTerm),
          isSearchNumber
            ? eq(advocates.yearsOfExperience, searchAsNumber)
            : undefined,
          // TOPIC: Having problems with the search of the jsonb array of strings for payload/specialties
          // -- could not get jsonb_path_exists() to work
          // -- drizzle stringifies the specialties array of strings during seeding and now it is not searchable as a jsonb array
          //    (example: "[\"Weight loss & nutrition\"]")
          sql`${advocates.specialties} @> ${searchTerm.trim()}`
        )
      );
    // TOPIC: as the database scales larger returning the entire set will be too expensive
    // -- the use of a limit and offset to return results in a paginated list would be a good idea

    return NextResponse.json({ data });
  } catch (error: any) {
    console.error('Error searching advocates:', error);
    return new NextResponse(
      'An unexpected error occurred searching advocates. Please try again later.',
      { status: 500 }
    );
  }
}
