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

// ** Third Party Components
import Select from "react-select";
import { User, Check, X } from "react-feather";
import { useForm, Controller } from "react-hook-form";

// ** Utils
import { addTimeLine, getData } from "./store";
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import { useDispatch } from "react-redux";

const defaultValues = {
  startDate: "",
  startTime: "",
  endTime: "",
  weekNumber: "",
  rowEffect: ""
};

const AddTimeLine = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    console.log(data)
    if (Object.values(data).every((field) => field.length > 0)) {
      try {
        await dispatch(
          addTimeLine({
            courseGroupId: "dbcb4b60-8e9c-4551-94e3-94c850aebcf5",
            startDate: data.startDate,
            startTime: data.startTime,
            endTime: data.endTime,
            weekNumber: parseInt(data.weekNumber),
            rowEffect: parseInt(data.rowEffect),
          })
        ).unwrap();

        dispatch(getData());
        setShow(false);
        

      } catch (error){
        console.log(error)
      }}

    else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  return (
    <Fragment>
      <Button className="fs-5 w-100" color="primary" onClick={() => setShow(true)}>
        افزودن بازه زمانی
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
          
          <h1 className="text-center mb-2">افزودن بازه زمانی جدید</h1>    
          <Row
            tag="form"
            className="gy-1 pt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col xs={12}>
              <Label className="form-label fs-5" for="startDate">
                تاریخ شروع
              </Label>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="startDate"
                      placeholder=""
                      value={field.value}
                      invalid={errors.startDate && true}
                    />
                  );
                }}
              />
              {errors.startDate && (
                <FormFeedback>لطفا یک اسم درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col xs={6}>
              <Label className="form-label fs-5" for="startTime">
                ساعت شروع
              </Label>
              <Controller
                control={control}
                name="startTime"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="startTime"
                      placeholder=""
                      value={field.value}
                      invalid={errors.startTime && true}
                    />
                  );
                }}
              />
              {errors.startTime && (
                <FormFeedback>لطفا یک ساعت مناسب درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col xs={6}>
              <Label className="form-label fs-5" for="endTime">
                ساعت پایان
              </Label>
              <Controller
                control={control}
                name="endTime"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="endTime"
                      placeholder=""
                      value={field.value}
                      invalid={errors.endTime && true}
                    />
                  );
                }}
              />
              {errors.endTime && (
                <FormFeedback>لطفا یک ساعت مناسب درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col xs={6}>
              <Label className="form-label fs-5" for="weekNumber">
                تعداد کلاس در هفته
              </Label>
              <Controller
                control={control}
                name="weekNumber"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="weekNumber"
                      placeholder=""
                      value={field.value}
                      invalid={errors.weekNumber && true}
                    />
                  );
                }}
              />
              {errors.weekNumber && (
                <FormFeedback>لطفا یک ساعت مناسب درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col xs={6}>
              <Label className="form-label fs-5" for="rowEffect">
                تعداد کل جلسات
              </Label>
              <Controller
                control={control}
                name="rowEffect"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="rowEffect"
                      placeholder=""
                      value={field.value}
                      invalid={errors.rowEffect && true}
                    />
                  );
                }}
              />
              {errors.rowEffect && (
                <FormFeedback>لطفا یک ساعت مناسب درست وارد کنید</FormFeedback>
              )}
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

export default AddTimeLine;
