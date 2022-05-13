select "g"."name" as "genre",
       count("f".*) as "count"
  from "actors" as "a"
  join "castMembers" as "c" using ("actorId")
  join "films" as "f" using ("filmId")
  join "filmGenre" as "fi" using ("filmId")
  join "genres" as "g" using ("genreId")
  where "a"."firstName" = 'Lisa' and "a"."lastName" = 'Monroe'
  group by "g"."name";
