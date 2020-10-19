exports.up = function (knex) {
  return knex("users").insert({ name: "Nina" });
};

exports.down = function (knex) {
  // delete everything i inserted above
};
