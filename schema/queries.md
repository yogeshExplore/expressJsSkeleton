### Create DB
Mongo db create DB only when data is stored in it 
1) user identity
2) db.user.insert({})

### Create Collection
use identity;
db.createCollection('user')
db.createCollection('user_profile)


### Create Collection with Validators
db.createCollection("user", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "USer Object Validation",
         required: [ "_id","name", "email", "mobileNo", "password", "source", "isActive", "createdAt", "createdBy", "updatedAt", "updatedBy"],
         properties: {
            _id: {
               bsonType: "binData",
               description: "Unique identifier,I am using it instead of object for portibility",
               pattern: "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"
            },
            name: {
               bsonType: "string",
               description: "'name' must be a string and is required",
               maxLength: 50,
               minLength: 1
            },
            email: {
               bsonType: "string",
               maxLength: 100,
               minLength: 5
            },
            mobileNo: {
               bsonType: "string",
               maxLength: 13,
               minLength: 10
            },
            password: {
                bsonType: "string",
                maxLength: 100,
                minLength: 10
            },
            source: {
                bsonType: "string",
                maxLength: 50,
                minLength: 2,
                description: "the document belongs to which source"
            },
            isActive: {
                bsonType: "bool",
                description: "default should be true but mongodb doesn't support default"
            },
            createdAt: {
                bsonType: "date",
                description: "Mongo do not undertsand timezones, for mongo everything is UTC"
            },
            createdBy: {
                bsonType: "string",
                maxLength: 50,
                minLength: 2,
                description: "Which api or app or frontend created it"
            },
            updatedAt: {
                bsonType: "date"
            },
            updatedBy: {
                bsonType: "string",
                maxLength: 50,
                minLength: 2,
                description: "Which api or app or frontend updated it"
            }

         }
      }
   }
} )




db.createCollection("user_profile", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "USer Object Validation",
         required: [ "_id", "createdAt", "createdBy", "updatedAt", "updatedBy"],
         properties: {
            _id: {
               bsonType: "binData",
               description: "Unique identifier,I am using it instead of object for portibility",
               pattern: "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"
            },
            avatar: {
               bsonType: "string",
               description: "url, not using validation to save complexity",
               maxLength: 500,
               minLength: 5
            },
            address: {
               bsonType: "array",
            },
            createdAt: {
                bsonType: "date",
                description: "Mongo do not undertsand timezones, for mongo everything is UTC"
            },
            createdBy: {
                bsonType: "string",
                maxLength: 50,
                minLength: 2,
                description: "Which api or app or frontend created it"
            },
            updatedAt: {
                bsonType: "date"
            },
            updatedBy: {
                bsonType: "string",
                maxLength: 50,
                minLength: 2,
                description: "Which api or app or frontend updated it"
            }

         }
      }
   }
} )


### Insert 
db.user.insertOne({
    _id : UUID(),
    name: "explore",
    email: "yogeshdtu@gmail.com",
    mobileNo: "8908908908",
    password: "encrptedpassword",
    source: "ChaiBiscuit",
    isActive: true,
    createdAt: new Date(),
    createdBy: "mongodb_compass",
    updatedAt: new Date(),
    updatedBy: "mongodb_compass",
})


db.user_profile.insertOne({
    _id : UUID('10f2f432-aeb7-4cf6-b43c-79deae38cbbe'),
    avatar: "https://cdn.pixabay.com/photo/2017/02/09/11/08/alphabet-2051645_960_720.png",
    createdAt: new Date(),
    createdBy: "mongodb_compass",
    updatedAt: new Date(),
    updatedBy: "mongodb_compass",
})
