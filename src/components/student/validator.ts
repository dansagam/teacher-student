import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { subYears } from "date-fns";

const studentSchema = yup.object({
  title: yup.string().oneOf(["Mr", "Mrs", "Miss", "Dr", "Prof"]).required("Title is required"),
  firstname: yup.string().required("Firstname is required"),
  surname: yup.string().required("Surname is required"),
  date: yup
    .date()
    .required("Date is required")
    .max(subYears(new Date(), 21), "Age may not be less than 21"),
  teacherNo: yup.string().required("Teacher Number is required"),
  salary: yup.number().optional(),
  nationId: yup.string().required("National Number is required"),
});

export interface StudentPayloadType extends yup.InferType<typeof studentSchema> {}
export const studentDefaultValues: StudentPayloadType = {
  title: "Mr",
  firstname: "",
  surname: "",
  date: new Date(),
  teacherNo: "",
  nationId: "",
  salary: 0,
};
export const studentResolver = yupResolver(studentSchema);
