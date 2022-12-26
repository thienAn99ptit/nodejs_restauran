const handleMongoose = {
    multipleMongooseToObject : function (objects) {
        return objects.map((object)=> object.toObject())
    },
    mongoosetoObject: function (object) {
        return object ? object.toObject() : object
        
    }
}

export {handleMongoose }
    