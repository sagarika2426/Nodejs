MongoDB
- No SQL/ Npn Rational Databade
- High Performance
- High Scalable
- map/reduce Aggregations
- Auto Sharding - can be shared anywhere 


Why we need Mongodb?
- SQL is restrictive
- SQL needs a fixed schema
- Mongodb is flexible, doesn't need schedma, model or relations
- You still can create schema, models if yoy want
- Everything is an object in mongodb


When?
- Flexible data requirements
= Need High Availibality
- Need distributed data access
- Read speed matters more than write speed

 
when not to?
- Write is imp than read
- Data is relational
- Everything is connected to every other thing
- Transactional Support is high priority
- eg: Banking, payment, IOT etc


In mongodb there are 3 basic concepts:
1. Documents
    - Smallest record
    - Represent one data
    - A document is nothig but a json object
    - Every doc has a unique ID: _id: ObjectID //created by mongo

2. Collection
    - Place where multiple similar documents are stores
    - collection has name eg: "POSTS"
    - use this name to find docs:
    `posts.find({author:"Jack"})` etc

3. Database
    -multiple such collections are stored in a place called db
    -You can have any number of database
    - a Database groups similar collections
    - Databases are created to restrict access levels, create replicas, sharding


Never use file as db. Why? As we are only using for ourself with files but for so many users it wont work.
1. 1req/min: all the api
2. Facebook: Login: millions of userr - per sec - 30 lakhs  users
