import { useState } from 'react';
import 'antd/dist/antd.css';
import { DatePicker, message, Alert, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import Typo from "./components/Typo";
import TypoText from './components/TypoText';
import Editable from './components/Editable';
import Expandable from './components/Expanable';

const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <>
      {/* <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
        </div>
      </div> */}
      {/* <Button type="text" block={true} danger={true} shape="round">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link" href='abc'>Link Button</Button>
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      <Button type="primary" shape="circle" icon={<SearchOutlined />} ghost />
      <Button ghost>
        Primary
      </Button>
      <Space>
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </Space>
      <StarOutlined />
      <StarFilled />
      <StarTwoTone twoToneColor="#eb2f96" /> */}
      <Expandable />
    </>
  );
};

export default App;
