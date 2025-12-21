const express = require("express");
const Course = require("../models/Course");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newCourse = await Course.create(req.body);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        res.json(course);
    } catch (error) {
        res.status(404).json({ error: "Course not found" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedCourse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(404).json({ error: "Course not found" });
    }
});

module.exports = router;

//figure out diff between updateone or delete one and the function i am using