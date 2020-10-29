use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Drizzt Do'Urden",
    email: "drizzt@neverwinter.co.fae",
    checkedin: false
  },
  {
    name: "Volothamp Geddarm",
    email: "volosbook@baldursgate.fae",
    checkedin: false
  },
  {
    name: "Xananthar",
    email: "xanatharsguide@waterdeep.co.fae",
    checkedin: true
  }
]);
