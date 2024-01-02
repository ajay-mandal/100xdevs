const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({
        username,
        password
    });
    if (user){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.status(411).json({
            message: "Incorrect email or password"
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    const username = decodedValue.username;

    await User.updateOne({
        username
    },{
        "$push":{
            purchasedCourse: courseId
        }
    })
    res.json({
        message: 'Course purchased successfully'
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    const username = decodedValue.username;

    const user = await User.findOne({
        username
    });
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourse
        }
    });
    res.json({
        courses:courses
    })

});

module.exports = router
