// ** React Imports
import { useRef, useState } from "react";

// ** Custom Components
import Wizard from "@components/wizard";

// ** Steps
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

// ** Icons Imports
import { FileText, User, MapPin, Link } from "react-feather";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "./store";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { newsFormSchema } from "../../../utility/validations/newsFormSchema"

const FormWizard = () => {
  const ref = useRef(null);
  const [stepper, setStepper] = useState(null);

  const dispatch = useDispatch();
  const store = useSelector((state) => state.create_news);
  const filtersData = store.allData;

  console.log("filtersData", filtersData);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);


  const defaultValues = {
    title: '',
    googleTitle: '',
    keyword: '',
    newsCategory: null,
    isSlider: null,
    googleDescribe: '',
    miniDescribe: '',
    describe: '',
    image: '',
  }

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(newsFormSchema),
    mode: 'onSubmit',
  });


  const steps = [
    {
      id: "step1",
      title: "مرحله اول",
      subtitle: "اطلاعات اولیه دوره را وارد کنید",
      icon: <FileText size={18} />,
      content: <Step1 stepper={stepper} newsCategoriesList={filtersData} type="wizard-modern" />,
    },
    {
      id: "step2",
      title: "مرحله دوم",
      subtitle: "توضیحات مربوط به دوره را وارد کنید",
      icon: <User size={18} />,
      content: (
        <Step2
          stepper={stepper}
          type="wizard-modern"
        />
      ),
    },
    {
      id: "step3",
      title: "مرحله سوم",
      subtitle: "عکس مربوط به دوره را وارد کنید",
      icon: <MapPin size={18} />,
      content: <Step3 stepper={stepper} type="wizard-modern" />,
    },
  ];

  return (
    <FormProvider {...methods}>
      <div className="modern-horizontal-wizard">
        <Wizard
          type="modern-horizontal"
          instance={(el) => setStepper(el)}
          ref={ref}
          steps={steps}
        />
      </div>
  </FormProvider>
  );
};

export default FormWizard;
