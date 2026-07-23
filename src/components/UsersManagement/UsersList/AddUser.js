// ** React Imports
import { Fragment, useState } from "react";

// ** Reactstrap Imports
import {
  Card,
  Row,
  Col,
  Modal,
  Input,
  Label,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  ModalHeader,
  FormFeedback,
} from "reactstrap";

import { useDispatch } from "react-redux";
import { addUser, getData } from "./store";

// ** Third Party Components
import Select from "react-select";
import { User, Check, X } from "react-feather";
import { useForm, Controller } from "react-hook-form";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const statusOptions = [
  { value: "student", label: "دانشجو" },
  { value: "teacher", label: "استاد" },
  { value: "admin", label: "ادمین" },
];

const defaultValues = {
  firstName: "",
  lastName: "",
  gmail: "",
  phoneNumber: "",
  password: "",
  isStudent: "",
  isTeacher: ""
};

const AddUser = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [role, setRole] = useState(statusOptions[0])

  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    console.log(data, role)
    try {
      await dispatch(
        addUser({
          firstName: data.firstName,
          lastName: data.lastName,
          gmail: data.gmail,
          phoneNumber: data.phoneNumber,
          password: data.password,
          isStudent: role.value === "student",
          isTeacher: role.value === "teacher",
          })
        ).unwrap();

        dispatch(getData());
        setShow(false);

      } catch (error){
        console.log(error)
      }
  };

  return (
    <Fragment>
      <Button color="primary" onClick={() => setShow(true)}>
        افزودن کاربر
      </Button>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          className="bg-transparent"
          toggle={() => setShow(!show)}
        ></ModalHeader>
        <ModalBody className="px-sm-5 mx-50 pb-5">
          
          <h1 className="text-center mb-2">افزودن کاربر جدید</h1>    
          <Row
            tag="form"
            className="gy-1 pt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col md={6} xs={12}>
              <Label className="form-label" for="firstName">
                نام
              </Label>
              <Controller
                control={control}
                name="firstName"
                rules={{ required: true }}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="firstName"
                      placeholder=""
                      value={field.value}
                      invalid={errors.firstName && true}
                    />
                  );
                }}
              />
              {errors.firstName && (
                <FormFeedback>لطفا یک اسم درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="lastName">
                نام خانوادگی
              </Label>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="lastName"
                    placeholder=""
                    invalid={errors.lastName && true}
                  />
                )}
              />
              {errors.lastName && (
                <FormFeedback>لطفا یک نام خانوادگی درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="gmail">
                ایمیل
              </Label>
              <Controller
                name="gmail"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="gmail"
                    placeholder="example@domain.com"
                    invalid={errors.gmail && true}
                  />
                )}
              />
              {errors.gmail && (
                <FormFeedback>لطفا یک ایمیل درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="phoneNumber">
                شماره تماس
              </Label>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="phoneNumber"
                    placeholder="09000000000"
                    invalid={errors.phoneNumber && true}
                  />
                )}
              />
              {errors.phoneNumber && (
                <FormFeedback>لطفا یک شماره تماس درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="password">
                رمز عبور
              </Label>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="password"
                    placeholder=""
                    invalid={errors.password && true}
                  />
                )}
              />
              {errors.password && (
                <FormFeedback>لطفا یک رمز عبور درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="status">
                نقش
              </Label>
              <Select
                id="status"
                isClearable={false}
                className="react-select"
                classNamePrefix="select"
                options={statusOptions}
                theme={selectThemeColors}
                defaultValue={statusOptions[0]}
                onChange={selectedOption => setRole(selectedOption)}
                
              />
            </Col>
            
            <Col xs={12} className="text-center mt-2 pt-50">
              <Button type="submit" className="me-1" color="primary">
                تایید
              </Button>
              <Button
                type="reset"
                color="secondary"
                outline
                onClick={() => setShow(false)}
              >
                لغو
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default AddUser;
