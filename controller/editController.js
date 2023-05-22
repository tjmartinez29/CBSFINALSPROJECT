const {PrismaClient} = require("@prisma/client")
var prisma = new PrismaClient();

exports.getEdit = async(req,res) => {
  try {
    const student = await prisma.Student_Info.findUnique({ where: { id: req.params.id }});
    res.render('edit', { student });
  } catch (error) {
    console.log(error);
  }
}
exports.postEdit = async (req, res) => {
  const { firstname, middlename, lastname, birthdate, gender, civilstatus, country, region, province, city, barangay, zipcode, address, hobbies, keya, keyb, datetime} = req.body;
  const { id } = req.params;
  try {
    const updatedStudent = await prisma.student_Info.update({
      where: { id: id },
      data: { 
        firstname, 
        middlename, 
        lastname, 
        birthdate : new Date(birthdate).toISOString(), 
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
        updatedAt: new Date(), 
      },
    });
    console.log("Record updated successfully at: " + Date())
    const student = await prisma.student_Info.findUnique({ where: { id: id } });
    res.redirect('/view/' + id);
  } catch (error) {
    console.log(error);
  }
};

