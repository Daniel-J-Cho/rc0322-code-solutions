select count(*)
  from "inventory"
  join "stores" using ("storeId");
