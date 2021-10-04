import Cards from 'react-credit-cards';
import {
  CardWrapper,
  Container, ErrorWrapper, Form, FormInput,
} from '../../styled/components/cards/CreatePaymentCard';
import {
  CardNameValidation,
  CardNumberValidation, ExpiryValidation,
  isValidInput,
} from '../../helpers/validations/PaymentFormValidation';
import {Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {createPaymentMethodAsync} from '../../store/subscriptions/action';

export const CreatePaymentCard = () => {
  const currentSubscription = useSelector(
      state => state.subscriptions.currentSubscription);
  const paymentMethod = useSelector(state => state.subscriptions.paymentMethod);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      cvc: '',
      expiry: '',
      name: '',
      number: '',
      focus: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      cvc: Yup.string()
          .required('Required'),
      expiry: Yup.string()
          .required('Required'),
      number: Yup.string()
          .required('Required'),
      name: Yup.string()
          .required('Required'),
      email: Yup.string()
          .email()
          .required('Required'),
      phone: Yup.string()
          .required('Required'),
    }),
    enableReinitialize: true,
    validateOnChange: false,
    onSubmit: (values, formikHelpers) => {
      const {exp_month, exp_year} = ExpiryValidation(values.expiry);

      const paymentMethod = {
        type: 'card',
        billing_details: {
          name: values.name,
          email: values.email,
          phone: values.phone,
        },
        card: {
          number: CardNumberValidation(values.number),
          exp_month,
          exp_year,
          cvc: formik.values.cvc,
        },
      };

      dispatch(
          createPaymentMethodAsync(currentSubscription.customer, paymentMethod,
              currentSubscription.id));
    },
  });

  const handleInputChange = (e) => {
    const validValue = isValidInput(e);

    if (!validValue)
      return null;

    const {name, value} = validValue;

    formik.setFieldValue(name, value);
  };

  const handleInputFocus = (e) => formik.setFieldValue('focus', e.target.name);

  if (paymentMethod || !currentSubscription)
    return null;

  return (
      <Container id="PaymentForm">
        <h1>Payment methods</h1>
        <CardWrapper>
          <Cards
              cvc={formik.values.cvc}
              expiry={formik.values.expiry}
              focused={formik.values.focus}
              name={CardNameValidation(formik.values.name)}
              number={CardNumberValidation(formik.values.number)}
          />
          <Form>
            <FormInput name="number"
                       placeholder="Card Number"
                       onChange={handleInputChange}
                       onFocus={handleInputFocus}
                       value={formik.values.number}
            />
            {formik.errors.number
                ? <ErrorWrapper
                    className="text-danger">{formik.errors.number}</ErrorWrapper>
                : null}
            <FormInput name="name"
                       placeholder="Name"
                       onChange={handleInputChange}
                       onFocus={handleInputFocus}
                       value={formik.values.name}
            />
            {formik.errors.name
                ? <ErrorWrapper
                    className="text-danger">{formik.errors.name}</ErrorWrapper>
                : null}
            <FormInput name="expiry"
                       placeholder="Valid thru"
                       onChange={handleInputChange}
                       onFocus={handleInputFocus}
                       value={formik.values.expiry}
            />
            {formik.errors.expiry
                ? <ErrorWrapper
                    className="text-danger">{formik.errors.expiry}</ErrorWrapper>
                : null}
            <FormInput name="cvc"
                       placeholder="CVC"
                       onChange={handleInputChange}
                       onFocus={handleInputFocus}
                       value={formik.values.cvc}
            />
            {formik.errors.cvc
                ? <ErrorWrapper
                    className="text-danger">{formik.errors.cvc}</ErrorWrapper>
                : null}
            <FormInput name="email"
                       placeholder="Email"
                       onChange={handleInputChange}
                       value={formik.values.email}
            />
            {formik.errors.email
                ? <ErrorWrapper
                    className="text-danger">{formik.errors.email}</ErrorWrapper>
                : null}
            <FormInput name="phone"
                       placeholder="Phone"
                       onChange={handleInputChange}
                       value={formik.values.phone}
            />
            {formik.errors.phone
                ? <ErrorWrapper
                    className="text-danger">{formik.errors.phone}</ErrorWrapper>
                : null}
            <Button type="primary" onClick={formik.handleSubmit}>Add
              card</Button>
          </Form>
        </CardWrapper>
      </Container>
  );
};