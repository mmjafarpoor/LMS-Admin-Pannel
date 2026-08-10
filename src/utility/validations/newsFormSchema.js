import * as yup from 'yup'

export const newsFormSchema = yup.object().shape({
  // Step 1
    title: yup
        .string()
        .required('عنوان خبر الزامی است')
        .min(5, 'عنوان باید حداقل ۵ کاراکتر باشد')
        .max(100, 'عنوان نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد'),

    googleTitle: yup
        .string()
        .required('عنوان گوگل الزامی است')
        .min(5, 'عنوان گوگل باید حداقل ۵ کاراکتر باشد')
        .max(70, 'عنوان گوگل بهتر است کمتر از ۷۰ کاراکتر باشد'),

    keywords: yup
        .string()
        .nullable()
        .max(200, 'کلمات کلیدی نمی‌تواند بیشتر از ۲۰۰ کاراکتر باشد'),

    newsCategory: yup
        .object()
        .nullable()
        .required('انتخاب دسته‌بندی خبر الزامی است'),

    slider: yup
        .object()
        .nullable()
        .required('انتخاب وضعیت اسلایدر الزامی است'),

    // Step 2
    googleDescribe: yup
        .string()
        .required('توضیح گوگل الزامی است')
        .min(35, 'توضیح گوگل باید حداقل ۳۵ کاراکتر باشد')
        .max(160, 'توضیح گوگل بهتر است کمتر از ۱۶۰ کاراکتر باشد'),

    miniDescribe: yup
        .string()
        .required('توضیح کوتاه الزامی است')
        .min(30, 'توضیح کوتاه باید حداقل ۳۰ کاراکتر باشد'),

    describe: yup
        .string()
        .required('توضیحات اصلی الزامی است')
        .min(70, 'توضیحات اصلی باید حداقل ۷۰ کاراکتر باشد'),

    // Step 3
    image: yup
        .string()
        .required('لینک عکس الزامی است')
        .url('لطفاً یک لینک معتبر وارد کنید'),
})