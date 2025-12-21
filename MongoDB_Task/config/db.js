const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://maiabostate2005_db_user:GvfKYFWJ%21iuCPn6@cluster0.ocomi48.mongodb.net/CoursesDB?retryWrites=true&w=majority"
        );
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;