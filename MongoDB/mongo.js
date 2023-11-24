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
// mentors
db.mentors.insertMany([
  {
    name: "Sanjay",
    batch: "b51WD",
  },
  {
    name: "Nagarajan",
    batch: "B52WD",
  },
  {
    name: "Sangeetha",
    batch: "b51WD2",
  },
]);

db.mentors.find();

// to get all data
db.students.find().toArray();

db.students.find().forEach(function (stud) {
  print("studentName " + stud.name);
});

// aggregates
//sorting
// asc
db.students.find().sort({ task: 1 }).toArray();
//desc
db.students.find().sort({ task: -1 }).toArray();
//limit
db.students.find().sort({ task: 1 }).limit(5);
//skip
db.students.find().limit(5).skip(1);
//count
db.students.find({ task: 80 }).count();
// greater than
db.students.find({ task: { $gt: 74 } });
//greater than or eqaul
db.students.find({ task: { $gte: 74 } });
//lesser than
db.students.find({ task: { $lt: 74 } });
//lesser than or equal
db.students.find({ task: { $lte: 74 } });
//not operator
db.students.find({ task: { $not: { $gt: 30, $lt: 75 } } });
//30, 74, 75, 80
// 74, 75, 80
// 74,
//-> not/in  <-
// in values
db.students.find({ task: { $gt: 30, $lt: 75 } });
//or operator
db.students.find({ $or: [{ task: 75 }, { name: "Balaji" }] });

//lookup
//aggregate[stag1, stage2, stage3]
db.mentors.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "batch",
      foreignField: "batch",
      as: "mentor_students_data",
    },
  },
]);
// stages of aggregation
db.students.aggregate([
  { $match: { status: "exprienced" } },
  { $group: { _id: "$name", totalExperience: { $sum: "$task" } } },
]);

//removing the duplicates
db.students
  .aggregate([
    {
      $group: {
        _id: "$name",
        duplicate: { $addToSet: "$_id" },
        TotalCount: { $sum: 1 },
      },
    },
    {
      $match: { TotalCount: { $gt: 1 } },
    },
  ])
  .forEach((doc) => {
    doc.duplicate.shift();
    db.students.deleteMany({ _id: { $in: doc.duplicate } });
  });
