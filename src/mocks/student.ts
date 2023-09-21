import { StudentData } from "@/components/student/StudentCard";
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
