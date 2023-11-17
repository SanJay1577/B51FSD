//database->collections-documents
// list of databases
//--> show dbs
//To use any database
//---> use DBNAME
// to see the list of collections
// show collections

// create a new database
//---> use DBName
//creating a collection
db.createCollection("students");
// inserting an document
//db.collectionName.operation(value)
db.students.insertMany([
  {
    name: "Aswin",
    batch: "b51WD2",
    task: 80,
    status: "exprienced",
  },
  {
    name: "Balaji",
    batch: "b51WD2",
    task: 80,
    status: "exprienced",
  },
  {
    name: "Jeeva",
    batch: "b51WD",
    task: 30,
    status: "fresher",
  },
  {
    name: "Meera",
    batch: "B52WD",
    task: 75,
    status: "fresher",
  },
  { name: "Praveen", batch: "b52WD", task: 63, status: "fresher" },
]);

// inserting one document
db.students.insertOne({
  name: "Praveen",
  batch: "b52WD",
  task: 63,
  status: "fresher",
});
// to find the document
//db.collectionName.findOperation(filters)
db.students.find();
// find with filters
//db.collectionName.findOperation({object})
db.students.find({ name: "Praveen" });

//updating a document
//db.collectionName.updateOperation({filter}, {$set: {fields}})
db.students.updateMany({ name: "Praveen" }, { $set: { task: 72 } });

//udpate one
db.students.updateOne(
  { _id: ObjectId("6556e00b8e3530d9aeafc2c9") },
  { $set: { task: 75 } }
);

// delete
//db.collectionName.deleteOperation({filter})
db.students.deleteOne({ _id: ObjectId("6556e00b8e3530d9aeafc2c9") });

db.students.deleteMany({ name: "Praveen" });
