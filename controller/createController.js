const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient();

exports.getCreate = (req, res) => {
    res.render('create');
}
exports.postCreate = async (req, res) => {
    try {
        const {
            firstname,
            middlename,
            lastname,
            birthdate,
            gender,
            civilstatus,
            country,
            region,
            province,
            city,
            barangay,
            zipcode,
            address,
            hobbies,
            keya,
            keyb
        } = req.body;

        const student = await prisma.student_Info.create({
            data: {
                firstname,
                middlename,
                lastname,
                birthdate: new Date(birthdate).toISOString(),
                gender,
                civilstatus,
                country,
                region,
                province,
                city,
                barangay,
                zipcode,
                address,
                hobbies,
                keya,
                keyb,
            },
        });
        console.log('Created student record successfully at: ' + Date());
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
    res.redirect('create');
};
