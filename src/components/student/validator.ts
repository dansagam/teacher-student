import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { subYears } from "date-fns";

const studentSchema = yup.object({
  firstname: yup.string().required("Firstname is required"),
  surname: yup.string().required("Surname is required"),
  date: yup
    .date()
    .required("Date is required")
    .max(subYears(new Date(), 21), "Age may not be less than 21"),
  studentNo: yup.string().required("student Number is required"),
  nationId: yup.string().required("National Number is required"),
});

export interface StudentPayloadType extends yup.InferType<typeof studentSchema> {}
export const studentDefaultValues: StudentPayloadType = {
  firstname: "",
  surname: "",
  date: new Date(),
  studentNo: "",
  nationId: "",
};
export const studentResolver = yupResolver(studentSchema);
