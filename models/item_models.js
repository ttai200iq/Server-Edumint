const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    [
        {
            user_id: String,
            title: String,
            description: String,
            curriculum: String,
            duration: String,
            enrolled: Number,
            lectures: String,
            price: String,
            image: String
        }
    ],
    {
        timestamps: true
    }
)

const blogSchema = new mongoose.Schema(
    [
        {
            author: String,
            title: String,
            date: Date,
            content: String,
            comments: [
                {
                    author: String,
                    content: String,
                    time: Date,
                }
            ]
        }
    ],
    {
        timestamps: true
    }
)


const usersSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            require: (true, "Insert email")
        },
        firstname:{
            type: String,
            require: (true, "Insert firstname")
        },
        lastname:{
            type: String,
            require: (true, "Insert lastname")
        },
        password:{
            type: String,
            require: (true, "Insert password")
        },
        role:{
            type: String,
            require: (true, "Insert role")
        },
        status: Boolean
    },
    {
        timestamps: true
    }
)

const instructorSchema = new mongoose.Schema(
    {
        user_id: String,
        nationality: String,
        level: String,
        introduction: String,
    },
    {
        timestamps: true
    }
)

// const Register = mongoose.model('Register', registerSchema);
const Blog = mongoose.model('Blog', blogSchema);
const Users = mongoose.model('Users', usersSchema);
const Courses = mongoose.model('Courses', courseSchema);
const Instructor = mongoose.model('Instructor', instructorSchema);
mongoose.connect(
  "mongodb+srv://ndtt2712:tai123@cluster0.w1au9jx.mongodb.net/Education?retryWrites=true&w=majority"
).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log(error);
});

module.exports = {
    // Register,
    Users,
    Courses,
    Blog,
    Instructor,
}