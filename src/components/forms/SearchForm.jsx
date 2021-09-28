import {Mentions} from 'antd';
import {MentionsInput} from '../../styled/components/forms/SearchForm';

const {Option} = Mentions;

export const SearchForm = () => {
  function onChange(value) {
    console.log('Change:', value);
  }

  function onSelect(option) {
    console.log('select', option);
  }

  return (
      <MentionsInput
          style={{width: '100%'}}
          onChange={onChange}
          onSelect={onSelect}
          defaultValue="@afc163"
      >
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </MentionsInput>
  );
};