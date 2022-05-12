select "c"."firstName",
       "c"."lastName",
       sum("p"."amount") as "total"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  join "rentals" as "r" using ("rentalId")
  group by "c"."customerId"
  order by "total" desc
