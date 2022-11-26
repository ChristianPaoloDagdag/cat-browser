import styled from 'styled-components';

import Form from 'react-bootstrap/Form';

const CustomSelect = styled(Form.Select)`
  width: 100%;

  @media ${(props) => props.theme.device.small} {
    width: 240px;
  }
`;

export default CustomSelect;
