const personGenerator = {
    lastNameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    middleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михаилович",
            "id_8": "Даниловчи",
            "id_9": "Егорьвич",
            "id_10": "Андреевич"
        }
    }`,
    middleNameFeMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Ивановна",
            "id_2": "Викторовна",
            "id_3": "Константиновна",
            "id_4": "Васильевна",
            "id_5": "Петровна",
            "id_6": "Михайловна",
            "id_7": "Николаевна",
            "id_8": "Федоровна",
            "id_9": "Кировна",
            "id_10": "Александровна"
        }
    }`,
    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Марина",
            "id_3": "Иванка",
            "id_4": "Артемида",
            "id_5": "Дарья",
            "id_6": "Николь",
            "id_7": "Мария",
            "id_8": "Дарья",
            "id_9": "Евгения",
            "id_10": "Анастасия"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,
    professionMaleJson: `{
        "count": 3,
        "list": {     
            "id_1": "шахтер",
            "id_2": "пожарный",
            "id_3": "водитель"
         }
    }`,
    professionFeMaleJson: `{
        "count": 3,
        "list": {     
            "id_1": "стюардесса",
            "id_2": "учительница",
            "id_3": "медсестра"
         }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        let obj = JSON.parse(json);
        let prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    //имя мужское
    randomFirstNameMale: function () {

        return this.randomValue(this.firstNameMaleJson);

    },
    //отчество мужское
    randomMiddleNameMale: function () {

        return this.randomValue(this.middleNameMaleJson);

    },

    //отчество женское
    randomMiddleNameFeMale: function () {

        return this.randomValue(this.middleNameFeMaleJson);

    },

    //имя женское
    randomFirstNameFeMale: function () {

        return this.randomValue(this.firstNameFeMaleJson);

    },
    //фамилия для всех
    randomLastName: function () {

        return this.randomValue(this.lastNameJson);

    },
    //дата рождения месяц
    randomMonth: function () {

        return this.randomValue(this.monthJson);

    },
    //женская профессия
    randomProfessionFeMale: function () {

        return this.randomValue(this.professionFeMaleJson);

    },
    //мужская профессия
    randomProfessionMale: function () {

        return this.randomValue(this.professionMaleJson);

    },

    // выбираем пол, от него отталкиваемся потом   
    randomGender: function () {
        let male = this.randomIntNumber(1, 0);
        male == 1 ? this.male = this.GENDER_MALE : this.male = this.GENDER_FEMALE;

        return this.male;
    },

    getPerson: function () {
        this.person = {};
        //в зависимости от пола выбираем имя, отчество и меняем фамилию
        this.person.gender = this.randomGender();
        this.person.lastName = this.randomLastName();
        //       console.log(middleNameFeMaleJson);
        if (this.person.gender == this.GENDER_FEMALE) {
            this.person.lastName += 'a';
            this.person.firstName = this.randomFirstNameFeMale();
            this.person.profession = this.randomProfessionFeMale();
            this.person.middleName = this.randomMiddleNameFeMale();
        }
        else {
            this.person.firstName = this.randomFirstNameMale();
            this.person.profession = this.randomProfessionMale();
            this.person.middleName = this.randomMiddleNameMale();
        }
        // формируем дату рождения, в зависимости от месяца выбираем число и добавляем год
        let date='';
        let month='';
        month = this.randomMonth();
        if ((month == "апрель") || (month == "июнь") || (month == "сентябрь") || (month == "ноябрь")){
            date = Math.floor(Math.random() * (30 - 1 + 1) + 1);
        }
        if (month == "февраль") {
            date = Math.floor(Math.random() * (29 - 1 + 1) + 1);
        } else {
            date = Math.floor(Math.random() * (31 - 1 + 1) + 1);    
        }

        this.person.year = Math.floor(Math.random() * (2020 - 1950 + 1) + 1950);

        date = String(date)+' '+String(month)+' '+String(Math.floor(Math.random() * (2020 - 1950 + 1) + 1950));
        this.person.year = date;
        return this.person;
    }
}
