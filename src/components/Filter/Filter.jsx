import { useDispatch, useSelector } from 'react-redux';

import { setContactsFilter } from 'redux/filterSlice';
import { selectContactsFilter } from 'redux/selectors';

import { Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Enter contact name"
      value={filter}
      onChange={handleChangeFilter}
    />
  );
};
