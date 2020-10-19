exports.up = function (knex) {
  return knex("users").insert({ name: "Michael" });
};

exports.down = function (knex) {
  // delete everything i inserted above
};
