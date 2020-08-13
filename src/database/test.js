const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
    proffyValue = {
        name: "Danielle Evangelista", 
        avatar: "https://www.gstatic.com/tv/thumb/persons/234825/234825_v9_ba.jpg", 
        whatsapp: "19991480946", 
        bio: "Instrutora de Educação Física para iniciantes, minha missão de vida é levar saúde e constribuir para o crescimento de quem se interessar.<br><br>Comecei a minha jornada profissicional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: Aprenda a fazer dinheiro com isso!"
        
    }

    classValue = {
        subject: 1, 
        cost: "40"
    }

    classScheduleValues = [
        {            
            weekday: 1, 
            time_from: 720, 
            time_to: 1220 
        },
        {            
            weekday: 0, 
            time_from: 520, 
            time_to: 1220 
        }        
    ]

    //await createProffy(db, { proffyValue, classValue, classScheduleValues });

    const selectedProffys = await db.all("SELECT * FROM proffys");
    //console.log(selectedProffys);

    const selectedClassesAndProffys =await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1; 
    `);

    //console.log(selectedClassesAndProffys);

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.classes_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "620"
        AND class_schedule.time_to > "620";
    `);

    console.log(selectedClassesSchedules);

});