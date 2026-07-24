// ** React Imports
import { Fragment, useState , useEffect } from "react";
import { updateNewsCategories, getData } from "./store/index";
import { useDispatch } from "react-redux";

// ** Reactstrap Imports
import {Card,Row,Col,Modal,Input,Label,Button,CardBody,CardText,CardTitle,ModalBody,ModalHeader,FormFeedback,} from "reactstrap";

// ** Third Party Components
import Select from "react-select";
import { User, Check, X } from "react-feather";
import { useForm, Controller } from "react-hook-form";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const defaultValues = {
  CategoryName: "",
  GoogleTitle: "",
  GoogleDescribe: "",
};

const AddUser = ({category}) => {
  // ** States
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  // ** Hooks
  const {control, reset, setError, handleSubmit, formState: { errors },} = useForm({ defaultValues });

  const onSubmit = async (data) => {
    try {
      const values = {
        Id: category.id,
        CategoryName: data.CategoryName,
        GoogleTitle: data.GoogleTitle,
        GoogleDescribe: data.GoogleDescribe,
      };

      await dispatch(updateNewsCategories(values)).unwrap();
      await dispatch(getData());

      setShow(false);
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
    }
  }
  useEffect(() => {
    if (category && show) {
      reset({
        CategoryName: category.categoryName,
        GoogleTitle: category.googleTitle,
        GoogleDescribe: category.GoogleDescribe,
      });
    }
  }, [category, show, reset]);

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
          <h1 className="text-center mb-2">ویرایش دسته بندی اخبار</h1>
          <Row
            tag="form"
            className="gy-1 pt-75"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col md={6} xs={12}>
              <Label className="form-label" for="CategoryName">
                نام دسته بندی
              </Label>
              <Controller
                control={control}
                name="CategoryName"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id="CategoryName"
                      placeholder=""
                      value={field.value}
                      invalid={errors.CategoryName && true}
                    />
                  );
                }}
              />
              {errors.CategoryName && (
                <FormFeedback>لطفا یک نام درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col md={6} xs={12}>
              <Label className="form-label" for="GoogleTitle">
                عنوان گوگل
              </Label>
              <Controller
                name="GoogleTitle"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="GoogleTitle"
                    placeholder=""
                    invalid={errors.GoogleTitle && true}
                  />
                )}
              />
              {errors.GoogleTitle && (
                <FormFeedback>لطفا یک عنوان درست وارد کنید</FormFeedback>
              )}
            </Col>
            <Col xs={12}>
              <Label className="form-label" for="GoogleDescribe">
                شرح گوگل
              </Label>
              <Controller
                name="GoogleDescribe"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="GoogleDescribe"
                    placeholder=""
                    invalid={errors.GoogleDescribe && true}
                  />
                )}
              />
              {errors.GoogleDescribe && (
                <FormFeedback>لطفا یک شرح درست وارد کنید</FormFeedback>
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
