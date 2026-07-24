// ** React Imports
import { Fragment, useState , useEffect } from "react";
import { updateDepartment, getData } from "./store/index";
import { useDispatch } from "react-redux";

// ** Reactstrap Imports
import {Card,Row,Col,Modal,Input,Label,Button,CardBody,CardText,CardTitle,ModalBody,ModalHeader, FormFeedback,} from "reactstrap";

// ** Third Party Components
import Select from "react-select";
import { User, Check, X } from "react-feather";
import { useForm, Controller } from "react-hook-form";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const defaultValues = {
  departmentName: "",
};

const AddUser = ({ department }) => {
  // ** States
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  // ** Hooks
  const { control, reset, setError, handleSubmit, formState: { errors }, } = useForm({ defaultValues });

  const onSubmit = async (data) => {
      try {
        const values = {
          id: department.id,
          depName: data.departmentName,
          buildingId: department.buildingId,
        };
  
        await dispatch(updateDepartment(values)).unwrap();
        await dispatch(getData());
  
        setShow(false);
      } catch (error) {
        console.log(error);
        console.log(error.response.data);
      }
    }
    useEffect(() => {
      if (department && show) {
        reset({
          departmentName: department.depName,
        });
      }
  }, [department, show, reset]);

  return (
    <Fragment>
      <Button color="primary" onClick={() => setShow(true)}>
        ویرایش
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
          
          <h1 className="text-center mb-2">ویرایش دپارتمان</h1>
          <Row
            tag="form"
            className="gy-1 pt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col xs={12}>
              <Label className="form-label" for="departmentName">
                نام دپارتمان
              </Label>
              <Controller
                name="departmentName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="departmentName"
                    placeholder=""
                    invalid={errors.departmentName && true}
                  />
                )}
              />
              {errors.departmentName && (
                <FormFeedback>لطفا یک نام کاربری درست وارد کنید</FormFeedback>
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

export default AddUser;
