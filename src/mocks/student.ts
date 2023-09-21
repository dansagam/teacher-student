import { StudentData } from "@/components/student/StudentCard";
import { TeacherData } from "@/components/teacher/TeacherCard";
import { subYears } from "date-fns";
import { v4 as uuidv4 } from "uuid";

export const studentMockList: StudentData[] = [
  {
    id: uuidv4(),
    firstname: "John",
    lastname: "John",
    nationalId: "123",
    studentNo: "123",
    date: subYears(new Date(), 30),
  },
  {
    id: uuidv4(),
    firstname: "Faita",
    lastname: "Thinf",
    nationalId: "123",
    studentNo: "123",
    date: subYears(new Date(), 50),
  },
  {
    id: uuidv4(),
    firstname: "Joe",
    lastname: "Biden",
    nationalId: "123",
    studentNo: "123",
    date: subYears(new Date(), 25),
  },
  {
    id: uuidv4(),
    firstname: "Long",
    lastname: "Isle",
    nationalId: "123",
    studentNo: "123",
    date: subYears(new Date(), 40),
  },
];

export const teacherMockList: TeacherData[] = [
  {
    date: subYears(new Date(), 30),
    firstname: "Ale",
    lastname: "Faith",
    id: uuidv4(),
    nationalId: "JJHBJHSBHBJH",
    teacherNo: "BDJIJWHBIWI",
    salary: 40000,
  },
  {
    date: subYears(new Date(), 30),
    firstname: "Hale",
    lastname: "Faith",
    id: uuidv4(),
    nationalId: "JHUEVG",
    teacherNo: "BIJBLEBEJB ",
    salary: 40000,
  },
  {
    date: subYears(new Date(), 30),
    firstname: "Gamil",
    lastname: "John",
    id: uuidv4(),
    nationalId: "NLKNONJIEH",
    teacherNo: "BJIBJEIB",
    salary: 40000,
  },
  {
    date: subYears(new Date(), 30),
    firstname: "Gof",
    lastname: "Hikjki",
    id: uuidv4(),
    nationalId: "BBENO",
    teacherNo: "NOINEHHVI",
    salary: 79000,
  },
  {
    date: subYears(new Date(), 30),
    firstname: "JPls",
    lastname: "Lola",
    id: uuidv4(),
    nationalId: "JKBHDIHE",
    teacherNo: "HUINE",
    salary: 488000,
  },
];
