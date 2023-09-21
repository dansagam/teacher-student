import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { subYears } from "date-fns";

const teacherSchema = yup.object({
  title: yup.string().oneOf(["Mr", "Mrs", "Miss", "Dr", "Prof"]).required("Title is required"),
  firstname: yup.string().required("Firstname is required"),
  surname: yup.string().required("Surname is required"),
  date: yup
    .date()
    .required("Date of Birth is required")
    .max(subYears(new Date(), 21), "Age may not be less than 21"),
  teacherNo: yup.string().required("Teacher Number is required"),
  salary: yup.number().optional(),
  nationalId: yup.string().required("National Number is required"),
});

export interface TeacherPayloadType extends yup.InferType<typeof teacherSchema> {}
export const teacherDefaultValues: TeacherPayloadType = {
  title: "Mr",
  firstname: "",
  surname: "",
  date: new Date(),
  teacherNo: "",
  nationalId: "",
  salary: 0,
};
export const teacherResolver = yupResolver(teacherSchema);
