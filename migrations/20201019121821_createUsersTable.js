exports.up = function (knex) {
  knex.schema.createTable("users", function (table) {
    table.increments(); // id?
    table.string("name"); // name
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("users");
};
