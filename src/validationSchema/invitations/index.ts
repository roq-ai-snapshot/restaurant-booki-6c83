import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  invited_by: yup.string().nullable().required(),
  invitee: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
