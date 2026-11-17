function Destructuring() {
  const user = {
    id: 10,
    profile: {
      name: "Lina",
      city: "Amman",
    },
    roles: ["editor", "reviewer"],
  };

  const {
    id,
    profile: { name, city },
    roles,
  } = user;

  // console.log(id, name, city, roles);
  return { id, name, city, roles };
}
module.exports = Destructuring;
// Destructuring();
