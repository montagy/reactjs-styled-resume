import styled from 'styled-components';

const PageTemplate = styled('div')`
  height: 100vh;
  background-image: url(img/bg.png);
  background-color: ${props => props.bgc || '#FFF'};
  text-align: center;
  transition: all 0.3s linear;
`;

export default PageTemplate;
